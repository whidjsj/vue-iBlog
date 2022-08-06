<template>
  <div>
    <Head>
      <template slot="Admin">
        <h1 id="h1" class="slide-in-right">图片管理</h1>
      </template>
      <template slot="En">
        <h3 id="h3" class="slide-in-right">Image Management</h3>
      </template>
    </Head>

    <div id="table">
      <a href=""></a>
      <el-button @click="a">fff</el-button>
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

      <div id="img">
        <el-table :data="img" style="width: 100%;" max-height="80vh" cell-style="text-align:center">
          <el-table-column label="图片" height="210" width="500" align="center" fixed>
            <template slot-scope="img">
              <el-image
                style="width:200px; height: 200px;"
                :src="img.row.articleimage"
              ></el-image>
            </template>
          </el-table-column>

          <el-table-column prop="title" label="标题" width="200" align="center"></el-table-column>

          <el-table-column prop="username" label="用户名" width="200" align="center"></el-table-column>
        </el-table> 
      </div>
    </div>
  </div>
</template>

<script>
import Head from './Head.vue'
export default {
  components: { 
    Head
  },
  data() {
    return {
      imageUrl:'',
      img: [],
    }
  },
  methods:{
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
    async a(){
      const read = new FileReader()
      const { data:res } = await this.axios({
        url: '/my/admin/image/select',
        method: 'post',
        headers:{
          Authorization : localStorage.getItem('token')
        },
      })
      
      // console.log(typeof res.data[0].articleimage_one); 
      this.img = res.data
      console.log(this.img);
    }
  }
}
</script>

<style scoped>
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