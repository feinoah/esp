package com.apass.esp.service.order;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.apass.esp.common.code.BusinessErrorCode;
import com.apass.esp.common.utils.JsonUtil;
import com.apass.esp.domain.Response;
import com.apass.esp.domain.dto.InvoiceDto;
import com.apass.esp.domain.dto.cart.PurchaseRequestDto;
import com.apass.esp.domain.dto.goods.GoodsInfoInOrderDto;
import com.apass.esp.domain.dto.logistics.Trace;
import com.apass.esp.domain.dto.order.OrderDetailInfoDto;
import com.apass.esp.domain.dto.payment.PayRequestDto;
import com.apass.esp.domain.entity.AwardDetail;
import com.apass.esp.domain.entity.CashRefund;
import com.apass.esp.domain.entity.CashRefundTxn;
import com.apass.esp.domain.entity.JdGoodSalesVolume;
import com.apass.esp.domain.entity.LimitBuyAct;
import com.apass.esp.domain.entity.LimitBuyDetail;
import com.apass.esp.domain.entity.LimitGoodsSku;
import com.apass.esp.domain.entity.ProActivityCfg;
import com.apass.esp.domain.entity.ProCoupon;
import com.apass.esp.domain.entity.ProMyCoupon;
import com.apass.esp.domain.entity.RepayFlow;
import com.apass.esp.domain.entity.activity.LimitGoodsSkuVo;
import com.apass.esp.domain.entity.address.AddressInfoEntity;
import com.apass.esp.domain.entity.bill.SalesOrderInfo;
import com.apass.esp.domain.entity.bill.SalesOrderPassOrRefund;
import com.apass.esp.domain.entity.cart.CartInfoEntity;
import com.apass.esp.domain.entity.cart.GoodsInfoInCartEntity;
import com.apass.esp.domain.entity.goods.GoodsDetailInfoEntity;
import com.apass.esp.domain.entity.goods.GoodsInfoEntity;
import com.apass.esp.domain.entity.goods.GoodsStockInfoEntity;
import com.apass.esp.domain.entity.goods.GoodsStockLogEntity;
import com.apass.esp.domain.entity.merchant.MerchantInfoEntity;
import com.apass.esp.domain.entity.order.OrderDetailInfoEntity;
import com.apass.esp.domain.entity.order.OrderInfoEntity;
import com.apass.esp.domain.entity.order.OrderSubInfoEntity;
import com.apass.esp.domain.entity.refund.RefundDetailInfoEntity;
import com.apass.esp.domain.entity.refund.RefundInfoEntity;
import com.apass.esp.domain.enums.AcceptGoodsType;
import com.apass.esp.domain.enums.ActivityStatus;
import com.apass.esp.domain.enums.CashRefundStatus;
import com.apass.esp.domain.enums.CouponExtendType;
import com.apass.esp.domain.enums.CouponMessage;
import com.apass.esp.domain.enums.CouponType;
import com.apass.esp.domain.enums.GoodStatus;
import com.apass.esp.domain.enums.InvoiceStatusEnum;
import com.apass.esp.domain.enums.OrderStatus;
import com.apass.esp.domain.enums.PaymentStatus;
import com.apass.esp.domain.enums.PaymentType;
import com.apass.esp.domain.enums.PreDeliveryType;
import com.apass.esp.domain.enums.PreStockStatus;
import com.apass.esp.domain.enums.SourceType;
import com.apass.esp.domain.enums.YesNo;
import com.apass.esp.domain.query.ProMyCouponQuery;
import com.apass.esp.domain.utils.ConstantsUtils;
import com.apass.esp.domain.vo.CheckAccountOrderDetail;
import com.apass.esp.domain.vo.LimitBuyParam;
import com.apass.esp.domain.vo.ProMyCouponVo;
import com.apass.esp.invoice.InvoiceService;
import com.apass.esp.mapper.AwardDetailMapper;
import com.apass.esp.mapper.CashRefundMapper;
import com.apass.esp.mapper.CashRefundTxnMapper;
import com.apass.esp.mapper.JdGoodSalesVolumeMapper;
import com.apass.esp.mapper.LimitBuyActMapper;
import com.apass.esp.mapper.LimitBuyDetailMapper;
import com.apass.esp.mapper.LimitGoodsSkuMapper;
import com.apass.esp.mapper.ProActivityCfgMapper;
import com.apass.esp.mapper.ProCouponMapper;
import com.apass.esp.mapper.ProMyCouponMapper;
import com.apass.esp.mapper.RepayFlowMapper;
import com.apass.esp.repository.address.AddressInfoRepository;
import com.apass.esp.repository.cart.CartInfoRepository;
import com.apass.esp.repository.goods.GoodsRepository;
import com.apass.esp.repository.goods.GoodsStockInfoRepository;
import com.apass.esp.repository.goods.GoodsStockLogRepository;
import com.apass.esp.repository.httpClient.CommonHttpClient;
import com.apass.esp.repository.httpClient.RsponseEntity.CustomerBasicInfo;
import com.apass.esp.repository.logistics.LogisticsHttpClient;
import com.apass.esp.repository.order.OrderDetailInfoRepository;
import com.apass.esp.repository.order.OrderInfoRepository;
import com.apass.esp.repository.order.OrderSubInfoRepository;
import com.apass.esp.repository.payment.PaymentHttpClient;
import com.apass.esp.repository.refund.OrderRefundRepository;
import com.apass.esp.repository.refund.RefundDetailInfoRepository;
import com.apass.esp.service.activity.LimitCommonService;
import com.apass.esp.service.address.AddressService;
import com.apass.esp.service.aftersale.AfterSaleService;
import com.apass.esp.service.bill.BillService;
import com.apass.esp.service.common.CommonService;
import com.apass.esp.service.common.ImageService;
import com.apass.esp.service.jd.JdGoodsInfoService;
import com.apass.esp.service.logistics.LogisticsService;
import com.apass.esp.service.merchant.MerchantInforService;
import com.apass.esp.service.offer.MyCouponManagerService;
import com.apass.esp.service.offer.ProGroupGoodsService;
import com.apass.esp.service.refund.OrderRefundService;
import com.apass.esp.service.withdraw.WithdrawService;
import com.apass.esp.third.party.jd.entity.base.Region;
import com.apass.esp.third.party.weizhi.client.WeiZhiOrderApiClient;
import com.apass.esp.third.party.weizhi.client.WeiZhiPriceApiClient;
import com.apass.esp.third.party.weizhi.client.WeiZhiProductApiClient;
import com.apass.esp.third.party.weizhi.entity.AddressInfo;
import com.apass.esp.third.party.weizhi.entity.AreaLimitEntity;
import com.apass.esp.third.party.weizhi.entity.CheckSale;
import com.apass.esp.third.party.weizhi.entity.GoodsStock;
import com.apass.esp.third.party.weizhi.entity.OrderReq;
import com.apass.esp.third.party.weizhi.entity.PriceSnap;
import com.apass.esp.third.party.weizhi.entity.SkuNum;
import com.apass.esp.third.party.weizhi.entity.StockNum;
import com.apass.esp.third.party.weizhi.entity.WZCheckSale;
import com.apass.esp.third.party.weizhi.response.OrderUnitResponse;
import com.apass.esp.third.party.weizhi.response.WZPriceResponse;
import com.apass.gfb.framework.exception.BusinessException;
import com.apass.gfb.framework.logstash.LOG;
import com.apass.gfb.framework.mybatis.page.Page;
import com.apass.gfb.framework.mybatis.page.Pagination;
import com.apass.gfb.framework.utils.DateFormatUtil;
import com.apass.gfb.framework.utils.EncodeUtils;
import com.google.common.collect.Lists;
import com.google.common.collect.Maps;

@Service
@Transactional(rollbackFor = { Exception.class ,RuntimeException.class})
public class OrderService {
    private static final Logger LOGGER = LoggerFactory.getLogger(OrderService.class);

    public static final String PRO_ACTIVITY_FLAG = "validActivityFlag";

    @Autowired
    public OrderInfoRepository orderInfoRepository;

    @Autowired
    public OrderSubInfoRepository orderSubInfoRepository;

    @Autowired
    public OrderDetailInfoRepository orderDetailInfoRepository;

    @Autowired
    public GoodsRepository goodsDao;

    @Autowired
    public AddressInfoRepository addressInfoDao;

    @Autowired
    private GoodsStockInfoRepository goodsStockDao;

    @Autowired
    private LogisticsService logisticsService;

    @Autowired
    private CommonService commonService;

    @Autowired
    private CartInfoRepository cartInfoRepository;

    @Autowired
    private AfterSaleService afterSaleService;

    @Autowired
    private AddressService addressService;

    @Autowired
    private LogisticsHttpClient logisticsHttpClient;

    @Autowired
    private GoodsStockLogRepository goodsStcokLogDao;

    @Autowired
    private GoodsStockInfoRepository getGoodsStockDao;

    @Autowired
    private PaymentHttpClient paymentHttpClient;

    @Autowired
    private ImageService imageService;

    @Autowired
    private BillService billService;

    @Autowired
    private MerchantInforService merchantInforService;

    @Autowired
    private JdGoodSalesVolumeMapper jdGoodSalesVolumeMapper;

    @Autowired
    private CashRefundMapper cashRefundMapper;

    @Autowired
    private RepayFlowMapper flowMapper;

    @Autowired
    private CashRefundTxnMapper cashRefundTxnMapper;

    @Autowired
    private OrderRefundService orderRefundService;

    @Autowired
    private OrderRefundRepository orderRefundRepository;

    @Autowired
    private CommonHttpClient commonHttpClient;

    @Autowired
    private WithdrawService withdrawService;

    @Autowired
    private AwardDetailMapper awardDetailMapper;
    
    @Autowired
    private RefundDetailInfoRepository detailInfoRepository;

    @Autowired
    private ProGroupGoodsService proGroupGoodsService;
    
    @Autowired
    private ProActivityCfgMapper activityCfgMapper;
    
    @Autowired
    private JdGoodsInfoService goodsInfoService;
    
    @Autowired
    private ProMyCouponMapper myCouponMapper;
    
    @Autowired
    private ProCouponMapper couponMapper;

    @Autowired
	private WeiZhiOrderApiClient orderApi;
    
	@Autowired
	private WeiZhiPriceApiClient priceApi;
	
	@Autowired
	private WeiZhiProductApiClient productApi;
	
    @Autowired
    private MyCouponManagerService myCouponManagerService;
    @Autowired
    private InvoiceService invoiceService;
	@Autowired
	private LimitBuyActMapper limitBuyActMapper;
	@Autowired
	private LimitCommonService limitCommonService;
	@Autowired
	private LimitGoodsSkuMapper limitGoodsSkuMapper;
	@Autowired
	private LimitBuyDetailMapper buydetailMapper;


    public static final Integer errorNo = 3; // 修改库存尝试次数

    private static final String ORDERSOURCECARTFLAG = "cart";


    /**
     * 查询订单概要信息
     *
     * @return
     */
    public List<OrderInfoEntity> queryOrderInfo(Long userId, String[] statusStr) throws BusinessException {
        List<OrderInfoEntity> orderInfoList = null;
        Map<String, Object> paramMap = new HashMap<String, Object>();
        paramMap.put("userId", userId);
        paramMap.put("statusArray", statusStr);
        try {
            orderInfoList = orderInfoRepository.queryOrderInfoList(paramMap);
        } catch (Exception e) {
            LOGGER.error("查询订单信息失败===>", e);
            throw new BusinessException("查询订单信息失败！", e);
        }
        return orderInfoList;
    }

    /**
     * 查询订单详细信息
     *
     * @return
     */
    public List<OrderDetailInfoEntity> queryOrderDetailInfo(String requestId, String orderId)
            throws BusinessException {
        try {
            List<OrderDetailInfoEntity> orderDetailInfo = orderDetailInfoRepository
                    .queryOrderDetailInfo(orderId);
            for (OrderDetailInfoEntity orderDetail : orderDetailInfo) {
                orderDetail.setGoodsLogoUrl(EncodeUtils.base64Encode(orderDetail.getGoodsLogoUrl()));
            }
            return orderDetailInfo;
        } catch (Exception e) {
            LOG.info(requestId, "查询订单详细信息失败", "");
            LOGGER.error("查询订单详细信息失败", e);
            throw new BusinessException("查询订单详细信息失败！", BusinessErrorCode.ORDER_DETAIL_ERROR);
        }
    }

    /**
     * 通过商户号查询订单详细信息
     *
     * @return
     */
    public Pagination<OrderSubInfoEntity> queryOrderSubDetailInfoByParam(Map<String, String> map, Page page)
            throws BusinessException {
        try {
            Pagination<OrderSubInfoEntity> orderDetailInfoList = orderSubInfoRepository
                    .querySubOrderDetailInfoByParam(map, page);
            List<OrderSubInfoEntity> list = orderDetailInfoList.getDataList();
            // 查询改订单的用户名和电话
            for (OrderSubInfoEntity osifty : list) {
                Response response = commonHttpClient.getCustomerBasicInfo("", osifty.getUserId());
                if (response.statusResult()) {
                    CustomerBasicInfo customer = Response.resolveResult(response, CustomerBasicInfo.class);
                    osifty.setUserName(customer.getMobile());
                    osifty.setRealName(customer.getRealName());
                }
            }
            return orderDetailInfoList;
        } catch (Exception e) {
            LOGGER.error(" 通过商户号查询订单详细信息失败===>", e);
            throw new BusinessException(" 通过商户号查询订单详细信息失败！", e);
        }
    }

    /**
     * @throws BusinessException 查询异常订单，即为支付宝申请二次退款的订单
     */
    public Pagination<OrderSubInfoEntity> queryOrderCashRefundException(Map<String, String> map, Page page)
            throws BusinessException {
        try {
            Pagination<OrderSubInfoEntity> orderDetailInfoList = orderSubInfoRepository
                    .queryOrderCashRefundException(map, page);
            List<OrderSubInfoEntity> subList = orderDetailInfoList.getDataList();
            Map<Long, CustomerBasicInfo> maps = Maps.newHashMap();
            for (OrderSubInfoEntity order : subList) {
                setProperties(maps, order);
            }
            return orderDetailInfoList;
        } catch (Exception e) {
            LOGGER.error(" 通过商户号查询订单详细信息失败===>", e);
            throw new BusinessException(" 通过商户号查询订单详细信息失败！", e);
        }
    }

    public void setProperties(Map<Long, CustomerBasicInfo> maps, OrderSubInfoEntity order)
            throws BusinessException {
        CustomerBasicInfo customer = null;
        if (!maps.isEmpty() && maps.containsKey(order.getUserId())) {
            customer = maps.get(order.getUserId());
        } else {
            Response response = commonHttpClient.getCustomerBasicInfo("", order.getUserId());
            if (!response.statusResult()) {
                throw new BusinessException("客户信息查询失败");
            }
            customer = Response.resolveResult(response, CustomerBasicInfo.class);
            maps.put(order.getUserId(), customer);
        }
        if (null != customer) {
            order.setUserName(customer.getMobile());
            order.setRealName(customer.getRealName());
            order.setCardBank(customer.getCardBank());
            order.setCardNo(customer.getCardNo());
        }
    }

    public Pagination<OrderSubInfoEntity> queryOrderRefundException(Map<String, String> map, Page page)
            throws BusinessException {
        try {
            Pagination<OrderSubInfoEntity> orderDetailInfoList = orderSubInfoRepository
                    .queryOrderRefundException(map, page);

            List<OrderSubInfoEntity> subList = orderDetailInfoList.getDataList();
            Map<Long, CustomerBasicInfo> maps = Maps.newHashMap();
            for (OrderSubInfoEntity order : subList) {
                setProperties(maps, order);
            }
            return orderDetailInfoList;
        } catch (Exception e) {
            LOGGER.error(" 通过商户号查询订单详细信息失败===>", e);
            throw new BusinessException(" 通过商户号查询订单详细信息失败！", e);
        }
    }


    /**
     * 通过订单号更新物流信息、订单状态
     *
     * @return
     */
    @Transactional(rollbackFor = { Exception.class,RuntimeException.class })
    public void updateLogisticsInfoAndOrderInfoByOrderId(Map<String, String> map) throws BusinessException {
        try {
            // 调用第三方物流信息查询机构
            String carrierCode = map.get("logisticsName"); // 物流厂商
            String trackingNumber = map.get("logisticsNo"); // 物流单号
            String orderId = map.get("orderId"); // 订单编号
            List<Map<String, String>> carriersDetect = logisticsHttpClient.carriersDetect(trackingNumber);
            boolean flag = false;
            for (Map<String, String> map2 : carriersDetect) {
                String trackCode = map2.get("code");
                if (carrierCode.equals(trackCode)) {
                    flag = true;
                    break;
                }
            }

            if (!flag) {
                throw new BusinessException("物流单号与快递公司不符");
            }

            logisticsService.subscribeSignleTracking(trackingNumber, carrierCode, orderId, "order");

            /**
             * 首先判断一下订单的预发货的状态 1.如果为Y，则不更新此字段 2.如果为空，要把值置成N
             */
            OrderInfoEntity entity = orderInfoRepository.selectByOrderId(orderId);
            if (!StringUtils.equals(entity.getPreDelivery(), PreDeliveryType.PRE_DELIVERY_Y.getCode())) {
                entity.setPreDelivery(PreDeliveryType.PRE_DELIVERY_Y.getCode());
                entity.setStatus(OrderStatus.ORDER_SEND.getCode());
                entity.setParentOrderId(entity.getParentOrderId());
                orderInfoRepository.updateOrderStatusAndPreDelivery(entity);
            }

            orderSubInfoRepository.updateLogisticsInfoByOrderId(map);

            // 更新订单状态为待收货 D03 : 代收货
            map.put("orderStatus", OrderStatus.ORDER_SEND.getCode());

            orderSubInfoRepository.updateOrderStatusAndLastRtimeByOrderId(map);

        } catch (Exception e) {
            LOGGER.error("物流单号重复或输入错误", e);
            throw new BusinessException("物流单号重复或输入错误", e);
        }
    }

    @Transactional(rollbackFor = {Exception.class,RuntimeException.class,BusinessException.class})
    public void updateLogisticsInfoAndOrderInfoByOrderId(String orderId) throws BusinessException{
    	/**
         * 首先判断一下订单的预发货的状态 1.如果为Y，则不更新此字段 2.如果为空，要把值置成N
         */
        OrderInfoEntity entity = orderInfoRepository.selectByOrderId(orderId);
        if(null == entity){
        	return;
        }
        if (!StringUtils.equals(entity.getPreDelivery(), PreDeliveryType.PRE_DELIVERY_Y.getCode())) {
            entity.setPreDelivery(PreDeliveryType.PRE_DELIVERY_Y.getCode());
            entity.setStatus(OrderStatus.ORDER_SEND.getCode());
            entity.setParentOrderId(entity.getParentOrderId());
            orderInfoRepository.updateOrderStatusAndPreDelivery(entity);
        }
        // 更新订单状态为待收货 D03 : 代收货
        Map<String,String> map = Maps.newHashMap();
        map.put("orderId", orderId);
        map.put("orderStatus", OrderStatus.ORDER_SEND.getCode());
        orderSubInfoRepository.updateOrderStatusAndLastRtimeByOrderId(map);
    }
    /**
     * 生成商品订单
     *
     * @param userId 用户Id
     * @param totalPayment 总金额
     * @param addressId 地址id
     * @param purchaseList 商品列表
     * @throws BusinessException
     */
    @Transactional(rollbackFor = { Exception.class,BusinessException.class,RuntimeException.class })
    public List<String> confirmOrder(String requestId, Long userId, BigDecimal totalPayment, BigDecimal discountMoneydiscountMoney, Long addressId,
                                     List<PurchaseRequestDto> purchaseList, String sourceFlag, String deviceType, String myCouponId, String goodStockIds,
                                     InvoiceDto invoiceDto)
            throws BusinessException {
        int index = 0;
        String[] goodsStockArray = new String[purchaseList.size()];
        // 1 校验信息
        validateCorrectInfo(requestId, totalPayment,discountMoneydiscountMoney, addressId, userId, purchaseList, sourceFlag,myCouponId);
        // 2 修改商品数目
        for (PurchaseRequestDto purchase : purchaseList) {
            goodsStockArray[index++] = String.valueOf(purchase.getGoodsStockId());
        }
        // 3 删除购物车记录
        if (StringUtils.isNotEmpty(sourceFlag) && sourceFlag.equals(ORDERSOURCECARTFLAG)) {
            Map<String, Object> paramMap = new HashMap<String, Object>();
            paramMap.put("userId", userId);
            paramMap.put("goodsStockIdArr", goodsStockArray);
            try {
                cartInfoRepository.deleteGoodsInCart(paramMap);
            } catch (Exception e) {
                LOG.info(requestId, "删除购物车中商品失败", "");
                LOGGER.error("删除购物车中商品失败", e);
                throw new BusinessException("删除购物车中商品失败", e, BusinessErrorCode.CART_DELETE_ERROR);
            }
        }
        // 4 生成订单
        Map<String,List<String>> params = generateOrder(requestId, userId, totalPayment, purchaseList, addressId,
                deviceType,myCouponId,goodStockIds,invoiceDto);

        List<String> orders = params.get("orderList");//主订单的Id
        List<String> comfirmOrders = params.get("confirmList");//子订单的Id
        /**
         * 设置预占库存和修改订单的信息
         */
        try {
        	preStockStatusWeiZhi(comfirmOrders, addressId);
		} catch (BusinessException e) {
			LOGGER.error("weizhi submitOrder is failed businessException!", e);
			throw new BusinessException(e.getErrorDesc());
		} catch (Exception e) {
			LOGGER.error("weizhi submitOrder is failed exception!", e);
		}
		
        /**
         * 使用优惠券
         */
        if(StringUtils.isNotBlank(myCouponId)){
        	myCouponManagerService.useMyCoupon(myCouponId);
        }
        return orders;
    }
    
    /**
     * 验证传入订单列表，是否存在京东订单
     * 
     * @param orderIdList
     * @return
     * @throws BusinessException
     */
    public List<String> getJdOrder(List<String> orderIdList) throws BusinessException {
        List<String> orders = new ArrayList<String>();
        for (String orderId : orderIdList) {
            OrderInfoEntity entity = selectByOrderId(orderId);
            // 验证订单是否为京东订单
            if (StringUtils.equals(entity.getSource(), SourceType.WZ.getCode())) {
                orders.add(orderId);
            }
        }
        return orders;
    }

    /**
     * 设置京东商品预占库存
     * 
     * @return
     * @throws BusinessException
     */
//    @Transactional(rollbackFor = { Exception.class, BusinessException.class })
//    public String preStockStatus(List<String> orderIdList, Long addressId) throws BusinessException {
//        /**
//         * 根据传入订单号，检测是京东的订单
//         */
//        List<String> orders = getJdOrder(orderIdList);
//        /**
//         * 如果集合为空，就不需要往下一步走
//         */
//        if (CollectionUtils.isEmpty(orders)) {
//            return null;
//        }
//        /**
//         *
//         * 首先根据订单的id，获取订单的detail信息，拿到detail信息， 获取goodId,根据goodId获取good信息，然后获取京东商品skuId
//         *
//         */
//        List<SkuNum> skuNumList = new ArrayList<>();
//        List<PriceSnap> priceSnaps = new ArrayList<>();
//        List<OrderDetailInfoEntity> details = orderDetailInfoRepository.queryOrderDetailListByOrderList(orders);
//        for (OrderDetailInfoEntity detail : details) {
//            GoodsInfoEntity goods = goodsDao.select(detail.getGoodsId());
//            SkuNum num = new SkuNum(Long.valueOf(goods.getExternalId()), detail.getGoodsNum().intValue());
//            skuNumList.add(num);
//        }
//
//        /**
//         * 获取用户的地址信息
//         */
//        AddressInfo addressInfo = getAddressByOrderId(addressId);
//        /**
//         * 批量查询京东价格
//         */
//        JSONArray productPriceList = jdProductApiClient.priceSellPriceGet(skuNumList).getResult();
//        for (Object jsonArray : productPriceList) {
//            JSONObject jsonObject = (JSONObject) jsonArray;
//            priceSnaps.add(new PriceSnap(jsonObject.getLong("skuId"), jsonObject.getBigDecimal("price"),
//                    jsonObject.getBigDecimal("jdPrice")));
//        }
//
//        OrderReq orderReq = new OrderReq();
//        orderReq.setSkuNumList(skuNumList);
//        orderReq.setAddressInfo(addressInfo);
//        orderReq.setOrderPriceSnap(priceSnaps);
//        orderReq.setRemark("");
//        orderReq.setOrderNo(orders.get(0));
//        /**
//         * 验证商品是否可售
//         */
//        if(!checkGoodsSalesOrNot(orderReq.getSkuNumList())){
//        	throw new BusinessException("抱歉,订单中包含不可售的商品!");
//        }
//        /**
//         * 批量获取库存接口
//         */
//        List<Stock> stocks = jdProductApiClient.getStock(orderReq.getSkuNumList(), orderReq.getAddressInfo()
//                .toRegion());
//        for (Stock stock : stocks) {
//            if (!"有货".equals(stock.getStockStateDesc())) {
//                LOGGER.info("call jd stock inteface is failed[{}] {}", stock.getSkuId(),
//                        stock.getStockStateDesc());
//                LOGGER.info(stock.getSkuId() + "_");
//                throw new BusinessException("抱歉，您的订单内含库存不足商品\n请修改商品数量");
//            }
//        }
//        /**
//         * 统一下单接口
//         */
//        JdApiResponse<JSONObject> orderResponse = jdOrderApiClient.orderUniteSubmit(orderReq);
//        LOGGER.info(orderResponse.toString());
//        if ((!orderResponse.isSuccess())) {
//
//            LOGGER.error("call jd comfireOrder inteface is failed !, {}", orderResponse.toString());
//            LOGGER.error("orderUniteSubmit:--------------->{}",orderResponse.getResultMessage());
//            throw new BusinessException("抱歉,该订单暂时无法结算!");
//        }
//        String jdOrderId = orderResponse.getResult().getString("jdOrderId");
//
//        /**
//         * 在京东那边占完库存后，要修改order表中的信息
//         */
//        Map<String, Object> params = Maps.newHashMap();
//        params.put("preStockStatus", PreStockStatus.PRE_STOCK.getCode());
//        params.put("updateTime", new Date());
//        params.put("extOrderId", jdOrderId);
//        for (String orderId : orders) {
//            params.put("orderId", orderId);
//            orderInfoRepository.updatePreStockStatusByOrderId(params);
//        }
//
//        return jdOrderId;
//    }
    
    /**
     * 设置微知京东商品预占库存
     * 
     * @return
     * @throws Exception 
     */
    @Transactional(rollbackFor = { Exception.class, BusinessException.class })
    public String preStockStatusWeiZhi(List<String> orderIdList, Long addressId) throws Exception  {
        /**
         * 根据传入订单号，检测是京东的订单
         */
        List<String> orders = getJdOrder(orderIdList);
        /**
         * 如果集合为空，就不需要往下一步走
         */
        if (CollectionUtils.isEmpty(orders)) {
            return null;
        }
        /**
         *
         * 首先根据订单的id，获取订单的detail信息，拿到detail信息， 获取goodId,
         * 根据goodId获取good信息，然后获取京东商品skuId
         *
         */
        List<SkuNum> skuNumList = new ArrayList<>();
        List<String> skuList = new ArrayList<>();
        List<OrderDetailInfoEntity> details = orderDetailInfoRepository
                .queryOrderDetailListByOrderList(orders);
        for (OrderDetailInfoEntity detail : details) {
            GoodsInfoEntity goods = goodsDao.select(detail.getGoodsId());
            if(StringUtils.isBlank(goods.getSource())){
            	continue;
            }
            SkuNum num = new SkuNum(Long.valueOf(goods.getExternalId()), detail.getGoodsNum().intValue());
            skuList.add(goods.getExternalId());
            skuNumList.add(num);
        }
        /**
         * 获取用户的地址信息
         */
        AddressInfo addressInfo = getAddressByOrderId(addressId);
        
        /**
         * 批量获取微知的价格
         */
        /**
         * 此处加上空值判断的原因是为了过滤手动修改数据（自己的商品改成微知，数据修改不全，如source并未修改）导致的错误
         */
        if(CollectionUtils.isEmpty(skuList)){
        	return null;
        }
        List<WZPriceResponse> priceResponse = priceApi.getWzPrice(skuList);
        if(CollectionUtils.isEmpty(priceResponse)){
        	LOGGER.error("call wz getWzPrice is failed {}",JsonUtil.toJsonString(skuList));
        	throw new BusinessException("抱歉,该订单暂时无法结算!");
        }
        for (WZPriceResponse price : priceResponse) {
			for (SkuNum num : skuNumList) {
				if(StringUtils.equals(num.getSkuId()+"", price.getSkuId())){
					num.setPrice(new BigDecimal(price.getWzPrice()));
				}
			}
		}
        
        /**
         * 获取快照
         */
        List<PriceSnap> priceSnaps = new ArrayList<>();//快照
        List<StockNum> skuNums = new ArrayList<>();//库存
        for (SkuNum num : skuNumList) {
        	BigDecimal count = num.getPrice().multiply(new BigDecimal(num.getNum()));
			PriceSnap snap = new PriceSnap(num.getSkuId(),count);
			StockNum stock = new StockNum(num.getSkuId(),num.getNum());
			priceSnaps.add(snap);
			skuNums.add(stock);
		}

        /**
         * 验证商品是否可售
         */
        if(!checkGoodsSalesOrNot(skuList)){
        	throw new BusinessException("抱歉,订单中包含不可售的商品!");
        }
        /**
         * 批量获取库存接口
         */
        List<GoodsStock> stockList = productApi.getNewStockById(skuNums, addressInfo.toRegion());
        if(CollectionUtils.isEmpty(stockList)){
        	throw new BusinessException("抱歉，您的订单内含库存不足商品\n请修改商品数量");
        }
        
    	for (GoodsStock stock : stockList) {
    		String desc = stock.getStockStateDesc();
    		if(!StringUtils.equals(desc, "有货")){
    			throw new BusinessException("抱歉，您的订单内含库存不足商品\n请修改商品数量");
    		}
		}
        
        
        OrderReq orderReq = new OrderReq();
        orderReq.setSkuNumList(skuNumList);
        orderReq.setAddressInfo(addressInfo);
        orderReq.setOrderPriceSnap(priceSnaps);
        orderReq.setRemark("");
        orderReq.setOrderNo(orders.get(0));
        
        /**
         * 统一下单接口
         */
        OrderUnitResponse orderResponse = orderApi.submitOrder(orderReq);
        if(null == orderResponse){
        	throw new BusinessException("抱歉,该订单暂时无法结算!");
        }
        /**
         * 在京东那边占完库存后，要修改order表中的信息
         */
        Map<String, Object> params = Maps.newHashMap();
        params.put("preStockStatus", PreStockStatus.PRE_STOCK.getCode());
        params.put("updateTime", new Date());
        params.put("extOrderId", orderResponse.getWzOrderId());
        for (String orderId : orders) {
            params.put("orderId", orderId);
            orderInfoRepository.updatePreStockStatusByOrderId(params);
        }

        return orderResponse.getWzOrderId();
    }
    
    /**
     * 验证商品是否可售
     */
    public boolean checkGoodsSalesOrNot(List<String> skuNumList){
    	 String skuIds = StringUtils.join(skuNumList,",");
         CheckSale sale = null;
         try {
        	 sale = productApi.getWeiZhiCheckSale(skuIds);
		} catch (Exception e) {
			LOGGER.error("getWeiZhiCheckSale is fail:{}",e);
			return false;
		}
         if(null != sale && CollectionUtils.isNotEmpty(sale.getResult())){
        	 for (WZCheckSale checkSale : sale.getResult()) {
      			if(checkSale.getSaleState() == 0){
      				return false;
      			}
      		 } 
         }
        return true;
    }

	/**
	 * 商品可售验证接口（单个商品验证）
	 * 
	 * @return flag:true可售
	 * @throws Exception
	 */
	public Boolean checkGoodsSalesOrNot(String skuId) {
		Boolean flag = false;
		try {
			CheckSale checkSale = productApi.getWeiZhiCheckSale(skuId);
			if (null != checkSale.getResult() && checkSale.getResult().size() > 0) {
				WZCheckSale wZCheckSale = checkSale.getResult().get(0);
				if (1 == wZCheckSale.getSaleState()) {
					flag = true;
				}
			}
			return flag;
		} catch (Exception e) {
			LOGGER.error("getWeiZhiCheckSale is fail:{}", e);
			return flag;
		}
	}



    /**
     * 验证京东商品是否支持7天退货
     */
    public boolean checkGoodsIs7ToReturn(List<SkuNum> skuNumList){
    	List<String> skuId = Lists.newArrayList();
    	for (SkuNum sku : skuNumList) {
    		skuId.add(sku.getSkuId()+"");
    		
		}
    	String skuIds = StringUtils.join(skuId,",");
    	CheckSale sale = null;
		try{
			sale = productApi.getWeiZhiCheckSale(skuIds);
		}catch(Exception e){
			
		}
		if(null != sale && CollectionUtils.isNotEmpty(sale.getResult())){
			for (WZCheckSale checkSale : sale.getResult()) {
				if(checkSale.getIs7ToReturn() == 0){
					return false;
				}
			}
    	}	
        return true;
    }
    
    /**
     * 验证区域是否受限
     * @param skus
     * @param region
     * @return
     * @throws Exception 
     */
    public boolean productCheckAreaLimitQuery(List<Long> skus,Region region){
    	String skuIds = StringUtils.join(skus,",");
    	
    	List<AreaLimitEntity> limitList = new ArrayList<>();
    	try {
    		limitList = productApi.getWeiZhiCheckAreaLimit(skuIds, region);
		} catch (Exception e) {
			LOGGER.error("call method productCheckAreaLimitQuery may be Duang ....{}",e);
		}
    	if(CollectionUtils.isEmpty(limitList)){
    		return false;
    	}
    	for (AreaLimitEntity area : limitList) {
    		/**
    		 * 存在不支持配送的商品是才返回
    		 */
    		Boolean bl = area.getIsAreaRestrict();
    		if(null != bl && bl){
    			return area.getIsAreaRestrict();
    		}
		} 
    	return false;
    	
    }

    public AddressInfo getAddressByOrderId(Long addressId) throws BusinessException {

        AddressInfo addressInfo = new AddressInfo();

        if (null == addressId) {
            throw new BusinessException("地址编号不能为空");
        }

        AddressInfoEntity address = addressInfoDao.select(Long.valueOf(addressId));

        addressInfo.setProvinceId(Integer.valueOf(address.getProvinceCode()));
        addressInfo.setCityId(Integer.valueOf(address.getCityCode()));
        addressInfo.setCountyId(Integer.valueOf(address.getDistrictCode()));
        addressInfo.setTownId(StringUtils.isBlank(address.getTownsCode()) ? 0 : Integer.valueOf(address
                .getTownsCode()));
        addressInfo.setAddress(address.getAddress());
        addressInfo.setReceiver(address.getName());
        addressInfo.setEmail("jdsupport@apass.cn");
        addressInfo.setMobile(address.getTelephone());
        return addressInfo;
    }

    /**
     * 修改商品数目 不可循环调用该方法否则无法回滚
     *
     * @param goodsId 商品Id
     * @param goodsStockId 商品库存Id
     * @param goodsNum 修改数量
     * @param additionFlag -1 减少 1 增加
     * @param errorNo 最大递归次数
     * @throws BusinessException
     */
    @Transactional(isolation = Isolation.READ_COMMITTED, rollbackFor = { Exception.class,
            BusinessException.class,RuntimeException.class })
    public void modifyGoodsQuantity(Long goodsId, Long goodsStockId, Long goodsNum, Integer additionFlag,
            int errorNo) throws BusinessException {
        LOGGER.info("进入商品库存修改.商品ID[{}],库存ID[{}],修改数量[{}],加减标记[{}].", errorNo, goodsId, goodsStockId,
                goodsNum, additionFlag);
        GoodsInfoEntity goodsInfo = goodsDao.select(goodsId);
        if (null == goodsInfo) {
            throw new BusinessException("商品信息不存在,请联系客服!");
        }
        GoodsStockInfoEntity goodsStock = goodsStockDao.select(goodsStockId);
        if (null == goodsStock) {
            throw new BusinessException("商品信息不存在,请联系客服!");
        }
        goodsStock.setStockAmt(goodsStock.getStockCurrAmt());
        LOGGER.info("库存ID[{}],库存数量[{}],修改数量[{}].", goodsStockId, goodsStock.getStockCurrAmt(), goodsNum);
        // 减库存
        if (additionFlag < 0) {
            if (goodsStock.getStockCurrAmt() >= goodsNum) {
                Long stockCurrAmt = goodsStock.getStockCurrAmt() - goodsNum;
                goodsStock.setStockCurrAmt(stockCurrAmt);
                LOGGER.info("开始修改库存数量[{}],库存ID[{}].", stockCurrAmt, goodsStockId);
                Integer successFlag = goodsStockDao.updateCurrAmtAndTotalAmount(goodsStock);
                LOGGER.info("开始修改库存数量[{}],库存ID[{}],修改结果[{}].", stockCurrAmt, goodsStockId, successFlag);
                if (successFlag == 0) {
                    LOGGER.info("修改失败,第[{}]次递归操作修改库存数量.", errorNo);
                    if (errorNo <= 0) {
                        // 报错
                        throw new BusinessException(goodsInfo.getGoodsName() + "商品库存不足");
                    }
                    this.modifyGoodsQuantity(goodsId, goodsStockId, goodsNum, additionFlag, --errorNo);
                } else if (successFlag > 1) {
                    LOGGER.info("数据异常.");
                    LOGGER.error("modifyGoodsQuantity is fail,successFlag return > 1,goodsStockId:{}",
                            goodsStockId);
                    throw new BusinessException(goodsInfo.getGoodsName() + "商品库存更新异常请联系客服!");
                }
            } else {
                throw new BusinessException(goodsInfo.getGoodsName() + "商品库存不足");
            }
        } else {
            // 加库存
            Long stockCurrAmt = goodsStock.getStockCurrAmt() + goodsNum;
            Long stockTotalAmt = goodsStock.getStockTotalAmt() + goodsNum;
            goodsStock.setStockCurrAmt(stockCurrAmt);
            goodsStock.setStockTotalAmt(stockTotalAmt);
            LOGGER.info("开始修改库存数量[{}],库存ID[{}].", stockCurrAmt, goodsStockId);
            Integer successFlag = goodsStockDao.updateCurrAmtAndTotalAmount(goodsStock);
            LOGGER.info("开始修改库存数量[{}],库存ID[{}],修改结果[{}].", stockCurrAmt, goodsStockId, successFlag);
            if (successFlag == 0) {
                LOGGER.info("修改失败,第[{}]次递归操作修改库存数量.", errorNo);
                if (errorNo < 0) {
                    // 报错
                    throw new BusinessException(goodsInfo.getGoodsName() + "增加商品库存失败");
                }
                this.modifyGoodsQuantity(goodsId, goodsStockId, goodsNum, additionFlag, --errorNo);
            } else if (successFlag > 1) {
                LOGGER.error("modifyGoodsQuantity is fail,successFlag return > 1,goodsStockId:{}",
                        goodsStockId);
                throw new BusinessException(goodsInfo.getGoodsName() + "商品库存更新异常请联系客服!");
            }
        }
    }
    
    /**
     * 判断当前商户订单下，是否包含使用优惠券的订单
     * @param merchantCode
     * @param myCouponId
     * @param goodStockIds
     * @return
     */
    public Long getCouponId(String merchantCode,String myCouponId,String goodStockIds){
    	if(StringUtils.isNotBlank(myCouponId)){
    		String[] stockIds = StringUtils.strip(goodStockIds,"[]").split(",");
    		for (String stockId : stockIds) {
    			if(StringUtils.isEmpty(stockId)){
    				continue;
    			}
				GoodsStockInfoEntity stock = goodsStockDao.select(Long.parseLong(StringUtils.trim(stockId)));
    			GoodsInfoEntity goods = goodsDao.select(stock.getGoodsId());
    			if(StringUtils.equals(goods.getMerchantCode(), merchantCode)){
    				return Long.parseLong(myCouponId);
    			}
			}
    	}
    	return -1l;
    }
    /**
     *
     * 生成订单 商品价格使用页面传递
     *
     * @param userId
     * @param totalPayment
     * @param purchaseList
     * @throws BusinessException
     */
    @Transactional(rollbackFor = { Exception.class, BusinessException.class,RuntimeException.class })
    public Map<String,List<String>> generateOrder(String requestId, Long userId, BigDecimal totalPayment,
            List<PurchaseRequestDto> purchaseList, Long addressId, String deviceType,String myCouponId,String goodStockIds,
                                                  InvoiceDto invoiceDto)
            throws BusinessException {
    	Map<String,List<String>> params = Maps.newHashMap();
        List<String> orderList = Lists.newArrayList();
        List<String> confirmOrderList = Lists.newArrayList();
        // 每商户订单金额
        Map<String, BigDecimal> merchantPaymentMap = sumMerchantAndActivityIdPayment(purchaseList,myCouponId,goodStockIds);
        AddressInfoEntity address = addressInfoDao.select(addressId);
        int index = 0;
        int size = merchantPaymentMap.size();
        BigDecimal calc = BigDecimal.ZERO;
        /**
         * sprint 12 如果存在多个商户的商品,为订单生成一个主订单，如果只是一个商户的商品，不需要
         */
        String parentOrderId = saveParentOrder(requestId, userId, deviceType, address, size, purchaseList,
                myCouponId, totalPayment,invoiceDto);
        String negativeParentOrderId = "0";
        if(size > 1){
        	orderList.add(parentOrderId);
        	negativeParentOrderId = "-"+ parentOrderId;
        }
        for (Map.Entry<String, BigDecimal> merchant : merchantPaymentMap.entrySet()) {
        	index++;
            String merchantCode = merchant.getKey();
            BigDecimal orderAmt = merchant.getValue();
            OrderInfoEntity orderInfo = new OrderInfoEntity();
            orderInfo.setUserId(userId);
            if(index == size){
            	orderInfo.setOrderAmt(totalPayment.subtract(calc));
            }else{
              orderInfo.setOrderAmt(orderAmt);
              calc = calc.add(orderAmt);
            }
            
            orderInfo.setCouponId(getCouponId(merchantCode, myCouponId, goodStockIds));
            MerchantInfoEntity merchantInfoEntity = merchantInforService.queryByMerchantCode(merchantCode);

            if (StringUtils.equals(merchantInfoEntity.getMerchantName(), ConstantsUtils.MERCHANTNAME)) {
                orderInfo.setSource(SourceType.WZ.getCode());
                orderInfo.setExtParentId("0");
            }
            String orderId = commonService.createOrderIdNew(deviceType, merchantInfoEntity.getId());
            if(size == 1){
            	orderList.add(orderId);
            	orderInfo.setMainOrderId(orderId);
            }
            orderInfo.setDeviceType(deviceType);
            orderInfo.setOrderId(orderId);
            orderInfo.setStatus(OrderStatus.ORDER_NOPAY.getCode());
            orderInfo.setProvince(address.getProvince());
            orderInfo.setCity(address.getCity());
            orderInfo.setDistrict(address.getDistrict());
            orderInfo.setAddress(address.getAddress());
            orderInfo.setPostcode(address.getPostcode());
            orderInfo.setName(address.getName());
            orderInfo.setTelephone(address.getTelephone());
            orderInfo.setMerchantCode(merchantCode);
            orderInfo.setExtendAcceptGoodsNum(0);
            orderInfo.setAddressId(addressId);
            orderInfo.setPayStatus(PaymentStatus.NOPAY.getCode());
            Long orderGoodsNum = this.countGoodsNumGroupByMerchantCode(merchantCode, purchaseList);
            orderInfo.setGoodsNum(orderGoodsNum);
            orderInfo.setPreDelivery("N");
            orderInfo.setExtOrderId("");
            orderInfo.setPreStockStatus("");
            orderInfo.setParentOrderId(negativeParentOrderId);
            if(size > 1){
            	orderInfo.setMainOrderId(parentOrderId);
            }
            Integer successStatus = orderInfoRepository.insert(orderInfo);
            confirmOrderList.add(orderId);
            //插入发票信息
            if(invoiceDto != null){
                //向下兼容，老版本invoiceDto = null
                invoiceDto.setOrderId(orderId);
                invoiceDto.setOrderAmt(orderInfo.getOrderAmt());
                if(size > 1){
                    //有子订单时发票先不可见
                    invoiceDto.setStatus((byte) InvoiceStatusEnum.INVISIBLE.getCode());
                }else{
                    invoiceDto.setStatus((byte) InvoiceStatusEnum.APPLYING.getCode());
                }
                invoiceService.createInvoice(invoiceDto);
            }

            if (successStatus < 1) {
                LOG.info(requestId, "生成订单", "订单表数据插入失败");
                throw new BusinessException("订单生成失败!", BusinessErrorCode.ORDER_NOT_EXIST);
            }
            // 插入商品级订单
            for (PurchaseRequestDto purchase : purchaseList) {
                GoodsInfoEntity goods = goodsDao.select(purchase.getGoodsId());
                if (goods.getMerchantCode().equals(merchantCode)) {
                    GoodsStockInfoEntity goodsStock = goodsStockDao.select(purchase.getGoodsStockId());
                    OrderDetailInfoEntity orderDetail = new OrderDetailInfoEntity();
                    if(StringUtils.isBlank(purchase.getProActivityId())){
                    	purchase.setProActivityId("");
                    }
                    if(StringUtils.isBlank(purchase.getLimitActivityId())){
                    	purchase.setLimitActivityId("");
                    }
                    orderDetail.setProActivityId(purchase.getProActivityId());//把活动id,保存到订单详情的表中
                    orderDetail.setLimitActivityId(purchase.getLimitActivityId());//把限时购活动id,保存到订单详情的表中
                    orderDetail.setDiscountAmount(purchase.getDisCount());//把优惠的金额，保存到订单详情的表中
                    orderDetail.setCouponMoney(null == purchase.getCouponMoney()?BigDecimal.ZERO:purchase.getCouponMoney());//把优惠券的优惠金额，保存到订单详情表中
                    if (StringUtils.equals(goods.getSource(), SourceType.WZ.getCode())) {
                        orderDetail.setSource(SourceType.WZ.getCode());
                        orderDetail.setSkuId(goods.getExternalId());
                        
                        List<String> skus = Lists.newArrayList();
                        skus.add(goods.getExternalId());
                        
                        List<WZPriceResponse> priceResponse = Lists.newArrayList();
                        try {
                        	priceResponse =	priceApi.getWzPrice(skus);
                        	if(CollectionUtils.isNotEmpty(priceResponse)){
                        		String goodsCostPrice = priceResponse.get(0).getWzPrice();
                        		String jdGoodsPrice = priceResponse.get(0).getJDPrice();
                        		orderDetail.setGoodsCostPrice(new BigDecimal(goodsCostPrice));//成本价（微知价格）

                                //更新该skuId 的成本价，售价
                                GoodsStockInfoEntity goodsStockInfoEntity =goodsStockDao.getGoodsStockInfoEntityByStockId(purchase.getGoodsStockId());
                                BigDecimal newGoodsCostPrice = new BigDecimal(goodsCostPrice);
                                BigDecimal newJdGoodsPrice = new BigDecimal(jdGoodsPrice);

                                if(goodsStockInfoEntity.getGoodsCostPrice().compareTo(newGoodsCostPrice) != 0
                                        || goodsStockInfoEntity.getGoodsPrice().compareTo(newJdGoodsPrice) != 0){
                                    goodsStockInfoEntity.setGoodsCostPrice(newGoodsCostPrice);
                                    goodsStockInfoEntity.setGoodsPrice(newJdGoodsPrice);
                                    goodsStockDao.update(goodsStockInfoEntity);
                                }
                        	}
						} catch (Exception e) {
							LOGGER.error("call wz method getWzPrice is failed!!!{}",e);
						}
                    }
                    if(StringUtils.isBlank(goods.getSource())){
                    	 orderDetail.setGoodsCostPrice(goodsStock.getGoodsCostPrice());
                    	 orderDetail.setSkuId(goodsStock.getSkuId());
                    }
                    orderDetail.setOrderId(orderInfo.getOrderId());
                    orderDetail.setGoodsId(goods.getId());
                    orderDetail.setGoodsStockId(purchase.getGoodsStockId());
                    orderDetail.setGoodsPrice(purchase.getPrice());
                    orderDetail.setGoodsNum(purchase.getBuyNum().longValue());
                    orderDetail.setGoodsTitle(goods.getGoodsTitle());
                    orderDetail.setCategoryCode(goods.getCategoryCode());
                    orderDetail.setGoodsName(goods.getGoodsName());
                    orderDetail.setGoodsSellPt(goods.getGoodsSellPt());
                    orderDetail.setGoodsType(goods.getGoodsType());
                    orderDetail.setGoodsLogoUrl(goodsStock.getStockLogo());
                    orderDetail.setMerchantCode(merchantCode);
                    orderDetail.setListTime(goods.getListTime());
                    if(null == goods.getDelistTime()){
                        orderDetail.setDelistTime(DateFormatUtil.string2date("1900-01-01 00:00:00",""));
                    }else{
                        orderDetail.setDelistTime(goods.getDelistTime());
                    }
                    orderDetail.setProDate(goods.getProDate());
                    orderDetail.setKeepDate(goods.getKeepDate());
                    orderDetail.setSupNo(goods.getSupNo());

                    Integer orderDetailSuccess = orderDetailInfoRepository.insert(orderDetail);
                    if (orderDetailSuccess < 1) {
                        LOG.info(requestId, "生成订单", "订单详情表数据插入失败");
                        throw new BusinessException("订单生成失败!", BusinessErrorCode.ORDER_NOT_EXIST);
                    }
                }
            }
        }
        params.put("orderList", orderList);
        params.put("confirmList",confirmOrderList);
        return params;
    }
    
    /**
     * 
     * @param mapSize
     * @param purchaseList 购买商品
     * @param myCouponId 我的优惠券的Id
     * @param totalPayment 支付金额
     * @return
     * @throws BusinessException 
     */
    public String saveParentOrder(String requestId,Long userId,String deviceType,AddressInfoEntity address,Integer mapSize,
    		List<PurchaseRequestDto> purchaseList,String myCouponId,BigDecimal totalPayment,
                                  InvoiceDto invoiceDto) throws BusinessException{
    	/**
    	 * mapSize大于1标志着有多个商户的商品
    	 */
    	if(mapSize == 1){
    		return "0";
    	}
        OrderInfoEntity orderInfo = new OrderInfoEntity();
        orderInfo.setUserId(userId);
        orderInfo.setOrderAmt(totalPayment);
        if(StringUtils.isBlank(myCouponId)){
        	myCouponId = "-1";
        }
        orderInfo.setCouponId(Long.parseLong(myCouponId));
        String orderId = commonService.createParentOrderIdNew(deviceType);
        orderInfo.setDeviceType(deviceType);
        orderInfo.setOrderId(orderId);
        orderInfo.setStatus(OrderStatus.ORDER_NOPAY.getCode());
        orderInfo.setProvince(address.getProvince());
        orderInfo.setCity(address.getCity());
        orderInfo.setDistrict(address.getDistrict());
        orderInfo.setAddress(address.getAddress());
        orderInfo.setPostcode(address.getPostcode());
        orderInfo.setName(address.getName());
        orderInfo.setTelephone(address.getTelephone());
        orderInfo.setMerchantCode("-1");
        orderInfo.setExtendAcceptGoodsNum(0);
        orderInfo.setAddressId(address.getAddressId());
        orderInfo.setPayStatus(PaymentStatus.NOPAY.getCode());
        Long orderGoodsNum = this.countGoodsNumGroupByMerchantCode1(purchaseList);
        orderInfo.setGoodsNum(orderGoodsNum);
        orderInfo.setPreDelivery("N");
        orderInfo.setExtOrderId("");
        orderInfo.setPreStockStatus("");
        orderInfo.setParentOrderId("0");
        orderInfo.setMainOrderId(orderId);
        Integer successStatus = orderInfoRepository.insert(orderInfo);

        //插入发票信息
        if(invoiceDto != null){
            //向下兼容，老版本invoiceDto = null
            invoiceDto.setOrderId(orderId);
            invoiceDto.setOrderAmt(orderInfo.getOrderAmt());
            invoiceDto.setStatus((byte) InvoiceStatusEnum.APPLYING.getCode());
            invoiceService.createInvoice(invoiceDto);
        }

        if (successStatus < 1) {
            LOG.info(requestId, "生成订单", "订单表数据插入失败");
            throw new BusinessException("订单生成失败!", BusinessErrorCode.ORDER_NOT_EXIST);
        }
        // 插入商品级订单
        for (PurchaseRequestDto purchase : purchaseList) {
            GoodsInfoEntity goods = goodsDao.select(purchase.getGoodsId());
                GoodsStockInfoEntity goodsStock = goodsStockDao.select(purchase.getGoodsStockId());
                OrderDetailInfoEntity orderDetail = new OrderDetailInfoEntity();
                if(StringUtils.isBlank(purchase.getProActivityId())){
                	purchase.setProActivityId("");
                }
                if(StringUtils.isBlank(purchase.getLimitActivityId())){
                	purchase.setLimitActivityId("");
                }
                orderDetail.setProActivityId(purchase.getProActivityId());//把活动id,保存到订单详情的表中
                orderDetail.setLimitActivityId(purchase.getLimitActivityId());//把限时购活动的id，保存到订单详情的表中
                orderDetail.setDiscountAmount(purchase.getDisCount());//把优惠的金额，保存到订单详情的表中
                orderDetail.setCouponMoney(null == purchase.getCouponMoney()?BigDecimal.ZERO:purchase.getCouponMoney());//把优惠券的优惠金额，保存到订单详情表中
                if (StringUtils.equals(goods.getSource(), SourceType.WZ.getCode())) {
                    orderDetail.setSource(SourceType.WZ.getCode());
                    orderDetail.setSkuId(goods.getExternalId());
                    
                    List<String> skus = Lists.newArrayList();
                    skus.add(goods.getExternalId());
                    
                    List<WZPriceResponse> priceResponse = Lists.newArrayList();
                    try {
                    	priceResponse =	priceApi.getWzPrice(skus);
                    	if(CollectionUtils.isNotEmpty(priceResponse)){
                    		String goodsCostPrice = priceResponse.get(0).getWzPrice();
                    		orderDetail.setGoodsCostPrice(new BigDecimal(goodsCostPrice));//成本价（微知价格）
                    	}
					} catch (Exception e) {
						LOGGER.error("call wz method getWzPrice is failed!!!{}",e);
					}
                    
                }
                if(StringUtils.isBlank(goods.getSource())){
                	 orderDetail.setGoodsCostPrice(goodsStock.getGoodsCostPrice());
                	 orderDetail.setSkuId(goodsStock.getSkuId());
                }
                orderDetail.setOrderId(orderInfo.getOrderId());
                orderDetail.setGoodsId(goods.getId());
                orderDetail.setGoodsStockId(purchase.getGoodsStockId());
                orderDetail.setGoodsPrice(purchase.getPrice());
                orderDetail.setGoodsNum(purchase.getBuyNum().longValue());
                orderDetail.setGoodsTitle(goods.getGoodsTitle());
                orderDetail.setCategoryCode(goods.getCategoryCode());
                orderDetail.setGoodsName(goods.getGoodsName());
                orderDetail.setGoodsSellPt(goods.getGoodsSellPt());
                orderDetail.setGoodsType(goods.getGoodsType());
                orderDetail.setGoodsLogoUrl(goodsStock.getStockLogo());
                orderDetail.setMerchantCode(goods.getMerchantCode());
                orderDetail.setListTime(goods.getListTime());
                if(null == goods.getDelistTime()){
                    orderDetail.setDelistTime(DateFormatUtil.string2date("1900-01-01 00:00:00",""));
                }else{
                    orderDetail.setDelistTime(goods.getDelistTime());
                }
                orderDetail.setProDate(goods.getProDate());
                orderDetail.setKeepDate(goods.getKeepDate());
                orderDetail.setSupNo(goods.getSupNo());

                Integer orderDetailSuccess = orderDetailInfoRepository.insert(orderDetail);
                if (orderDetailSuccess < 1) {
                    LOG.info(requestId, "生成订单", "订单详情表数据插入失败");
                    throw new BusinessException("订单生成失败!", BusinessErrorCode.ORDER_NOT_EXIST);
                }
            }
	        return orderId;
    }
    /**
     * 根据订单号获取对应商户号
     * @param orderIdList
     * @return
     */
    public List<String> merchantCodeList(List<String> orderIdList){
    	List<String> merchantCodeList = new ArrayList<String>();
    	for (String orderId : orderIdList) {
			OrderInfoEntity order =  getOrderInfoEntityByOrderId(orderId);
			merchantCodeList.add(order.getMerchantCode());
		}
    	return merchantCodeList;
    }

    private Long countGoodsNumGroupByMerchantCode(String merchantCode, List<PurchaseRequestDto> purchaseList) {
        Long goodsNum = 0L;
        for (PurchaseRequestDto purchase : purchaseList) {
            // 查询商品商户详情
            GoodsDetailInfoEntity goodsDetail = goodsDao.loadContainGoodsAndGoodsStockAndMerchant(purchase.getGoodsStockId());
            if (goodsDetail.getMerchantCode().equals(merchantCode)) {
                goodsNum += purchase.getBuyNum();
            }
        }
        return goodsNum;
    }

    private Long countGoodsNumGroupByMerchantCode1(List<PurchaseRequestDto> purchaseList) {
        Long goodsNum = 0L;
        for (PurchaseRequestDto purchase : purchaseList) {
            goodsNum += purchase.getBuyNum();
        }
        return goodsNum;
    }
    /**
     * 统计每个商户订单总金额
     *
     * @param purchaseList
     * @return
     */
    public Map<String, BigDecimal> sumMerchantPayment(List<PurchaseRequestDto> purchaseList) {
        Map<String, BigDecimal> merchantPayment = new HashMap<>();
        for (PurchaseRequestDto purchase : purchaseList) {
            // 查询商品商户详情
            GoodsDetailInfoEntity goodsDetail = goodsDao.loadContainGoodsAndGoodsStockAndMerchant(purchase.getGoodsStockId());
            String merchantCode = goodsDetail.getMerchantCode();
            if (merchantPayment.containsKey(merchantCode)) {
                BigDecimal haveSum = merchantPayment.get(merchantCode);
                haveSum = haveSum.add(purchase.getPrice().multiply(
                        BigDecimal.valueOf(Long.valueOf(purchase.getBuyNum()))));
                merchantPayment.put(merchantCode, haveSum);
            } else {
                merchantPayment.put(merchantCode,
                        purchase.getPrice().multiply(BigDecimal.valueOf(Long.valueOf(purchase.getBuyNum()))));
            }
        }
        return merchantPayment;
    }
    
    
    /**
     * 统计每个商户订单总金额
     * 统计同一活动下，商品的优惠金额
     *
     * @param purchaseList
     * @return
     * @throws BusinessException 
     */
    public Map<String, BigDecimal> sumMerchantAndActivityIdPayment(List<PurchaseRequestDto> purchaseList,String myCouponId,String goodStockIds) throws BusinessException {
    	//根据活动分组，计算活动下的所有商品总额
        Map<String,BigDecimal> activityPayment = Maps.newHashMap();
        for (PurchaseRequestDto purchase : purchaseList) {
    		//计算商品的应付金额价格
        	String activityId = purchase.getProActivityId();
    		BigDecimal goodsSum = purchase.getPrice().multiply(new BigDecimal(purchase.getBuyNum()+""));
    		if(!activityPayment.containsKey(activityId)){
    			activityPayment.put(activityId, goodsSum);
    		}else{
    			BigDecimal total = 	activityPayment.get(activityId).add(goodsSum);
    			activityPayment.put(activityId, total);
    		}
		}
        
        //根据活动分组信息情况，查看优惠区间
        Map<String,BigDecimal> discountPayment = Maps.newHashMap();
        for (String activityId : activityPayment.keySet()) {
    		BigDecimal totalMoney = activityPayment.get(activityId);
    		long discount = 0;
			if(StringUtils.isNotBlank(activityId)){
				ProActivityCfg cfg = activityCfgMapper.selectByPrimaryKey(Long.parseLong(activityId));
			    discount = getDisCount(cfg, totalMoney);
			}
			discountPayment.put(activityId, BigDecimal.valueOf(discount));
		}
        
        for (PurchaseRequestDto purchase : purchaseList) {
            BigDecimal goodsSum = purchase.getPrice().multiply(BigDecimal.valueOf(Long.valueOf(purchase.getBuyNum())));
            BigDecimal discount = BigDecimal.ZERO;
            if(activityPayment.containsKey(purchase.getProActivityId())){
            	BigDecimal total = activityPayment.get(purchase.getProActivityId());
            	BigDecimal discountTotal = discountPayment.get(purchase.getProActivityId());
            	discount = discountTotal.multiply(goodsSum).divide(total,2,BigDecimal.ROUND_HALF_UP);
            }
            purchase.setDisCount(discount);
            goodsSum = goodsSum.subtract(discount);
        	purchase.setPayMoney(goodsSum);
        }
        
        /**
         * 如果有优惠券
         */
        if(StringUtils.isNotBlank(myCouponId)){
    		ProMyCoupon mycoupon = myCouponMapper.selectByPrimaryKey(Long.parseLong(myCouponId));
    		ProCoupon coupon = couponMapper.selectByPrimaryKey(mycoupon.getCouponId());
    		String[] stockIds = StringUtils.strip(goodStockIds,"[]").split(",");
    		BigDecimal total = BigDecimal.ZERO;
    		for (String stockId : stockIds) {
    			String stock = StringUtils.trim(stockId);
    			if(StringUtils.isBlank(stock)){continue;}
    			for (PurchaseRequestDto purchase : purchaseList) {
        			if(StringUtils.equals(purchase.getGoodsStockId()+"", stock)){
        				total = total.add(purchase.getPayMoney());
        			}
        		}
			}
    		for (PurchaseRequestDto purchase : purchaseList) {
    			for (String stockId : stockIds) {
    				String stock = StringUtils.trim(stockId);
    				if(StringUtils.isBlank(stock)){continue;}
	    			if(StringUtils.equals(purchase.getGoodsStockId()+"", stock)){
	    				BigDecimal couponMoney  = purchase.getPayMoney().multiply(coupon.getDiscountAmonut())
	        					.divide(total,2,BigDecimal.ROUND_HALF_UP);
	        			purchase.setCouponMoney(couponMoney);
	    			}
    			}
			}
    	}
        
        //计算每个商户的订单金额
        Map<String, BigDecimal> merchantPayment = Maps.newHashMap();
        for (PurchaseRequestDto purchase : purchaseList) {
        	// 查询商品商户详情
        	GoodsInfoEntity goods = goodsDao.select(purchase.getGoodsId());
            String merchantCode = goods.getMerchantCode();
            BigDecimal goodsSum = purchase.getPayMoney();
        	
            if(null != purchase.getCouponMoney()){
            	goodsSum = goodsSum.subtract(purchase.getCouponMoney());
            }
            if (merchantPayment.containsKey(merchantCode)) {
                BigDecimal haveSum = merchantPayment.get(merchantCode);
                haveSum = haveSum.add(goodsSum);
                merchantPayment.put(merchantCode, haveSum);
            } else {
                merchantPayment.put(merchantCode,goodsSum);
            }
		}
        return merchantPayment;
    }
    
    /**
     * 生成订单前校验
     *
     * @param totalPayment
     * @param addressId
     * @param purchaseList
     * @throws BusinessException
     */
    public void validateCorrectInfo(String requestId, BigDecimal totalPayment,BigDecimal discountMoney, Long addressId, Long userId,
            List<PurchaseRequestDto> purchaseList, String sourceFlag,String myCouponId) throws BusinessException {
        // 校验商品的价格是否已经更改
        for (PurchaseRequestDto purchase : purchaseList) {
            BigDecimal price = commonService.calculateGoodsPrice(purchase.getGoodsId(),
                    purchase.getGoodsStockId());
            if ( StringUtils.isBlank(purchase.getLimitActivityId()) && !(purchase.getPrice().compareTo(price) == 0)) {
                LOG.info(requestId, "id为" + purchase.getGoodsId() + "的商品价格发生改变，请重新购买！", purchase
                        .getGoodsStockId().toString());
                throw new BusinessException("商品价格已变动，请重新下单");
            }
            
            //验证商品参加的活动是否过期
            if(StringUtils.isNotBlank(purchase.getProActivityId())){
	            ActivityStatus validActivityFlag = proGroupGoodsService.isValidActivity(purchase.getProActivityId(),purchase.getGoodsId(),purchase.getGoodsStockId());
	        	if(validActivityFlag != ActivityStatus.PROCESSING){
	        		LOGGER.error("ActivityID为{}的活动,GoodsID为{}的商品，参加的活动无效!",purchase.getProActivityId(),purchase.getGoodsId());
	        		throw new BusinessException("订单中包含无效活动的商品!");
	        	}
            }
        	
            //验证限时购活动是否结束
            String limitActivityId = purchase.getLimitActivityId();
            if(StringUtils.isNotBlank(limitActivityId)){
            	LimitBuyAct limitBuyAct = limitBuyActMapper.selectByPrimaryKey(Long.parseLong(limitActivityId));
            	if(null == limitBuyAct){
            		throw new BusinessException("商品价格已变动，请重新下单");
            	}
            	if(limitBuyAct.getEndDate().getTime() < new Date().getTime()){
            		throw new BusinessException("商品价格已变动，请重新下单");
            	}
            }
        }
        /**
         * sprint13验证限时购活动中
         */
        for (PurchaseRequestDto purchase : purchaseList) {
        	String limitActivityId = purchase.getLimitActivityId();
            if(StringUtils.isNotBlank(limitActivityId)){
            	/**
            	 * 首先根据根据商品的Id,获取商品的对象，然后判断source是否为空，如果不为空external_id则一定不为空<br/>
            	 * 如果为空，则标志着是自己的商品，根据stock_id查询，获取sku_id
            	 */
            	boolean bl = limitCommonService.validateLimitGoodsNumsByGoodsIdAndStockId(new LimitBuyParam(limitActivityId, userId+"",
            			purchase.getBuyNum(), purchase.getGoodsId(), purchase.getGoodsStockId()));
            	if(!bl){
            		throw new BusinessException("商品价格已变动，请重新下单");
            	}
            }
        }
        
        // 校验商品订单总金额
        BigDecimal countTotalPrice = BigDecimal.ZERO;
        for (PurchaseRequestDto purchase : purchaseList) {
            Long buyNum = Long.valueOf(purchase.getBuyNum());
            countTotalPrice = countTotalPrice.add(purchase.getPrice().multiply(BigDecimal.valueOf(buyNum)));
        }
        totalPayment = totalPayment.add(discountMoney);
        /**
         * 如果优惠券Id不为空
         */
        Date now = new Date();
        if(StringUtils.isNotBlank(myCouponId)){
        	ProMyCoupon mycoupon = myCouponMapper.selectByPrimaryKey(Long.parseLong(myCouponId));
        	ProCoupon coupon = couponMapper.selectByPrimaryKey(mycoupon.getCouponId());
        	if(mycoupon.getStartDate().getTime() > now.getTime() 
        			|| mycoupon.getEndDate().getTime() < now.getTime()){
        		throw new BusinessException("优惠券已失效，请重新结算!");
        	}
        	totalPayment = totalPayment.add(coupon.getDiscountAmonut());
        }
        LOGGER.info("product total money:{},payMoney+discountMoney+couponMoney:{},discountMoney:{},myCouponId:{}",countTotalPrice,totalPayment,discountMoney,myCouponId);
        if (countTotalPrice.compareTo(totalPayment) != 0) {
            LOG.info(requestId, "生成订单前校验,订单总金额计算错误!", countTotalPrice.toString());
            throw new BusinessException("订单总金额计算错误!");
        }

        // 校验商品上下架
        for (PurchaseRequestDto purchase : purchaseList) {
            // 校验商品下架
            this.validateGoodsOffShelf(requestId, purchase.getGoodsId());

        }
        // 校验地址
        AddressInfoEntity address = addressInfoDao.select(addressId);
        if (null == address || address.getUserId().longValue() != userId.longValue()) {
            LOG.info(requestId, "生成订单前校验,校验地址,该用户地址信息不存在", addressId.toString());
            throw new BusinessException("该用户地址信息不存在");
        }

        // 校验商品库存
        for (PurchaseRequestDto purchase : purchaseList) {
        	GoodsStockInfoEntity stockEntity = goodsStockDao.select(purchase.getGoodsStockId());
        	GoodsInfoEntity goodsInfo = goodsDao.select(stockEntity.getGoodsId());
            if (StringUtils.isBlank(goodsInfo.getSource())) {
                if (stockEntity.getStockCurrAmt() < purchase.getBuyNum()) {
                    LOG.info(requestId, "生成订单前校验,商品库存不足", stockEntity.getGoodsStockId().toString());
                    throw new BusinessException("抱歉，您的订单内含库存不足商品\n请修改商品数量");
                }
                
                if (stockEntity.getStockCurrAmt() < purchase.getBuyNum()) {
                    LOG.info(requestId, "生成订单前校验,商品库存不足", stockEntity.getGoodsStockId().toString());
                    throw new BusinessException("抱歉，您的订单内含库存不足商品\n请修改商品数量");
                }
                if (purchase.getBuyNum() <= 0) {
                    LOG.info(requestId, "生成订单前校验,商品购买数量为0", purchase.getBuyNum().toString());
                    throw new BusinessException("商品" + stockEntity.getGoodsName() + "购买数量不能为零");
                }
                
            } else {
            	//校验京东商品购买数量
            	if(purchase.getBuyNum()>200){
                    LOG.info(requestId, "生成订单前校验,京东商品最多只能买200件","");
                    throw new BusinessException("抱歉，您的订单内含库存不足商品\n请修改商品数量");
            	}
                // 校验地址
                AddressInfoEntity address1 = addressInfoDao.select(addressId);
                if (address1.getProvinceCode() == null || address1.getCityCode() == null
                        || address1.getDistrictCode() == null) {
                    LOG.info(requestId, "生成订单前校验,校验地址,存在京东商品时地址错误", addressId.toString());
                    throw new BusinessException("地址信息格式不正确");
                }

            }
            // 校验购物车
            if (StringUtils.isNotEmpty(sourceFlag) && sourceFlag.equals(ORDERSOURCECARTFLAG)) {
                CartInfoEntity cart = new CartInfoEntity();
                cart.setUserId(userId);
                cart.setGoodsStockId(purchase.getGoodsStockId());
                List<CartInfoEntity> cartInfoList = cartInfoRepository.filter(cart);
                if (null == cartInfoList || cartInfoList.isEmpty()) {
                    LOG.info(requestId, "生成订单前校验,校验购物车,订单商品购物车中不存在", purchase.getGoodsStockId().toString());
                    throw new BusinessException("订单商品购物车中不存在");
                }
            }
        }
    }

    /**
     * 校验商品下架
     *
     * @param goodsId 商品id
     * @throws BusinessException
     */
    public void validateGoodsOffShelf(String requestId, Long goodsId) throws BusinessException {
        Date now = new Date();
        GoodsInfoEntity goodsInfo = goodsDao.select(goodsId);
        if (null == goodsInfo) {
            LOG.info(requestId, "校验商品下架,根据商品id查询商品信息数据为空", goodsId.toString());
            throw new BusinessException("商品号:" + goodsId + ",不存在或商户号不存在！");
        }
        if (now.before(goodsInfo.getListTime())
                || !GoodStatus.GOOD_UP.getCode().equals(goodsInfo.getStatus())) {
            LOG.info(requestId, "校验商品下架,商品已下架", goodsId.toString());
            throw new BusinessException("抱歉，您的订单内含下架商品\n请重新下单");
        }
        if (goodsInfo.getSource() == null) {
            if (null !=goodsInfo.getDelistTime() && now.after(goodsInfo.getDelistTime())) {
                LOG.info(requestId, "校验商品下架,商品已下架", goodsId.toString());
                throw new BusinessException("抱歉，您的订单内含下架商品\n请重新下单");
            }
            List<GoodsStockInfoEntity> goodsList = goodsStockDao.loadByGoodsId(goodsId);
            boolean offShelfFlag = true;
            for (GoodsStockInfoEntity goodsStock : goodsList) {
                if (goodsStock.getStockCurrAmt() > 0) {
                    offShelfFlag = false;
                    break;
                }
            }
            if (offShelfFlag) {
                LOG.info(requestId, "校验商品下架,商品各规格数量都为0,已下架", goodsId.toString());
                throw new BusinessException("抱歉，您的订单内含下架商品\n请重新下单");
            }
        }

    }

    /**
     * 校验商品下架和库存不足[支付校验使用]
     *
     * @param goodsId 商品Id
     * @param goodsStockId 库存Id
     * @param buyNum 购买数量
     * @throws BusinessException
     */
    public void validateGoodsStock(String requestId, Long goodsId, Long goodsStockId, Long buyNum,
            String orderId) throws BusinessException {
        Date now = new Date();
        // Step 1 校验商品上下架
        GoodsInfoEntity goodsInfo = goodsDao.select(goodsId);
        if (null == goodsInfo) {
            LOG.info(requestId, "商品:" + goodsId + "不存在", "");
            throw new BusinessException("商品号:" + goodsId + ",不存在或商户号不存在！");
        }
        if (now.before(goodsInfo.getListTime()) || (null !=goodsInfo.getDelistTime() && now.after(goodsInfo.getDelistTime()))
                || !GoodStatus.GOOD_UP.getCode().equals(goodsInfo.getStatus())) {
            LOG.info(requestId, "支付失败您的订单含有下架商品", "");
            throw new BusinessException("支付失败您的订单含有下架商品");
        }
        GoodsStockLogEntity stockLog = goodsStcokLogDao.loadByOrderId(orderId);
        if (null != stockLog) {
            LOG.info(requestId, "该订单已减库存不做减库存操作", orderId);
            return;
        }
        List<GoodsStockInfoEntity> goodsList = goodsStockDao.loadByGoodsId(goodsId);
        // 不为京东商品
        if (goodsInfo.getSource() == null) {
            boolean offShelfFlag = true;
            for (GoodsStockInfoEntity goodsStock : goodsList) {
                if (goodsStock.getStockCurrAmt() > 0) {
                    offShelfFlag = false;
                    break;
                }
            }
            if (offShelfFlag) {
                LOG.info(requestId, "支付失败您的订单含有下架商品", "");
                throw new BusinessException("支付失败您的订单含有下架商品");
            }

            // Step 2 校验商品库存
            GoodsDetailInfoEntity goodsDetail = goodsDao.loadContainGoodsAndGoodsStockAndMerchant(goodsStockId);

            if (goodsDetail.getStockCurrAmt() < buyNum) {
                LOG.info(requestId, "支付失败您的订单商品库存不足", "");
                throw new BusinessException("支付失败您的订单商品库存不足");
            }
            if (buyNum <= 0) {
                LOG.info(requestId, "购买数量不能为零", goodsDetail.getGoodsName() + "购买数量不能为零");
                throw new BusinessException("商品" + goodsDetail.getGoodsName() + "购买数量不能为零");
            }
        }
    }

    /**
     * 取消订单
     *
     * @param userId
     * @param orderId
     * @throws BusinessException
     */
    @Transactional(isolation = Isolation.READ_COMMITTED, rollbackFor = { Exception.class,
            BusinessException.class })
    public void cancelOrder(String requestId, Long userId, String orderId) throws BusinessException {
        OrderInfoEntity order = orderInfoRepository.selectByOrderIdAndUserId(orderId, userId);
        if (null == order) {
            LOG.info(requestId, "查询订单表信息", "数据为空");
            throw new BusinessException("对不起!该订单不存在!", BusinessErrorCode.ORDER_NOT_EXIST);
        }
        if (!OrderStatus.ORDER_NOPAY.getCode().equals(order.getStatus())) {
            LOG.info(requestId, "校验订单状态", "当前订单状态不能取消该订单");
            throw new BusinessException("对不起!当前订单状态不能取消该订单", BusinessErrorCode.ORDERSTATUS_NOTALLOW_CANCEL);
        }
        dealWithInvalidOrder(requestId, order);
    }

    /**
     * 处理取消订单
     *
     * @throws BusinessException
     */
    @Transactional(rollbackFor = { Exception.class, BusinessException.class })
    public void dealWithInvalidOrder(String requestId, OrderInfoEntity order) throws BusinessException {

        String orderId = order.getOrderId();
        // 更新订单状态
        LOG.info(requestId, "取消订单,更改订单状态为订单失效", orderId);
        updateOrderCancel(orderId);
        if (SourceType.WZ.getCode().equals(order.getSource())) {
            return;
        }
        // 回滚库存
        GoodsStockLogEntity goodsStockLog = goodsStcokLogDao.loadByOrderId(orderId);
        if (null != goodsStockLog) {
            LOG.info(requestId, "取消订单,加库存操作start...", orderId);
            addGoodsStock(requestId, orderId);
            LOG.info(requestId, "取消订单,加库存操作end...", orderId);
            LOG.info(requestId, "取消订单,删除商品库存消耗记录", orderId);
            goodsStcokLogDao.deleteByOrderId(orderId);
            rebackLimitActivityNum(orderId);
        }
    }

    /**
     * 加库存
     *
     * @param orderId
     * @throws BusinessException
     */
    @Transactional(rollbackFor = {Exception.class,RuntimeException.class})
    public void addGoodsStock(String requestId, String orderId) throws BusinessException {
        Integer errorNum = errorNo;
        List<OrderDetailInfoEntity> orderDetailList = orderDetailInfoRepository.queryOrderDetailInfo(orderId);
        // 加库存
        for (OrderDetailInfoEntity orderDetail : orderDetailList) {
            try {
            	if(StringUtils.equals(orderDetail.getSource(), SourceType.WZ.getCode())){
            		continue;
            	}
                for (int i = 0; i < errorNum; i++) {
                    GoodsStockInfoEntity goodsStock = goodsStockDao.select(orderDetail.getGoodsStockId());
                    if (null == goodsStock) {
                        LOG.info(requestId, "加库存,根据商品库存id查询商品库存信息,数据为空", orderDetail.getGoodsStockId()
                                .toString());
                        throw new BusinessException("商品信息不存在,请联系客服!");
                    }
                    goodsStock.setStockAmt(goodsStock.getStockCurrAmt());
                    // 加库存
                    Long stockCurrAmt = goodsStock.getStockCurrAmt() + orderDetail.getGoodsNum();
                    goodsStock.setStockCurrAmt(stockCurrAmt);
                    if (stockCurrAmt > goodsStock.getStockTotalAmt()) {
                        LOGGER.error("当前库存不能大于总库存");
                        throw new BusinessException("当前库存不能大于总库存", BusinessErrorCode.GOODSSTOCK_UPDATE_ERROR);
                    }

                    Integer successFlag = goodsStockDao.updateCurrAmtAndTotalAmount(goodsStock);
                    if (successFlag == 0) {
                        if (errorNum <= 0) {
                            LOG.info(requestId, "加库存,修改库存尝试次数已达3次", orderDetail.getGoodsStockId().toString());
                            throw new BusinessException("网络异常稍后再试");
                        }
                        errorNum--;
                        continue;
                    } else if (successFlag > 1) {
                        LOG.info(requestId, "加库存,商品库存更新异常", orderDetail.getGoodsStockId().toString());
                        throw new BusinessException(goodsStock.getGoodsName() + "商品库存更新异常请联系客服!");
                    } else if (successFlag == 1) {
                        break;
                    }
                }

            } catch (Exception e) {
                LOG.info(requestId, "加库存操作失败", orderId);
                LOGGER.error("加库存操作失败", e);
                continue;
            }
        }
        goodsStcokLogDao.deleteByOrderId(orderId);
        rebackLimitActivityNum(orderId);
    }
    
    
    @Transactional(rollbackFor = Exception.class)
    public void addGoodsStockInAfterSalesTask(String requestId,String orderId) throws BusinessException {
    	Integer errorNum = errorNo;
    	/** 
    	 * 根据订单的Id，查询该订单下的退货物品(除京东的商品)
    	 */
    	OrderInfoEntity order = orderInfoRepository.selectByOrderId(orderId);
    	if(StringUtils.equals(order.getSource(), SourceType.WZ.getCode())){
    		return;
    	}
    	List<RefundDetailInfoEntity> list = detailInfoRepository.getRefundDetailList(orderId);
    	for (RefundDetailInfoEntity detail : list) {
    	  try {
    		for (int i = 0; i < errorNum; i++) {
    			OrderDetailInfoEntity orderDetail = orderDetailInfoRepository.select(detail.getOrderDetailId());
        		GoodsStockInfoEntity goodsStock = goodsStockDao.select(orderDetail.getGoodsStockId());
        		if (null == goodsStock) {
                    LOG.info(requestId, "加库存,根据商品库存id查询商品库存信息,数据为空", orderDetail.getGoodsStockId()
                            .toString());
                    throw new BusinessException("商品信息不存在,请联系客服!");
                }
                goodsStock.setStockAmt(goodsStock.getStockCurrAmt());
                // 加库存
                Long stockCurrAmt = goodsStock.getStockCurrAmt() + orderDetail.getGoodsNum();
                goodsStock.setStockCurrAmt(stockCurrAmt);
                if (stockCurrAmt > goodsStock.getStockTotalAmt()) {
                    LOGGER.error("当前库存不能大于总库存");
                    throw new BusinessException("当前库存不能大于总库存", BusinessErrorCode.GOODSSTOCK_UPDATE_ERROR);
                }

                Integer successFlag = goodsStockDao.updateCurrAmtAndTotalAmount(goodsStock);
                if (successFlag == 0) {
                    if (errorNum <= 0) {
                        LOG.info(requestId, "加库存,修改库存尝试次数已达3次", orderDetail.getGoodsStockId().toString());
                        throw new BusinessException("网络异常稍后再试");
                    }
                    errorNum--;
                    continue;
                } else if (successFlag > 1) {
                    LOG.info(requestId, "加库存,商品库存更新异常", orderDetail.getGoodsStockId().toString());
                    throw new BusinessException(goodsStock.getGoodsName() + "商品库存更新异常请联系客服!");
                } else if (successFlag == 1) {
                    break;
                }
    		}
    	  } catch (Exception e) {
              LOG.info(requestId, "加库存操作失败", orderId);
              LOGGER.error("加库存操作失败", e);
              continue;
          }
		}
    	goodsStcokLogDao.deleteByOrderId(orderId);
    	rebackLimitActivityNum(orderId);
    }

    /**
     * 延迟收货
     *
     * @param userId
     * @param orderId
     * @throws BusinessException
     */
    @Transactional
    public void deleyReceiveGoods(String requestId, Long userId, String orderId) throws BusinessException {

        OrderInfoEntity orderInfo = orderInfoRepository.selectByOrderIdAndUserId(orderId, userId);
        if (null == orderInfo) {
            LOG.info(requestId, "查询订单信息,数据为空", orderId);
            throw new BusinessException("对不起!订单信息为空", BusinessErrorCode.ORDER_NOT_EXIST);
        }
        if (!OrderStatus.ORDER_SEND.getCode().equals(orderInfo.getStatus())) {
            LOG.info(requestId, "校验订单状态,当前订单状态不能延迟收货", orderId);
            throw new BusinessException("当前订单状态不能延迟收货", BusinessErrorCode.ORDER_DELEY_RECEIVE_ERROR);
        }
        if (orderInfo.getExtendAcceptGoodsNum() >= 1) {
            LOG.info(requestId, "每笔订单只能一次延长收货", orderId);
            throw new BusinessException("每笔订单只能延长一次", BusinessErrorCode.ORDER_DELEY_RECEIVE_ERROR);
        }

        if (null != orderInfo.getLastAcceptGoodsDate()) {
            Date lastAcceptDate = DateFormatUtil.addDays(orderInfo.getLastAcceptGoodsDate(), 3);
            orderInfo.setLastAcceptGoodsDate(lastAcceptDate);
        }
        orderInfo.setExtendAcceptGoodsNum(1);
        orderInfoRepository.update(orderInfo);
    }

    /**
     * 确认收货
     *
     * @param userId
     * @param orderId
     * @throws BusinessException
     */
    @Transactional
    public void confirmReceiveGoods(String requestId, Long userId, String orderId) throws BusinessException {
        OrderInfoEntity orderInfo = orderInfoRepository.selectByOrderIdAndUserId(orderId, userId);
        if (null == orderInfo) {
            LOG.info(requestId, "查询订单信息,数据为空", orderId);
            throw new BusinessException("对不起!订单信息为空", BusinessErrorCode.ORDER_NOT_EXIST);
        }
        if (!OrderStatus.ORDER_SEND.getCode().equals(orderInfo.getStatus())) {
            LOG.info(requestId, "当前订单状态不能确认收货", orderId);
            throw new BusinessException("当前订单状态不能确认收货", BusinessErrorCode.ORDER_CONFIRM_ERROR);
        }
        // 判断如果订单的是否发货状态不为Y(发货)，则置为Y
//        if (!StringUtils.equals(PreDeliveryType.PRE_DELIVERY_Y.getCode(), orderInfo.getPreDelivery())) {
//            orderInfo.setPreDelivery(PreDeliveryType.PRE_DELIVERY_Y.getCode());
//        }
        orderInfo.setAcceptGoodsDate(new Date());
        orderInfo.setAcceptGoodsType(AcceptGoodsType.USERCONFIRM.getCode());
        orderInfo.setStatus(OrderStatus.ORDER_COMPLETED.getCode());
        orderInfoRepository.update(orderInfo);
    };

    /**
     * 删除订单
     *
     * @param userId
     * @param orderId
     * @throws BusinessException
     */
    @Transactional(rollbackFor = Exception.class)
    public void deleteOrderInfo(String requestId, Long userId, String orderId) throws BusinessException {
        OrderInfoEntity orderInfo = orderInfoRepository.selectByOrderIdAndUserId(orderId, userId);
        if (null == orderInfo) {
            LOG.info(requestId, "查询订单信息,数据为空", orderId);
            throw new BusinessException("对不起!订单信息为空", BusinessErrorCode.ORDER_NOT_EXIST);
        }
        if (!OrderStatus.ORDER_CANCEL.getCode().equals(orderInfo.getStatus())
                && !OrderStatus.ORDER_COMPLETED.getCode().equals(orderInfo.getStatus())) {
            LOG.info(requestId, "当前订单状态不能删除订单", orderId);
            throw new BusinessException("当前订单状态不能删除订单", BusinessErrorCode.ORDER_DELETE_ERROR);
        }
        /**
         * 前端用户操作删除订单时，由原来的改变订单状态（订单删除）改为保持原订单状态。(sprint8)
         */
        orderInfoRepository.updateIsDeleteByOrderId(orderInfo.getOrderId());
    }

    /**
     * 根据 userId、订单状态(可选) 查询订单信息
     *
     * @param userId 用户id
     * @return
     * @throws BusinessException
     */
    public List<OrderDetailInfoDto> getOrderDetailInfo(String requestId, String userId, String orderStatus)
            throws BusinessException {

        Long userIdVal = Long.valueOf(userId);
        OrderInfoEntity orderInfo = new OrderInfoEntity();
        orderInfo.setUserId(userIdVal);
        //前端用户操作删除订单时，由原来的改变订单状态（订单删除）改为保持原订单状态。(sprint8)
        orderInfo.setIsDelete("00");
        if (StringUtils.isNotBlank(orderStatus)) {
        	if(StringUtils.equals(orderStatus, OrderStatus.ORDER_NOPAY.getCode()) || 
        			StringUtils.equals(orderStatus, OrderStatus.ORDER_PAYED.getCode()) ){
        		orderInfo.setParentOrderId("0");
        	}
            orderInfo.setStatus(orderStatus);
        }

        List<OrderDetailInfoDto> returnOrders = new ArrayList<OrderDetailInfoDto>();
        // 查询客户的所有订单
        List<OrderInfoEntity> orderList = orderInfoRepository.filter(orderInfo);

        if (CollectionUtils.isEmpty(orderList)) {
            return returnOrders;
        }

        for (OrderInfoEntity order : orderList) {
            OrderDetailInfoDto orderDetailInfoDto = getOrderDetailInfoDto(requestId, order);

            returnOrders.add(orderDetailInfoDto);

            try {
                if (OrderStatus.ORDER_NOPAY.getCode().equals(order.getStatus())) {
                    GoodsStockLogEntity sotckLog = goodsStcokLogDao.loadByOrderId(order.getOrderId());
                    if (null != sotckLog) {
                    	LOG.info(requestId, "库存记录日志", sotckLog.getOrderId());
                        // 存在回滚
                        addGoodsStock(requestId, order.getOrderId());
                        goodsStcokLogDao.deleteByOrderId(sotckLog.getOrderId());
                        rebackLimitActivityNum(sotckLog.getOrderId());
                    }
                }

            } catch (Exception e) {
                LOGGER.error("订单查询未支付订单商品库存回滚异常", e);
                LOG.info(requestId, "订单查询未支付订单商品库存回滚异常:orderId:" + order.getOrderId(), "");
            }
        }
        return returnOrders;
    }

    /**
     * 根据订单的Id和状态查询，订单的详情
     * 
     * @param requestId
     * @param orderId
     * @param orderStatus
     * @return
     * @throws BusinessException
     */
    public List<OrderDetailInfoDto> getOrderDetailInfoByOrderId(String requestId, String orderId,
            String orderStatus) throws BusinessException {

        OrderInfoEntity orderInfo = new OrderInfoEntity();
        orderInfo.setOrderId(orderId);
        if (StringUtils.isNotBlank(orderStatus)) {
            orderInfo.setStatus(orderStatus);
        }

        List<OrderDetailInfoDto> returnOrders = new ArrayList<OrderDetailInfoDto>();
        // 查询客户的所有订单
        List<OrderInfoEntity> orderList = orderInfoRepository.filter(orderInfo);

        if (null == orderList || orderList.isEmpty()) {
            return Collections.emptyList();
        }

        for (OrderInfoEntity order : orderList) {
            OrderDetailInfoDto orderDetailInfoDto = getOrderDetailInfoDto(requestId, order);

            returnOrders.add(orderDetailInfoDto);

            try {
                if (OrderStatus.ORDER_NOPAY.getCode().equals(order.getStatus())) {
                    PayRequestDto req = new PayRequestDto();
                    req.setOrderId(order.getOrderId());
                    String payRealStatus = "";
                    Response response = paymentHttpClient.gateWayTransStatusQuery(requestId, req);
                    if (!response.statusResult()) {
                        payRealStatus = "1";
                    } else {
                        payRealStatus = (String) response.getData();
                    }
                    // 0:支付成功 非零:支付失败
                    if (!YesNo.NO.getCode().equals(payRealStatus)) {
                        GoodsStockLogEntity sotckLog = goodsStcokLogDao.loadByOrderId(order.getOrderId());
                        if (null == sotckLog) {
                            continue;
                        }
                        LOG.info(requestId, "库存记录日志", sotckLog.getOrderId());
                        // 存在回滚
                        addGoodsStock(requestId, order.getOrderId());
                        goodsStcokLogDao.deleteByOrderId(order.getOrderId());
                        rebackLimitActivityNum(orderId);
                    }
                }

            } catch (Exception e) {
                LOGGER.error("订单查询未支付订单商品库存回滚异常", e);
                LOG.info(requestId, "订单查询未支付订单商品库存回滚异常:orderId:" + order.getOrderId(), "");
            }
        }
        return returnOrders;
    }

    public OrderDetailInfoDto getOrderDetailInfoDto(String requestId, String orderId)
            throws BusinessException {

        if (StringUtils.isBlank(orderId)) {
            throw new BusinessException("订单Id不能为空!", BusinessErrorCode.PARAM_IS_EMPTY);
        }

        OrderInfoEntity entity = orderInfoRepository.selectByOrderId(orderId);

        OrderDetailInfoDto dto = getOrderDetailInfoDto(requestId, entity);
        List<GoodsInfoInOrderDto> goodsInfoInOrderDtoList = dto.getOrderDetailInfoList();
        for (GoodsInfoInOrderDto goodsInfoInOrderDto : goodsInfoInOrderDtoList) {
            if (StringUtils.isEmpty(goodsInfoInOrderDto.getSource())){
                goodsInfoInOrderDto.setGoodsLogoUrlNew(imageService.getImageUrl(EncodeUtils
                        .base64Decode(goodsInfoInOrderDto.getGoodsLogoUrl())));
            }else{
                goodsInfoInOrderDto.setGoodsLogoUrlNew("http://img13.360buyimg.com/n1/"+EncodeUtils
                        .base64Decode(goodsInfoInOrderDto.getGoodsLogoUrl()));
            }

        }
        return dto;
    }

    private OrderDetailInfoDto getOrderDetailInfoDto(String requestId, OrderInfoEntity order)
            throws BusinessException {
        // 通过子订单号查询订单详情
        OrderDetailInfoEntity orderDetailParam = new OrderDetailInfoEntity();
        orderDetailParam.setOrderId(order.getOrderId());
        List<OrderDetailInfoEntity> orderDetailInfoList = orderDetailInfoRepository.filter(orderDetailParam);

        List<GoodsInfoInOrderDto> goodsListInEachOrder = new ArrayList<GoodsInfoInOrderDto>();
        // 每笔订单商品数目
        int goodsSum = 0;
        BigDecimal disCount = BigDecimal.ZERO;
        BigDecimal couponCount = BigDecimal.ZERO;
        for (OrderDetailInfoEntity orderDetailInfo : orderDetailInfoList) {
            goodsSum += orderDetailInfo.getGoodsNum();
            //优惠总金额=活动优惠金额+优惠券金额
            disCount = disCount.add(orderDetailInfo.getDiscountAmount());
            couponCount = couponCount.add(orderDetailInfo.getCouponMoney());
            GoodsInfoInOrderDto goodsInfo = new GoodsInfoInOrderDto();
            goodsInfo.setOrderDetailDisCountAmt(orderDetailInfo.getDiscountAmount());//每个订单详情的活动优惠金额
            goodsInfo.setOrderDetailCouponDisCountAmt(orderDetailInfo.getCouponMoney());//每个订单详情的优惠券优惠金额
            goodsInfo.setGoodsId(orderDetailInfo.getGoodsId());
            goodsInfo.setGoodsStockId(orderDetailInfo.getGoodsStockId());
            goodsInfo.setBuyNum(orderDetailInfo.getGoodsNum());
            GoodsStockInfoEntity goodsStock = goodsStockDao.select(orderDetailInfo.getGoodsStockId());
            GoodsInfoEntity goods = goodsDao.select(orderDetailInfo.getGoodsId());
            if (null != goodsStock) {
        		goodsInfo.setGoodsLogoUrl(goodsStock.getStockLogo());
                goodsInfo.setGoodsSkuAttr(goodsStock.getGoodsSkuAttr());
            }else{
                if (null != goods) {
                    goodsInfo.setGoodsLogoUrl(goods.getGoodsLogoUrl());
                }
            }
            //如果是京东的商品
            if(null != goods && StringUtils.isNotBlank(goods.getSource())){
            	goodsInfo.setGoodsSkuAttr(goods.getAttrDesc());
            	goodsInfo.setSource(goods.getSource());
            }
            goodsInfo.setGoodsName(orderDetailInfo.getGoodsName());
            goodsInfo.setGoodsPrice(orderDetailInfo.getGoodsPrice());
            //单个商品的优惠价格
            BigDecimal goodsPriceDisCount = BigDecimal.ZERO;
    		BigDecimal price = BigDecimal.ZERO;
    		BigDecimal price2 = BigDecimal.ZERO;
            BigDecimal goodsNumber=new BigDecimal(orderDetailInfo.getGoodsNum());
            //每件商品的活动优惠金额（sprint 10）
            if(null !=orderDetailInfo.getDiscountAmount() && orderDetailInfo.getDiscountAmount().compareTo(goodsPriceDisCount)>0){
            	price=orderDetailInfo.getDiscountAmount().divide(goodsNumber,2, BigDecimal.ROUND_HALF_UP);
                goodsInfo.setDisCountAmt(price);//每件商品的活动优惠金额（sprint 10）
            }
            //每件商品的优惠券优惠金额（sprint 11）
            if(null !=orderDetailInfo.getCouponMoney() && orderDetailInfo.getCouponMoney().compareTo(goodsPriceDisCount)>0){
            	price2=orderDetailInfo.getCouponMoney().divide(goodsNumber,2, BigDecimal.ROUND_HALF_UP);
                goodsInfo.setCouponAmt(price2);
            }
            goodsInfo.setGoodsTitle(orderDetailInfo.getGoodsTitle());
            if (null != goods) {
                goodsInfo.setUnSupportProvince(goods.getUnSupportProvince());
            }
            goodsListInEachOrder.add(goodsInfo);
        }
        OrderDetailInfoDto orderDetailInfoDto = new OrderDetailInfoDto();
        orderDetailInfoDto.setOrderId(order.getOrderId());
        orderDetailInfoDto.setOrderAmt(order.getOrderAmt());
        orderDetailInfoDto.setGoodsNumSum(goodsSum);
        orderDetailInfoDto.setStatus(order.getStatus());
        orderDetailInfoDto.setOrderDetailInfoList(goodsListInEachOrder);

        // 待付款订单计算剩余付款时间
        if (order.getStatus().equals(OrderStatus.ORDER_NOPAY.getCode())) {
            if (DateFormatUtil.isExpired(order.getCreateDate(), 1)) {
                dealWithInvalidOrder(requestId, order);
                orderDetailInfoDto.setStatus(OrderStatus.ORDER_CANCEL.getCode());
            } else {
                orderDetailInfoDto.setRemainingTime(DateFormatUtil.getDateDiff(
                        DateFormatUtil.addDays(order.getCreateDate(), 1), new Date()));
            }

        }

        orderDetailInfoDto.setOrderCreateDate(order.getCreateDate());
        orderDetailInfoDto.setOrderCreateDateStr(DateFormatUtil.dateToString(order.getCreateDate(), "yyyy-MM-dd HH:mm"));
        orderDetailInfoDto.setProvince(order.getProvince());
        orderDetailInfoDto.setCity(order.getCity());
        orderDetailInfoDto.setDistrict(order.getDistrict());
        orderDetailInfoDto.setAddress(order.getAddress());
        orderDetailInfoDto.setName(order.getName());
        orderDetailInfoDto.setTelephone(order.getTelephone());
        orderDetailInfoDto.setAddressId(order.getAddressId());
        // if (StringUtils.isNotEmpty(orderStatus) &&
        // OrderStatus.ORDER_SEND.getCode().equals(orderStatus)) {
        orderDetailInfoDto.setDelayAcceptGoodFlag(order.getExtendAcceptGoodsNum() + "");
        // }
        // 账单分期后改为删除按钮
        boolean billOverDueFlag = billService.queryStatement(order.getUserId(), order.getOrderId());
        if (billOverDueFlag) {
            LOGGER.info("userId={},账单分期已逾期", order.getUserId());
            orderDetailInfoDto.setRefundAllowedFlag("0");
        } else {
            try {
                orderDetailInfoDto.setRefundAllowedFlag("1");
                // 交易完成的订单是否允许售后操作校验
                afterSaleService.orderRufundValidate(requestId, order.getUserId(), order.getOrderId(), order);
            } catch (Exception e) {
                LOGGER.error(e.getMessage(), e);
                // 这个捕获只是为了过滤掉 订单售后校验 抛出的 异常
                orderDetailInfoDto.setRefundAllowedFlag("0");
            }
        }
        orderDetailInfoDto.setPreDelivery(order.getPreDelivery());
        orderDetailInfoDto.setUserId(order.getUserId());
        orderDetailInfoDto.setMainOrderId(order.getMainOrderId());
        orderDetailInfoDto.setSource(order.getSource());
        orderDetailInfoDto.setPayType(PaymentType.getMessage(order.getPayType()));//支付方式
        orderDetailInfoDto.setDisCountAmt(disCount);//优惠金额
        orderDetailInfoDto.setCouponAmt(couponCount);//优惠券金额
        orderDetailInfoDto.setTotalDisCount(disCount.add(couponCount));//优惠金额 + 优惠券金额
        orderDetailInfoDto.setTotalAmt(disCount.add(order.getOrderAmt()).add(couponCount));//总金额
        
        return orderDetailInfoDto;
    }

    /**
     * 获取用户 待付款、待发货、待收货 订单数量
     *我的金库：可提现金额
     * @param userId
     * @return
     */
    public Map<String, String> getOrderNum(String userId) {
        Long userIdVal = Long.valueOf(userId);
        Map<String, String> map = new HashMap<String, String>();
        /**
         * D00(待付款)、D02(待发货)、D03(待收货)
         */
        Integer d_00 = orderInfoRepository.getOrderNum(userIdVal,OrderStatus.ORDER_NOPAY.getCode());
        Integer d_02 = orderInfoRepository.getOrderNum(userIdVal,OrderStatus.ORDER_PAYED.getCode());
        Integer d_03 = orderInfoRepository.getOrderNum(userIdVal,OrderStatus.ORDER_SEND.getCode());

        map.put("D00",d_00.toString());
        map.put("D02",d_02.toString());
        map.put("D03",d_03.toString());

        //查询全部可提金额金额,已经提现金额
        List<AwardDetail> awardDetails = awardDetailMapper.queryAwardDetail(Long.valueOf(userId));
        BigDecimal totalCount = BigDecimal.ZERO;//最大 可提现
        if(awardDetails != null && awardDetails.size()>0){
            totalCount = withdrawService.getTotalCount(awardDetails);
        }
        /**
         * sprint11 可用优惠券的张数
         */
        List<ProMyCouponVo> unUsedList = myCouponManagerService.getCouponsUnused(userId);
        map.put("totalCount",totalCount.toString());
        map.put("couponCount",unUsedList.size()+"");
        return map;
    }

    /**
     * 查询订单收货地址
     *
     * @param resultMap
     * @param orderId
     * @throws Exception
     */
    public void loadInfoByOrderId(String requestId, Map<String, Object> resultMap, String orderId)
            throws Exception {
        OrderInfoEntity orderInfo = orderInfoRepository.selectByOrderIdAndUserId(orderId, null);
        if (null == orderInfo) {
            LOG.info(requestId, "查询订单信息,数据为空", orderId);
            throw new BusinessException("该订单信息不存在!", BusinessErrorCode.ORDER_NOT_EXIST);
        }
        resultMap.put("orderInfo", orderInfo);
        if (orderInfo.getStatus().equals(OrderStatus.ORDER_COMPLETED.getCode())) {
            List<Trace> traces = logisticsService.getSignleTrackingsByOrderId(orderId);
            LOG.info(requestId, "获取物流轨迹", traces.toString());
            if (null != traces && traces.size() > 0) {
                Trace trace = traces.get(0);
                resultMap.put("trace", trace);
            }
        }
    }

    /**
     * 修改订单收货地址
     *
     * @param addressId
     * @param orderId
     * @param userId
     * @throws BusinessException
     */
    @Transactional(rollbackFor = Exception.class)
    public void modifyShippingAddress(String requestId, Long addressId, String orderId, Long userId)
            throws BusinessException {
        OrderInfoEntity orderInfo = orderInfoRepository.selectByOrderIdAndUserId(orderId, userId);
        if (null == orderInfo) {
            LOG.info(requestId, "查询订单信息,数据为空", orderId);
            throw new BusinessException("该订单信息不存在!", BusinessErrorCode.ORDER_NOT_EXIST);
        }
        if (!OrderStatus.ORDER_NOPAY.getCode().equals(orderInfo.getStatus())) {
            LOG.info(requestId, "当前状态不能修改订单地址", orderId);
            throw new BusinessException("当前状态不能修改订单地址", BusinessErrorCode.ADDRESS_UPDATE_FAILED);
        }
        AddressInfoEntity address = addressInfoDao.select(addressId);
        if (null == address) {
            LOG.info(requestId, "查询地址信息,数据为空", addressId.toString());
            throw new BusinessException("当前地址信息不存在", BusinessErrorCode.ADDRESS_NOT_EXIST);
        }
        orderInfo.setProvince(address.getProvince());
        orderInfo.setCity(address.getCity());
        orderInfo.setAddress(address.getAddress());
        orderInfo.setDistrict(address.getDistrict());
        orderInfo.setName(address.getName());
        orderInfo.setTelephone(address.getTelephone());
        orderInfo.setAddressId(address.getId());
        orderInfoRepository.update(orderInfo);
    }

    /**
     * 重新下单[初始化]
     *
     * @param userId
     * @param orderId
     * @throws BusinessException
     */
    public void repeatConfirmOrder(String requestId, Long userId, String orderId,
            Map<String, Object> resultMap) throws BusinessException {
        OrderInfoEntity orderInfo = orderInfoRepository.selectByOrderIdAndUserId(orderId, userId);
        if (null == orderInfo) {
            LOG.info(requestId, "查询订单信息,数据为空", orderId);
            throw new BusinessException("该订单不存在!", BusinessErrorCode.ORDER_NOT_EXIST);
        }
        BigDecimal totalAmount = BigDecimal.ZERO;
        List<GoodsInfoInCartEntity> goodsList = new ArrayList<GoodsInfoInCartEntity>();
        List<OrderDetailInfoEntity> orderDetails = orderDetailInfoRepository.queryOrderDetailInfo(orderId);
        // 商品列表信息 [商品名称+商品规格+商品价格+商品购买数量]
        for (OrderDetailInfoEntity orderDetail : orderDetails) {
            // 判断下架
            this.validateGoodsOffShelf(requestId, orderDetail.getGoodsId());
            // 订单信息
            GoodsStockInfoEntity goodsStock = goodsStockDao.select(orderDetail.getGoodsStockId());
            GoodsInfoEntity goods = goodsDao.select(orderDetail.getGoodsId());
            // 判断库存
            if (goodsStock.getStockCurrAmt() <= 0 && StringUtils.isBlank(goods.getSource()) ) {
                throw new BusinessException(orderDetail.getGoodsName() + "商品库存不足!");
            }
            GoodsInfoInCartEntity goodInfo = new GoodsInfoInCartEntity();
            goodInfo.setGoodsId(goodsStock.getGoodsId());
            goodInfo.setGoodsStockId(goodsStock.getGoodsStockId());
            goodInfo.setGoodsName(orderDetail.getGoodsName());
            goodInfo.setGoodsLogoUrl(goodsStock.getStockLogo());
            goodInfo.setMerchantCode(goods.getMerchantCode());
            /**
             * 京东不需要验证数量
             */
            if(StringUtils.isBlank(goods.getSource()) && 
            		(orderDetail.getGoodsNum() > goodsStock.getStockCurrAmt())){
            	goodInfo.setGoodsNum(goodsStock.getStockCurrAmt().intValue());
            }else{
            	goodInfo.setGoodsNum(orderDetail.getGoodsNum().intValue());
            }
            
            BigDecimal goodsPrice = commonService.calculateGoodsPrice(goodsStock.getGoodsId(),
                    goodsStock.getGoodsStockId());

            goodInfo.setGoodsSelectedPrice(goodsPrice);
            goodInfo.setGoodsSkuAttr(goodsStock.getGoodsSkuAttr());
            goodInfo.setMerchantCode(orderInfo.getMerchantCode());
            // 商品新地址
            goodInfo.setGoodsLogoUrlNew(imageService.getImageUrl(EncodeUtils.base64Decode(goodInfo
                    .getGoodsLogoUrl())));
            if (null != goods) {
                goodInfo.setUnSupportProvince(goods.getUnSupportProvince());
            }
            if (StringUtils.equals(goods.getSource(), SourceType.WZ.getCode())) {
            	goodInfo.setGoodsLogoUrlNew("http://img13.360buyimg.com/n1/" + goods.getGoodsLogoUrl());
            	goodInfo.setGoodsSkuAttr(goods.getAttrDesc());
            }
            //设置活动Id
            goodInfo.setProActivityId(proGroupGoodsService.getActivityId(orderDetail.getGoodsId()));
            goodsList.add(goodInfo);
            //根据skuId查询该规格是否参加了限时购活动
            LimitGoodsSkuVo limitGS=limitCommonService.selectLimitByGoodsId(userId.toString(),orderDetail.getSkuId());
            if(null !=limitGS  && StringUtils.equals("InProgress", limitGS.getLimitFalg())){
                goodInfo.setLimitFalg(true);
                goodInfo.setGoodsLimitPrice(limitGS.getActivityPrice());
                goodInfo.setLimitNum(limitGS.getLimitNum());
                goodInfo.setLimitPersonNum(limitGS.getLimitPersonNum());
                goodInfo.setLimitBuyActId(limitGS.getLimitBuyActId());

                totalAmount = totalAmount.add(limitGS.getActivityPrice().multiply(BigDecimal.valueOf(goodInfo.getGoodsNum())));
            }else {
                // 订单总金额
                totalAmount = totalAmount.add(goodsPrice.multiply(BigDecimal.valueOf(goodInfo.getGoodsNum())));
            }

        }
        resultMap.put("goodsList", goodsList);
        // 商品总金额
        resultMap.put("totalAmount", totalAmount);
        // 订单收货地址
        AddressInfoEntity address = addressInfoDao.select(orderInfo.getAddressId());

        if (null == address) {
            AddressInfoEntity addressInfo = addressInfoDao.queryOneAddressByUserId(userId);
            resultMap.put("addressInfo", addressInfo);
        } else {
            resultMap.put("addressInfo", address);
        }


    }

    /**
     * 订单查询导出查询
     *
     * @param map
     * @param page
     * @return
     * @throws BusinessException
     */
    public Pagination<OrderSubInfoEntity> queryOrderSubDetailInfoByParamForExport(Map map, Page page)
            throws BusinessException {
        try {
            Pagination<OrderSubInfoEntity> orderDetailInfoListForExport = orderSubInfoRepository
                    .queryOrderSubDetailInfoByParamForExport(map, page);
            return orderDetailInfoListForExport;
        } catch (Exception e) {
            LOGGER.error(" 通过商户号查询订单详细信息失败===>", e);
            throw new BusinessException(" 通过商户号查询订单详细信息失败！", e);
        }
    }

    /**
     * 重新下单异常[库存为零或商品下架]添加至购物车
     *
     * @param orderId
     * @throws BusinessException
     */
    @Transactional(rollbackFor = { Exception.class, BusinessException.class })
    public void reOrder(String requestId, String orderId, Long userId) throws BusinessException {
        List<OrderDetailInfoEntity> orderDetails = orderDetailInfoRepository.queryOrderDetailInfo(orderId);
        Date now = new Date();
        for (OrderDetailInfoEntity orderDetail : orderDetails) {
            // step1:下架或库存为零商品不做处理
            // 下架商品不处理
            GoodsInfoEntity goodsInfo = goodsDao.select(orderDetail.getGoodsId());
            if (now.before(goodsInfo.getListTime()) || (null !=goodsInfo.getDelistTime() && now.after(goodsInfo.getDelistTime()))
                    || !GoodStatus.GOOD_UP.getCode().equals(goodsInfo.getStatus())) {
                continue;
            }
            // 该商品下所有库存为零默认为下架
            List<GoodsStockInfoEntity> goodsList = goodsStockDao.loadByGoodsId(orderDetail.getGoodsId());
            boolean offShelfFlag = true;
            for (GoodsStockInfoEntity goodsStock : goodsList) {
                if (goodsStock.getStockCurrAmt() > 0) {
                    offShelfFlag = false;
                    break;
                }
            }
            if (offShelfFlag) {
                continue;
            }
            // 库存为零不做处理
            GoodsStockInfoEntity goodsStock = goodsStockDao.select(orderDetail.getGoodsStockId());
            if (goodsStock.getStockCurrAmt() <= 0) {
                continue;
            }

            // setp2:添加至购物车[插入或更新数量]
            // 商品价格
            BigDecimal selectPrice = commonService.calculateGoodsPrice(orderDetail.getGoodsId(),
                    orderDetail.getGoodsStockId());
            // 加入购物车中数量
            int buyNum = 0;
            if (goodsStock.getStockCurrAmt() >= orderDetail.getGoodsNum()) {
                buyNum = orderDetail.getGoodsNum().intValue();
            } else {
                buyNum = goodsStock.getStockCurrAmt().intValue();
            }
            // 获取用户购物车中商品信息
            CartInfoEntity cartDto = new CartInfoEntity();
            cartDto.setUserId(userId);
            List<CartInfoEntity> cartInfoList = cartInfoRepository.filter(cartDto);
            // 标记购物车中是否已存在该商品
            boolean goodsFlag = false;

            // 购物车已存在该商品，则增加数量
            if (null != cartInfoList && !cartInfoList.isEmpty()) {
                for (CartInfoEntity cartinfo : cartInfoList) {
                    if (cartinfo.getGoodsStockId().longValue() == orderDetail.getGoodsStockId().longValue()) {

                        int totalNum = cartinfo.getGoodsNum() + buyNum;
                        goodsFlag = true;
                        CartInfoEntity saveToCart = new CartInfoEntity();
                        saveToCart.setId(cartinfo.getId());
                        saveToCart.setGoodsSelectedPrice(selectPrice);
                        saveToCart.setGoodsNum(totalNum);
                        saveToCart.setIsSelect("1");

                        Integer updateFlag = cartInfoRepository.update(saveToCart);
                        if (updateFlag != 1) {
                            LOG.info(requestId, "添加商品到购物车,更新商品数量失败", "");
                            throw new BusinessException("添加商品到购物车失败", BusinessErrorCode.GOODS_ADDTOCART_ERROR);
                        }
                        break;
                    }
                }
            }
            // 购物车不存该商品，则插入该商品信息
            if (!goodsFlag) {
                int numOfType = null == cartInfoList ? 0 : cartInfoList.size();
                if (numOfType >= 99) {
                    LOG.info(requestId, "购物车商品种类数已满", String.valueOf(numOfType));
                    throw new BusinessException("您的购物车已满，快去结算吧!", BusinessErrorCode.CART_FULL);
                }
                CartInfoEntity saveToCart = new CartInfoEntity();
                saveToCart.setUserId(userId);
                saveToCart.setGoodsStockId(orderDetail.getGoodsStockId());
                saveToCart.setGoodsSelectedPrice(selectPrice);
                saveToCart.setGoodsNum(buyNum);
                saveToCart.setIsSelect("1");
                cartInfoRepository.insert(saveToCart);
                if (null == saveToCart.getId()) {
                    LOG.info(requestId, "添加商品到购物车,插入商品数据失败", "");
                    throw new BusinessException("添加商品到购物车失败", BusinessErrorCode.GOODS_ADDTOCART_ERROR);
                }
            }
        }
    }

    /**
     * 修改待付款订单收货地址
     *
     * @param orderId
     * @param userId
     * @param addressInfoDto
     * @throws BusinessException
     */
    @Transactional(rollbackFor = Exception.class)
    public void modifyOrderAddress(String requestId, String orderId, String userId,
            AddressInfoEntity addressInfoDto) throws BusinessException {

        OrderInfoEntity orderInfo = orderInfoRepository.selectByOrderIdAndUserId(orderId,
                addressInfoDto.getUserId());
        if (null == orderInfo) {
            LOG.info(requestId, "查询订单信息,数据为空", "");
            throw new BusinessException("该订单信息不存在!", BusinessErrorCode.ORDER_NOT_EXIST);
        }
        if (!OrderStatus.ORDER_NOPAY.getCode().equals(orderInfo.getStatus())) {
            LOG.info(requestId, "当前订单状态不能修改地址", "");
            throw new BusinessException("当前订单状态不能修改地址", BusinessErrorCode.ADDRESS_UPDATE_FAILED);
        }

        // 待付款订单不能修改省、市、区地址
        if (!orderInfo.getProvince().equals(addressInfoDto.getProvince())
                || !orderInfo.getCity().equals(addressInfoDto.getCity())
                || !orderInfo.getDistrict().equals(addressInfoDto.getDistrict())) {
            LOG.info(requestId, "待付款订单不能修改省、市、区地址", "");
            throw new BusinessException("待付款订单不能修改省、市、区地址", BusinessErrorCode.ADDRESS_UPDATE_FAILED);
        }
        Long addressId = orderInfo.getAddressId();
        AddressInfoEntity addressInfoEntity = addressService.queryOneAddressByAddressId(orderInfo
                .getAddressId());
        if (addressInfoEntity == null) {
            addressId = addressService.addAddressInfo(addressInfoDto);
        } else {
            addressInfoEntity.setUserId(addressInfoDto.getUserId());
            addressInfoEntity.setTelephone(addressInfoDto.getTelephone());
            addressInfoEntity.setAddressId(addressId);
            addressInfoEntity.setAddress(addressInfoDto.getAddress());
            addressInfoEntity.setCity(addressInfoDto.getCity());
            addressInfoEntity.setProvince(addressInfoDto.getProvince());
            addressInfoEntity.setDistrict(addressInfoDto.getDistrict());
            addressInfoEntity.setName(addressInfoDto.getName());
            addressService.updateAddressInfo(addressInfoEntity);
        }

        OrderInfoEntity orderInfoDto = new OrderInfoEntity();
        orderInfoDto.setId(orderInfo.getId());
        orderInfoDto.setAddress(addressInfoDto.getAddress());
        orderInfoDto.setName(addressInfoDto.getName());
        orderInfoDto.setTelephone(addressInfoDto.getTelephone());
        orderInfoDto.setCity(addressInfoDto.getCity());
        orderInfoDto.setProvince(addressInfoDto.getProvince());
        orderInfoDto.setDistrict(addressInfoDto.getDistrict());
        orderInfoDto.setAddressId(addressId);
        orderInfoRepository.update(orderInfoDto);

    }

    /**
     * 根据订单列表获取订单详情列表
     *
     * @param orderList
     * @return
     * @throws BusinessException
     */
    public List<OrderDetailInfoEntity> loadOrderDetail(List<OrderInfoEntity> orderList)
            throws BusinessException {
        List<OrderDetailInfoEntity> resultDetailList = Lists.newArrayList();
        for (OrderInfoEntity order : orderList) {
            List<OrderDetailInfoEntity> orderDetailList = orderDetailInfoRepository
                    .queryOrderDetailInfo(order.getOrderId() + "");
            for (OrderDetailInfoEntity orderDetail : orderDetailList) {
                resultDetailList.add(orderDetail);
            }
        }
        return resultDetailList;
    }

    /**
     * 根据订单号和用户id查询订单信息
     *
     * @param orderId
     * @return
     * @throws BusinessException
     */
    public OrderInfoEntity selectByOrderId(String orderId) throws BusinessException {
        OrderInfoEntity OorderInfoEntity = orderInfoRepository.selectByOrderId(orderId);
        return OorderInfoEntity;
    }

    /**
     * 待付款页付款库存不足或商品下架时 删除订单加入购物车
     *
     * @param orderId
     * @param userId
     * @throws BusinessException
     */
    @Transactional(rollbackFor = { Exception.class, BusinessException.class })
    public void payAfterFail(String orderId, Long userId) throws BusinessException {
        OrderInfoEntity order = orderInfoRepository.selectByOrderIdAndUserId(orderId, userId);
        if (null == order) {
            throw new BusinessException("对不起!该订单不存在!", BusinessErrorCode.ORDER_NOT_EXIST);
        }
        if (!OrderStatus.ORDER_NOPAY.getCode().equals(order.getStatus())) {
            throw new BusinessException("对不起,当前订单状态不合法", BusinessErrorCode.ORDER_STATUS_INVALID);
        }
        // 校验是否有库存不足或商品下架
        List<OrderDetailInfoEntity> orderDetails = orderDetailInfoRepository.queryOrderDetailInfo(orderId);
        if (null == orderDetails || orderDetails.size() == 0) {
            throw new BusinessException("该订单信息异常", BusinessErrorCode.ORDER_DETAIL_ERROR);
        }

        reOrder("", orderId, userId);
        // 订单失效
        updateOrderCancel(orderId);
    }

    /**
     * 最新订单查询
     *
     * @param userId
     * @return
     */
    public String latestSuccessOrderTime(Long userId) {
        OrderInfoEntity orderInfoEntity = orderInfoRepository.queryLatestSuccessOrderInfo(userId);
        return orderInfoEntity == null ? "" : DateFormatUtil.datetime2String(orderInfoEntity.getCreateDate());
    }

    /**
     * 根据用户的Id,查询出最新的时间
     * 
     * @param userId
     * @return
     */
    public String latestSuccessTime(Long userId) {
        Date orderCreateDate = null;
        Date repayCreateDate = null;

        OrderInfoEntity orderInfo = orderInfoRepository.queryLatestSuccessOrderInfo(userId);
        if (null != orderInfo) {
            orderCreateDate = orderInfo.getCreateDate();
        }

        RepayFlow flow = flowMapper.queryLatestSuccessOrderInfo(userId);
        if (null != flow) {
            repayCreateDate = flow.getCreateDate();
        }

        return DateFormatUtil.datetime2String(getMaxDate(orderCreateDate, repayCreateDate));
    }

    /**
     * 获取两个时间的大小
     * 
     * @param date1
     * @param date2
     * @return
     */
    public Date getMaxDate(Date date1, Date date2) {

        if (null != date1 && null == date2) {
            return date1;
        }

        if (null == date1 && null != date2) {
            return date2;
        }

        if (null != date1 && null != date2) {

            if (date1.before(date2)) {
                return date2;
            } else {
                return date1;
            }
        }

        return null;
    }

    public List<OrderInfoEntity> selectByMainOrderId(String mainOrderId) throws BusinessException {
        List<OrderInfoEntity> list = orderInfoRepository.selectByMainOrderId(mainOrderId);
        return list;
    }

    /**
     * 查询待发货订单的信息，切订单的预发货状态为null
     */
    public List<OrderInfoEntity> toBeDeliver() {
        return orderInfoRepository.toBeDeliver();
    }

    /**
     * 更新订单的状态为D03待收货，更新predelivery为Y
     * 
     * @param entity
     */
    @Transactional(rollbackFor = Exception.class)
    public void updateOrderStatusAndPreDelivery(OrderInfoEntity entity) {
        orderInfoRepository.updateOrderStatusAndPreDelivery(entity);
    }

    @Transactional(rollbackFor = Exception.class)
    public void updateOrderStatus(OrderInfoEntity entity) {
        orderInfoRepository.updateOrderStatus(entity);
    }

    /**
     * 批量把待发货的订单的状态修改为待收货，切PreDelivery为N(未发货)
     */
    @Transactional(rollbackFor = {Exception.class,RuntimeException.class})
    public void updateOrderStatusAndPreDelivery() {
        // 获取数据库中所有的待发货状态的订单
        List<OrderInfoEntity> orderList = toBeDeliver();
        List<String> orderIdList = new ArrayList<>();
        if (!CollectionUtils.isEmpty(orderList)) {
            for (OrderInfoEntity order : orderList) {
                // 修改订单状态和是否发货
                order.setPreDelivery(PreDeliveryType.PRE_DELIVERY_N.getCode());
                order.setStatus(OrderStatus.ORDER_SEND.getCode());
                order.setUpdateDate(new Date());
                if(StringUtils.equals(order.getMerchantCode(),"-1")){
                	order.setParentOrderId("-1");
                }
                updateOrderStatusAndPreDelivery(order);
                if(StringUtils.equals(order.getMerchantCode(),"-1")){
                    //父发票状态改为不可见
                    invoiceService.updateStatusByOrderId((byte) InvoiceStatusEnum.INVISIBLE.getCode(),order.getOrderId());
                	changeParentOrderId("-"+order.getOrderId());
                }
                orderIdList.add(order.getOrderId());
            }
            updateJdGoodsSaleVolume(orderIdList);
        }
    }

    @Transactional(rollbackFor = Exception.class)
    public void changeParentOrderId(String orderId){
    	/**
    	 * 根据主订单Id，查询子订单的信息
    	 */
    	List<OrderInfoEntity> subList = orderInfoRepository.selectByParentOrderId(orderId);
    	for (OrderInfoEntity order : subList) {
    		String parent = order.getParentOrderId().replace("-", "");
			order.setParentOrderId(parent+"");
			order.setPreDelivery(PreDeliveryType.PRE_DELIVERY_N.getCode());
            order.setStatus(OrderStatus.ORDER_SEND.getCode());
            order.setUpdateDate(new Date());
			orderInfoRepository.update(order);
			//子发票状态改为申请中
			invoiceService.updateStatusByOrderId((byte) InvoiceStatusEnum.APPLYING.getCode(),order.getOrderId());
		}
    }
    
    /**
     * 更新销量
     * 
     * @param orderIdList
     */

    public void updateJdGoodsSaleVolume(List<String> orderIdList) {
        // 更新销量
        List<OrderDetailInfoEntity> orderDetailInfoEntityList = orderDetailInfoRepository.queryOrderDetailListByOrderList(orderIdList);
        for (OrderDetailInfoEntity orderDetailInfoEntity : orderDetailInfoEntityList) {
            JdGoodSalesVolume jdGoodSalesVolume = new JdGoodSalesVolume();
            long goodsId = orderDetailInfoEntity.getGoodsId();
            int saleNum = orderDetailInfoEntity.getGoodsNum().intValue();
            Date date = new Date();
            jdGoodSalesVolume.setGoodsId(goodsId);
            jdGoodSalesVolume.setSalesNum(saleNum);
            jdGoodSalesVolume.setCreateDate(date);
            jdGoodSalesVolume.setUpdateDate(date);
            try {
                int insertValue = jdGoodSalesVolumeMapper.insertSelective(jdGoodSalesVolume);
            } catch (Exception e) {
                LOGGER.error("updateJdGoodsSaleVolume goodsId {} saleNum {} ", goodsId, saleNum, e);
            }
        }
    }

    /**
     * 下单时，要验证商品的可配送区域
     * 
     * @throws BusinessException
     */
    public Map<String, Object> validateGoodsUnSupportProvince(String requestId, Long addreesId,
            List<PurchaseRequestDto> purchaseList) throws BusinessException {
        // 验证提交信息中，是否存在不知配送区域的商品
        Map<String, Object> results = Maps.newHashMap();
        for (PurchaseRequestDto purchase : purchaseList) {
            GoodsInfoEntity goods = goodsDao.select(purchase.getGoodsId());
            Map<String, Object> resultMaps = new HashMap<>();
            if (null != goods) {
                //判断商品活动是否失效
              ActivityStatus validActivityFlag = proGroupGoodsService.isValidActivity(purchase.getProActivityId(),purchase.getGoodsId(),purchase.getGoodsStockId());
              resultMaps.put(PRO_ACTIVITY_FLAG,validActivityFlag);

                if (StringUtils.equals(goods.getSource(), SourceType.WZ.getCode())) {
                    AddressInfoEntity address = addressInfoDao.select(addreesId);
                    Region region = new Region();
                    if (null != address) {
                        region.setProvinceId(Integer.parseInt(address.getProvinceCode()));
                        region.setCityId(Integer.parseInt(address.getCityCode()));
                        region.setCountyId(Integer.parseInt(address.getDistrictCode()));
                        region.setTownId(StringUtils.isEmpty(address.getTownsCode()) ? 0 : Integer
                                .parseInt(address.getTownsCode()));
                    }
                    List<Long> skus = new ArrayList<Long>();
                    skus.add(Long.parseLong(goods.getExternalId()));
                    
                    boolean unsupport = productCheckAreaLimitQuery(skus,region);
                    
                    if (unsupport) {
                        resultMaps.put("message", "抱歉，暂不支持该地区发货！");
                    }
                    resultMaps.put("unSupportProvince", unsupport);
                } else {
                    // 校验非京东商品的不可发送区域
                    resultMaps = validateGoodsUnSupportProvince(requestId, addreesId, purchase.getGoodsId());
                }
            }
            if (!resultMaps.isEmpty() && (Boolean) resultMaps.get("unSupportProvince")) {
                results.putAll(resultMaps);
                throw new BusinessException("抱歉，暂不支持该地区发货");
            }
        }
        return results;
    }
    
    /**
     * 验证purchase中是否存在京东商品
     * @param purchaseList
     * @return
     */
    public boolean validatePurchaseExistJdGoods(List<PurchaseRequestDto> purchaseList){
    	for (PurchaseRequestDto purchase : purchaseList) {
            GoodsInfoEntity goods = goodsDao.select(purchase.getGoodsId());
            if(StringUtils.equals(goods.getSource(), SourceType.WZ.getCode())){
            	return true;
            }
    	}
    	return false;
    }
    
    
    /**
     * 验证商品是否支持配送区域
     * @param addreesId
     * @param purchaseList
     * @return
     * @throws BusinessException
     */
    public List<PurchaseRequestDto> validateGoodsUnSupportProvince(Long addreesId,List<PurchaseRequestDto> purchaseList) throws BusinessException {
    	for (PurchaseRequestDto purchase : purchaseList) {
            GoodsInfoEntity goods = goodsDao.select(purchase.getGoodsId());
            if (null != goods) {
                if (StringUtils.equals(goods.getSource(), SourceType.WZ.getCode())) {
                    AddressInfoEntity address = addressInfoDao.select(addreesId);
                    Region region = new Region();
                    if (null != address) {
                        region.setProvinceId(Integer.parseInt(address.getProvinceCode()));
                        region.setProvince(address.getProvinceCode());
                        region.setCityId(Integer.parseInt(address.getCityCode()));
                        region.setCity(address.getCityCode());
                        region.setCountyId(Integer.parseInt(address.getDistrictCode()));
                        region.setCounty(address.getDistrictCode());
                        region.setTownId(StringUtils.isEmpty(address.getTownsCode()) ? 0 : Integer
                                .parseInt(address.getTownsCode()));
                        region.setTown(StringUtils.isEmpty(address.getTownsCode()) ? "0" :address.getTownsCode());
                    }
                    List<Long> skus = new ArrayList<Long>();
                    skus.add(Long.parseLong(goods.getExternalId()));
                    purchase.setUnSupportProvince(productCheckAreaLimitQuery(skus,region));
                } else {
                    // 校验非京东商品的不可发送区域
                	Map<String, Object> resultMaps = validateGoodsUnSupportProvince("", addreesId, purchase.getGoodsId());
                	if(!resultMaps.isEmpty()){
                		purchase.setUnSupportProvince((Boolean)resultMaps.get("unSupportProvince"));
                	}
                }
            }
    	}
        return purchaseList;
    }

    /**
     * 验证商品库存
     * @param addreesId
     * @param purchaseList
     * @return
     * @throws BusinessException
     */
    public List<PurchaseRequestDto> validateGoodsStock(Long addreesId,List<PurchaseRequestDto> purchaseList,boolean exsitJdGoods) throws BusinessException {
    	/**
    	 * 获取地址信息
    	 */
    	AddressInfoEntity address = addressInfoDao.select(addreesId);
    	if(null == address){
    		return null;
    	}
    	Region region = null;
    	if(exsitJdGoods){
    		region = new Region(Integer.parseInt(address.getProvinceCode()), Integer.parseInt(address.getCityCode()), 
        			Integer.parseInt(address.getDistrictCode()), Integer.parseInt(address.getTownsCode()));
    	}
    	
    	for (PurchaseRequestDto purchase : purchaseList) {
            GoodsInfoEntity goods = goodsDao.select(purchase.getGoodsId());
            if(StringUtils.isBlank(goods.getSource())){
            	GoodsStockInfoEntity stock = goodsStockDao.select(purchase.getGoodsStockId());
        		if(stock.getStockCurrAmt() == 0){
        			purchase.setUnStockDesc(true);
        		}
            }else{
            	String stockDesc = goodsInfoService.getStockBySkuNum(goods.getExternalId(), region,1);
            	if ("无货".equals(stockDesc)) {
            		purchase.setUnStockDesc(true);
            	}
            }
    	}
    	return purchaseList;
    }
    
    /**
     * 计算商品购买总件数，实际支付金额，优惠金额
     * @param purchaseList
     * @return
     * @throws BusinessException
     */
    public Map<String,Object> calcGoodsBuyNum(List<PurchaseRequestDto> purchaseList) throws BusinessException {
    	
    	Map<String,Object> maps = Maps.newHashMap();
    	List<PurchaseRequestDto> available = new ArrayList<PurchaseRequestDto>();
    	//过滤掉不支持配送的和无货的商品
    	for (PurchaseRequestDto p : purchaseList) {
			if(!p.isUnSupportProvince() && !p.isUnStockDesc()){
				available.add(p);
			}
		}
    	/**
    	 * 计算商品的总件数 ，总金额，优惠金额
    	 */
    	Integer buyNum = 0;//计算商品的总件数
    	Map<String,BigDecimal> activityDecimal = Maps.newHashMap();//计算同一个活动下的商品总金额
    	for (PurchaseRequestDto p : available) {
    		buyNum += p.getBuyNum();
    		//计算商品的应付金额价格
    		BigDecimal goodsSum = p.getPrice().multiply(new BigDecimal(p.getBuyNum()+""));
    		if(!activityDecimal.containsKey(p.getProActivityId())){
    			activityDecimal.put(p.getProActivityId(), goodsSum);
    		}else{
    			BigDecimal total = 	activityDecimal.get(p.getProActivityId()).add(goodsSum);
    			activityDecimal.put(p.getProActivityId(), total);
    		}
		}
    	//总金额
    	BigDecimal totalSum = BigDecimal.ZERO;//计算当次购买商品的总金额
    	//折扣金额
    	BigDecimal discountSum = BigDecimal.ZERO;//总共优惠多少钱
    	for (String activityId : activityDecimal.keySet()) {
    		BigDecimal totalMoney = activityDecimal.get(activityId);
			if(StringUtils.isNotBlank(activityId)){
				ProActivityCfg cfg = activityCfgMapper.selectByPrimaryKey(Long.parseLong(activityId));
			    long discount = getDisCount(cfg, totalMoney);
			    discountSum = discountSum.add(BigDecimal.valueOf(discount)); //根据计算的同一个活动下的总金额，计算应该优惠多少钱
			}
			totalSum = totalSum.add(totalMoney);	
		}
    	//实际支付金额
    	BigDecimal paySum = totalSum.subtract(discountSum);
    	maps.put("buyNum", buyNum);//购买商品数量，除去无货和不支持配送的
    	maps.put("discountSum", discountSum);//总共优惠的金额
    	maps.put("paySum",paySum);//实际支付金额
    	maps.put("totalSum", totalSum);//总金额（算上优惠金额）
    	return maps;
    }
    
    /**
     * 计算商品购买总件数，实际支付金额，优惠金额
     * @param purchaseList
     * @return
     * @throws BusinessException
     */
    public Map<String,Object> calcGoodsBuyNum1(Long userId,List<PurchaseRequestDto> purchaseList) throws BusinessException {
    	
    	Map<String,Object> maps = Maps.newHashMap();
    	List<PurchaseRequestDto> available = new ArrayList<PurchaseRequestDto>();
    	//过滤掉不支持配送的和无货的商品
    	for (PurchaseRequestDto p : purchaseList) {
			if(!p.isUnSupportProvince() && !p.isUnStockDesc()){
				available.add(p);
			}
		}
    	/**
    	 * 计算商品的总件数 ，总金额，优惠金额
    	 */
    	Integer buyNum = 0;//计算商品的总件数
    	BigDecimal totalSum = BigDecimal.ZERO;//计算当次购买商品的总金额（总金额）
    	BigDecimal discountSum = BigDecimal.ZERO;//总共优惠多少钱(折扣金额)
    	Map<String,BigDecimal> activityDecimal = Maps.newHashMap();//计算同一个活动下的商品总金额
    	Map<String,BigDecimal> discountPayment = Maps.newHashMap();//根据活动分组信息情况，查看优惠区间
    	for (PurchaseRequestDto p : available) {
    		buyNum += p.getBuyNum();
    		//计算商品的应付金额价格
    		BigDecimal goodsSum = p.getPrice().multiply(new BigDecimal(p.getBuyNum()+""));
    		if(!activityDecimal.containsKey(p.getProActivityId())){
    			activityDecimal.put(p.getProActivityId(), goodsSum);
    		}else{
    			BigDecimal total = 	activityDecimal.get(p.getProActivityId()).add(goodsSum);
    			activityDecimal.put(p.getProActivityId(), total);
    		}
            //获取商品的总金额
    		totalSum = totalSum.add(goodsSum);
		}
    	
    	for (String activityId : activityDecimal.keySet()) {
    		long discount = 0;
			if(StringUtils.isNotBlank(activityId)){
				ProActivityCfg cfg = activityCfgMapper.selectByPrimaryKey(Long.parseLong(activityId));
			    discount = getDisCount(cfg, activityDecimal.get(activityId));
                //根据计算的同一个活动下的总金额，计算应该优惠多少钱
			    discountSum = discountSum.add(BigDecimal.valueOf(discount));
			}
			discountPayment.put(activityId, BigDecimal.valueOf(discount));
		}
    	
    	/**
    	 * 把优惠金额，平分到每种商品中
    	 */
    	for (PurchaseRequestDto purchase : available) {
    		BigDecimal goodsSum = purchase.getPrice().multiply(BigDecimal.valueOf(Long.valueOf(purchase.getBuyNum())));
    		BigDecimal discount = BigDecimal.ZERO;
    		if(activityDecimal.containsKey(purchase.getProActivityId())){
    			BigDecimal total = activityDecimal.get(purchase.getProActivityId());
            	BigDecimal discountTotal = discountPayment.get(purchase.getProActivityId());
            	discount = discountTotal.multiply(goodsSum).divide(total,2,BigDecimal.ROUND_HALF_UP);
            	purchase.setDisCount(discount);
    		}
            //商品价格 * 数量 - 活动优惠金额
    		purchase.setPayMoney(goodsSum.subtract(discount));
    	}
    	/**
    	 * 根据用户的Id,获取该用户下所有未使用的券
    	 */
    	Date now = new Date();
    	List<ProMyCoupon> coupons = myCouponMapper.getCouponByStatusAndDate(new ProMyCouponQuery(userId,now,"N"));
    	List<ProMyCouponVo> couponVos = myCouponManagerService.getVoByPos(coupons);
    	
    	List<ProMyCouponVo> no = new ArrayList<>();//不可用的券
    	List<ProMyCouponVo> yes = new ArrayList<>();//可用的券
    	for (int i = couponVos.size() - 1;i >= 0;i--) {
    		ProMyCouponVo coupon = couponVos.get(i);
			Date start = DateFormatUtil.string2date(coupon.getStartDate());
			if(start.getTime() > now.getTime()){
				coupon.setMessage(CouponMessage.NO_START.getMessage());
				no.add(coupon);
				couponVos.remove(coupon);
			}
		}
    	
    	/**
    	 * 满足使用券的商品，对应券
    	 */
    	Map<Long,List<String>> categoryGoods = Maps.newHashMap();
    	if(CollectionUtils.isNotEmpty(couponVos)){
    		for (ProMyCouponVo coupon : couponVos) {
    			List<String> goodslist = new ArrayList<>();
    			BigDecimal total = BigDecimal.ZERO;
    			for (PurchaseRequestDto purchase : available) {
    				GoodsInfoEntity goods =  goodsDao.select(purchase.getGoodsId());
    				GoodsStockInfoEntity stocks  = goodsStockDao.select(purchase.getGoodsStockId());
    				CouponType type = CouponType.getCode(coupon.getType());
    				switch (type) {
						case COUPON_ZDPL ://指定品类
							if(StringUtils.equals(coupon.getCategoryId1(), goods.getCategoryId1()+"") ||
	    					   StringUtils.equals(coupon.getCategoryId2(), goods.getCategoryId2()+"") ||
	    					   StringUtils.equals(coupon.getCategoryId3(), goods.getCategoryId3()+"")){//因为三个等级的类目，只能存在一个，所以，不需要分别判断
		    						total = total.add(purchase.getPayMoney());
			    					goodslist.add(purchase.getGoodsStockId()+"");
			    			}
							break;
						case COUPON_ZDSP ://指定商品
							String[] strs = coupon.getSimilarGoodsCode().split(",");
		    				if(Arrays.asList(strs).contains(goods.getGoodsCode())){
		    					total = total.add(purchase.getPayMoney());
		    					goodslist.add(purchase.getGoodsStockId()+"");
		    				}
							break;
                        //活动商品
						case COUPON_HDSP :
                            //如果商品参加的活动等于券所属的活动，才能进行计算
							if(StringUtils.equals(coupon.getActivityId()+"", purchase.getProActivityId())){
                                //品牌
								if(StringUtils.equals(goods.getBrandId(), coupon.getBrandId())){
		    						total = total.add(purchase.getPayMoney());
			    					goodslist.add(purchase.getGoodsStockId()+"");
                                //类目
		    					}else if(StringUtils.equals(coupon.getCategoryId1(), goods.getCategoryId1()+"") ||
		    	    					 StringUtils.equals(coupon.getCategoryId2(), goods.getCategoryId2()+"") ||
		    	    					 StringUtils.equals(coupon.getCategoryId3(), goods.getCategoryId3()+"")){
				    						total = total.add(purchase.getPayMoney());
					    					goodslist.add(purchase.getGoodsStockId()+"");
                                //skuid
		    	    			}else if(StringUtils.isNotBlank(coupon.getSkuId()) && (StringUtils.equals(goods.getExternalId(),coupon.getSkuId()) || 
		    							StringUtils.equals(stocks.getSkuId(), coupon.getSkuId()))){
		    						total = total.add(purchase.getPayMoney());
			    					goodslist.add(purchase.getGoodsStockId()+"");
		    					}
		    					//全部活动商品
		    					else if(StringUtils.equals(coupon.getExtendType(), CouponExtendType.COUPON_FYDYHZX.getCode())
                                        || StringUtils.equals(coupon.getExtendType(), CouponExtendType.COUPON_SMYHZX.getCode())
                                        || StringUtils.equals(coupon.getExtendType(), CouponExtendType.COUPON_YHLQ.getCode())
                                        || StringUtils.equals(coupon.getExtendType(), CouponExtendType.COUPON_LKHYWY.getCode())){
		    						total = total.add(purchase.getPayMoney());
			    					goodslist.add(purchase.getGoodsStockId()+"");
		    					}
							}
							break;
						case COUPON_QPL ://全品类
							total = total.add(purchase.getPayMoney());
		    				goodslist.add(purchase.getGoodsStockId()+"");
							break;
						default :
							break;
					}
    			}
    			
    			if(total.compareTo(BigDecimal.ZERO) <= 0){
    				coupon.setMessage(CouponMessage.NO_PRODUCTS.getMessage());
    				no.add(coupon);
    			}else{
					if(coupon.getCouponSill().compareTo(total) <= 0 && coupon.getDiscountAmonut().compareTo(total) <= 0){
						categoryGoods.put(coupon.getId(), goodslist);
        				coupon.setGoodStockIds(goodslist);
        				yes.add(coupon);
					}else{
						coupon.setMessage(CouponMessage.NO_MONEY.getMessage());
    					no.add(coupon);
					}
    			}
    		}
    	}
    	//为券排序，获取最大面值得全
    	Collections.sort(yes, new Comparator<ProMyCouponVo>() {  
            public int compare(ProMyCouponVo obj1, ProMyCouponVo obj2) {   
                int retVal = 0;  
                try {  
                	retVal = obj2.getDiscountAmonut().compareTo(obj1.getDiscountAmonut());
                } catch (Exception e) {  
                    throw new RuntimeException();  
                }  
                return retVal;  
            }  
        });
    	
    	/**
    	 * 查看优惠券优惠的金额是否大于订单的金额
    	 */
    	ProMyCouponVo coupon = null;
    	if(CollectionUtils.isNotEmpty(yes)){
    		coupon = yes.get(0);
    	}
    	//实际支付金额
    	BigDecimal paySum = totalSum.subtract(discountSum);
    	maps.put("buyNum", buyNum);//购买商品数量，除去无货和不支持配送的
    	maps.put("discountSum", discountSum);//总共优惠的金额
    	maps.put("paySum",paySum);//实际支付金额
    	maps.put("totalSum", totalSum);//总金额（算上优惠金额）
    	maps.put("coupon",coupon);//优惠券金额（默认）
    	maps.put("used",yes);//可供选择的券
    	maps.put("unused",no);//不可使用的券
    	return maps;
    }
    
    /**
     * 返回优惠金额
     * @param cfg
     * @param total
     * @return
     */
    public Long getDisCount(ProActivityCfg cfg,BigDecimal total){
    	
    	long offerSill1 = cfg.getOfferSill1();
    	long offerSill2 = cfg.getOfferSill2();
    	long discount1 = cfg.getDiscountAmonut1();
    	long discount2 = cfg.getDiscountAmount2();
    	
    	if(offerSill1 >= offerSill2){
    		if(total.compareTo(BigDecimal.valueOf(offerSill1)) >= 0){
    			return discount1;
    		}else if(total.compareTo(BigDecimal.valueOf(offerSill2)) >= 0){
    			return discount2;
    		}
    		return 0l;
    	}else{
    		if(total.compareTo(BigDecimal.valueOf(offerSill2)) >= 0){
    			return discount2;
    		}else if(total.compareTo(BigDecimal.valueOf(offerSill1)) >= 0){
    			return discount1;
    		}
    		return 0l;
    	}
    }
    
    /**
     * 根据订单id 和 商品Id，验证订单下，是否存在不支持配送的商品
     * 
     * @param requestId
     * @param orderId
     * @param goodsId
     * @throws BusinessException
     */
    public Map<String, Object> validateGoodsUnSupportProvince(String requestId, String orderId, Long goodsId)
            throws BusinessException {
        Map<String, Object> resultMap = Maps.newHashMap();

        OrderInfoEntity order = selectByOrderId(orderId);

        GoodsInfoEntity goods = goodsDao.select(goodsId);

        boolean bl = false;
        String message = "";
        if (null != goods) {
            if (StringUtils.isNotBlank(goods.getUnSupportProvince())
                    && goods.getUnSupportProvince().indexOf(order.getProvince()) > -1) {
                bl = true;
                LOG.info(requestId, "订单中商品不支持配送区域", "订单号为" + orderId + "中，商品名称为" + goods.getGoodsName()
                        + "不支持配送");
                message = "抱歉，暂不支持该地区发货！";
                // 订单的状态置为无效
                updateOrderCancel(order.getOrderId());
            }
        }
        resultMap.put("unSupportProvince", bl);
        resultMap.put("message", message);
        return resultMap;
    }

    /**
     * 根据地址id 和 商品Id，验证订单下，是否存在不支持配送的商品
     * 
     * @param requestId
     * @param goodsId
     * @throws BusinessException
     */
    public Map<String, Object> validateGoodsUnSupportProvince(String requestId, Long addressId, Long goodsId)
            throws BusinessException {
        Map<String, Object> resultMap = Maps.newHashMap();

        // 校验地址
        AddressInfoEntity address = addressInfoDao.select(addressId);
        if (null == address) {
            LOG.info(requestId, "生成订单前校验,校验地址,该用户地址信息不存在", addressId.toString());
            throw new BusinessException("该用户地址信息不存在");
        }

        GoodsInfoEntity goods = goodsDao.select(goodsId);

        boolean bl = false;
        String message = "";
        if (null != goods) {
            if (StringUtils.isNotBlank(goods.getUnSupportProvince())
                    && goods.getUnSupportProvince().indexOf(address.getProvince()) > -1) {
                bl = true;
                LOG.info(requestId, "订单中商品不支持配送区域", "抱歉，暂不支持该地区发货！");
                message = "抱歉，暂不支持该地区发货！";
            }
        }
        resultMap.put("unSupportProvince", bl);
        resultMap.put("message", message);
        return resultMap;
    }

    public void updateOrderCancel(String orderId) {
        OrderInfoEntity order =   orderInfoRepository.selectByOrderId(orderId);
        OrderInfoEntity entity = new OrderInfoEntity();
        entity.setId(order.getId());
        entity.setStatus(OrderStatus.ORDER_CANCEL.getCode());
        Long couponId = order.getCouponId();
        if(couponId > 0){
            //订单失效时优惠券id 置为负数，比如couponId = -418
            entity.setCouponId(couponId * -1);
        }
        orderInfoRepository.update(entity);
        //订单失效 则返回优惠券
        myCouponManagerService.returnCoupon(order.getUserId(),couponId,orderId);

        //发票状态改为不可见
        invoiceService.updateStatusByOrderId((byte) InvoiceStatusEnum.INVISIBLE.getCode(),orderId);
        
        /**
         * 把orderId作为main_order_id,再次查询（此时如果查询出数据应该是子订单信息）(sprint 12)
         */
        if(StringUtils.equals(order.getMerchantCode(), "-1")){//此时说明此订单下，存在子订单
        	LOGGER.info("cancel sub-order start,main_order_id:{}",orderId);
        	OrderInfoEntity domain = new OrderInfoEntity();
            domain.setMainOrderId(orderId);
            List<OrderInfoEntity> orderList = orderInfoRepository.filter(domain);
            LOGGER.info("sub-order list:{}",JsonUtil.toJsonString(orderList));
            for (OrderInfoEntity orderInfoEntity : orderList) {
    			orderInfoEntity.setStatus(OrderStatus.ORDER_CANCEL.getCode());
            	orderInfoEntity.setUpdateDate(new Date());
            	orderInfoRepository.update(entity);
    		}
        }
    }

    /**
     *
     * @param orderStatus
     * @param dateBegin
     * @param dateEnd
     * @return
     */
    public Integer selectOrderCountByStatus(String orderStatus, String dateBegin, String dateEnd) {
        return orderInfoRepository.selectOrderCountByStatus(orderStatus, dateBegin, dateEnd);
    }


    public Double selectOrderAmtByStatus(String orderStatus, String dateBegin, String dateEnd) {
        return orderInfoRepository.selectOrderAmtByStatus(orderStatus, dateBegin, dateEnd);
    }

    public  List<OrderInfoEntity>  selectOrderByStatus(String orderStatus, String dateBegin, String dateEnd) {
        List<OrderInfoEntity> orderInfoEntityList =  orderInfoRepository.selectOrderByStatus(orderStatus, dateBegin, dateEnd);
        if(CollectionUtils.isEmpty(orderInfoEntityList)){
            return Collections.emptyList();
        }
        return orderInfoEntityList;
    }

    public Integer selectSumAmt(String dateBegin, String dateEnd) {
        return orderInfoRepository.selectSumAmt(dateBegin, dateEnd);
    }

    public Integer selectAliAmt(String dateBegin, String dateEnd) {
        return orderInfoRepository.selectAliAmt(dateBegin, dateEnd);
    }
    public Integer selectCreAmt(String dateBegin, String dateEnd) {
        return orderInfoRepository.selectCreAmt(dateBegin, dateEnd);
    }

    /**
     * 发邮件专用
     * 
     * @param dateBegin
     * @param dateEnd
     * @return
     */
    public List<OrderSubInfoEntity> queryOrderSubInfoByTime(String dateBegin, String dateEnd) {
        HashMap<String, String> param = Maps.newHashMap();
        param.put("dateBegin", dateBegin);
        param.put("dateEnd", dateEnd);
        return orderSubInfoRepository.queryOrderSubInfoByTime(param);
    }
    
    /**
     * 获取15天内，交易成功的订单信息
     */
    public List<OrderSubInfoEntity> queryOrderIdByOrderStatus(String dateBegin, String dateEnd) {
        HashMap<String, String> param = Maps.newHashMap();
        param.put("dateBegin", dateBegin);
        param.put("dateEnd", dateEnd);
        return orderSubInfoRepository.queryOrderIdByOrderStatus(param);
    }

    @SuppressWarnings("null")
	public List<OrderSubInfoEntity> getOrderDetail(String dateBegin, String dateEnd){
    	List<OrderSubInfoEntity> dtoList = new ArrayList<OrderSubInfoEntity>();
    	List<OrderSubInfoEntity> orderIdList = queryOrderIdByOrderStatus(dateBegin, dateEnd);
    	for (OrderSubInfoEntity order : orderIdList) {
    		List<OrderDetailInfoEntity> details = orderDetailInfoRepository.queryOrderDetailBySubOrderId(order.getOrderId());
    		for (OrderDetailInfoEntity detail : details) {
    			OrderSubInfoEntity sub = new OrderSubInfoEntity();
    			
    			//首先获取商户名称
    			MerchantInfoEntity merchant = merchantInforService.queryByMerchantCode(order.getMerchantCode());
    			GoodsInfoEntity goods = goodsDao.select(detail.getGoodsId());
    			//时间
    			sub.setPayTime(order.getPayDate());
    			//商户名称
    			sub.setMerchantName(null != merchant ?merchant.getMerchantName():"");
    			//商品编号  商品名称  商品状态  商品件数  商品金额
    			sub.setGoodsId(detail.getGoodsId()+"");
    			sub.setGoodsName(null != goods ?detail.getGoodsName():"");
    			sub.setGoodStatus(GoodStatus.getMessageByCode(goods.getStatus()));
    			
    			sub.setGoodsNum(detail.getGoodsNum()+"");
    			sub.setOrderAmt(detail.getGoodsPrice().multiply(new BigDecimal(detail.getGoodsNum())).setScale(2, BigDecimal.ROUND_DOWN));
    			dtoList.add(sub);
			}
    	}
    	return dtoList;
    }
    
    /**
     * 根据订单号，获取订单信息
     * 
     * @param orderId
     * @return
     */
    public OrderInfoEntity getOrderInfoEntityByOrderId(String orderId) {
        return orderInfoRepository.selectByOrderId(orderId);
    }

    /**
     * 释放预占库存
     * 
     * @throws BusinessException
     */
//    public void freedJdStock() throws BusinessException {
//        /**
//         * 1.首先查询 失效和删除的京东订单 2.循环，拿到订单信息中的京东订单的id 3.调用释放占用库存的接口，传入京东订单的id
//         * 4.释放完库存后，修改订单的pre_stock_status状态为3
//         */
//        List<OrderInfoEntity> orderList = orderInfoRepository.getInvalidAndDeleteJdOrder();
//        if (!CollectionUtils.isEmpty(orderList)) {
//            for (OrderInfoEntity order : orderList) {
//                JdApiResponse<Boolean> jd = jdOrderApiClient.orderCancelorder(Long.valueOf(order
//                        .getExtOrderId()));
//                if (!jd.isSuccess() || !jd.getResult()) {
//                    throw new BusinessException("取消未确认的订单失败!");
//                }
//            }
//        }
//
//        /**
//         * 修改订单占用库存字段为取消占用，更新时间
//         */
//        Map<String, Object> params = Maps.newHashMap();
//        params.put("preStockStatus", PreStockStatus.CANCLE_PRE_STOCK.getCode());
//        params.put("updateTime", new Date());
//        for (OrderInfoEntity order : orderList) {
//            params.put("orderId", order.getOrderId());
//            orderInfoRepository.updatePreStockStatusByOrderId(params);
//        }
//    }
    /**
     * 释放预占库存
     * 
     * @throws BusinessException
     */
    public void freedWzStock() throws BusinessException {
        /**
         * 1.首先查询 失效和删除的京东订单 2.循环，拿到订单信息中的京东订单的id 3.调用释放占用库存的接口，传入京东订单的id
         * 4.释放完库存后，修改订单的pre_stock_status状态为3
         */
        List<OrderInfoEntity> orderList = orderInfoRepository.getInvalidAndDeleteJdOrder();
        List<OrderInfoEntity> cancelSuccList = new ArrayList<>();
        if (!CollectionUtils.isEmpty(orderList)) {
            for (OrderInfoEntity order : orderList) {
            	try {
            		boolean bl = orderApi.cancelOrder(order.getExtOrderId());
            		if(!bl){
            			throw new BusinessException("取消未确认的订单失败!");
            		}
            		cancelSuccList.add(order);
				} catch (Exception e) {
					LOGGER.error("orderId equals {},cancel is failed！！",order.getOrderId());
				}
            }
        }

        /**
         * 修改订单占用库存字段为取消占用，更新时间
         */
        Map<String, Object> params = Maps.newHashMap();
        params.put("preStockStatus", PreStockStatus.CANCLE_PRE_STOCK.getCode());
        params.put("updateTime", new Date());
        for (OrderInfoEntity order : cancelSuccList) {
            params.put("orderId", order.getOrderId());
            orderInfoRepository.updatePreStockStatusByOrderId(params);
        }
    }

    /**
     * 查询预占库存 代发货的订单
     * 
     * @return
     */
    public List<OrderInfoEntity> getOrderByOrderStatusAndPreStatus(String sourceType) {
        return orderInfoRepository.getOrderByOrderStatusAndPreStatus(sourceType);
    }

    @Transactional(rollbackFor = {Exception.class,RuntimeException.class,BusinessException.class})
    public void wzSplitOrderMessageHandle(OrderInfoEntity order) throws BusinessException{
    	 // 确认预占库存 改变订单状态
        Map<String, Object> params = Maps.newHashMap();
        params.put("preStockStatus", PreStockStatus.SURE_STOCK.getCode());
        params.put("updateTime", new Date());
        params.put("extOrderId", order.getExtOrderId());
        params.put("orderId", order.getOrderId());
        orderInfoRepository.updatePreStockStatusByOrderId(params);
        //更新订单的发货状态和时间和订单的状态
        updateLogisticsInfoAndOrderInfoByOrderId(order.getOrderId());
    }
    /**
     * 京东拆单消息处理
     * 
     * @param orderInfoEntity
     */
    @Deprecated
    public void jdSplitOrderMessageHandle(JSONObject jsonObject, OrderInfoEntity orderInfoEntity)
            throws BusinessException {
        String jdOrderIdp = orderInfoEntity.getExtOrderId();
        long jdOrderId = Long.valueOf(jdOrderIdp);
        Object pOrderV = jsonObject.get("pOrder");
        LOGGER.info("jdOrderId {} jdSplitOrderMessageHandle  ", jdOrderId);

        // 确认预占库存 改变订单状态
        Map<String, Object> params = Maps.newHashMap();
        params.put("preStockStatus", PreStockStatus.SURE_STOCK.getCode());
        params.put("updateTime", new Date());
        params.put("extOrderId", jdOrderId);
        params.put("orderId", orderInfoEntity.getOrderId());
        orderInfoRepository.updatePreStockStatusByOrderId(params);

        if (pOrderV instanceof Number) {

            // 订阅物流信息
            try {
                HashMap<String, String> hashMap = new HashMap();
                hashMap.put("logisticsName", "jd");
                hashMap.put("logisticsNo", jdOrderIdp);
                hashMap.put("orderId", orderInfoEntity.getOrderId());
                updateLogisticsInfoAndOrderInfoByOrderId(hashMap);
            } catch (Exception e) {
                return;
            }

        } else {
            // 拆单
            orderInfoEntity.setExtParentId("-1");
            orderInfoRepository.update(orderInfoEntity);
            String merchantCode = orderInfoEntity.getMerchantCode();
            String deviceType = orderInfoEntity.getDeviceType();
            MerchantInfoEntity merchantInfoEntity = merchantInforService.queryByMerchantCode(merchantCode);
            JSONObject pOrderJsonObject = (JSONObject) pOrderV;
            // 父订单状态
            pOrderJsonObject.getIntValue("type");
            pOrderJsonObject.getIntValue("submitState");
            pOrderJsonObject.getIntValue("orderState");
            JSONArray cOrderArray = jsonObject.getJSONArray("cOrder");

            // 拆单 插入子订单
            for (int i = 0; i < cOrderArray.size(); i++) {
                JSONObject cOrderJsonObject = cOrderArray.getJSONObject(i);
                if (cOrderJsonObject.getLongValue("pOrder") != jdOrderId) {
                    LOGGER.info("cOrderJsonObject.getLongValue(\"pOrder\") {}, jdOrderId",
                            cOrderJsonObject.getLongValue("pOrder"), jdOrderId);
                }
                long cOrderId = cOrderJsonObject.getLongValue("jdOrderId");// 京东子订单ID
                OrderInfoEntity cOrderInfoEntity = orderInfoRepository.getOrderInfoByExtOrderId(String
                        .valueOf(cOrderId));
                if (cOrderInfoEntity != null) {
                    continue;
                }
                JSONArray cOrderSkuList = cOrderJsonObject.getJSONArray("sku");
                BigDecimal jdPrice = BigDecimal.ZERO;// 订单金额
                Integer sumNum = 0;
                for (int j = 0; j < cOrderSkuList.size(); j++) {
                    BigDecimal price = cOrderSkuList.getJSONObject(j).getBigDecimal("price");
                    int num = cOrderSkuList.getJSONObject(j).getIntValue("num");
                    jdPrice = jdPrice.add(price.multiply(new BigDecimal(num)));
                    sumNum = sumNum + num;
                }
                // 创建新的订单号
                String cOrderQh = commonService.createOrderIdNew(deviceType, merchantInfoEntity.getId());
                // 拆单创建新的订单
                OrderInfoEntity orderInfo = new OrderInfoEntity();
                orderInfo.setUserId(orderInfoEntity.getUserId());
                orderInfo.setOrderAmt(jdPrice);
                orderInfo.setSource(SourceType.WZ.getCode());
                orderInfo.setExtParentId(jdOrderIdp);// 为子订单
                orderInfo.setDeviceType(deviceType);
                orderInfo.setOrderId(cOrderQh);
                orderInfo.setGoodsNum(Long.valueOf(sumNum));
                orderInfo.setPayStatus(PaymentStatus.PAYSUCCESS.getCode());
                orderInfo.setProvince(orderInfoEntity.getProvince());
                orderInfo.setCity(orderInfoEntity.getCity());
                orderInfo.setDistrict(orderInfoEntity.getDistrict());
                orderInfo.setAddress(orderInfoEntity.getAddress());
                orderInfo.setPostcode(orderInfoEntity.getPostcode());
                orderInfo.setName(orderInfoEntity.getName());
                orderInfo.setTelephone(orderInfoEntity.getTelephone());
                orderInfo.setMerchantCode(merchantCode);
                orderInfo.setExtendAcceptGoodsNum(orderInfoEntity.getExtendAcceptGoodsNum());
                orderInfo.setAddressId(orderInfoEntity.getAddressId());
                orderInfo.setPreDelivery(orderInfoEntity.getPreDelivery());
                orderInfo.setCreateDate(orderInfoEntity.getCreateDate());
                orderInfo.setUpdateDate(new Date());
                orderInfo.setMainOrderId(orderInfoEntity.getOrderId());
                orderInfo.setExtOrderId(String.valueOf(cOrderId));
                orderInfo.setStatus(OrderStatus.ORDER_SEND.getCode());
                orderInfo.setPreStockStatus(PreStockStatus.SURE_STOCK.getCode());
                Integer successStatus = orderInfoRepository.insert(orderInfo);
                if (successStatus < 1) {
                    LOGGER.info("jdOrderId {}  cOrderId {} cOrderQh {} create order error  ", jdOrderId,
                            cOrderId, cOrderQh);
                    continue;
                }
                try {
                    // 订阅物流信息
                    HashMap<String, String> hashMap = new HashMap();
                    hashMap.put("logisticsName", "jd");
                    hashMap.put("logisticsNo", String.valueOf(cOrderId));
                    hashMap.put("orderId", cOrderQh);
                    updateLogisticsInfoAndOrderInfoByOrderId(hashMap);
                } catch (Exception e) {

                }

                for (int j = 0; j < cOrderSkuList.size(); j++) {
                    long skuId = cOrderSkuList.getJSONObject(j).getLongValue("skuId");
                    GoodsInfoEntity goodsInfoEntity = goodsDao.selectGoodsByExternalId(String.valueOf(skuId));
                    if (goodsInfoEntity == null) {
                        LOGGER.info("pOrder {}, jdOrderId {} goodsInfoEntity {}",
                                cOrderJsonObject.getLongValue("pOrder"), jdOrderId, goodsInfoEntity);
                        continue;
                    }
                    long goodsId = goodsInfoEntity.getId();
                    BigDecimal price = cOrderSkuList.getJSONObject(j).getBigDecimal("price");
                    int num = cOrderSkuList.getJSONObject(j).getIntValue("num");
                    String name = cOrderSkuList.getJSONObject(j).getString("name");
                    GoodsInfoEntity goods = goodsDao.select(goodsId);
                    List<GoodsStockInfoEntity> goodsStockInfoEntityList = getGoodsStockDao
                            .loadByGoodsId(goodsId);
                    long goodsStockId = goodsStockInfoEntityList.get(0).getGoodsStockId();
                    // orderDetail插入对应记录
                    OrderDetailInfoEntity orderDetail = new OrderDetailInfoEntity();
                    orderDetail.setOrderId(cOrderQh);
                    orderDetail.setGoodsId(goodsId);
                    orderDetail.setSkuId(String.valueOf(skuId));
                    orderDetail.setSource(SourceType.WZ.getCode());
                    orderDetail.setGoodsPrice(price);
                    orderDetail.setGoodsNum(Long.valueOf(num));
                    orderDetail.setMerchantCode(merchantCode);
                    orderDetail.setGoodsTitle(goods.getGoodsTitle());
                    orderDetail.setCategoryCode(goods.getCategoryCode());
                    orderDetail.setGoodsName(goods.getGoodsName());
                    orderDetail.setGoodsSellPt(goods.getGoodsSellPt());
                    orderDetail.setGoodsType(goods.getGoodsType());
                    orderDetail.setListTime(goods.getListTime());
                    if(null == goods.getDelistTime()){
                        orderDetail.setDelistTime(DateFormatUtil.string2date("1900-01-01 00:00:00",""));
                    }else{
                        orderDetail.setDelistTime(goods.getDelistTime());
                    }
                    orderDetail.setProDate(goods.getProDate());
                    orderDetail.setKeepDate(goods.getKeepDate());
                    orderDetail.setSupNo(goods.getSupNo());
                    orderDetail.setCreateDate(new Date());
                    orderDetail.setGoodsStockId(goodsStockId);
                    Integer orderDetailSuccess = orderDetailInfoRepository.insert(orderDetail);
                    if (orderDetailSuccess < 1) {
                        LOGGER.info("jdOrderId {}  cOrderId {} cOrderQh {} create order detail error  ",
                                jdOrderId, cOrderId, cOrderQh);
                        continue;
                    }
                }
            }

        }
    }

    /**
     * 根据状态获取所有京东的订单
     * 
     * @param orderStatus
     * @return
     */
    public List<OrderInfoEntity> getJdOrderByOrderStatus(String orderStatus) {
        return orderInfoRepository.getJdOrderByOrderStatus(orderStatus);
    }

    /**
     * 根据订单号，退款
     * 
     * @param orderId
     * @throws BusinessException
     */
    public void orderCashRefund(String orderId, String refundType, String userName) throws BusinessException {
        // 根据订单id，获取订单信息
        OrderInfoEntity order = orderInfoRepository.selectByOrderId(orderId);

        if (StringUtils.equals(refundType, "0")) {
            // 根据订单号id，获取cashrefund的记录
            CashRefund refund = cashRefundMapper.getCashRefundByOrderId(orderId);
            // 根据cashrefund的记录，获取refund_txn的记录
            if (null != refund) {
                List<CashRefundTxn> txnList = cashRefundTxnMapper.queryCashRefundTxnByCashRefundId(refund
                        .getId());
                for (CashRefundTxn cashRefundTxn : txnList) {
                    cashRefundTxn.setStatus("2");
                    cashRefundTxnMapper.updateByPrimaryKey(cashRefundTxn);
                }
                refund.setStatus(Integer.valueOf(CashRefundStatus.CASHREFUND_STATUS4.getCode()));
                refund.setAuditorName(userName);
                refund.setAuditorDate(new Date());
                cashRefundMapper.updateByPrimaryKeySelective(refund);
            }
            order.setStatus(OrderStatus.ORDER_TRADCLOSED.getCode());
            orderInfoRepository.updateOrderStatus(order);
            //发票状态改为不可见
            invoiceService.updateStatusByOrderId((byte) InvoiceStatusEnum.INVISIBLE.getCode(),orderId);
        } else {
            Map<String, Object> map = Maps.newHashMap();
            map.put("orderId", orderId);
            map.put("refundType", "0");
            RefundInfoEntity refundEntity = orderRefundRepository.queryRefundInfoByOrderIdAndRefundType(map);
            if (null != refundEntity) {
                Map<String, String> refundMap = Maps.newHashMap();
                refundMap.put("orderId", orderId);
                refundMap.put("refundId", refundEntity.getId() + "");
                orderRefundService.confirmRefundByOrderId(refundMap);
            }
        }

    }

    /**
     * 下单买家数
     * @param beginDate
     * @param endDate 
     * @return
     */
    public Integer getConfirmOrderCount(Date beginDate, Date endDate) {
        return orderInfoRepository.getConfirmOrderCount(beginDate,endDate);
    }

    /**
     * 支付买家数
     * @param beginDate
     * @param endDate
     * @return
     */
    public Integer getConfirmPayCount(Date beginDate, Date endDate) {
        return orderInfoRepository.getConfirmPayCount(beginDate,endDate);
    }

    /**
     * 获取所有下单金额
     * @param beginDate
     * @param endDate
     * @return
     */
    public BigDecimal getSumOrderamt(Date beginDate, Date endDate) {
        return orderInfoRepository.getSumOrderamt(beginDate,endDate);
    }

    /**
     * 获取所有支付成功金额
     * @param beginDate
     * @param endDate
     * @return
     */
    public BigDecimal getSumOrderamtForPaySuccess(Date beginDate, Date endDate) {
        return orderInfoRepository.getSumOrderamtForPaySuccess(beginDate,endDate);
    }

    /**
     * 獲取時間段內的全部訂單
     * @param beginDate
     * @param endDate
     * @return
     */
    public List<OrderInfoEntity> getSectionOrderList(String beginDate, String endDate){
    	return orderInfoRepository.getSectionOrderList(beginDate, endDate);
    }

    public List<OrderInfoEntity> selectByStatusList(List<String> statusArray,String dateBegin,String dateEnd){
        return orderInfoRepository.selectByStatusList(statusArray,dateBegin,dateEnd);
    }
    /**
     * 销售订单明细
     */
    public List<SalesOrderInfo> selectByOrderStatusList(List<String> orderStatusList, String dateBegin, String dateEnd) {
        return orderDetailInfoRepository.selectByOrderStatusList(orderStatusList,dateBegin,dateEnd);
    }

    /**
     * 销售订单(通过，退货)
     */
    public List<SalesOrderPassOrRefund> selectSalesOrderStatusList(List<String> orderStatusList, String dateBegin, String dateEnd) {
        return orderInfoRepository.selectSalesOrderStatusList(orderStatusList,dateBegin,dateEnd);
    }
    public List<CheckAccountOrderDetail> getCheckOrderDetail(String beginDate) {
        return orderInfoRepository.getCheckOrderDetail(beginDate);
    }

    /**
     * 根据userId根据订单
     * @param inviteUserId
     * @return
     */
    public List<OrderInfoEntity> selectByUserId(Long inviteUserId) {
        return orderInfoRepository.selectByUserId(inviteUserId);
    }
    
    /**
	 * 返回限时购活动的商品的数量
	 * @param orderId
	 */
	public void rebackLimitActivityNum(String orderId){
		if(StringUtils.isBlank(orderId)){
			LOGGER.error("updateLimintNum+退款详情表数据有误：{}", orderId);
		}
		LimitBuyParam limitBuyParam = new LimitBuyParam();
		limitBuyParam.setOrderId(orderId);
		List<LimitBuyDetail> buyDetails = buydetailMapper.getUserBuyGoodsNum(limitBuyParam);
		Date date = new Date();
		for (LimitBuyDetail limit : buyDetails) {
			LimitGoodsSku sku =  limitGoodsSkuMapper.selectByPrimaryKey(limit.getLimitGoodsSkuId());
			sku.setLimitCurrTotal(sku.getLimitCurrTotal() + limit.getBuyNo());//回滚数量，在原有的数量上，加上退换的数量
			sku.setUpdatedTime(date);
			limitGoodsSkuMapper.updateByPrimaryKeySelective(sku);
			buydetailMapper.deleteByPrimaryKey(limit.getId());
		}
	}

    public List<CheckAccountOrderDetail> selectOrderDetailsByOrderIds(List<Long> orderIds) {
        Map<String,Object> paramMap = Maps.newHashMap();
        paramMap.put("orderIds",orderIds);
        return orderInfoRepository.selectOrderDetailsByOrderIds(paramMap);
    }
}
