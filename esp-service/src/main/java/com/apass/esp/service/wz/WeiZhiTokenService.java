package com.apass.esp.service.wz;

import java.util.Date;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apass.esp.third.party.weizhi.client.WeiZhiConstants;
import com.apass.esp.third.party.weizhi.client.WeiZhiTokenClient;
import com.apass.esp.third.party.weizhi.entity.TokenEntity;
import com.apass.gfb.framework.cache.CacheManager;
import com.apass.gfb.framework.utils.DateFormatUtil;

@Service
public class WeiZhiTokenService {
	@Autowired
	private WeiZhiTokenClient weiZhiTokenClient;
	@Autowired
	private CacheManager cacheManager;

	/**
	 * 从微知获取Token
	 * 
	 * @return
	 * @throws Exception
	 */
	public String getToken() throws Exception {
		TokenEntity token = weiZhiTokenClient.getToken();
		if (null != token && StringUtils.isNotEmpty(token.getAccess_token())) {
			//计算Token在redis中的有效期（time=微知有效时间-当前时间）
			String weiZhitokenExpired=token.getExpired_time();
			Date date = DateFormatUtil.string2date(weiZhitokenExpired, "");
			if(null ==date){
				return "fail";
			}
			long tokenExpired=date.getTime()-new Date().getTime();
			if(tokenExpired>0){
				// 将token和其有效期存放到redies中
				cacheManager.set(WeiZhiConstants.WEIZHI_TOKEN + ":" + WeiZhiConstants.ACCESS_TOKEN,
						token.getAccess_token(),(int)tokenExpired);
				cacheManager.set(WeiZhiConstants.WEIZHI_TOKEN + ":" + WeiZhiConstants.EXPIRED_TIME,
						token.getExpired_time());
			}

			return token.getAccess_token();
		}
		return "fail";
	}

	/**
	 * 从Redis获取token
	 * 
	 * @return
	 * @throws Exception
	 */
	public String getTokenFromRedis() throws Exception {
		String token = cacheManager.get(WeiZhiConstants.WEIZHI_TOKEN + ":" + WeiZhiConstants.ACCESS_TOKEN);
		if(StringUtils.isNotBlank(token)){
			String expiredTime = cacheManager.get(WeiZhiConstants.WEIZHI_TOKEN + ":" + WeiZhiConstants.EXPIRED_TIME);
			Date date = DateFormatUtil.string2date(expiredTime, "");
			if(null != date && date.getTime() >  new Date().getTime()){
				return token;
			}
		}
		getToken();
		token = cacheManager.get(WeiZhiConstants.WEIZHI_TOKEN + ":" + WeiZhiConstants.ACCESS_TOKEN);
//		String token =weiZhiTokenClient.getToken().getAccess_token();
		return token;
	}
}
