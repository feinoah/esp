package com.apass.esp.domain.query;

import com.apass.esp.common.model.QueryParams;

/**
 * Created by jie.xu on 17/4/28.
 */
public class ActivityBindRelStatisticQuery extends QueryParams{

  private String startCreateDate;
  private String endCreateDate;

  public String getStartCreateDate() {
    return startCreateDate;
  }

  public void setStartCreateDate(String startCreateDate) {
    this.startCreateDate = startCreateDate;
  }

  public String getEndCreateDate() {
    return endCreateDate;
  }

  public void setEndCreateDate(String endCreateDate) {
    this.endCreateDate = endCreateDate;
  }
}
