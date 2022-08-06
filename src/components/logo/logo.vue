<template>
  <div id="root">
    <div id="mistake">

    </div>
    <span id="span"></span>
    <form action="" id="form">
      <span id="sp">
        <h1>后台管理</h1>
      </span>
      <input type="text" name="user" id="username" placeholder="username" ref="username">
      <br>
      <input type="password" name="password" id="password" placeholder="password" ref="password">
      <br>
      <div id="content">
        <el-button  id="submit" @click.prevent="Verification">submit</el-button>
      </div>
    </form>
    <span id="spantwo"></span>
  </div>
</template>

<script>
export default {
  data(){
    return {
      userName: '',
      nickName: '',
    }
  },
  created(){
  },
  methods: {
    async Verification(){
      const password = this.$refs.password.value
      const username = this.$refs.username.value
      const data = this.qs.stringify({'username': username,'password': password });
      if (password === ""||username === "") {
        this.$message('用户名或密码不能为空')
      }else{
        const { data:res } = await this.axios({
          url: '/api/login',
          method: 'post',
          data
        })
        if (res.status === -1) {
          localStorage.setItem('token',res.token)
          this.$router.push('/admin')
          this.$message(res.message)
        }else if(res.status === 0){
          this.$message(res.message)
        }else if(res.status === 1){
          this.$message(res.message)
        }
      }
    }
  },
  data() {
    return {
      
    }
  },
}
</script>

<style scoped>
  #root{
    width: 100vw;
    height: 100vh;
    background-image: url('@/assets/logoin/bizhi2.jpg');
    background-size: cover;
  }

  #spantwo{
    display: block;
    width: 100%;
    height: 1px;
    margin-bottom: 0px;
  }

  #span{
    display: block;
    width: 100%;
    height: 1px;
  }

  #form {
    margin: 20vh auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 22vw;
    height: 35vh;
    border-radius: 20px;
    background: linear-gradient(to right bottom,
    rgba(255, 255, 255, .6),
    rgba(255, 255, 255, .3),
    rgba(255, 255, 255, .2));
    backdrop-filter: blur(11px);
    border-top: 1px solid rgba(255, 255, 255, .8);
    border-left: 1px solid rgba(255, 255, 255, .8);
  }

  #content{
    width: fit-content;
    height: fit-content;
  }

  #submit{
    display: block;
    width: 15vw;
    height: 5vh;
    color: #999999;
    font-size: 20px;
    text-align: center;
    font-size: 4vh;
    line-height: 2.5vh;
  }

  #username{
    width: 80%;
    height: 15%;
    border-radius: 10px;
    text-align: center;
    font-size: 25px;
    color: gray;
  }

  #password{
    width: 80%;
    height: 15%;
    border-radius: 10px;
    text-align: center;
    font-size: 25px;
    color: gray;
  }

  #sp{
    display: block;
    width: 100%;
    height: 10vh;
  }

  h1{
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: calc(100%-1);
    color: #fcb0b0;
    font-size: 5vh;
  }

  #demo{
    width: 100px;
    height: 100px;
  }

  @media screen and (max-height: 701px){
    #form{
      height: 245px;
    }

    #username{
      height: 37px;
    }

    #password{
      height: 37px;
    }

    #submit{
      height: 35px;
    }

    #sp{
      height: 70px;
    }

    h1{
      font-size: 30px;
    }
  }

  @media screen and (max-width: 830px){
    #form{
      width: 184.6px;
    }

    #username{
      width: 128.5px;
    }

    #password{
      width: 128.5px;
    }

    #submit{
      width: 124.5px;
    }

    #sp{
      width: 184.6px;
    }

    h1{
      font-size: 30px;
    }
  }
</style>