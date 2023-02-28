/*
 * @Author: NEFU AB-IN
 * @Date: 2023-02-28 18:06:56
 * @FilePath: \vue3-system-test\src\router\index.js
 * @LastEditTime: 2023-02-28 23:15:54
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserList from '../views/UserList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/userList',
    name: 'userList',
    component: UserList
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
