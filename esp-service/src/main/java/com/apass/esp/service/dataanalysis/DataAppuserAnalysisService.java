package com.apass.esp.service.dataanalysis;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.apass.esp.domain.entity.DataAppuserAnalysis;
import com.apass.esp.domain.vo.DataAppuserAnalysisVo;
import com.apass.esp.domain.vo.UserSessionVo;
import com.apass.esp.mapper.DataAppuserAnalysisMapper;
import com.apass.gfb.framework.utils.DateFormatUtil;
@Service
public class DataAppuserAnalysisService {
	
	private static final Logger logger = LoggerFactory.getLogger(DataAppuserAnalysisService.class);
	
	@Autowired
	private DataAppuserAnalysisMapper analysisMapper;
	/**
	 * CREATE
	 * @param entity
	 * @return
	 */
	@Transactional(rollbackFor = {Exception.class,RuntimeException.class})
	public Integer createdEntity(DataAppuserAnalysis entity){
		return analysisMapper.insertSelective(entity);
	}
	/**
	 * DELETE
	 * @param id
	 * @return
	 */
	@Transactional(rollbackFor = {Exception.class,RuntimeException.class})
	public Integer deleteEntity(Long id){
		return analysisMapper.deleteByPrimaryKey(id);
	}
	/**
	 * DELETE
	 * @param entity
	 * @return
	 */
	@Transactional(rollbackFor = {Exception.class,RuntimeException.class})
	public Integer deleteEntity(DataAppuserAnalysis entity){
		return analysisMapper.deleteByPrimaryKey(entity.getId());
	}
	/**
	 * UPDATE
	 * @param entity
	 * @return
	 */
	@Transactional(rollbackFor = {Exception.class,RuntimeException.class})
	public Integer updateEntity(DataAppuserAnalysis entity){
		return analysisMapper.updateByPrimaryKeySelective(entity);
	}
	
	
	@Transactional(rollbackFor = { Exception.class,RuntimeException.class })
	public void insertAnalysis(UserSessionVo vo,String type,String platformids){
		DataAppuserAnalysis analysis = new DataAppuserAnalysis();
		Date date = new Date();
		String dataStr = DateFormatUtil.dateToString(new Date(), "yyyyMMdd");
		String txnId = dataStr + vo.getHourly().split(":")[0];
		if(null == vo.getId()){
			analysis.setCreatedTime(date);
			analysis.setType(Byte.valueOf(type));
			analysis.setPlatformids(Byte.valueOf(platformids));
			analysis.setTxnId(txnId);
			analysisMapper.insertSelective(analysis);
		}else{
			analysis = analysisMapper.getDataAnalysisByTxnId(new DataAppuserAnalysisVo(txnId, platformids, type));
			analysis.setNewuser(vo.getNewuser());
			analysis.setSession(vo.getSession());
			analysis.setUpdatedTime(date);
			analysisMapper.updateByPrimaryKeySelective(analysis);
		}
	}
	
	
	public DataAppuserAnalysis getDataAnalysisByTxnId(DataAppuserAnalysisVo analysis){
		return analysisMapper.getDataAnalysisByTxnId(analysis);
	}
	
}