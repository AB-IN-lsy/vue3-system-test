<!--
 * @Author: NEFU AB-IN
 * @Date: 2023-03-01 10:46:13
 * @FilePath: \vue3-system-test\src\views\RegisterView.vue
 * @LastEditTime: 2023-03-04 11:10:41
-->
<template>
    <NavBar></NavBar>
    <FrameWork>
        <form @submit.prevent="register">
            <div class="mb-3">
                <label for="username" class="form-label">用户名</label>
                <input v-model="username" type="text" class="form-control" id="username">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">密码</label>
                <input v-model="password" type="password" class="form-control" id="password">
            </div>
            <div class="mb-3">
                <label for="password_confirm" class="form-label">确认密码</label>
                <input v-model="password_confirm" type="password" class="form-control" id="password_confirm">
            </div>
            <div class="error-message">{{ errorMessage }}</div>
            <button type="submit" class="btn btn-primary bt-lg">注册</button>
        </form>
    </FrameWork>
</template>

<script>

import FrameWork from '@/components/FrameWork.vue';
import { ref } from 'vue';
import { useStore } from 'vuex';
import router from '@/router/index';
import NavBar from '@/components/NavBar.vue';
import $ from 'jquery'

export default {
    name: 'RegisterView',
    components: {
        FrameWork,
        NavBar,
    },
    setup() {
        const store = useStore();
        let username = ref('');
        let password = ref('');
        let password_confirm = ref('');
        let errorMessage = ref('');

        const register = () => {
            errorMessage.value = "";
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/myspace/user/",
                type: "POST",
                data: {
                    username: username.value,
                    password: password.value,
                    password_confirm: password_confirm.value,
                },
                success(resp) {
                    if (resp.result === "success") {
                        store.dispatch("login", {
                            username: username.value,
                            password: password.value,
                            success() {
                                router.push({ name: 'userlist' });
                            },
                            error() {
                                errorMessage.value = "系统异常，请稍后重试";
                            }
                        });
                    } else {
                        errorMessage.value = resp.result;
                    }
                }
            })
        };

        return {
            username,
            password,
            password_confirm,
            errorMessage,
            register,
        }
    }

}
</script>

<style scoped>
.error-message {
    color: red;
}
</style>