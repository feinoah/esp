package com.apass.esp.service.offer;

import com.apass.esp.domain.Response;
import com.apass.esp.domain.dto.MyCouponAndCountDto;
import com.apass.esp.domain.entity.*;
import com.apass.esp.domain.entity.goods.GoodsInfoEntity;
import com.apass.esp.domain.entity.order.OrderInfoEntity;
import com.apass.esp.domain.enums.*;
import com.apass.esp.domain.query.ProCouponRelQuery;
import com.apass.esp.domain.query.ProMyCouponQuery;
import com.apass.esp.domain.vo.FydActivity;
import com.apass.esp.domain.vo.MyCouponVo;
import com.apass.esp.domain.vo.ProMyCouponVo;
import com.apass.esp.mapper.*;
import com.apass.esp.repository.goods.GoodsRepository;
import com.apass.esp.repository.httpClient.CommonHttpClient;
import com.apass.esp.repository.httpClient.RsponseEntity.CustomerBasicInfo;
import com.apass.esp.repository.order.OrderInfoRepository;
import com.apass.esp.service.common.MobileSmsService;
import com.apass.gfb.framework.exception.BusinessException;
import com.apass.gfb.framework.logstash.LOG;
import com.apass.gfb.framework.utils.DateFormatUtil;
import com.apass.gfb.framework.utils.GsonUtils;
import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

/**
 * 
 * @author pyc
 * @email  E-mail: pengyingchao@apass.cn
 * @version V2.0
 * @createTime：2017年10月27日 上午11:53:19 
 * @description 优惠券Service
 */
@Service
@Transactional(rollbackFor = { Exception.class })
public class MyCouponManagerService {

	private static final Logger logger = LoggerFactory.getLogger(MyCouponManagerService.class);
	
	@Autowired
	private ProMyCouponMapper myCouponMapper;
	
	@Autowired
	private ProCouponRelMapper couponRelMapper;
	
	@Autowired
	private ProActivityCfgMapper activityCfgMapper;
	
	@Autowired
	private ProCouponMapper couponMapper;
	
	@Autowired
	private ActivityCfgService activityCfgService;
	
	@Autowired
    private CommonHttpClient commonHttpClient;

	@Autowired
	private OrderInfoRepository orderInfoRepository;

	@Autowired
	private CashRefundMapper cashRefundMapper;
	
	@Autowired
	private GoodsRepository goodsMapper;
	
	@Autowired
	private CategoryMapper categoryMapper;
	
	@Autowired
	private MobileSmsService smsService;
	
	@Value("${spring.fyd.downloadRegApp}")
	private String downloadRegApp;
	/**
	 * 点击领取优惠券
	 * @throws BusinessException
	 */
	public int giveCouponToUser(MyCouponVo vo) throws BusinessException{
		/**
		 * 判断活动是否已经结束
		 */
	    ProActivityCfg activityCfg = activityCfgService.getById(vo.getActivityId());
	    if(null == activityCfg){
	    	throw new BusinessException("活动已经结束啦，看看其他的券吧!");
	    }
	    if(activityCfg.getEndTime().getTime() < new Date().getTime()){
	    	throw new BusinessException("活动已经结束啦，看看其他的券吧!");
	    }
		/**
		 * 首先，根据活动的Id和优惠券的id,查询此活动和优惠券的关系表信息
		 */
		ProCouponRel couponRel = couponRelMapper.getRelByActivityIdAndCouponId(new ProCouponRelQuery(vo.getActivityId(),vo.getCouponId()));
		if(null == couponRel){
			throw new BusinessException("该券被抢空啦，看看其他的券吧!");
		}
		if(couponRel.getRemainNum() == 0){
			throw new BusinessException("该券被抢空啦，看看其他的券吧！");
		}
		/**
		 * 限制领取优惠券张数
		 */
		int limitNum = couponRel.getLimitNum();
		/**
		 * 根据用户的Id和活动、优惠券的关系，查询当前活动下某一种券，该用户领取的记录
		 */
		List<ProMyCoupon> myCoupons = myCouponMapper.getCouponByUserIdAndRelId(new ProMyCouponQuery(vo.getUserId(), couponRel.getId()));
		int couponsNum = myCoupons.size();
		/**
		 * 如果用户领取张数，小于限制张数，则可以领取
		 */
		if(couponsNum >= limitNum){
			throw new BusinessException("您已领取该券!");
		}
		
		couponRel.setRemainNum(couponRel.getRemainNum() - 1);
		int count = couponRelMapper.updateByPrimaryKeySelective(couponRel);
		if(count > 0){
			ProMyCoupon coupon = couponVoToPojo(vo);
			return myCouponMapper.insertSelective(coupon);
		}
		return 0;
	}
	
	/**
	 * 活动商品列表页面，领取优惠券
	 * @param vo
	 * @return
	 * @throws BusinessException
	 */
	public ProMyCoupon couponVoToPojo(MyCouponVo vo) throws BusinessException{
		
		ProMyCoupon coupon = new ProMyCoupon();
		if(null == vo){
			return null;
		}
		coupon.setUserId(vo.getUserId());
		coupon.setCouponId(vo.getCouponId());
		//根据活动的Id和优惠券的Id，获取活动和券的关系表信息
		ProCouponRel couponRel = couponRelMapper.getRelByActivityIdAndCouponId(new ProCouponRelQuery(vo.getActivityId(),vo.getCouponId()));
		
		ProActivityCfg activity = activityCfgMapper.selectByPrimaryKey(vo.getActivityId());
		coupon.setCouponRelId(couponRel.getId());
		coupon.setStartDate(activity.getStartTime());
		coupon.setEndDate(activity.getEndTime());
		
		coupon.setCreatedTime(new Date());
		coupon.setUpdatedTime(new Date());
		coupon.setStatus("N");
		
		return coupon;
	}
	
	/**
	 * 根据用户的Id，获取用户的未使用、已使用、已过期的优惠券信息
	 * @param userId
	 * @return
	 */
	public Map<String,Object> getCoupons(String userId){
		/**
		 * 未使用(已根据updated_time 降序排列)
		 */
		List<ProMyCouponVo> unUsedList = getCouponsUnused(userId);
		/**
		 * 已使用(已根据updated_time 降序排列)
		 */
		List<ProMyCouponVo> usedList = getCouponsUsed(userId);
		/**
		 * 已过期(需要根据失效时间排序)
		 */
		List<ProMyCouponVo> expireList = getExpire(userId);
		/**
		 * 排序时间  失效时间
		 */
		Collections.sort(expireList, new Comparator<ProMyCouponVo>() {  
            public int compare(ProMyCouponVo obj1, ProMyCouponVo obj2) {
            	Date now1 = DateFormatUtil.string2date(obj1.getEndDate(), "");
            	Date now2 = DateFormatUtil.string2date(obj2.getEndDate(), "");
                int retVal = 0;  
                try {  
                	if( now1.getTime() > now2.getTime() ){
                		retVal = -1;
                	}
                	if( now1.getTime() < now2.getTime() ){
                		retVal = 1;
                	}
                } catch (Exception e) {  
                    throw new RuntimeException();  
                }  
                return retVal;  
            }  
        });
		
		Map<String,Object> params = Maps.newHashMap();
		params.put("unUsed", unUsedList);
		params.put("used",usedList);
		params.put("expire",expireList);
		return params;
	}
	/**
	 * 根据用户的Id和活动优惠券Id查询对应的信息
	 * @return
	 */
	public List<ProMyCoupon> getCouponByUserIdAndRelCouponId(Long userId,Long couponRelId){
		ProMyCouponQuery query=new ProMyCouponQuery();
		if(null !=userId && null !=couponRelId){
			query.setUserId(userId);
			query.setCouponRelId(couponRelId);
			return myCouponMapper.getCouponByUserIdAndRelId(query);
		}
		return null;
	};

	/**
	 * 根据用户的Id，获取用户未使用的优惠券
	 * @param userId
	 * @return
	 *  未使用的券
	 * 条件： 
	 *   1.首先是status = 'N'
	 *   2.当前日期应该小于end_date
	 */
	public List<ProMyCouponVo> getCouponsUnused(String userId){
		Date now = new Date();
		Long userID = Long.parseLong(userId);
		List<ProMyCoupon> list = myCouponMapper.getCouponByStatusAndDate(new ProMyCouponQuery(userID,now,"N"));
		return getVoByPos(list);   
	}
	
	/**
	 * 
	 * @param userId
	 * @return
	 * *
	 * 已使用的券
	 * 1.status = 'Y'
	 */
	public List<ProMyCouponVo> getCouponsUsed(String userId){
		Long userID = Long.parseLong(userId);
		List<ProMyCoupon> list =  myCouponMapper.getCouponByStatusAndDate(new ProMyCouponQuery(userID,null,"Y"));
		return getVoByPos(list);
	}
	
	/**
	 * @param userId
	 * @return
	 * 已过期的券
	 * 1.首先是status = 'N'
	 * 2.当前日期应该大于end_date
	 */
	public List<ProMyCouponVo> getExpire(String userId){
		Date now = new Date();
		Long userID = Long.parseLong(userId);
		List<ProMyCoupon> list = myCouponMapper.getCouponByStatusAndDate(new ProMyCouponQuery(userID,"N",now));
		return getVoByPos(list);
	}
	
	/**
	 * List po 2 vo
	 * @param list
	 * @return
	 */
	public List<ProMyCouponVo> getVoByPos(List<ProMyCoupon> list){
		List<ProMyCouponVo> voList = new ArrayList<>();
		for (ProMyCoupon p : list) {
			voList.add(getVoByPo(p));
		}
		return voList;
	}
	
	/**
	 * po 2 vo
	 * @param p
	 * @return
	 */
	public ProMyCouponVo getVoByPo(ProMyCoupon p){
		ProMyCouponVo vo = new ProMyCouponVo();
		StringBuffer buffer = new StringBuffer();
		vo.setId(p.getId());
		String activityName = "";
		String goodsName = "";
		if(null != p.getCouponRelId()){
			ProCouponRel rel = couponRelMapper.selectByPrimaryKey(p.getCouponRelId());
			if(null != rel){//此做法主要是适配于测试环境直接删库数据不完全，可能导致的问题
				vo.setActivityId(rel.getProActivityId());
				ProActivityCfg cfg = activityCfgMapper.selectByPrimaryKey(rel.getProActivityId());
				if(null != cfg){
					activityName = cfg.getActivityName();
				}
			}
		}
		vo.setCouponRelId(p.getCouponRelId());
		vo.setCouponId(p.getCouponId());
		ProCoupon coupon = couponMapper.selectByPrimaryKey(p.getCouponId());
		vo.setCategoryId1(coupon.getCategoryId1());
		vo.setCategoryId2(coupon.getCategoryId2());
		vo.setCategoryId3(coupon.getCategoryId3());
		vo.setExtendType(coupon.getExtendType());
		vo.setSkuId(coupon.getSkuId());
		vo.setBrandId(coupon.getBrandId()+"");
		vo.setOfferRange(coupon.getOfferRange()+"");
		vo.setSimilarGoodsCode(coupon.getSimilarGoodsCode());
		if(StringUtils.isNotBlank(coupon.getGoodsCode())){
			GoodsInfoEntity goods = goodsMapper.selectGoodsByGoodsCode(coupon.getGoodsCode());
			if(null != goods){
				vo.setGoodsId(goods.getId()+"");
				vo.setSource(goods.getSource());
				goodsName = goods.getGoodsName();
			}
		}
		vo.setType(coupon.getType());
		String type = coupon.getType();
		if(StringUtils.equals(type, CouponType.COUPON_ZDPL.getCode())){
			String categoryId = StringUtils.isBlank(coupon.getCategoryId1()) ? coupon.getCategoryId2():coupon.getCategoryId1();
			Category categroy = categoryMapper.selectByPrimaryKey(Long.parseLong(categoryId));
			buffer.append("【限"+categroy.getCategoryName()+"类】\t").append(coupon.getName());
		}else if(StringUtils.equals(type, CouponType.COUPON_HDSP.getCode())){
			buffer.append("【限"+activityName+"活动商品】\t").append(coupon.getName());
		}else if(StringUtils.equals(type, CouponType.COUPON_ZDSP.getCode())){
			buffer.append("【指定商品】\t" + goodsName);
		}else{
			buffer.append("【"+CouponType.getMessage(type)+"】\t").append(coupon.getName());
		}
		vo.setCouponSill(coupon.getCouponSill());
		vo.setDiscountAmonut(coupon.getDiscountAmonut());
		vo.setCouponName(buffer.toString());
		vo.setEndDate(DateFormatUtil.dateToString(p.getEndDate(),""));
		vo.setRemarks(p.getRemarks());
		vo.setStartDate(DateFormatUtil.dateToString(p.getStartDate(),""));
		vo.setEffectiveTime(DateFormatUtil.dateToString(p.getStartDate(),"yyyy.MM.dd")+"-"+DateFormatUtil.dateToString(p.getEndDate(),"yyyy.MM.dd"));
		vo.setStatus(p.getStatus());
		vo.setTelephone(p.getTelephone());
		vo.setUserId(p.getUserId());
		return vo;
	}
	
	/**
	 * 订单失效、退款返回优惠券
	 */
	public void returnCoupon(Long userId,Long couponId,String selfOrderId){
		if(couponId == null || couponId < 0){
			return;
		}
		//根据couponId查询orderList,判断订单状态是否是退款或订单失效
		List<OrderInfoEntity> orderList = orderInfoRepository.selectByCouponId(couponId);
		for(OrderInfoEntity order : orderList){
			if(selfOrderId.equals(order.getOrderId())){
				continue;
			}
			if(order.getStatus().equals(OrderStatus.ORDER_CANCEL.getCode())){
				//这里空代码是正确的代码，请勿删除！！！
			}
		  else if(order.getStatus().equals(OrderStatus.ORDER_TRADCLOSED.getCode())){
				CashRefund cr = cashRefundMapper.getCashRefundByOrderId(order.getOrderId());
				if(cr != null){
					if(cr.getStatus().toString().equals(CashRefundStatus.CASHREFUND_STATUS4.getCode())){

					}else{
						return;
					}
				}else{
					return ;
				}
			}else {
				return;
			}
		}
		updateStatus("N",userId,couponId);
	}



	public void updateStatus(String status,Long userId,Long couponId){
		myCouponMapper.updateStatusByUserIdAndCouponId(status,userId,couponId);
	}

	/**
	 * 批量插入优惠券
     */
	public void insertProMyCoupo(ProMyCoupon proMyCoupon) {
		myCouponMapper.insertSelective(proMyCoupon);
	}

	/**
	 * 逻辑删除券
	 * @param mycouponId
	 */
	public void deleteMyCoupon(String mycouponId){
		updateMyCoupon(mycouponId, CouponStatus.COUPON_D.getCode());
	}
	
	/**
	 * 使用我的优惠券
	 * @param mycouponId
	 */
	public void useMyCoupon(String mycouponId){
		updateMyCoupon(mycouponId, CouponStatus.COUPON_Y.getCode());
	}
	
	/**
	 * 根据我的优惠券的Id,获取优惠券的名称
	 * @param mycouponId
	 * @return
	 */
	public String getMyCouponByMyCouponId(Long mycouponId){
		
		if(null == mycouponId || mycouponId == -1l){
			return "未使用";
		}
		
		String couponName = "";
		ProMyCoupon myCoupon = myCouponMapper.selectByPrimaryKey(mycouponId);
		if(null != myCoupon){
			ProCoupon coupon = couponMapper.selectByPrimaryKey(myCoupon.getCouponId());
			if(null != coupon ){
				couponName = coupon.getName();
			}
		}
		return couponName;
	}
	/**
	 * 修改我的优惠券状态
	 * @param mycouponId
	 * @param status
	 * @return
	 */
	public int updateMyCoupon(String mycouponId,String status){
		if(StringUtils.isNotBlank(mycouponId) && StringUtils.isNotBlank(status)){
			ProMyCoupon myCoupon = myCouponMapper.selectByPrimaryKey(Long.parseLong(mycouponId));
			if(null != myCoupon){
				myCoupon.setStatus(status);
				myCoupon.setUpdatedTime(new Date());
				return myCouponMapper.updateByPrimaryKeySelective(myCoupon);
			}
		}
		return 0;
	}

	/**
	 * 给新注册的用户添加新用户专享优惠券
	 */
	public void addXYHCoupons(Long userId,String tel) throws BusinessException {
		//查询新用户专享优惠券
		ProCoupon proCoupon = new ProCoupon();
		proCoupon.setExtendType(CouponExtendType.COUPON_XYH.getCode());
		List<ProCoupon> couponList = couponMapper.getProCouponBCoupon(proCoupon);
		for(ProCoupon coupon : couponList){
			ProMyCoupon proMyCoupon = new ProMyCoupon();
			proMyCoupon.setUserId(userId);
			proMyCoupon.setCouponRelId(-1l);
			proMyCoupon.setStatus(CouponStatus.COUPON_N.getCode());
			proMyCoupon.setCouponId(Long.valueOf(coupon.getId()));
			proMyCoupon.setTelephone(tel);
			Date d = new Date();
			proMyCoupon.setStartDate(d);
			proMyCoupon.setEndDate(DateFormatUtil.addDays(d,coupon.getEffectiveTime()));
			proMyCoupon.setCreatedTime(d);
			proMyCoupon.setUpdatedTime(d);
			myCouponMapper.insertSelective(proMyCoupon);
		}
	}
	
	/**
	 * 房易贷用户专用发放券
	 * @param fyd userId tel
	 * @throws BusinessException 
	 */
	public void addFYDYHZY(FydActivity fyd) throws BusinessException{
		/**
		 * 根据优惠券的类型，查询所有的推广方式为房易贷用户专享的优惠券
		 */
		if(null == fyd || StringUtils.isBlank(fyd.getMobile()) || StringUtils.isBlank(fyd.getScene())){
			logger.error("fyd return params is null!!!!", GsonUtils.toJson(fyd));
			return;
		}
		
		CustomerBasicInfo customer = commonHttpClient.getCustomerInfo("addFYDYHZY method", fyd.getMobile());
		if(null == customer){
			return;
		}
		
		ProCoupon proCoupon = new ProCoupon();
		proCoupon.setExtendType(CouponExtendType.COUPON_FYDYHZX.getCode());
		proCoupon.setGrantNode(GrantNode.getCodeByMapCode(fyd.getScene()));
		List<ProCoupon> couponList = couponMapper.getProCouponBCoupon(proCoupon);
		
		boolean sendMessage = false;//此标识用于确认是否发送短信息
		for(ProCoupon coupon : couponList){
			ProMyCoupon proMyCoupon = new ProMyCoupon();
			proMyCoupon.setUserId(customer.getAppId());
			/**
			 * 首先根据券的Id,查出与活动,原则上一个房易贷用户专享的券只能配一个活动，但是为过滤测试数据错误，所做的兼容
			 */
			List<ProCouponRel> rels = couponRelMapper.getCouponByActivityIdOrCouponId(new ProCouponRelQuery(null, coupon.getId()));
			if(CollectionUtils.isEmpty(rels)){
				logger.error("procouponrel data is null,please check it,couponId is {}",coupon.getId());
				continue;
			}
			ProCouponRel rel = rels.get(0);
			Date now = new Date();
			ProActivityCfg cfg = activityCfgMapper.selectByPrimaryKey(rel.getProActivityId());
			if(null == cfg || cfg.getEndTime().getTime() < now.getTime()){
				continue;
			}
			proMyCoupon.setCouponRelId(rel.getId());
			proMyCoupon.setStatus(CouponStatus.COUPON_N.getCode());
			proMyCoupon.setCouponId(Long.valueOf(rel.getCouponId()));
			proMyCoupon.setTelephone(fyd.getMobile());
			proMyCoupon.setStartDate(cfg.getStartTime());
			proMyCoupon.setEndDate(cfg.getEndTime());
			proMyCoupon.setCreatedTime(now);
			proMyCoupon.setUpdatedTime(now);
			myCouponMapper.insertSelective(proMyCoupon);
			logger.info("addFYDYHZY success ----------> userId:{},couponId:{},grant_node {}",customer.getAppId(),coupon.getId(),coupon.getGrantNode());
			sendMessage = true;
		}
		/**
		 * 如果发送成功了优惠券，则发送短信息提醒
		 */
		if(sendMessage){
			String code = GrantNode.getCodeByMapCode(fyd.getScene());
			String message = null;
			if(StringUtils.equals(code, GrantNode.NODE_SFZRZTG.getCode())){
				message = "【安家趣花】恭喜您通过客户身份认证，1000元商城购物礼包已经发出，请点击链接"+ downloadRegApp+" 下载安家趣花app领取。";
			}else if(StringUtils.equals(code, GrantNode.NODE_YHKRZTG.getCode())){
				message = "【安家趣花】感谢您提交信息，我们在对您的信息进行审核。2000元商城购物礼包已经发出，请点击链接"+ downloadRegApp+" 下载安家趣花app领取。";
			}else if(StringUtils.equals(code, GrantNode.NODE_FKCG.getCode())){
				message = "【安家趣花】恭喜您，通过放款审批！资金将打入您绑定的银行卡。3000元商城购物礼包已经发出，请点击链接"+ downloadRegApp+" 下载安家趣花app领取。";
			}
			smsService.sendNoticeSms(customer.getMobile(), message);
		}
	}



	/**
	 * 扫码领取优惠券，且每个用户只能领取一次
	 *
	 * @param userId     用户id
	 * @param activityId 活动id
	 * @return
	 */
	public int saveCouponToUserFromScan(long userId, long activityId,String telephone) throws BusinessException {
		ProActivityCfg activityCfg = activityCfgService.getById(activityId);
		if(activityCfg == null){
			throw new BusinessException("活动不存在，数据有误!");
		}
		//判断活动是否正在进行中
		if (ActivityStatus.NO == activityCfgService.getActivityStatus(activityCfg)) {
			throw new BusinessException("活动未开始!");
		}
		if (ActivityStatus.END == activityCfgService.getActivityStatus(activityCfg)) {
			throw new BusinessException("活动已结束!");
		}

		//查询所有可领取优惠券
		ProCouponRelQuery couponRel = new ProCouponRelQuery();
		couponRel.setActivityId(activityId);
		//查询结果包含已删除优惠券
		List<ProCouponRel> relList = couponRelMapper.getCouponByActivityIdOrCouponId2(couponRel);
		logger.info("{}活动下所有优惠券,包括已删除relList:{}",activityId, GsonUtils.toJson(relList));

		if (CollectionUtils.isEmpty(relList)) {
			throw new BusinessException("该活动下无可领取优惠券,也无已删除优惠券");
		}
		int count = 0;
		for (ProCouponRel rel : relList) {
			//获取优惠券信息
			ProCoupon proCoupon = couponMapper.selectByPrimaryKey(rel.getCouponId());
			//如果是扫码类型优惠券才可领取
			if (!StringUtils.equals(proCoupon.getExtendType(), CouponExtendType.COUPON_SMYHZX.getCode())) {
				continue;
			}
			if(rel.getCouponId().intValue()==72){
				continue;
			}

			//判断是否是第一次领取，插入mycoupon表中
			List<ProMyCoupon> myCouponList = getCouponByUserIdAndRelCouponId(userId, rel.getId());
			if (null != myCouponList && myCouponList.size() > 0) {
				throw new BusinessException("每个用户仅限领一次!");
			} else {
				if(rel.getDelFlag() == 0){
					continue;
				}
				ProMyCoupon myCoupon = new ProMyCoupon();
				myCoupon.setUserId(userId);
				myCoupon.setCouponId(proCoupon.getId());
				myCoupon.setCouponRelId(rel.getId());
				myCoupon.setStatus(CouponStatus.COUPON_N.getCode());
				myCoupon.setTelephone(telephone);
				myCoupon.setStartDate(activityCfg.getStartTime());
				myCoupon.setEndDate(activityCfg.getEndTime());
				myCoupon.setCreatedTime(new Date());
				myCoupon.setUpdatedTime(new Date());
				myCoupon.setRemarks("");

				myCouponMapper.insertSelective(myCoupon);
				count++;
			}

		}
		if(count>0){
			return count;
		}
		throw new BusinessException("该活动下无扫码优惠券");
	}

	public int saveCouponToUserFromScan(long userId, long activityId,String telephone,String couponIds) throws BusinessException {
		//把couponIds中对应的优惠券插入mycoupon表中
		ProActivityCfg activityCfg = activityCfgService.getById(activityId);
		if(activityCfg == null){
			throw new BusinessException("活动不存在，数据有误!");
		}
		//判断活动是否正在进行中
		if (ActivityStatus.NO == activityCfgService.getActivityStatus(activityCfg)) {
			throw new BusinessException("活动未开始!");
		}
		if (ActivityStatus.END == activityCfgService.getActivityStatus(activityCfg)) {
			throw new BusinessException("活动已结束!");
		}

		//查询所有可领取优惠券
		ProCouponRelQuery couponRel = new ProCouponRelQuery();
		couponRel.setActivityId(activityId);
		//查询当前活动下有效优惠券
		List<ProCouponRel> relList = couponRelMapper.getCouponByActivityIdOrCouponId(couponRel);
		logger.info("可领取优惠券,relList:{}", GsonUtils.toJson(relList));

		if (CollectionUtils.isEmpty(relList)) {
			throw new BusinessException("该活动下无可领取优惠券");
		}

		int count = 0;
		for(ProCouponRel rel: relList){
			//获取优惠券信息
			ProCoupon proCoupon = couponMapper.selectByPrimaryKey(rel.getCouponId());
			//如果是扫码类型优惠券才可领取
			if (!StringUtils.equals(proCoupon.getExtendType(), CouponExtendType.COUPON_SMYHZX.getCode())) {
				continue;
			}

			if(couponIds.contains(String.valueOf(rel.getCouponId()))){
				//根据relId和userId查询是否已经领取，只有未领取才插入数据
				List<ProMyCoupon> list = getCouponByUserIdAndRelCouponId(userId, rel.getId());
				if(!CollectionUtils.isEmpty(list)){
					logger.info("{}优惠券已经被领取,不可重复领取",rel.getCouponId());
					continue;
				}
				ProMyCoupon myCoupon = new ProMyCoupon();
				myCoupon.setUserId(userId);
				myCoupon.setCouponId(proCoupon.getId());
				myCoupon.setCouponRelId(rel.getId());
				myCoupon.setStatus(CouponStatus.COUPON_N.getCode());
				myCoupon.setTelephone(telephone);
				myCoupon.setStartDate(activityCfg.getStartTime());
				myCoupon.setEndDate(activityCfg.getEndTime());
				myCoupon.setCreatedTime(new Date());
				myCoupon.setUpdatedTime(new Date());
				myCoupon.setRemarks("");

				myCouponMapper.insertSelective(myCoupon);
				logger.info("插入优惠券成功，插入内容{}",GsonUtils.toJson(myCoupon));
				count++;
			}
		}

		return count;
	}

	/**
	 * 思路：
	 * 1,先查询当天所有领取优惠券彷
	 * 2,判断哪些是扫码领优惠券用户，并计数
	 * 		a,根据coupon_id查询pro_cou_pon表
	 * 		b,同一个用户领取多个节点优惠券算作一个人，用map记录相关数据，telephone作为key
	 *
	 * 3,判断哪些是各节点领优惠券用户，并计数
	 * 		同上
	 * @return
     */
	public ProCouponTaskEntity selectMycouponCountByDate(String startDate, String endDate)throws Exception {
		ProCouponTaskEntity taskEntity = new ProCouponTaskEntity();
		taskEntity.setDate(startDate.substring(0,startDate.length()-9));

		//总人数,身份证认证数，银行卡认证数，放款成功认证数
		Map<String,Object> countMap=Maps.newHashMap(),
				sfzrzCountMap=Maps.newConcurrentMap(),yhkrzCountMap=Maps.newHashMap(),fkcgCountMap=Maps.newHashMap();

		LOG.info("ProCouponTask-->senProcouponEmai-->selectMycouponCountByDate下查询用户领取优惠券开始时间:{},结束时间:{}",startDate,endDate);
		Map<String,Object> paramMap = Maps.newHashMap();
		paramMap.put("startDate",startDate);
		paramMap.put("endDate",endDate);

		//查询所有领取优惠券用户
		List<ProMyCoupon> myCoupons = this.selectMycouponCountByDate(paramMap);
		//如果数据主空说明当天无用户领取优惠券，直接返回null
		if(CollectionUtils.isEmpty(myCoupons)){
			return null;
		}

		for(ProMyCoupon myCoupon : myCoupons){
			//key作为键,若同一个人领多个优惠券，视为一个人
			String key = myCoupon.getTelephone();
			ProCoupon proCoupon = couponMapper.selectByPrimaryKey(myCoupon.getCouponId());
			if(StringUtils.equals(CouponExtendType.COUPON_SMYHZX.getCode(),proCoupon.getExtendType())){
				countMap.put(key,proCoupon);
			}else if(StringUtils.equals(CouponExtendType.COUPON_FYDYHZX.getCode(),proCoupon.getExtendType())){
				if(StringUtils.equals(GrantNode.NODE_SFZRZTG.getCode(),proCoupon.getGrantNode())){
					sfzrzCountMap.put(key,proCoupon);
				}else if(StringUtils.equals(GrantNode.NODE_YHKRZTG.getCode(),proCoupon.getGrantNode())){
					yhkrzCountMap.put(key,proCoupon);
				}else if(StringUtils.equals(GrantNode.NODE_FKCG.getCode(),proCoupon.getGrantNode())){
					fkcgCountMap.put(key,proCoupon);
				}
			}
		}

		taskEntity.setClickCount(0);
		taskEntity.setCount(countMap.keySet().size());
		taskEntity.setSfzrzCount(sfzrzCountMap.keySet().size());
		taskEntity.setYhkrzCount(yhkrzCountMap.keySet().size());
		taskEntity.setFkcgCount(fkcgCountMap.keySet().size());

		return taskEntity;
	}

	List<ProMyCoupon> selectMycouponCountByDate(Map<String, Object> paramMap){
		return myCouponMapper.selectMycouponCountByDate(paramMap);
	}

	/**
	 * @param paramMap
	 * @return list
     */
	public List<ProCoupon> getTodayAllCouponTitle(Map<String, Object> paramMap) {
		//已使用优惠券种类
		List<ProMyCoupon> myCoupons = this.selectMycouponCountByDateGroupByCouponId(paramMap);
		List<ProCoupon> couponList = Lists.newArrayList();

		if(CollectionUtils.isEmpty(myCoupons)){
			return null;
		}
		for(ProMyCoupon myCoupon : myCoupons){
			ProCoupon proCoupon = couponMapper.selectByPrimaryKey(myCoupon.getCouponId());
			if(proCoupon == null){
				throw new RuntimeException("数据有误,mycoupon中的couponId对应的coupon表中无数据");
			}

			couponList.add(proCoupon);
		}

		return couponList;
	}

	private List<ProMyCoupon> selectMycouponCountByDateGroupByCouponId(Map<String, Object> paramMap) {
		return myCouponMapper.selectMycouponCountByDateGroupByCouponId(paramMap);
	}

	/**
	 * 忆领取优惠券用户 记录
	 * @param paramMap
	 * @return
     */
	public List<ProMyCoupon> selectMycouponCountByDateHasUsed(Map<String, Object> paramMap) {
		return myCouponMapper.selectMycouponCountByDateHasUsed(paramMap);
	}

	/**
	 * 根据userId和指定activityId发送优惠券
	 * @param userId
	 * @param activityId
	 * @param mobile:中原手机号
     * @return
     */
	public boolean giveCouponToUser(String userId, long activityId,int count,String mobile) throws BusinessException {
		//判断活动是否已经结束
		ProActivityCfg activityCfg = activityCfgService.getById(activityId);
		if(null == activityCfg){
			throw new BusinessException("活动已经结束啦，看看其他的券吧!");
		}
		if(activityCfg.getEndTime().getTime() < new Date().getTime()){
			throw new BusinessException("活动已经结束啦，看看其他的券吧!");
		}

		//查询所有可领取优惠券
		ProCouponRelQuery couponRel = new ProCouponRelQuery();
		couponRel.setActivityId(activityId);
		//查询当前活动下有效优惠券
		List<ProCouponRel> relList = couponRelMapper.getCouponByActivityIdOrCouponId(couponRel);
		logger.info("可领取优惠券,relList:{}", GsonUtils.toJson(relList));
		if(CollectionUtils.isEmpty(relList) || relList.size() > 1){
			logger.error("数据有误,{}活动只可有一种类型优惠券",String.valueOf(activityId));
			throw new BusinessException("数据有误，"+String.valueOf(activityId)+"活动只可有一种类型优惠券");
		}

		ProCouponRel rel = relList.get(0);
		//获取优惠券信息
		ProCoupon proCoupon = couponMapper.selectByPrimaryKey(rel.getCouponId());
		if(proCoupon == null){
			throw new BusinessException("该活动下优惠券不存在");
		}
		List<ProMyCoupon> list = getCouponByUserIdAndRelCouponId(Long.valueOf(userId), rel.getId());
		if(!CollectionUtils.isEmpty(list)){
			throw new BusinessException("该用户已经领取优惠券，不可重复领取");
		}

		//调供房帮接口获取用户信息
		CustomerBasicInfo customer = commonHttpClient.getCustomerInfo(userId);

		for(int i=0; i<count; i++){
			ProMyCoupon myCoupon = new ProMyCoupon();
			myCoupon.setUserId(Long.valueOf(userId));
			myCoupon.setCouponId(proCoupon.getId());
			myCoupon.setCouponRelId(rel.getId());
			myCoupon.setStatus(CouponStatus.COUPON_N.getCode());
			myCoupon.setTelephone(customer.getMobile());
			myCoupon.setStartDate(activityCfg.getStartTime());
			myCoupon.setEndDate(activityCfg.getEndTime());
			myCoupon.setCreatedTime(new Date());
			myCoupon.setUpdatedTime(new Date());
			myCoupon.setRemarks("");
			myCoupon.setRelateTel(mobile);

			myCouponMapper.insertSelective(myCoupon);
			logger.info("插入优惠券成功，插入内容{}",GsonUtils.toJson(myCoupon));
		}

		return true;
	}

	public List<ProMyCoupon> selectMycouponCountByRelateTel(long activityId,String mobile) throws BusinessException {
		//判断活动是否已经结束
		ProActivityCfg activityCfg = activityCfgService.getById(activityId);
		if(null == activityCfg){
			throw new BusinessException("活动已经结束啦，看看其他的券吧!");
		}
		if(activityCfg.getEndTime().getTime() < new Date().getTime()){
			throw new BusinessException("活动已经结束啦，看看其他的券吧!");
		}

		//查询所有可领取优惠券
		ProCouponRelQuery couponRel = new ProCouponRelQuery();
		couponRel.setActivityId(activityId);
		//查询当前活动下有效优惠券
		List<ProCouponRel> relList = couponRelMapper.getCouponByActivityIdOrCouponId(couponRel);
		logger.info("可领取优惠券,relList:{}", GsonUtils.toJson(relList));
		if(CollectionUtils.isEmpty(relList) || relList.size() > 1){
			logger.error("数据有误,{}活动只可有一种类型优惠券",String.valueOf(activityId));
			throw new BusinessException("数据有误，"+String.valueOf(activityId)+"活动只可有一种类型优惠券");
		}

		ProCouponRel rel = relList.get(0);
		//获取优惠券信息
		ProCoupon proCoupon = couponMapper.selectByPrimaryKey(rel.getCouponId());
		if(proCoupon == null){
			throw new BusinessException("该活动下优惠券不存在");
		}

		List<ProMyCoupon> list = selectMycouponCountByRelateTelAndRelCouponId(mobile, rel.getId());


		return list;
	}

	private List<ProMyCoupon> selectMycouponCountByRelateTelAndRelCouponId(String mobile, Long relId) {
		ProMyCouponQuery query=new ProMyCouponQuery();
		if(null !=mobile && null !=relId){
			query.setRelateTel(mobile);
			query.setCouponRelId(relId);
			return myCouponMapper.selectMycouponCountByRelateTelAndRelCouponId(query);
		}

		return null;
	}


	public List<MyCouponAndCountDto> getRelTelAndCount(String startDate, String endDate) {
		Map<String,Object> paramMap1 = Maps.newHashMap();
		paramMap1.put("startDate",startDate);
		paramMap1.put("endDate",endDate);

		return myCouponMapper.getRelTelAndCount(paramMap1);
	}
}
