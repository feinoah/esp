package com.apass.esp.service.dataanalysis;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.apass.esp.domain.Response;
import com.apass.esp.domain.entity.DataAppuserAnalysis;
import com.apass.esp.domain.entity.DataAppuserRetention;
import com.apass.esp.domain.vo.DataAnalysisVo;
import com.apass.esp.domain.vo.DataAppuserAnalysisVo;
import com.apass.esp.domain.vo.DataAppuserRetentionDto;
import com.apass.esp.domain.vo.DataAppuserRetentionVo;
import com.apass.esp.domain.vo.DataRetentionVo;
import com.apass.esp.mapper.DataAppuserAnalysisMapper;
import com.apass.esp.mapper.DataAppuserRetentionMapper;
import com.apass.gfb.framework.utils.CommonUtils;
import com.apass.gfb.framework.utils.DateFormatUtil;
import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
@Service
public class DataAppuserRetentionService {
	@Autowired
	private DataAppuserRetentionMapper dataAppuserRetentionMapper;
	@Autowired
	private DataAppuserAnalysisMapper dataAppuserAnalysisMapper;
	@Autowired
	private DataAppuserAnalysisService dataAppuserAnalysisService;
	/**
	 * CREATE
	 * @param entity
	 * @return
	 */
	@Transactional(rollbackFor = {Exception.class,RuntimeException.class})
	public Integer createdEntity(DataAppuserRetention entity){
		return dataAppuserRetentionMapper.insertSelective(entity);
	}
	/**
	 * DELETE
	 * @param id
	 * @return
	 */
	@Transactional(rollbackFor = {Exception.class,RuntimeException.class})
	public Integer deleteEntity(Long id){
		return dataAppuserRetentionMapper.deleteByPrimaryKey(id);
	}
	/**
	 * DELETE
	 * @param entity
	 * @return
	 */
	@Transactional(rollbackFor = {Exception.class,RuntimeException.class})
	public Integer deleteEntity(DataAppuserRetention entity){
		return dataAppuserRetentionMapper.deleteByPrimaryKey(entity.getId());
	}
	/**
	 * UPDATE
	 * @param entity
	 * @return
	 */
	@Transactional(rollbackFor = {Exception.class,RuntimeException.class})
	public Integer updateEntity(DataAppuserRetention entity){
		return dataAppuserRetentionMapper.updateByPrimaryKeySelective(entity);
	}
	/**
	 * 用户留存数据载入
	 * 参数含有
	 * @param dateStart
	 * @param dateEnd
	 * @param platformids
	 * @return
	 */
	public Response getAppuserRetentionList(Map<String, Object> map) {
		map = conversionParam(map);
		List<DataAppuserRetention> list = dataAppuserRetentionMapper.getAppuserRetentionList(map);
		List<DataAppuserRetentionVo> newList = new ArrayList<DataAppuserRetentionVo>();
		List<DataAppuserRetentionVo> activityList = new ArrayList<DataAppuserRetentionVo>();
		for(DataAppuserRetention entity : list){
			Map<String, DataAppuserRetentionVo> mapEntity = conversionEntity(entity);
			DataAppuserRetentionVo newEntity = mapEntity.get("newEntity");
			DataAppuserRetentionVo activityEntity = mapEntity.get("activityEntity");
			newList.add(newEntity);
			activityList.add(activityEntity);
		}
		map.put("newList", newList);
		map.put("activityList", activityList);
		return Response.success("用户留存数据载入成功！", map);
	}
	/**
	 * 转化参数
	 * @param map
	 * @return
	 */
	private Map<String, Object> conversionParam(Map<String, Object> map) {
		String dateType = CommonUtils.getValue(map, "dateType");
		if(StringUtils.equals(dateType, "orther")){
			return map;
		}
		Date now = new Date();
		Date date = null;
		String day = DateFormatUtil.dateToString(now, "yyyy-MM-dd");
		String beginDate = null;
		String endDate = day + " 23:59:59";
		switch (dateType) {
		case "orther":
			return map;
		case "today":
			beginDate = day + " 00:00:00";
			map.put("beginDate", beginDate);
			map.put("endDate", endDate);
			break;
		case "yesterday":
			date = DateFormatUtil.addDays(now, -1);
			day = DateFormatUtil.dateToString(date, "yyyy-MM-dd");
			beginDate = day + " 00:00:00";
			map.put("beginDate", beginDate);
			map.put("endDate", endDate);
			break;
		case "lastseven":
			date = DateFormatUtil.addDays(now, -7);
			day = DateFormatUtil.dateToString(date, "yyyy-MM-dd");
			beginDate = day + " 00:00:00";
			map.put("beginDate", beginDate);
			map.put("endDate", endDate);
			break;
		case "lastthirty":
			date = DateFormatUtil.addDays(now, -30);
			day = DateFormatUtil.dateToString(date, "yyyy-MM-dd");
			beginDate = day + " 00:00:00";
			map.put("beginDate", beginDate);
			map.put("endDate", endDate);
			break;
		}
		return map;
	}
	/**
	 * 转化实体类
	 * @param entity
	 * @return
	 */
	private Map<String, DataAppuserRetentionVo> conversionEntity(DataAppuserRetention entity) {
		Map<String, DataAppuserRetentionVo> map = new HashMap<String, DataAppuserRetentionVo>();
		DataAppuserRetentionVo newEntity = new DataAppuserRetentionVo();
		DataAppuserRetentionVo activityEntity = new DataAppuserRetentionVo();
		String dayData = DateFormatUtil.string2string(entity.getTxnId(), "yyyyMMdd", "MM月dd日");
		newEntity.setDataType("new");
		newEntity.setDay1(entity.getDay1retention());
		newEntity.setDay3(entity.getDay3retention());
		newEntity.setDay7(entity.getDay7retention());
		newEntity.setDay14(entity.getDay14retention());
		newEntity.setDay30(entity.getDay30retention());
		newEntity.setDay7churnuser(entity.getDay7churnuser());
		newEntity.setDay14churnuser(entity.getDay14churnuser());
		newEntity.setDay7backuser(entity.getDay7backuser());
		newEntity.setDay14backuser(entity.getDay14backuser());
		activityEntity.setDataType("activity");
		activityEntity.setDay1(entity.getDauday1retention());
		activityEntity.setDay3(entity.getDauday3retention());
		activityEntity.setDay7(entity.getDauday7retention());
		activityEntity.setDay14(entity.getDauday14retention());
		activityEntity.setDay30(entity.getDauday30retention());
		activityEntity.setDay7churnuser(entity.getDay7churnuser());
		activityEntity.setDay14churnuser(entity.getDay14churnuser());
		activityEntity.setDay7backuser(entity.getDay7backuser());
		activityEntity.setDay14backuser(entity.getDay14backuser());
		newEntity.setDayData(dayData);
		activityEntity.setDayData(dayData);
		map.put("newEntity", newEntity);
		map.put("activityEntity", activityEntity);
		return map;
	}

	public Response getOperationAnalysisList(Map<String, Object> map) {
		List<DataAppuserAnalysis> list = dataAppuserAnalysisService.getAppuserAnalysisList(map);
		return null;
	}
	
	public DataAppuserRetention getDataAnalysisByTxnId(DataAnalysisVo analysis){
		return dataAppuserRetentionMapper.getDataAnalysisByTxnId(analysis);
	}
	
	/**
	 * 每天跑一次
	 * @param dto
	 */
	@Transactional(rollbackFor = {Exception.class,RuntimeException.class})
	public void insertRetention(DataAppuserRetentionDto dto){
		if(null != dto){
			
			DataAppuserRetention retention = new DataAppuserRetention();
			Date date = new Date();
			retention.setTxnId(dto.getDaily().replace("-", ""));
			if(null != dto.getId()){
				retention = dataAppuserRetentionMapper.getDataAnalysisByTxnId(new DataAnalysisVo(retention.getTxnId(),dto.getPlatformids().toString(),"2","00"));
			}
			
			retention.setUpdatedTime(date);
			retention.setPlatformids(dto.getPlatformids());
			
			retention.setDauday1retention(dto.getDauday1retention());
			retention.setDauday3retention(dto.getDauday3retention());
			retention.setDauday7retention(dto.getDauday7retention());
			retention.setDauday14retention(dto.getDauday14retention());
			retention.setDauday30retention(dto.getDauday30retention());
			
			retention.setDay1retention(dto.getDay1retention());
			retention.setDay3retention(dto.getDay3retention());
			retention.setDay7retention(dto.getDay7retention());
			retention.setDay14retention(dto.getDay14retention());
			retention.setDay30retention(dto.getDay30retention());
			
			retention.setDay7churnuser(dto.getDay7churnuser());
			retention.setDay14churnuser(dto.getDay14churnuser());
			
			retention.setDay7backuser(dto.getDay7backuser());
			retention.setDay14backuser(dto.getDay14backuser());
			
			if(null == retention.getId()){
				retention.setCreatedTime(date);
				dataAppuserRetentionMapper.insertSelective(retention);
			}else{
				dataAppuserRetentionMapper.updateByPrimaryKeySelective(retention);
			}
		}
	}
	
	/**
	 * 
	 * @param startDate 开始时间
	 * @param endDate 结束时间
	 * @param days 近几天（如果有值，应该是数字）
	 * @param platformId(平台（1.安卓 2.苹果 3.全平台）)
	 * @return
	 */
	public Map<String,Object> getDateByTimeAndTypeAndPlatFormId(String startDate,String endDate,String days,String platformId){
		/*** 返回参数的map*/
		Map<String,Object> values = Maps.newHashMap();
		
		/*** 如果传过来的days不为空，优先使用days*/
		Map<String,Object> params = getTimeInterval(startDate, endDate, days);
		if(params.isEmpty()){
			return null;
		}
		params.put("platformids", platformId);
		params.put("isDelete","00");
		params.put("type","2");
		
		/**** 获取数据趋势的第一块数据 */
		Map<String,Object> userSessionMap = getDataAboutNewUserSessionAvg(params);
		
		/*** 活跃分析*/
		List<DataAppuserAnalysis> analysis = dataAppuserAnalysisMapper.getAppuserAnalysisList(params);
		List<DataAppuserAnalysisVo> dataActivityUserVo = Lists.newArrayList();
		for (DataAppuserAnalysis data : analysis) {
			DataAppuserAnalysisVo vo =  new DataAppuserAnalysisVo();
			vo.setDaily(data.getTxnId());
			vo.setActiveuser(data.getActiveuser());//日活跃
			vo.setWau(data.getWau());//周活跃
			vo.setMau(data.getMau());//月活跃
			dataActivityUserVo.add(vo);
		}
		
		
		/*** 留存分析*/
		Double day1Sum = 0.0;
		Double day1Avg = 0.0;
		
		Double day7Sum = 0.0;
		Double day7Avg = 0.0;
		
		Double day30Sum = 0.0;
		Double day30Avg = 0.0;
		List<DataAppuserRetention> list = dataAppuserRetentionMapper.getAppuserRetentionList(params);
		List<DataRetentionVo> retentionVo = Lists.newArrayList(); 
		for (DataAppuserRetention data : list) {
			DataRetentionVo vo = new DataRetentionVo();
			day1Sum += Double.parseDouble(data.getDay1retention());
			day7Sum += Double.parseDouble(data.getDay7retention());
			day30Sum += Double.parseDouble(data.getDay30retention());
			vo.setDaily(data.getTxnId());
			vo.setDay1retention(data.getDay1retention());
			vo.setDay7retention(data.getDay7retention());
			vo.setDay30retention(data.getDay30retention());
			retentionVo.add(vo);
		}
		
		/*** 次日留存均值    7日留存均值    30日留存均值*/
		if(CollectionUtils.isNotEmpty(list)){
			long size = list.size();
			day1Avg = day1Sum / size;
			day7Avg = day7Sum / size;
			day30Avg = day30Sum / size;
		}
		
		values.putAll(userSessionMap);
		values.put("activeAnalysis", dataActivityUserVo);
		values.put("retainAnalysis", retentionVo);
		values.put("day1RetentionAvg", day1Avg);
		values.put("day7RetentionAvg", day7Avg);
		values.put("day30RetentionAvg", day30Avg);
		return values;
	}
	
	/**
	 * 获取新增用户和启动和使用时长
	 * @param params
	 * @return
	 */
	public Map<String,Object> getDataAboutNewUserSessionAvg(Map<String,Object> params){
		
		Map<String,Object> values = Maps.newHashMap();
		
		Long newuserSum = 0l;//新增用户总数
		Long newuserAvg = 0l;//平均新增用户数
		
		Long sessionSum = 0l;//启动时长总计
		Long sessionAvg = 0l;//平均启动时长
		
		Double avgsessionSum = 0.0;//平均使用时长总计
		Double avgsessionLength = 0.0;//平均使用时长
		/*** 新增用户  区间内每天对应的  新增人数 启动  平均使用时长*/
		List<DataAppuserAnalysisVo> dataNewUserVo = Lists.newArrayList();
		List<DataAppuserAnalysis> analysis = dataAppuserAnalysisMapper.getAppuserAnalysisList(params);
		for (DataAppuserAnalysis data : analysis) {
			DataAppuserAnalysisVo vo =  new DataAppuserAnalysisVo();
			newuserSum += Integer.parseInt(data.getNewuser());
			sessionSum += Integer.parseInt(data.getSession());
			avgsessionSum += Double.parseDouble(data.getAvgsessionlength());
			vo.setDaily(data.getTxnId());
			vo.setNewuser(data.getNewuser());
			vo.setSession(data.getSession());
			vo.setSessionAvg(data.getAvgsessionlength());
			dataNewUserVo.add(vo);
		}
		/*** 平均新增用户 ，平均启动时长 ，平均使用时长*/
		if(CollectionUtils.isNotEmpty(analysis)){
			long size = analysis.size();
			newuserAvg = newuserSum / size;
			sessionAvg = sessionSum / size;
			avgsessionLength = avgsessionSum / size;
		}
		
		//数据趋势 新增 启动 平均使用时长的图填充数据
		values.put("dataAnalysis", dataNewUserVo);
		values.put("newuserSum",newuserSum);//新增用户总计
		values.put("newuserAvg",newuserAvg);//日均新增用户
		values.put("sessionSum",sessionSum);//启动次数总计
		values.put("sessionAvg",sessionAvg);//日均启动次数
		values.put("avgsessionLength",avgsessionLength);//平均单次使用时长
		return values;
	}
	
	/**
	 * 根据传入的值，获取区间
	 * @param startDate
	 * @param endDate
	 * @param days
	 * @return
	 */
	public Map<String,Object> getTimeInterval(String startDate,String endDate,String days){
		
		Map<String,Object> params = Maps.newHashMap();
		if(StringUtils.isNotBlank(days) && StringUtils.isBlank(startDate) && StringUtils.isBlank(endDate)){
			Date now = new Date();
			startDate = DateFormatUtil.getAddDaysString(now, Integer.parseInt(days));
			endDate = DateFormatUtil.dateToString(now);
		}else{
			if(StringUtils.isBlank(startDate) || StringUtils.isBlank(endDate)){
				return params;
			}
		}
		startDate = startDate.replace("-", "");
		endDate = endDate.replace("-", "");
		params.put("dateStart", startDate);
		params.put("dateEnd",endDate);
		return params;
	}
	
}