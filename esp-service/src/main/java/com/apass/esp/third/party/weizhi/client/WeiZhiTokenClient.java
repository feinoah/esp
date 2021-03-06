package com.apass.esp.third.party.weizhi.client;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.apass.esp.common.utils.JsonUtil;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.http.NameValuePair;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.protocol.HTTP;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apass.esp.third.party.weizhi.entity.TokenEntity;
import com.apass.gfb.framework.utils.DateFormatUtil;
import com.apass.gfb.framework.utils.GsonUtils;
import com.apass.gfb.framework.utils.HttpClientUtils;

@Service
public class WeiZhiTokenClient {
	private static final Logger LOGGER = LoggerFactory.getLogger(WeiZhiTokenClient.class);
	@Autowired
	private WeiZhiConstants weiZhiConstants;

	/**
	 * 从微知获取token
	 * 
	 * @return
	 * @throws Exception
	 */
	public TokenEntity getToken() throws Exception {
		String timestamp = DateFormatUtil.dateToString(new Date(), "");
		List<NameValuePair> parameters = new ArrayList<NameValuePair>();
		BasicNameValuePair param1 = new BasicNameValuePair("grant_type", WeiZhiConstants.GRANT_TYPE);
		BasicNameValuePair param2 = new BasicNameValuePair("client_id", weiZhiConstants.getClientId());
		BasicNameValuePair param3 = new BasicNameValuePair("user_name", weiZhiConstants.getUserName());
		BasicNameValuePair param5 = new BasicNameValuePair("password", DigestUtils.md5Hex(weiZhiConstants.getPassword()));
		BasicNameValuePair param4 = new BasicNameValuePair("timestamp", timestamp);
		BasicNameValuePair param6 = new BasicNameValuePair("sign", weiZhiConstants.getSign(timestamp));
		parameters.add(param1);
		parameters.add(param2);
		parameters.add(param3);
		parameters.add(param4);
		parameters.add(param5);
		parameters.add(param6); 

		UrlEncodedFormEntity ent = new UrlEncodedFormEntity(parameters, HTTP.UTF_8);
		LOGGER.info("----getToken------ params:{}", JsonUtil.toJsonString(parameters));
		String responseJson = null;
		TokenEntity token = null;
		try {
			responseJson = HttpClientUtils.getMethodPostResponse(weiZhiConstants.getTokenUrl(), ent);
			LOGGER.info("微知获取token返回Json数据：" + responseJson);
			if (null == responseJson) {
				LOGGER.info("微知获取token失败！");
				return null;
			}
			WeiZhiTokenResponse response = GsonUtils.convertObj(responseJson, WeiZhiTokenResponse.class);
			if (null != response && response.getResult() == 0) {
				token = response.getData();

			}
		} catch (Exception e) {
			LOGGER.error("getToken response {} return is not 200",e);
		}
		return token;
	}
}
