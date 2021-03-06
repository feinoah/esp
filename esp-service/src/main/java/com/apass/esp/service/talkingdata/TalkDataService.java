package com.apass.esp.service.talkingdata;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apass.esp.domain.dto.statement.Filter;
import com.apass.esp.domain.dto.statement.TalkingDataDto;
import com.apass.esp.domain.enums.TermainalTyps;
import com.apass.esp.repository.httpClient.CommonHttpClient;
import com.apass.gfb.framework.utils.DateFormatUtil;

/**
 * 从talkingData获取数据
 * @author xiaohai
 *
 */
@Service
public class TalkDataService {
    private static final Logger LOGGER = LoggerFactory.getLogger(TalkDataService.class);
    @Autowired
    private CommonHttpClient commonHttpClient;

    /**
     * @param beginDate:开始时间
     * @param date:结束时间
     * @param metrics:查询指标（可以多个）
     * @param groupby:数据输出方式
     * @return
     */
    public String getTalkingData(Date beginDate, Date date, String metrics, String groupby) {
        TalkingDataDto talkingDataDto = new TalkingDataDto();
        talkingDataDto.setGroupby(groupby);
        
        ArrayList<String> arrayList = new ArrayList<String>();
        arrayList.add(metrics);
        talkingDataDto.setMetrics(arrayList);
        
        Filter filter = new Filter();
        filter.setStart(DateFormatUtil.dateToString(beginDate, DateFormatUtil.YYYY_MM_DD));
        filter.setEnd(DateFormatUtil.dateToString(date, DateFormatUtil.YYYY_MM_DD));
        talkingDataDto.setFilter(filter);
        
        String str = commonHttpClient.talkingData(talkingDataDto);
        return str;
    }


    public String getTalkingData1(Date beginDate, Date date, String metrics, String groupby,String type) {
        try {
            TimeUnit.SECONDS.sleep(11);
        } catch (InterruptedException e) {
            LOGGER.error("-----getTalkingData1 Exception---->",e);
        }
        TalkingDataDto talkingDataDto = new TalkingDataDto();
        talkingDataDto.setGroupby(groupby);

        ArrayList<String> arrayList = new ArrayList<String>();
        arrayList.add(metrics);
        talkingDataDto.setMetrics(arrayList);

        Filter filter = new Filter();
        ArrayList<Integer> integerArrayList = new ArrayList<>();
        integerArrayList.add(Integer.parseInt(TermainalTyps.getCode(type)));
        
        filter.setPlatformids(integerArrayList);
        filter.setStart(DateFormatUtil.dateToString(beginDate, DateFormatUtil.YYYY_MM_DD));
        filter.setEnd(DateFormatUtil.dateToString(date, DateFormatUtil.YYYY_MM_DD));
        talkingDataDto.setFilter(filter);

        String str = commonHttpClient.talkingData(talkingDataDto);
        return str;
    }
    
    public String getTalkingDataByDataAnalysis(Date start,Date end,ArrayList<String> metrics, String groupby,String type){
    	try {
            TimeUnit.SECONDS.sleep(15);
        } catch (InterruptedException e) {
            LOGGER.error("-----getTalkingDataByDataAnalysis Exception---->",e);
        }
        TalkingDataDto talkingDataDto = new TalkingDataDto();
        talkingDataDto.setGroupby(groupby);

        talkingDataDto.setMetrics(metrics);

        Filter filter = new Filter();
        if(StringUtils.isNotBlank(type)){//首先确定type不能为空，其次如果type传入的值为0，则不作为条件查询
        	Integer typeId = Integer.parseInt(TermainalTyps.getCode(type));
            if(null != typeId && typeId != 0){
            	ArrayList<Integer> integerArrayList = new ArrayList<>();
                integerArrayList.add(typeId);
                filter.setPlatformids(integerArrayList);
            }
        }
        filter.setStart(DateFormatUtil.dateToString(start, DateFormatUtil.YYYY_MM_DD));
        filter.setEnd(DateFormatUtil.dateToString(end, DateFormatUtil.YYYY_MM_DD));
        talkingDataDto.setFilter(filter);

        String str = commonHttpClient.talkingData(talkingDataDto);
    	
    	return str;
    }
    
    public String getTalkingDataByDataAnalysis(ArrayList<String> metrics, String groupby,String type) {
    	Date date = new Date();
        return getTalkingDataByDataAnalysis(date, date, metrics, groupby, type);
    }
    
}
