package com.apass.esp.service.zhongyuan;

import com.apass.esp.domain.dto.PrizeAndCouponDto;
import com.apass.esp.domain.entity.ZYPriceCollecEntity;
import com.apass.esp.mapper.ZYPriceCollecEntityMapper;
import com.apass.gfb.framework.environment.SystemEnvConfig;
import com.apass.gfb.framework.exception.BusinessException;
import com.apass.gfb.framework.utils.DateFormatUtil;
import com.google.common.collect.Maps;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * Created by DELL on 2018/8/21.
 */
@Service
public class ZYPriceCollecService {

    @Autowired
    private SystemEnvConfig systemEnvConfig;

    @Autowired
    private ZYPriceCollecEntityMapper zyPriceCollecEntityMapper;

    //获取中原领取奖品活动id
    public long getZyActicityCollecId(){//TODO 生产环境写死activityId
        if(systemEnvConfig.isPROD()){
            return 39l;
        }else{
            return 315L;
        }
    }


    public void addPriceCollec(ZYPriceCollecEntity zyPriceCollecEntity) throws BusinessException{
        if(zyPriceCollecEntity.getCompanyName().indexOf("北京") != -1){
            zyPriceCollecEntity.setCompanyName("北京");
        }
       Integer count = zyPriceCollecEntityMapper.countByQHRewardType(zyPriceCollecEntity.getQhRewardType(),
                zyPriceCollecEntity.getCompanyName(),String.valueOf(getZyActicityCollecId()));
        int max;
        if(systemEnvConfig.isPROD()){
            max = 100;
        }else {
            max = 5;
        }
       if(count >= max){
           throw new BusinessException("奖品领取已达到上限！");
       }
       //检查是否重复领取
        ZYPriceCollecEntity t = selectByEmpTel(zyPriceCollecEntity.getEmpTel(),zyPriceCollecEntity.getActivityId());
       if(t != null ){
           throw new BusinessException("您已领取过该奖品！");
       }
       zyPriceCollecEntityMapper.insertSelective(zyPriceCollecEntity);

    }

    /**
     * 根据员工手机号和活动id查询员工是否已领取礼包
     * @param empTel
     * @param activityId
     * @return
     */
    public ZYPriceCollecEntity selectByEmpTel(String empTel, String activityId) {
        return zyPriceCollecEntityMapper.selectByEmpTel(empTel,activityId);
    }

    /**
     * 校验奖励盗取是否已达上限：根据qhRewardType字段和companyName判断
     * @param qhRewardType
     * @param companyName
     * @return true--已达上限，false--未达上限
     */
    public boolean ifUpflag(String qhRewardType,String companyName,String activityId){
        if(companyName.indexOf("北京") != -1){
            companyName = "北京";
        }
        Integer count = zyPriceCollecEntityMapper.countByQHRewardType(qhRewardType, companyName,activityId);
        int max;
        if(systemEnvConfig.isPROD()){
            max = 100;
        }else {
            max = 5;
        }
        if(count>=max){//TODO
            return true;
        }
        return false;
    }


    public List<ZYPriceCollecEntity> getAllZYCollecByStartandEndTime( String startDate, String endDate) {
        Map<String,Object> paramMap1 = Maps.newHashMap();
        paramMap1.put("startDate",startDate);
        paramMap1.put("endDate",endDate);
        return zyPriceCollecEntityMapper.selectAllCollec(paramMap1);
    }

    /**
     * 查询指定时间段内门店名称及对应领取背包数量
     * @param startDate
     * @param endDate
     * @param companyName
     * @return
     */
    public Integer getCountByStartandEndTimeAndCompanyname(String startDate, String endDate, String companyName) {
        Map<String,Object> paramMap1 = Maps.newHashMap();
        paramMap1.put("startDate",startDate);
        paramMap1.put("endDate",endDate);
        paramMap1.put("companyName",companyName);

        return zyPriceCollecEntityMapper.getCountByStartandEndTimeAndCompanyname(paramMap1);
    }
}
