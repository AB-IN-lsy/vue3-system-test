/*
 * @Author: NEFU AB-IN
 * @Date: 2023-02-28 18:06:56
 * @FilePath: \vue3-system-test\src\router\index.js
 * @LastEditTime: 2023-03-02 16:43:40
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserListView from '../views/UserListView.vue'
import LoginView from '../views/LoginView.vue'
import UserProfileView from '../views/UserProfileView'
import RegisterView from '../views/RegisterView.vue'
import NotFoundView from '../views/NotFoundView.vue'


const routes = [
  // 所有链接后面都加上/
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/userlist/',
    name: 'userlist',
    component: UserListView
  }, {
    path: '/userprofile/:userId/',
    name: 'userprofile',
    component: UserProfileView
  }, {
    path: '/login/',
    name: 'login',
    component: LoginView
  }, {
    path: '/register/',
    name: 'register',
    component: RegisterView
  }, {
    path: '/404/',
    name: '404',
    component: NotFoundView
  },
  // 最后表达式代表，如果遍历完上面所有的之后，还没匹配，那么下面正则表达式可以接收所有形式的链接，转到404
  {
    path: '/:catchAll(.*)',
    redirect: '/404/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
