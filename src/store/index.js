/*
 * @Author: NEFU AB-IN
 * @Date: 2023-02-28 18:07:26
 * @FilePath: \vue3-system-test\src\store\index.js
 * @LastEditTime: 2023-03-02 20:42:13
 */
import { createStore } from 'vuex'
// vuex创建的全局的唯一对象
import ModuleUser from './user';

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  // 用作对state分割
  modules: {
    user: ModuleUser,
  }
})
