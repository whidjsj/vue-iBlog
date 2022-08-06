<template>
  <div>
	  <el-table :data="img" style="width: 100%;" max-height="80vh" :header-cell-style="Style" border>
		<el-table-column prop="title" label="标题" width="500" align="center"></el-table-column>
			  
		<el-table-column prop="username" label="用户名" width="200" align="center"></el-table-column>
		  
		<el-table-column label="图片" height="210" min-width align="center">
		  <template slot-scope="img">
			<el-image
			  style="width: 200px; height: 200px;"
			  :src="img.row.articleimage"
			></el-image>
		  </template>
		</el-table-column>
		
		<el-table-column fixed="right" label="操作" align="center" width="200">
			<template slot-scope="scope">
				<el-button @click="Del(scope.$index)">删除</el-button>
				<el-button @click="Updata(scope.$index)">修改</el-button>
			</template>
		</el-table-column>
	  </el-table>
	  
	  <!-- 抽屉 -->
	  
	  <el-drawer
	    title="我是标题"
	    :visible.sync="drawer"
	    :with-header="false">
	    <h1><span>更换图片</span></h1>
	    <hr>
	    <el-upload
	      class="avatar-uploader"
	      action="#"
	      :show-file-list="false"
	      :http-request="HttpRequest">
	      <div v-if="imageUrl">
	        <img :src="imageUrl" class="avatar">
	        <div id="keepout">
	          <span id="zoom"><i class="el-icon-zoom-in"></i></span>
	          <span id="del"><i class="el-icon-delete"></i></span>
	        </div>
	      </div>
	      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
	    </el-upload>
	  </el-drawer>
  </div>
</template>

<script>
export default {
	created() {
		this.a()
	},
	data(){
		return {
			img: [],//请求回来的数据
			dialogVisible: false,//抽屉的开关
			imageUrl:'',//暂时把要上传的图片暂存（base64储存），退出抽屉时要清空imageUrl
			drawer: false,//抽屉的开关
			index: 0,
		}
	},
	methods:{
		// 请求所有图片
		async a(){
		  const read = new FileReader()
		  const { data:res } = await this.axios({
			url: '/my/admin/image/select',
			method: 'post',
			headers:{
			  Authorization : localStorage.getItem('token')
			},
		  })
		  this.img = res.data
		  console.log(this.img);
		},
		// 图片上传的函数
		HttpRequest(options){
		  // console.log(options);
		  let file = options.file
		  console.log(file);
		  if (file.type == "image/jpeg" || file.type == "image/png" || file.type == "image/JPG") {
		    if (file.size / 1024 / 1024 < 2) {
		      const reader = new FileReader()
		      reader.readAsDataURL(file)
		      reader.addEventListener('load',() => {
		        this.imageUrl = reader.result
		      })
		    }else{
		      this.$message.error('图片超过2MB')
		      return
		    }
		  }else{
		    this.$message.error('图片不是jpg或png格式')
		    return
		  }
		},
		//抽屉
		Updata(index){
		  this.drawer = true
		},
		//heard-cell-style 的返回值
		Style(){
			return "text-align:center"
		},
		//和其他表格的同理的两个按钮的操作
		Del(scope){
		  this.index = scope
		  this.dialogVisible = true
		},
		async Deluser(){
		  
		},
	}
}
</script>

<style>
.avatar-uploader{
    width: 178px;
    height: 178px;
    border: 1px solid #bda2a2;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader:hover {
    border-color: blue;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

  #keepout{
    position: relative;
    /* display: none; */
    background-color: black;
    opacity: 0.6;
    top: -178px;
    width: 178px;
    height: 178px;
  }

  #del{
    display: block;
    width: 30px;
    height: 30px;
    position: relative;
    top: 120px;
    left: 30px;
    z-index: 2;
  }

  #zoom{
    display: block;
    width: 30px;
    height: 30px;
    position: relative;
    top: 120px;
    left: 80px;
    z-index: 2;
  }
</style>