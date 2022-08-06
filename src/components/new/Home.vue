//侧边栏 顶部 主体区域

<template>
  <div>
    <el-container id="a">
      <el-aside width="auto">
        <nav-vue></nav-vue>
      </el-aside>

      <el-container>
        <el-header id="head">
          <el-link icon="el-icon-s-promotion" :underline="false" id="quit" @click="dialogVisible = true">退出登入</el-link>
        </el-header>

        <el-main id="e">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
<!-- 弹出框 -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>确认退出？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="Quit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import navVue from './nav.vue'
export default {
  data() {
    return {
      dialogVisible: false
    }
  },
  components:{
    navVue,
  },
  methods:{
    Quit(){
      localStorage.removeItem('token')
      this.$router.push('/')
    },
  }
}
</script>

<style scoped>
#a{
  width: 100vw;
  height: 100vh;
}

#head{
  width: 100%;
  height: 100px;
  padding: 0 0;
  background-color: #545c64;
  line-height: 50px;
}

#quit{
  width: 150px;
  height: 60px;
  margin-left: 20px;
  color: white;
}

#quit:hover{
  color: black;
}
</style>