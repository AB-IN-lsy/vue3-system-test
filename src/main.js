/*
 * @Author: NEFU AB-IN
 * @Date: 2023-02-28 18:04:33
 * @FilePath: \vue3-system-test\src\main.js
 * @LastEditTime: 2023-03-02 19:17:32
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)

app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')
