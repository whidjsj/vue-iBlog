// 侧边栏内容

<template>
  <el-menu class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="black" router>
    <h1 id="h1">管理系统</h1>
    <el-menu-item v-for="item in noChildren" :index="item.path" :key="item.path">
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <el-submenu v-for="itemS in hasChildren" :key="itemS.path" :index="itemS.path">
      <template slot="title">
        <i :class="'el-icon-' + itemS.icon"></i>
        <span slot="title">{{ itemS.label }}</span>
      </template>
      <el-menu-item-group v-for="itemC in itemS.children" :key="itemC.path">
        <el-menu-item :index="itemC.path">
          <i :class="'el-icon-' + itemC.icon"></i>
          {{ itemC.label }}
          </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      isUniqueOpened: true,
      user:[
        {
          path: '/admin',
          name: 'home',
          label: '首页',
          icon: 's-home'
        },
        {
          path: '/admin/image',
          name: 'home',
          label: '图片管理',
          icon: 'picture'
        },
        {
          path: '/admin/article',
          name: 'home',
          label: '文章管理',
          icon: 's-management'
        },
        {
          path: '/admin/user',
          name: 'home',
          label: '用户管理',
          icon: 'user-solid',
          children:[
            {
              path: '/admin/user/create',
              name: 'home',
              icon: 's-tools',
              label: '创建用户',
              url: ''
            },
            {
              path: '/admin/user/userinfo',
              name: 'user',
              icon: 's-tools',
              label: '用户信息',
              url: ''
            },
          ]
        },
        
      ]
    }
  },
  methods: {
    
  },
  computed:{
    noChildren(){
      return this.user.filter(item => !item.children)
    },
    hasChildren(){
      return this.user.filter(item => item.children)
    }
  }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  height: 100%;
}

h1{
  height: 10vh;
  text-align: center;
  font-size: 3vh;
  line-height: 10vh;
  color: white;
}
</style>