// 用户信息表单 包含修改和删除

<template>
  <div>
    <el-button @click="Refresh" type="info">刷新数据</el-button>
    <el-table :data="users" style="width: 100%; margin: auto;" max-height="80vh" v-loading="loading" border >
      <el-table-column label="日期" width="300" fixed>
        <template slot-scope="users">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ users.row.date }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="username" label="用户名" width="400" align="center"></el-table-column>

      <el-table-column prop="nickname" label="昵称" width="400" align="center"></el-table-column>

      <el-table-column fixed="right" label="操作" width="300" align="center">
        <template slot-scope="scope">
          <el-button @click="Del(scope.$index)" type="" size="small" >删除</el-button>
          <el-button type="" size="small" @click="Updata(scope.$index)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 弹出框 -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>删除用户信息可能会带来不好的体验，是否继续</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="Deluser">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 抽屉 -->
    <el-drawer :visible.sync="drawer" :with-header="false" destroy-on-close>
      <h1 id="drawer-h"><span>详细信息</span></h1>
      <hr>
    </el-drawer>
  </div>
</template>

<script>
export default {
  created() {
    this.Gain()
  },
  data() {
    return {
      users: [],
      dialogVisible: false,
      bool: false,
      quantity: 0,
      loading: true,
      drawer: false,
      index: 0
    }
  },
  methods: {
    //获取数据
    async Gain(){
      
      const { data:res } = await this.axios({
        url: '/my/admin',
        method: 'post',
        headers:{
          Authorization : localStorage.getItem('token')
        }
      })
      this.users = res.data
      this.loading = false

    },
    //删除数据
    Del(scope){
      this.index = scope
      this.dialogVisible = true
    },
    async Deluser(){
      const data = this.qs.stringify({username: this.users[this.index].username});
      const { data:res } = await this.axios({
        url: '/my/admin/user/del',
        method: 'post',
        headers:{
          Authorization : localStorage.getItem('token')
        },
        data
      })
      if (res.status === 0) {
        this.Gain()
        this.$message(res.message);
      }
      this.dialogVisible = false
    },
    //查询
    Refresh(){
      this.Gain()
      this.$message(`查询到${this.users.length}条数据`)
    },
    // 更新数据
    Updata(index){
      this.drawer = true
      console.log(this.users[index]);
    }
    //抽屉函数
    
  }
}
</script>

<style scoped>
#drawer-h{
  width: 100%;
  height: 50px;
  line-height: 50px;
}

#drawer-h > span{
  margin-left: 30px;
}
</style>