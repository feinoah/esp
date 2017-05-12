package com.apass.esp.service.category;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.apass.esp.domain.dto.category.CategoryDto;
import com.apass.esp.domain.entity.categroy.Category;
import com.apass.esp.mapper.CategoryMapper;
import com.apass.gfb.framework.mybatis.page.Page;
import com.apass.gfb.framework.mybatis.page.Pagination;
/**
 * 商品分类操作service
 */
@Service
public class CategoryInfoService {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(CategoryInfoService.class);
   
	@Autowired
	private CategoryMapper categoryMapper;
	
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
		categoryMapper.updateByPrimaryKey(cate);
	}
	
	/**
	 * 根据类别id修改类别排序
	 * @param id
	 * @param categoryName
	 */
	public void updateCateSortOrder(long id , long sortOrder){
		Category cate = new Category();
		cate.setId(id);
		cate.setSortOrder(sortOrder);
		categoryMapper.updateByPrimaryKey(cate);
	}
	
	
	
	/**
	 * 
	 * @param infoEntity 查询条件
	 * @param page
	 * @return
	 */
	public Pagination<Category> queryCategoryInforPage(CategoryDto dto, Page page) {
		 
		return categoryMapper.queryCategoryInforPage(categoryDtoToCategoryInfo(dto), page);
	}
	 
	 /**
	  * Dto 转换成 InfoEntiy
	  * @param dto
	  * @return
	  */
	 public Category categoryDtoToCategoryInfo(CategoryDto dto){
		 
		 Category entity =  new Category();
		 
		 if(dto != null ){
			 entity.setCategoryName(dto.getCategoryName());
			 entity.setCreateDate(dto.getCreateDate());
			 entity.setCreateUser(dto.getCreateUser());
			 entity.setId(dto.getId());
			 entity.setLevel(dto.getLevel());
			 entity.setParentId(dto.getParentId());
			 entity.setSortOrder(dto.getSortOrder());
			 entity.setPictureUrl(dto.getPictureUrl());
			 entity.setUpdateDate(dto.getUpdateDate());
			 entity.setUpdateUser(dto.getUpdateUser());
		 }
		 return entity;
	 }
	
}
