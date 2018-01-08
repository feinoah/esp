package com.apass.esp.service.common;

import com.apass.esp.domain.entity.BsdiffInfoEntity;
import com.apass.esp.domain.entity.BsdiffQuery;
import com.apass.esp.domain.entity.BsdiffVo;
import com.apass.esp.mapper.BsdiffInfoEntityMapper;
import com.apass.esp.utils.FileUtilsCommons;
import com.apass.esp.utils.ZipUtil;
import com.google.common.collect.Lists;
import com.tencent.tinker.bsdiff.BSDiff;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.Collections;
import java.util.Enumeration;
import java.util.List;
import java.util.regex.Pattern;

@Service
public class BsdiffinfoService {
	@Autowired
	private BsdiffInfoEntityMapper bsdiffInfoEntityMapper;

	private static final Logger LOGGER = LoggerFactory.getLogger(BsdiffinfoService.class);
	@Value("${esp.image.uri}")
	private String appWebDomain;

	@Value("${nfs.rootPath}")
	private String rootPath;
	@Value("${nfs.bsdiff}")
	private String nfsBsdiffPath;

	private static final String VERPATH = "/verzip";
	private static final String PATCHPATH = "/patchzip";
	private static final int SIZE = 1048576;
	private static final String FILE_SEPARATOR = System.getProperty("file.separator");

	/**
	 * 思路:
	 * 1,先判断:对应ver是否已经存在，版本号和文件名是否一致
	 * 2,判断是否是第一次上传:
	 * 				是,创建verzip目录，插入数据库，把源zip包上传至该目录
	 * 				否,插入数据库，把zip包传入verzip目录，创建zip目录把，递减循环ver-1，用bsdiff方法把ver_i存储到patchzip目录中
	 * @param bsdiffEntity
	 * @param bsdiffInfoEntity
	 * @throws IOException
     */
    @Transactional
    public void bsdiffUpload(BsdiffVo bsdiffVo, BsdiffInfoEntity bsdiffInfoEntity) throws IOException {
		//如果版本号已存在，给出提示
        String bsdiffVer = bsdiffVo.getBsdiffVer();

		BsdiffQuery query = new BsdiffQuery();
		query.setLineId(bsdiffVo.getLineId());
		query.setBsdiffVer(bsdiffVo.getBsdiffVer());
		List<BsdiffInfoEntity> entitis = selectBsdiffInfoByVo(query);
		if(CollectionUtils.isNotEmpty(entitis)){
			throw new RuntimeException("版本号已经存在，请重新填写版本号!");
		}

        MultipartFile bsdiffFile = bsdiffVo.getBsdiffFile();
        String[] split = bsdiffFile.getOriginalFilename().split("\\.");
        if(!StringUtils.equals("zip",split[1])){
            throw new RuntimeException("请上传zip文件 .");
        }
		if(!(isNumeric(bsdiffVer) && isNumeric(split[0]))){
			throw new RuntimeException("版本号和文件名必须是数字1,2,3...等");
		}
        if(!StringUtils.equals(bsdiffVer,split[0])){
            throw new RuntimeException("版本号要与zip文件名一致.");
        }

		String zipName = bsdiffFile.getOriginalFilename();
		String zipPath = nfsBsdiffPath+VERPATH+"/"+bsdiffVo.getLineId()+"/"+bsdiffVo.getBsdiffVer()+"/";

		bsdiffInfoEntity.setLineId(bsdiffVo.getLineId());
		bsdiffInfoEntity.setBsdiffVer(bsdiffVer);

		//判断服务器端是否有更早版本的文件，如果没有 直接上传，如果有 增量拆分
		File directory = new File(rootPath+zipPath);
		if(!directory.exists()){//如果目录不存在创建目录
			directory.mkdirs();
		}
		//先上传zip文件，方便后续解压
		FileUtilsCommons.uploadFilesUtil(rootPath,zipPath+zipName,bsdiffFile);

		//解压缩,并重成文件清单,
//			ZipUtil.unZipFiles(rootPath+zipPath+zipName,rootPath+zipPath);
		String json = new ZipUtil().unZipFiles(rootPath,zipPath,zipName);

		//合并并生成文件清单
		mergeFile(rootPath,zipPath,bsdiffInfoEntity,json);

		int count = bsdiffInfoEntityMapper.insertSelective(bsdiffInfoEntity);

		//先上传zip文件，方便后续解压
		FileUtilsCommons.uploadFilesUtil(rootPath,zipPath+zipName,bsdiffFile);
		if(new File(directory.getParent()).listFiles(new FileFilter() {
			@Override
			public boolean accept(File pathname) {
				return pathname.isDirectory();
			}
		}).length > 1){//如果某id对应文件不是第一次上传，增量拆分
			//增量更新
			if(count == 1){
				File directoryPatch = new File(rootPath+nfsBsdiffPath+PATCHPATH+"/"+bsdiffVo.getLineId()+"/"+bsdiffVo.getBsdiffVer()+"/");//patch生成的包对应的目录
				if(!directoryPatch.exists()){//如果目录不存在创建目录
					directoryPatch.mkdirs();
				}

				//再上传增量更新包
				for(int i=Integer.valueOf(bsdiffVer)-1;i>0;i--){
					String oldFilePath = rootPath+nfsBsdiffPath+VERPATH+"/"+bsdiffVo.getLineId()+"/"+i+"/"+i+".zip";
					String newFilePath = rootPath+nfsBsdiffPath+VERPATH+"/"+bsdiffVo.getLineId()+"/"+bsdiffVo.getBsdiffVer()+"/"+zipName;
					String diffFilePath = directoryPatch+FILE_SEPARATOR+bsdiffVer+"_"+i+".zip";
					File oldFile = new File(oldFilePath);
					File newFile = new File(newFilePath);
					File diffFile = new File(diffFilePath);

//					File temp1 = oldFile.length()<newFile.length()?oldFile:newFile;
//					File temp2 = oldFile.length()>newFile.length()?oldFile:newFile;
//					newFile = temp2;
//					oldFile = temp1;

					BSDiff.bsdiff(oldFile,newFile,diffFile);
				}
			}
		}
    }

	/**
	 * 合并文件并生成清单
	 * @param rootPath
	 * @param zipPath
	 * @param bsdiffInfoEntity
	 * @param json
	 */
	private void mergeFile(String rootPath, String zipPath, BsdiffInfoEntity bsdiffInfoEntity, String json) throws IOException {
		List<InputStream> ins = Lists.newArrayList();
		File descDir = new File(rootPath,zipPath);
		BufferedWriter bw = null;
		SequenceInputStream sis = null;
		BufferedOutputStream bos = null;
		try{
			File[] files = descDir.listFiles(new FileFilter() {
				@Override
				public boolean accept(File pathname) {
					return pathname.getName().endsWith(".zip");
				}
			});

			if(files.length!=1){
				throw new RuntimeException(descDir.getAbsolutePath()+"目录下无.zip文件");
			}
			File f = new File(descDir,files[0].getName().split("\\.")[0]+".properties");//记录文件清单列表
			bsdiffInfoEntity.setFileListPath(f.getAbsolutePath());
			bsdiffInfoEntity.setSourceFilePath(files[0].getAbsolutePath());

			//list转成数组存储到.properties文件中
			bw = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(f)));
			bw.write(json);
			bw.flush();

			File[] files2 = descDir.listFiles(new FileFilter() {
				@Override
				public boolean accept(File pathname) {
					boolean b = pathname.getName().endsWith(".js") || pathname.getName().endsWith(".png");
					return b;
				}
			});

			if(files2.length == 0){
				throw new RuntimeException(".zip文件解压失败");
			}
			for (File file: files2) {
				InputStream in = new FileInputStream(file);
				ins.add(in);
			}

			//生成合并文件
			Enumeration en = Collections.enumeration(ins);
			sis = new SequenceInputStream(en);

			File merFile = new File(descDir,"merge");
			bos = new BufferedOutputStream(new FileOutputStream(merFile));

			bsdiffInfoEntity.setMergeFilePath(appWebDomain+"/static"+zipPath+merFile.getName());
			byte[] buf = new byte[SIZE];
			int len = 0;
			while((len = sis.read(buf))!=-1){
				bos.write(buf,0,len);
				bos.flush();
			}

		}finally {
			if(bos!=null){
				bos.close();
			}
			if(sis!=null){
				sis.close();
			}
			if(bw!=null){
				bw.close();
			}
		}

	}

	/**
	 * 根据query条件查询数据，如果query中的内容为空：查询所有
	 * @return
     */
	public List<BsdiffInfoEntity> selectBsdiffInfoByVo(BsdiffQuery query) {
		return bsdiffInfoEntityMapper.selectBsdiffInfoByVo(query);
	}

	public List<BsdiffInfoEntity> listAll(){
		return bsdiffInfoEntityMapper.selectAllBsdiff();
	}

	/**
	 * 返回所有id对应的最高版本的集合
	 * @return
     */
	public List<BsdiffInfoEntity> listAllNewest() {
		return bsdiffInfoEntityMapper.selectAllBsdiffNewest();
	}

	public BsdiffInfoEntity selectMaxBsdiffInfoById(String id) {
		return bsdiffInfoEntityMapper.selectMaxBsdiffInfoById(id);
	}

	public static boolean isNumeric(String str) {
		Pattern pattern = Pattern.compile("^[-\\+]?[\\d]*$");
		return pattern.matcher(str).matches();
	}

}
