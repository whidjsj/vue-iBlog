<template>
  <div class="form">
      <div>
        <div class="heade">------必须信息</div>
        <div id="content">
          <el-input class="input" placeholder="边框变红则代表用户名重复，绿则可以使用" v-model="username" clearable ref="color">
            <template slot="prepend">用户名<strong>*</strong></template>
          </el-input>

          <el-input show-password class="input" v-model="password" placeholder="password">
            <template slot="prepend">密&nbsp;&nbsp;&nbsp;码<strong>*</strong></template>
          </el-input>

          <div id="admin" @click="Open">
            <span id="span">是否管理<strong>*</strong></span>
            <div>
              <el-switch v-model="value" active-color="gray" inactive-color="black"></el-switch>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <div>
        <div class="heade">------基本信息(可以忽略)</div>
        <div>
          <el-input class="input" placeholder="emial" v-model="emial" clearable>
            <template slot="prepend">邮&nbsp;&nbsp;&nbsp;箱</template>
          </el-input>

          <el-input class="input" placeholder="nickname" v-model="nickname" clearable>
            <template slot="prepend">昵&nbsp;&nbsp;&nbsp;称</template>
          </el-input>

          <el-input class="input" placeholder="name" v-model="name" clearable>
            <template slot="prepend">姓&nbsp;&nbsp;&nbsp;名</template>
          </el-input>

          <el-input class="input" placeholder="gender" v-model="gender" clearable>
            <template slot="prepend">性&nbsp;&nbsp;&nbsp;别</template>
          </el-input>

          <el-input class="input" placeholder="birthday" v-model="birthday" clearable>
            <template slot="prepend">生&nbsp;&nbsp;&nbsp;日</template>
          </el-input>
        </div>
      </div>
      
      <div id="button">
        <el-button type="primary" class="btn" @click="Submit" round>提交</el-button>

        <el-button type="warning" class="btn" @click="Empty" round>清空</el-button>
      </div>
      
  </div>
</template>

<script>
export default {

data() {
  return {
    username: '',//储存用户名
    password: '',//储存密码
	//下面这些接口没有写储存，所以下面即使为空也没事，纯粹是装饰，不会排版所以就暂时不管
    emial: '',//储存邮箱
    nickname: '',//昵称
    name: '',//姓名
    gender: '',//性别
    birthday: '',//生日
    value: false,//管理员权限
  }
},
methods:{
  Open(){
    if (this.value) {
      this.$message({
        message: '打开了管理员权限',
        type: 'warning'
      })
    }else{
      this.$message({
        message: '关闭管理员权限',
      })
    }
  },
  // 清空所有输入框内容
  Empty(){
    this.username = ''
    this.password = ''
    this.emial = ''
    this.nickname = ''
    this.name = ''
    this.gender = ''
    this.birthday = ''
    this.value = false
  },
  // 把用户名和密码和是否管理发送给后台
  async Submit(){
    if (!this.username || !this.password) {
      this.$message('用户名和密码不能为空')
    }else{
      if(this.value){
        const data = this.qs.stringify({'username': this.username,'password': this.password,'management': 1});
        const { data:res } = await this.axios({
          url: '/api/reguser',
          method: 'post',
          data
        })
        this.$message(res.message)
      }else{
        const data = this.qs.stringify({'username': this.username,'password': this.password});
        const { data:res } = await this.axios({
          url: '/api/reguser',
          method: 'post',
          data
        })
        this.$message(res.message)
      }
    }
    
    this.Empty()
  },
  // 判断用户名输入框的内容和数据库里用户名有无相同
  async DatedChange(){
    const data = this.qs.stringify({'username': this.username});
    const { data:res } = await this.axios({
      url: '/api/select',
      method: 'post',
      data
    })
    console.log(this.$refs.color);
    
    if (!this.username) {
      this.$refs.color.$refs.input.style.border = ''
    }else{
      if(res.data){
		  // element的input不知道怎么改那个边框所以用ref找到input修改，懒得改了
        this.$refs.color.$refs.input.style.border = 'green 1px solid'
      }else {
        this.$refs.color.$refs.input.style.border = 'red 1px solid'
      }
    }
  },
},
// 数据更新的时候调用判断用户名的方法，这里发送会发送很多HTTP请求，应该可以先把用户名都请求回来然后再本地储存，这样可以减少请求，
// 这里不想改了，没学过优化所以先这样
updated(){
  this.DatedChange()
}
}
</script>

<style scoped>
#form{
  display: flex;
  width: 60vw;
  height: 60vh;
  margin: 5vh auto;
  flex-direction: column;
}

.input{
  width: 400px;
  margin: 0;
  padding: 0;
  margin-right: 2vw;
  margin-bottom: 2vh;
}

#admin{
  width: 200px;
  height: 40px;
  margin: 0;
  padding: 0;
  margin-top: 2vh;
  line-height: 40px;
}

#admin>*{
  float: left;
}

#span{
  width: 80px;
  text-align: center;
  line-height: 40px;
}

strong{
  color: red;
  margin-left: 3px;
}

#content{
  height: px;
}

hr{
  margin-bottom: 10px;
}

.heade{
  height: 20px;
  margin-bottom: 20px;
}

.btn{
  width: 150px;
  float: left;
}

#button{
  width: 400px;
  margin-top: 20px;
  margin-left: 150px;
}
</style>