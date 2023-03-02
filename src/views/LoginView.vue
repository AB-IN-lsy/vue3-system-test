<!--
 * @Author: NEFU AB-IN
 * @Date: 2023-03-01 10:46:13
 * @FilePath: \vue3-system-test\src\views\LoginView.vue
 * @LastEditTime: 2023-03-02 21:49:16
-->
<template>
    <FrameWork>
        <form @submit.prevent="login">
            <div class="mb-3">
                <label for="username" class="form-label">用户名</label>
                <input v-model="username" type="text" class="form-control" id="username">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">密码</label>
                <input v-model="password" type="password" class="form-control" id="password">
            </div>
            <div class="error-message">{{ errorMessage }}</div>
            <button type="submit" class="btn btn-primary bt-lg">登录</button>
        </form>
    </FrameWork>
</template>

<script>

import FrameWork from '@/components/FrameWork.vue';
import { ref } from 'vue';
import { useStore } from 'vuex';
import router from '@/router/index';


export default {
    name: 'LoginView',
    components: {
        FrameWork
    },
    setup() {
        const store = useStore();
        let username = ref('');
        let password = ref('');
        let errorMessage = ref('');

        const login = function () {
            errorMessage.value = "";
            // store.dispatch 向后端push数据，调用action的API
            store.dispatch("login", {
                // 传的JSON数据
                username: username.value,
                password: password.value,
                success() {
                    // router的API，跳转到哪
                    router.push({ name: 'userlist' });
                },
                error() {
                    errorMessage.value = "用户名或密码错误";
                }
            });

        }
        return {
            username, password, errorMessage, login
        }
    }

}
</script>

<style scoped>
.error-message {
    color: red;
}
</style>