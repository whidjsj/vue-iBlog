// 不对文章修改，只做删除


<template>
  <div>
    <el-table :data="info" style="width: 100%; margin: auto;" max-height="80vh" v-loading="loading" header-cell-style="text-align:center;" border>
      <el-table-column label="日期" width="300" align="center" fixed>
        <template slot-scope="users">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ users.row.time }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="username" label="用户名" width="200" align="center"></el-table-column>

      <el-table-column prop="articletitle" label="文章" width="200" align="center"></el-table-column>

      <el-table-column prop="content" label="内容" min-width="380" align="left" show-overflow-tooltip></el-table-column>

      <el-table-column fixed="right" label="操作" align="center" width="300">
        <template slot-scope="scope">
          <el-button @click="Del(scope.$index)" type="" size="small" >删除</el-button>
          <el-button type="" size="small" @click="Updata(scope.$index)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 弹出框 -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>该文章会被删除，是否确定</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="Deluser">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 抽屉 -->
    <el-drawer :visible.sync="drawer" :with-header="false" destroy-on-close>
      <h1 id="drawer-h"><span>详细信息</span></h1>
      <hr>
      <div id="content">
        {{ content }}
      </div>
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
      info: [],
      loading: true,
      dialogVisible: false,
      drawer: false,
      index: 0,
      content: '这是测试的内容：文章主题，可以改成文本域然后更改'
    }
  },
  methods:{
    async Gain(){
      const { data:res } = await this.axios({
        url: '/my/admin/article',
        method: 'post',
        headers:{
          Authorization : localStorage.getItem('token')
        }
      })
      this.info = res.data
      console.log(this.info);
      this.loading = false
    },
    Del(scope){
      this.index = scope
      this.dialogVisible = true
    },
    async Deluser(){
      const data = this.qs.stringify({username: this.info[this.index].username, title: this.info[this.index].articletitle});
      const { data:res } = await this.axios({
        url: '/my/admin/article/del',
        method: 'post',
        headers:{
          Authorization : localStorage.getItem('token')
        },
        data
      })
      if (res.status === 0) {
        this.Gain()
        this.$message('删除成功');
        this.dialogVisible = false
      }
    },
    Updata(index){
      this.drawer = true
      console.log(this.info[index]);
    }
  }
}
</script>

<style scoped>
#content{
  width: 80%;
  height: 60%;
  margin: 20px auto;
  border: 2px gray solid;
}

</style>