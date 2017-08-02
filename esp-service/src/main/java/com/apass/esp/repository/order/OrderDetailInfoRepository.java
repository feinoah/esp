package com.apass.esp.repository.order;

import java.util.List;

import com.apass.esp.domain.entity.order.OrderDetailInfoEntity;
import com.apass.gfb.framework.annotation.MyBatisRepository;
import com.apass.gfb.framework.exception.BusinessException;
import com.apass.gfb.framework.mybatis.support.BaseMybatisRepository;

@MyBatisRepository
public class OrderDetailInfoRepository extends BaseMybatisRepository<OrderDetailInfoEntity, Long> {
    /**
     * 根据订单号查询订单详情
     *
     * @throws BusinessException
     */
    public List<OrderDetailInfoEntity> queryOrderDetailInfo(String orderId) throws BusinessException {
        try {
            List<OrderDetailInfoEntity> jmList = getSqlSession().selectList(getSQL("queryOrderDetailInfo"), orderId);
            return jmList;
        } catch (Exception e) {
            throw new BusinessException("查询用户的消息列表失败", e);
        }
    }

    /**
     * 根据订单列表查询订单详情
     *
     * @param orderId
     * @return
     * @throws BusinessException
     */
    public List<OrderDetailInfoEntity> queryOrderDetailListByOrderList(List<String> orderList) throws BusinessException {
        try {
            List<OrderDetailInfoEntity> jmList = getSqlSession().selectList(getSQL("queryOrderDetailListByOrderList"), orderList);
            return jmList;
        } catch (Exception e) {
            throw new BusinessException("查询用户的消息列表失败", e);
        }
    }

    /**
     * 根据 商户订单id查询订单详情
     *
     * @param subOrderId
     * @return
     */
    public List<OrderDetailInfoEntity> queryOrderDetailBySubOrderId(String subOrderId) {
        return getSqlSession().selectList(getSQL("queryOrderDetailBySubOrderId"), subOrderId);
    }

	/**
	 * 根据skuId查询商品是否被下单过
	 * @param skuIds
	 * @return
	 */
	public List<OrderDetailInfoEntity> queryOrderDetailBySkuIds(
			List<Long> skuIds) {
		return getSqlSession().selectList(getSQL("queryOrderDetailBySkuIds"), skuIds);
	}
}
