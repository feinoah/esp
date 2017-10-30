package com.apass.esp.service.offer;

import java.util.List;
import java.util.Map;

import com.apass.esp.domain.enums.CouponType;
import com.apass.esp.service.goods.GoodsService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.apass.esp.domain.entity.ProCoupon;
import com.apass.esp.mapper.ProCouponMapper;
import com.apass.gfb.framework.mybatis.page.Pagination;

/**
 * Created by xiaohai on 2017/10/30.
 */
@Service
@Transactional
public class ProCouponService {
    @Autowired
    private ProCouponMapper couponMapper;
    @Autowired
    private GoodsService goodsService;

    /**
     * 分页查询优惠券列表
     * @param paramMap
     * @return
     */
    public Pagination<ProCoupon> pageList(Map<String, Object> paramMap) {
        Pagination<ProCoupon> pagination = new Pagination<>();
        List<ProCoupon> proCouponList = couponMapper.pageList(paramMap);
        Integer count = couponMapper.pageListCount(paramMap);
        pagination.setDataList(proCouponList);
        pagination.setTotalCount(count);
        return pagination;
    }
    /**
     * 根据商品code查询优惠券
     * @return
     */
    public List<ProCoupon> getProCouponList(String goodsCode) {
        return couponMapper.getProCouponListByGoodsCode(goodsCode);
    }

    public Integer inserProcoupon(ProCoupon proCoupon) {
        if(StringUtils.equals(proCoupon.getType(), CouponType.COUPON_ZDSP.getCode())){
            //goodsService.selectGoodsByGoodsCode(proCoupon.getGoodsCode());
        }
        return null;
    }

}
