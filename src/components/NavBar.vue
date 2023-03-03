<!--
 * @Author: NEFU AB-IN
 * @Date: 2023-02-28 21:12:41
 * @FilePath: \vue3-system-test\src\components\NavBar.vue
 * @LastEditTime: 2023-03-03 13:28:55
-->
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <RouterLink class="navbar-brand" :to="{ name: 'home' }">我的空间 </RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink class="nav-link active" :to="{ name: 'home' }">首页</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" :to="{ name: 'userlist' }">好友列表</RouterLink>
                    </li>
                </ul>
                <ul class="navbar-nav " v-if="!is_login">
                    <li class="nav-item">
                        <RouterLink class="nav-link" :to="{ name: 'login' }">登录</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" :to="{ name: 'register' }">注册</RouterLink>
                    </li>
                </ul>
                <ul class="navbar-nav " v-else>
                    <li class="nav-item">
                        <RouterLink class="nav-link"
                            :to="{ name: 'userprofile', params: { userId: $store.state.user.id } }">
                            {{ $store.state.user.username }}
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" style="cursor: pointer;" @click="logout">退出</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { getAccess } from '@/assets/js';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
    name: "NavBar",
    // 退出的话，就需要修改用户的登录状态，就需要和store打交道

    mounted() {
        const is_login = computed(function () {
            const access = getAccess();
            if (access != '')
                return true;
            else return false;
        })

        return {
            is_login
        }
    },

    setup() {
        const store = useStore();


        const logout = () => {
            store.commit('logout');
        };
        return {
            logout,
        }
    }

}


</script>

<style scoped></style>