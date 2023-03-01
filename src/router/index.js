/*
 * @Author: NEFU AB-IN
 * @Date: 2023-02-28 18:06:56
 * @FilePath: \vue3-system-test\src\router\index.js
 * @LastEditTime: 2023-03-01 10:55:42
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserListView from '../views/UserListView.vue'
import LoginView from '../views/LoginView.vue'
import UserProfileView from '../views/UserProfileView'
import RegisterView from '../views/RegisterView.vue'
import NotFoundView from '../views/NotFoundView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/userlist',
    name: 'userlist',
    component: UserListView
  }, {
    path: '/userprofile',
    name: 'userprofile',
    component: UserProfileView
  }, {
    path: '/login',
    name: 'login',
    component: LoginView
  }, {
    path: '/register',
    name: 'register',
    component: RegisterView
  }, {
    path: '/404',
    name: '404',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
