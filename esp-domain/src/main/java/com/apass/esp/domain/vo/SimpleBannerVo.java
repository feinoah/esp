package com.apass.esp.domain.vo;

/**
 * Created by jie.xu on 17/9/26.
 */
public class SimpleBannerVo {
  private String img; //banner图片
  private String linkUrl; //跳转链接
  private String id;//bannerId

  public String getImg() {
    return img;
  }

  public void setImg(String img) {
    this.img = img;
  }

  public String getLinkUrl() {
    return linkUrl;
  }

  public void setLinkUrl(String linkUrl) {
    this.linkUrl = linkUrl;
  }

	public String getId() {
		return id;
	}
	
	public void setId(String id) {
		this.id = id;
	}
  
}
