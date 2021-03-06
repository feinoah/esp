package com.apass.esp.domain.dto.refund;

import java.math.BigDecimal;
import java.util.Date;

/**
 * 存放 售后状态为售后完成、订单状态为售后处理中的数据
 * @description 
 *
 * @author liuchao01
 * @version $Id: RefundedOrderInfoDto.java, v 0.1 2017年2月28日 下午2:08:59 liuchao01 Exp ${0xD}
 */
public class RefundedOrderInfoDto {

    private Long refundId;
    
    private String refundStatus;
    
    private String refundType;
    
    private Date completionTime;
    
    private String orderId;
    
    private String orderStatus;
    private BigDecimal refundAmt;
    private BigDecimal orderAmt;

    public BigDecimal getRefundAmt() {
        return refundAmt;
    }

    public void setRefundAmt(BigDecimal refundAmt) {
        this.refundAmt = refundAmt;
    }

    public BigDecimal getOrderAmt() {
        return orderAmt;
    }

    public void setOrderAmt(BigDecimal orderAmt) {
        this.orderAmt = orderAmt;
    }

    public String getRefundType() {
		return refundType;
	}

	public void setRefundType(String refundType) {
		this.refundType = refundType;
	}

	public Long getRefundId() {
        return refundId;
    }

    public void setRefundId(Long refundId) {
        this.refundId = refundId;
    }

    public String getRefundStatus() {
        return refundStatus;
    }

    public void setRefundStatus(String refundStatus) {
        this.refundStatus = refundStatus;
    }

    public Date getCompletionTime() {
        return completionTime;
    }

    public void setCompletionTime(Date completionTime) {
        this.completionTime = completionTime;
    }

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public String getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
    }

    @Override
    public String toString() {
        return "RefundedOrderInfoDto [refundId=" + refundId + ", refundStatus=" + refundStatus + ", completionTime="
               + completionTime + ", orderId=" + orderId + ", orderStatus=" + orderStatus + "]";
    }
    
}
