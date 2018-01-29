package com.apass.esp.web.dataanalysis;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.apass.esp.domain.Response;
import com.apass.esp.service.dataanalysis.DataAppuserRetentionService;
import com.apass.esp.service.dataanalysis.DataEsporderAnalysisService;
/**
 * 报表相关数据  
 * 
 * 用户留存页面相关
 * 运行分析页面相关
 * @author Administrator
 *
 */
@Controller
@RequestMapping("/dataanalysis/operationAnalysisController")
public class OperationAnalysisController {
    private static final Logger logger = LoggerFactory.getLogger(OperationAnalysisController.class);
    @Autowired
    private DataAppuserRetentionService dataAppuserRetentionService;
    @Autowired
    private DataEsporderAnalysisService dataEsporderAnalysisService;
    /**
     * 用户留存数据载入
     * @param map
     * 参数含有
	 * dateStart  起止日期
	 * dateEnd 起止日期
	 * platformids 平台类型
     * @return  map
     * 含有
     * {
     * status:1,
     * mag:"用户留存数据载入成功",
     * data:
     * 	{
     * 		newList = 【newList】
     * 		activityList = 【activityList】
     * 	}
     * }
     * newList:[DataAppuserRetentionVo]
     * activityList:[DataAppuserRetentionVo]
     */
    @ResponseBody
    @RequestMapping("/getAppuserRetentionList")
    public Response getAppuserRetentionList(@RequestBody Map<String, Object> map) {
    	try{
            return dataAppuserRetentionService.getAppuserRetentionList(map);
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            return Response.fail("用户留存数据载入失败");
        }
    }
    /**
     * 运营分析数据载入
     * @param map
     * 参数含有
	 * dateStart  起止日期
	 * dateEnd 起止日期
	 * platformids 平台类型
     * @return map
     * 含有 
     * 含有
     * {
     * status:1,
     * mag:"运营分析数据载入成功",
     * data:【orderAnalysisVo】
     * }
     */
    @ResponseBody
    @RequestMapping("/getOperationAnalysisList")
    public Response getOperationAnalysisList(@RequestBody Map<String, Object> map) {
        try{
            return dataEsporderAnalysisService.getOperationAnalysisList(map);
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            return Response.fail("运行分析数据载入失败");
        }
    }
}