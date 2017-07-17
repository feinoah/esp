package com.apass.esp.schedule;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.apass.esp.common.code.BusinessErrorCode;
import com.apass.esp.domain.entity.goods.GoodsInfoEntity;
import com.apass.esp.domain.entity.merchant.MerchantInfoEntity;
import com.apass.esp.domain.entity.order.OrderDetailInfoEntity;
import com.apass.esp.domain.entity.order.OrderInfoEntity;
import com.apass.esp.domain.enums.PaymentStatus;
import com.apass.esp.domain.enums.SourceType;
import com.apass.esp.repository.goods.GoodsRepository;
import com.apass.esp.repository.order.OrderDetailInfoRepository;
import com.apass.esp.repository.order.OrderInfoRepository;
import com.apass.esp.service.common.CommonService;
import com.apass.esp.service.goods.GoodsService;
import com.apass.esp.service.merchant.MerchantInforService;
import com.apass.esp.service.order.OrderService;
import com.apass.esp.third.party.jd.client.JdApiResponse;
import com.apass.esp.third.party.jd.client.JdOrderApiClient;
import com.apass.gfb.framework.exception.BusinessException;
import com.apass.gfb.framework.logstash.LOG;
import org.apache.commons.collections.CollectionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Profile;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

/**
 * type: class
 * 确认预占库存，拆单情况处理
 *
 * @author xianzhi.wang
 * @see
 * @since JDK 1.8
 */

@Component
@Configurable
@EnableScheduling
//@Profile("Schedule")
public class JdConfirmPreInventoryTask {

    private static final Logger LOGGER = LoggerFactory.getLogger(JdConfirmPreInventoryTask.class);

    @Autowired
    private OrderService orderService;

    @Autowired
    private JdOrderApiClient jdOrderApiClient;

    @Autowired
    private GoodsService goodsService;

    @Autowired
    private MerchantInforService merchantInforService;

    @Autowired
    private CommonService commonService;

    @Autowired
    public OrderInfoRepository orderInfoRepository;

    @Autowired
    public OrderDetailInfoRepository orderDetailInfoRepository;

    @Autowired
    public GoodsRepository goodsDao;

    @Scheduled(cron = "0 0/30 * * * *")
    public void handleJdConfirmPreInventoryTask() {

        List<OrderInfoEntity> orderInfoEntityList = orderService.getOrderByOrderStatusAndPreStatus();
        if (CollectionUtils.isEmpty(orderInfoEntityList)) {
            return;
        }
        for (OrderInfoEntity orderInfoEntity : orderInfoEntityList
                ) {
            String jdOrderIdp = orderInfoEntity.getExtOrderId();
            LOGGER.info(" JdConfirmPreInventoryTask  jdOrderIdp {}  begin....", jdOrderIdp);
            long jdOrderId = Long.valueOf(jdOrderIdp);
            JdApiResponse<Boolean> confirmResponse = jdOrderApiClient.orderOccupyStockConfirm(jdOrderId);
            LOGGER.info("confirm order jdOrderIdp {} confirmResponse {}", jdOrderIdp, confirmResponse.toString());
            //int confirmStatus = 0;
            if (confirmResponse.isSuccess() && confirmResponse.getResult()) {
                JdApiResponse<JSONObject> jdApiResponse = jdOrderApiClient.orderJdOrderQuery(jdOrderId);
                if (!jdApiResponse.isSuccess()) {
                    LOGGER.info("confirm order jdOrderIdp {} confirmResponse {} orderJdOrderQuery result {}", jdOrderIdp, confirmResponse.toString(), jdApiResponse);
                    continue;
                }
                JSONObject jsonObject = jdApiResponse.getResult();
                try {
                    orderService.jdSplitOrderMessageHandle(jsonObject,orderInfoEntity);
                } catch (BusinessException e) {
                    LOGGER.info("jdSplitOrderMessageHandle do not have split ",jdOrderIdp);
                    continue;
                }catch (Exception e ){
                    continue;
                }
            } else {
                LOGGER.info("confirm order jdOrderIdp {}  error confirmResponse: {}", jdOrderIdp, confirmResponse);
            }
        }
    }

}