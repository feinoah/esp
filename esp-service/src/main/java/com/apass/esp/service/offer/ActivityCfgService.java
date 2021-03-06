package com.apass.esp.service.offer;

import java.math.BigDecimal;
import java.util.*;

import com.apass.esp.domain.Response;
import com.apass.esp.domain.dto.ProcouponRelVoList;
import com.apass.esp.domain.dto.offo.ActivityfgDto;
import com.apass.esp.domain.entity.ProCoupon;
import com.apass.esp.domain.entity.ProCouponRel;
import com.apass.esp.domain.entity.ProGroupGoods;
import com.apass.esp.domain.entity.jd.JdSellPrice;
import com.apass.esp.domain.enums.ActivityCfgCoupon;
import com.apass.esp.domain.enums.CouponExtendType;
import com.apass.esp.domain.vo.ActivityCfgQuery;
import com.apass.esp.mapper.ProGroupGoodsMapper;
import com.apass.esp.service.jd.JdGoodsInfoService;
import com.apass.gfb.framework.utils.GsonUtils;
import com.google.common.collect.Maps;
import com.google.common.collect.Sets;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.apass.esp.domain.entity.ProActivityCfg;
import com.apass.esp.domain.enums.ActivityStatus;
import com.apass.esp.domain.enums.ActivityType;
import com.apass.esp.domain.vo.ActivityCfgVo;
import com.apass.esp.mapper.ProActivityCfgMapper;
import com.apass.esp.utils.ResponsePageBody;
import com.apass.gfb.framework.exception.BusinessException;
import com.apass.gfb.framework.security.toolkit.SpringSecurityUtils;
import com.apass.gfb.framework.utils.BaseConstants;
import com.apass.gfb.framework.utils.DateFormatUtil;

@Service
public class ActivityCfgService {
	private static final Logger LOG = LoggerFactory.getLogger(ActivityCfgService.class);

	@Autowired
	private ProActivityCfgMapper activityCfgMapper;
	@Autowired
	private CouponRelService couponRelService;

	@Autowired
	private ProGroupGoodsMapper groupGoodsMapper;
	@Autowired
	private JdGoodsInfoService jdGoodsInfoService;
	@Autowired
	private CouponManagerService couponService;

	public ProActivityCfg getById(Long activityId){
		return activityCfgMapper.selectByPrimaryKey(activityId);
	}

	
	/**
	 * 获取活动配置信息
	 * @param query
	 * @return
	 * @throws BusinessException 
	 */
	public ResponsePageBody<ActivityCfgVo> getActivityCfgListPage(ActivityfgDto activityfgDto) throws BusinessException{
		ResponsePageBody<ActivityCfgVo> pageBody = new ResponsePageBody<ActivityCfgVo>();
		List<ProActivityCfg> configList = activityCfgMapper.getActivityCfgListPage(activityfgDto);

		Integer count = activityCfgMapper.getActivityCfgListPageCount(activityfgDto);
		
		List<ActivityCfgVo> configVoList = getPoToVoList(configList);

		if(!CollectionUtils.isEmpty(configVoList)){
			out:for(ActivityCfgVo activityCfgVo: configVoList){
				//如果活动已结束直接设为-1
				Date endTime = DateFormatUtil.string2date(activityCfgVo.getEndTime(),DateFormatUtil.YYYY_MM_DD_HH_MM_SS);
				Date now = new Date();
				if(now.getTime() > endTime.getTime()){
					activityCfgVo.setIfExistSMZX(-1);
					continue;
				}

				Long activityId = activityCfgVo.getId();
				List<ProCouponRel> rel = couponRelService.getCouponRelList(String.valueOf(activityId));
				LOG.info("activityId：{}，关联的优惠券数据:{}",activityId.toString(),GsonUtils.toJson(rel));
				//没有关联优惠券，设为0
				if(CollectionUtils.isEmpty(rel)){
					activityCfgVo.setIfExistSMZX(0);
					continue;
				}
				for(ProCouponRel proCouponRel: rel){
					ProCoupon coupon = couponService.getById(proCouponRel.getCouponId());
					if(coupon == null ||StringUtils.isEmpty(coupon.getExtendType())){
						continue;
					}
					if(StringUtils.equals(CouponExtendType.COUPON_SMYHZX.getCode(),coupon.getExtendType())){
						activityCfgVo.setIfExistSMZX(1);
						continue out;
					}
				}

				activityCfgVo.setIfExistSMZX(0);

			}

		}

		pageBody.setTotal(count);
		pageBody.setRows(configVoList);
		pageBody.setStatus(BaseConstants.CommonCode.SUCCESS_CODE);
		return pageBody;
	}
	
	/**
	 * 保存添加活动配置信息
	 * @throws BusinessException 
	 */
	@Transactional(rollbackFor = { Exception.class})
	public synchronized Long saveActivity(ActivityCfgVo vo) throws BusinessException{
		ProActivityCfg record = getActivityCfg(vo,true);
		Integer activityId = activityCfgMapper.insertSelective(record);
		if(activityId == 0){
			throw new BusinessException("添加活动配置信息失败");
		}
		if(record.getActivityCate().byteValue() == 0){
			//普通活动
			List<ProcouponRelVoList> procouponRelVoListList1 = vo.getProcouponRelVoListList();
			if(CollectionUtils.isNotEmpty(procouponRelVoListList1)){
				Set<Long> sets = Sets.newTreeSet();
				for (int i=0;i<procouponRelVoListList1.size();i++) {
					sets.add(procouponRelVoListList1.get(i).getCouponId());
				}
				if(sets.size() != procouponRelVoListList1.size()){
					throw new BusinessException("本次发放存在重复优惠券种类，请修改后重试");
				}
			}

			//是否使用优惠券
			if(StringUtils.equals(ActivityCfgCoupon.COUPON_Y.getCode(),vo.getCoupon())){
				List<ProcouponRelVoList> procouponRelVoListList = vo.getProcouponRelVoListList();
				if(CollectionUtils.isNotEmpty(procouponRelVoListList)){
					for (ProcouponRelVoList relList:procouponRelVoListList) {
						ProCouponRel proCouponRel = new ProCouponRel();
						proCouponRel.setCouponId(relList.getCouponId());
						proCouponRel.setProActivityId(record.getId());
						proCouponRel.setLimitNum(relList.getLimitNum());
						proCouponRel.setTotalNum(relList.getTotalNum());
						proCouponRel.setRemainNum(relList.getTotalNum());
						proCouponRel.setCreatedTime(new Date());
						proCouponRel.setUpdatedTime(new Date());
						Integer relId = couponRelService.addProCouponRel(proCouponRel);
						if(relId == 0){
							throw new BusinessException("添加活动配置信息失败");
						}
					}
				}
			}
		}else if(record.getActivityCate().byteValue() == 1){
			//专属活动
			if(StringUtils.equals(ActivityCfgCoupon.COUPON_Y.getCode(),vo.getCateCoupon())){
				if(CollectionUtils.isNotEmpty(vo.getFydCouponIdList())){
					for(String couponId : vo.getFydCouponIdList()){
						if(StringUtils.isBlank(couponId)){
							continue;
						}
						ProCouponRel proCouponRel = new ProCouponRel();
						proCouponRel.setCouponId(Long.valueOf(couponId));
						proCouponRel.setProActivityId(record.getId());
						proCouponRel.setLimitNum(-1);
						proCouponRel.setTotalNum(-1);
						proCouponRel.setRemainNum(-1);
						proCouponRel.setDelFlag(Byte.valueOf("1"));
						proCouponRel.setCreatedTime(new Date());
						proCouponRel.setUpdatedTime(new Date());
						Integer relId = couponRelService.addProCouponRel(proCouponRel);
						if(relId == 0){
							throw new BusinessException("添加活动配置信息失败");
						}
					}
				}

			}
		}

		return record.getId();
	}
	
	/**
	 * 保存编辑活动配置信息
	 */
	@Transactional(rollbackFor = { Exception.class})
	public Integer editActivity(ActivityCfgVo vo){
		ProActivityCfg record = getActivityCfg(vo,false);
		return activityCfgMapper.updateByPrimaryKeySelective(record);
	}
	
	public ActivityCfgVo getActivityCfgVo(String id){
		ProActivityCfg cfg = activityCfgMapper.selectByPrimaryKey(Long.parseLong(id));
		return ActivityCfgPoToVo(cfg);
	}
	/**
	 * 添加或者修改 保存到数据库
	 * @param vo
	 * @param bl
	 * @return
	 */
	public ProActivityCfg getActivityCfg(ActivityCfgVo vo,boolean bl){
		ProActivityCfg record = new ProActivityCfg();
		record.setActivityName(vo.getActivityName());
		record.setActivityType(vo.getActivityType());
		record.setDiscountAmonut1(vo.getDiscount1());
		record.setDiscountAmount2(vo.getDiscount2());
		record.setEndTime(DateFormatUtil.string2date(vo.getEndTime(),""));
		record.setOfferSill1(vo.getOfferSill1());
		record.setOfferSill2(vo.getOfferSill2());
		record.setStartTime(DateFormatUtil.string2date(vo.getStartTime(),""));
		if(bl){
			record.setCreatedTime(new Date());
			record.setCreateUser(vo.getUserName());
		}
		record.setUpdatedTime(new Date());
		record.setUpdateUser(vo.getUserName());
		record.setId(vo.getId());
		record.setActivityCate(vo.getActivityCate());
		if(record.getActivityCate().intValue() == 1){
			BigDecimal b100 = new BigDecimal(100);
			record.setFydActPer(vo.getFydActPer().divide(b100));
			record.setFydDownPer(vo.getFydDownPer().divide(b100));
			record.setCoupon(vo.getCateCoupon());
		}else{
			record.setCoupon(vo.getCoupon());
		}
		return record;
	}
	
	/**
	 * po 2 vo
	 * @param configList
	 * @return
	 */
	public List<ActivityCfgVo> getPoToVoList(List<ProActivityCfg> configList){
		
		List<ActivityCfgVo> voList = new ArrayList<ActivityCfgVo>();
		for (ProActivityCfg cfg : configList) {
			voList.add(ActivityCfgPoToVo(cfg));
		}
		return voList;
		
	}
	
	/**
	 * po 2 vo
	 * @param cfg
	 * @return
	 */
	public ActivityCfgVo ActivityCfgPoToVo(ProActivityCfg cfg){
		ActivityCfgVo vo = new ActivityCfgVo();
		if(null == cfg){
			return vo;
		}
		vo.setId(cfg.getId());
		vo.setActivityName(cfg.getActivityName());
		vo.setActivityType(ActivityType.getMessage(cfg.getActivityType()));
		vo.setActivityCateStr(cfg.getActivityCate().intValue() ==1?"专属活动":"普通活动");
		vo.setDiscount1(cfg.getDiscountAmonut1());
		vo.setDiscount2(cfg.getDiscountAmount2());
		vo.setEndTime(DateFormatUtil.dateToString(cfg.getEndTime(), ""));
		vo.setStartTime(DateFormatUtil.dateToString(cfg.getStartTime(), ""));
		vo.setOfferSill1(cfg.getOfferSill1());
		vo.setOfferSill2(cfg.getOfferSill2());
		vo.setStatus(getActivityStatus(cfg).getMessage());
		vo.setActivityCate(cfg.getActivityCate() == null? Byte.valueOf("0") : cfg.getActivityCate());
		
		return vo;
	}
	/**
	 * 判断活动的状态
	 * @param cfg
	 * @return
	 */
	public ActivityStatus getActivityStatus(ProActivityCfg cfg){
		Date startTime = cfg.getStartTime();
		Date endTime = cfg.getEndTime();
		Date now = new Date();
		if(null == startTime || null == endTime){
			return ActivityStatus.NO;
		}
		if(startTime.getTime() > now.getTime()){
			return ActivityStatus.NO;
		}
		
		if(startTime.getTime() <= now.getTime() && endTime.getTime() >= now.getTime()){
			return ActivityStatus.PROCESSING;
		}
	    return ActivityStatus.END;
	}

	/**
	 * 根据优惠券id关联查询是否有对应活动
	 * @param id
	 * @return
     */
	public List<ProActivityCfg> selectProActivityCfgByEntity(Long id) {
		Map<String,Object> paramMap = Maps.newHashMap();
		paramMap.put("id",id);
		return activityCfgMapper.selectProActivityCfgByEntity(paramMap);
	}

	public List<ProActivityCfg> selectProActivityCfgByActivitCfgQuery(ActivityCfgQuery activityCfgQuery) {
		return activityCfgMapper.selectProActivityCfgByActivitCfgQuery(activityCfgQuery);
	}

	/**
	 * 更新房易贷活动配置信息
	 */
	public void updateFydActCouponCfg(Long activityId,String cateCoupon,BigDecimal fydActPer,
									  BigDecimal fydDownPer,List<String> fydCouponIdList)throws BusinessException{
		ProActivityCfg pac = activityCfgMapper.selectByPrimaryKey(activityId);
		if(pac == null){
			return;
		}
		BigDecimal oldFydActPer = pac.getFydActPer();
		BigDecimal oldFydActPer100 = oldFydActPer.multiply(new BigDecimal(100));
		BigDecimal oldFydDownPer = pac.getFydDownPer();
		BigDecimal oldFydDownPer100 = oldFydDownPer.multiply(new BigDecimal(100));

		if(oldFydActPer100.compareTo(fydActPer) != 0 ||
				oldFydDownPer100.compareTo(fydDownPer) != 0){
			ProActivityCfg updateEntity = new ProActivityCfg();
			updateEntity.setId(activityId);
			BigDecimal b100 = new BigDecimal(100);
			updateEntity.setFydDownPer(fydDownPer.divide(b100));
			updateEntity.setFydActPer(fydActPer.divide(b100));
			updateEntity.setCoupon(cateCoupon);
			activityCfgMapper.updateByPrimaryKeySelective(updateEntity);
		}


		if(oldFydActPer100.compareTo(fydActPer) != 0){
			//更新活动下商品的活动价
			List<ProGroupGoods> goodsList = groupGoodsMapper.selectByActivityId(activityId,"1");
			if(CollectionUtils.isNotEmpty(goodsList)){
				for(ProGroupGoods g : goodsList){
					//房易贷专属用户活动
					//活动价=京东价*n%
					List<String> wzGoodsIdList = new ArrayList<>();
					wzGoodsIdList.add(g.getSkuId());
					LOG.info("wzGoodsIdList:{}", GsonUtils.toJson(wzGoodsIdList));
					List<JdSellPrice> jdSellPrices = new ArrayList<>();
						for(int j = 0;j<3;j++){
							try {
							 	jdSellPrices = jdGoodsInfoService.getJdSellPriceBySku(wzGoodsIdList);

							}catch (Exception e){
								LOG.error("----error :getJdSellPriceBySku sku ={}",g.getSkuId(),e);
							}
						}
					if(CollectionUtils.isEmpty(jdSellPrices)){
						continue;
					}
					BigDecimal jdPrice = jdSellPrices.get(0).getJdPrice();
					BigDecimal	activityPrice  = jdPrice.multiply(fydActPer.divide( new BigDecimal(100))).setScale(0, BigDecimal.ROUND_HALF_UP);
					ProGroupGoods updateG = new ProGroupGoods();
					updateG.setId(g.getId());
					updateG.setActivityPrice(activityPrice);
					updateG.setUpdatedTime(new Date());
					groupGoodsMapper.updateByPrimaryKeySelective(updateG);
				}
			}
		}

		if(StringUtils.equals(cateCoupon,ActivityCfgCoupon.COUPON_Y.getCode())){
			List<ProCouponRel> oldList = couponRelService.getCouponRelList(activityId.toString());
			boolean flag = false;
			if(CollectionUtils.isEmpty(oldList)){
				flag = true;
			}else{
				if(oldList.size() != fydCouponIdList.size()){
					flag = true;
				}else{
				outer:	for(ProCouponRel pc : oldList){
						for(String fydCouponId : fydCouponIdList){
							if(!fydCouponId.equals(pc.getCouponId().toString())){
								flag = true;
								break outer;
							}
						}
					}
				}
			}
			if(flag){
				couponRelService.delCouponRel(activityId);
				for(String fydCouponId : fydCouponIdList){
					if(StringUtils.isBlank(fydCouponId)){
						continue;
					}
					ProCouponRel proCouponRel = new ProCouponRel();
					proCouponRel.setCouponId(Long.valueOf(fydCouponId));
					proCouponRel.setProActivityId(activityId);
					proCouponRel.setLimitNum(-1);
					proCouponRel.setTotalNum(-1);
					proCouponRel.setRemainNum(-1);
					proCouponRel.setDelFlag(Byte.valueOf("1"));
					proCouponRel.setCreatedTime(new Date());
					proCouponRel.setUpdatedTime(new Date());
					Integer relId = couponRelService.addProCouponRel(proCouponRel);
					if(relId == 0){
						throw new BusinessException("添加活动配置信息失败");
					}
				}
			}

		}
	}
}
