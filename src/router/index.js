import Vue from 'vue'
import VRoute from 'vue-router'
import loginVue from '@/components/logo/logo.vue'
import homeVue from '@/components/new/Home.vue'
import imageVue from '@/components/admin/Image.vue'
import userVue from '@/components/admin/User.vue'
import cuserVue from '@/components/admin/CreateUser.vue'
import commentVue from '@/components/admin/CommentTable.vue'
import articleVue from '@/components/admin/ArticleTable.vue'
import index from '@/components/admin/Home.vue'


Vue.use(VRoute)

const vueRouter = new VRoute({
  routes: [{path: '/', redirect: '/login'},
    {path: '/login', component: loginVue},
    {path: '/admin', component: homeVue , redirect: '/admin/home',children: [
      {path: 'home', component: index},
      {path: 'image', component: imageVue},
      {path: 'user', component: userVue},
      {path: 'comments', component: commentVue},
      {path: 'article', component: articleVue},
      {path: 'user/userinfo', component: userVue},
      {path: 'user/create', component: cuserVue}
    ]}
  ]
})

vueRouter.beforeEach(function(to,from,next) {
  if (/admin/.test(to.path)) {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    }else{
      next('/')
    }
  }else{
    next()
  }
})

export default vueRouter