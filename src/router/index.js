import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Layout from '@/views/layout'
import ProDetail from '@/views/prodetail'
import Search from '@/views/search'
import DailyRecommed from '@/views/daily_recommed'
import Hot from '@/views/hot'
import PostUpdates from '@/views/post_updates'
import UploadWorks from '@/views/upload_works'
import NotFind from '@/views/not_find'

import Create from '@/views/layout/create.vue'
import Category from '@/views/layout/category.vue'
import Messages from '@/views/layout/messages.vue'
import User from '@/views/layout/user.vue'
import Home from '@/views/layout/home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    {
      path: '/',
      component: Layout,
      redirect: '/home', // 重定向
      children: [
        { path: '/category', component: Category },
        { path: '/messages', component: Messages },
        { path: '/user', component: User },
        { path: '/create', component: Create },
        { path: '/home', component: Home }
      ]// 二级路由配置
    },
    // 动态路由传参，知道具体哪个商品
    { path: '/prodetail', component: ProDetail },
    { path: '/search', component: Search },
    { path: '/daily_recommed', component: DailyRecommed },
    { path: '/hot', component: Hot },
    { path: '/post_updates', component: PostUpdates },
    { path: '/upload_works', component: UploadWorks },
    { path: '*', component: NotFind }
  ]
})

export default router
