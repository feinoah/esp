package com.apass.esp.service.category;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apass.esp.common.model.QueryParams;
import com.apass.esp.domain.dto.category.CategoryDto;
import com.apass.esp.domain.entity.Category;
import com.apass.esp.domain.entity.goods.GoodsBasicInfoEntity;
import com.apass.esp.domain.vo.CategoryVo;
import com.apass.esp.mapper.CategoryMapper;
import com.apass.esp.utils.ResponsePageBody;
import com.apass.gfb.framework.utils.DateFormatUtil;
/**
 * 商品分类操作service
 */
@Service
public class CategoryInfoService {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(CategoryInfoService.class);
   
	@Autowired
	private CategoryMapper categoryMapper;
	
	public ResponsePageBody<CategoryVo> listCategory(QueryParams query) {
		ResponsePageBody<CategoryVo> pageBody = new ResponsePageBody<CategoryVo>();
		List<Category> categories = categoryMapper.pageEffectiveList(query);
		List<CategoryVo> voList = new ArrayList<CategoryVo>();
		for (Category v : categories) {
			voList.add(categroyToCathgroyEntiy(v));
		}
		return pageBody;
	}
	//查询客户端首页的前3个类目信息
	public List<CategoryVo> selectCategoryVoList(Long levelId){
		List<Category> categories = categoryMapper.selectCategoryList(levelId);
		List<CategoryVo> voList = new ArrayList<CategoryVo>();
		for (Category v : categories) {
			voList.add(categroyToCathgroyEntiy(v));
		}
		//在此添加客户端首页3个类目小标题和图片
		for(int i=0;i<voList.size();i++){
			if("1".equals(Long.toString(voList.get(i).getSortOrder()))){
				voList.get(i).setCategoryTitle("舒适生活从此开启");
				voList.get(i).setPictureUrl("http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg");
			}else if("2".equals(Long.toString(voList.get(i).getSortOrder()))){
				voList.get(i).setCategoryTitle("让您和您的家人省心更省力");
				voList.get(i).setPictureUrl("http://img06.tooopen.com/images/20170514/tooopen_sy_210126153448.jpg");
			}else if("3".equals(Long.toString(voList.get(i).getSortOrder()))){
				voList.get(i).setCategoryTitle("家装没有你想的那么贵");
				voList.get(i).setPictureUrl("http://img07.tooopen.com/images/20170427/tooopen_sy_207057725658.jpg");
			}
		}
		return voList;
	}
	/**
	 * entity 转  vo 
	 * @param cate
	 * @return
	 */
	public CategoryVo categroyToCathgroyEntiy(Category cate){
		CategoryVo v = new CategoryVo();
		v.setId(cate.getId());
		v.setCategoryName(cate.getCategoryName());
		v.setCreateDate(DateFormatUtil.datetime2String(cate.getCreateDate()));
		v.setCreateUser(cate.getCreateUser());
		v.setLevel(cate.getLevel());
		v.setParentId(cate.getParentId());
		v.setPictureUrl(cate.getPictureUrl());
		v.setSortOrder(cate.getSortOrder());
		v.setUpdateDate(DateFormatUtil.datetime2String(cate.getUpdateDate()));
		v.setUpdateUser(cate.getUpdateUser());
		return v;
	}
	/**
	 * 根据parentId查询下属类别
	 * @param parentId
	 * @return
	 */
	public List<CategoryVo> getCategoryVoListByParentId(long parentId){
		List<Category> categories = categoryMapper.selectByParentKey(parentId);
		List<CategoryVo> voList = new ArrayList<CategoryVo>();
		for (Category v : categories) {
			voList.add(categroyToCathgroyEntiy(v));
		}
		return voList;
	}
	
	/**
	 * 根据类别id获取类别
	 * @param id
	 * @return
	 */
	public Category getCategoryById(long id){
		return categoryMapper.selectByPrimaryKey(id);
	}
	
	/**
	 * 根据类别id修改类别名称
	 * @param id
	 * @param categoryName
	 */
	public void updateCategoryNameById(long id ,String categoryName){
		Category cate = new Category();
		cate.setId(id);
		cate.setCategoryName(categoryName);
		categoryMapper.updateByPrimaryKeySelective(cate);
	}
	
	/**
	 * 根据类目id，删除分类
	 * @param id
	 */
	public void deleteCategoryById(long id){
	
	 List<CategoryVo> cateList = getCategoryVoListByParentId(id);
	 if(cateList == null && cateList.isEmpty()){
		 throw new RuntimeException("该商品分类下存在下级分类!");
	 }
	 
	 //id或parentId下属是否有商品,并且此时商品的状态应该不是(G02:已上架)
	 //TODO
	 List<GoodsBasicInfoEntity> basicList = null;
	 if(basicList == null && basicList.isEmpty()){
		 throw new RuntimeException("该商品分类下存在商品!");
	 }
	 
	 categoryMapper.deleteByPrimaryKey(id);
	 
	}
	
	/**
	 * 根据类别id修改类别排序
	 * @param id
	 */
	public void updateCateSortOrder(long id , long sortOrder){
		Category cate = new Category();
		cate.setId(id);
		cate.setSortOrder(sortOrder);
		categoryMapper.updateByPrimaryKeySelective(cate);
	}
	
	/**
	 * 新增一个类别
	 * @param categoryDto
	 * @return
	 */
	public Category addCategory(CategoryDto categoryDto){
		Category cate = new Category();
		cate.setCategoryName(categoryDto.getCategoryName());
		cate.setCreateDate(DateFormatUtil.string2date(categoryDto.getCreateDate()));
		cate.setCreateUser(categoryDto.getCreateUser());
		cate.setLevel(categoryDto.getLevel());
		cate.setParentId(categoryDto.getParentId());
		cate.setPictureUrl(categoryDto.getPictureUrl());
		cate.setSortOrder(categoryDto.getSortOrder());
		cate.setUpdateDate(DateFormatUtil.string2date(categoryDto.getUpdateDate()));
		cate.setUpdateUser(categoryDto.getUpdateUser());
		categoryMapper.insert(cate);
		return cate;
	}
	
}
