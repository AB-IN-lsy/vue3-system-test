<!--
 * @Author: NEFU AB-IN
 * @Date: 2023-02-28 23:12:01
 * @FilePath: \vue3-system-test\src\views\UserListView.vue
 * @LastEditTime: 2023-03-04 10:40:27
-->
<template>
    <NavBar></NavBar>
    <FrameWork>
        <!-- 用()传触发事件的参数 -->
        <div class="card mg-bot-1" v-for="user in users" :key="user.id" @click="open_user_profile(user.id)">
            <div class="card-body">
                <div class="row">
                    <div class="col-1 img-col-center">
                        <img :src="user.photo" alt="" class="img-fluid rounded mx-auto d-block">
                    </div>
                    <div class="col-11">
                        <div class="userName ">{{ user.username }}</div>
                        <div class="fans ">{{ user.followerCount }}</div>
                    </div>
                </div>
            </div>
        </div>
    </FrameWork>
</template>

<script>

import FrameWork from '@/components/FrameWork.vue';
import $ from 'jquery'
// 采用Ajax进行数据交互
import { ref } from 'vue';
import router from '@/router';
// import { useStore } from 'vuex';
import NavBar from '@/components/NavBar.vue';

export default {
    name: 'UserListView',
    components: {
        FrameWork,
        NavBar
    },
    setup() {
        // const store = useStore();
        let users = ref([]);
        const user = JSON.parse(localStorage.getItem('user'));
        let is_login = false;
        if (user)
            is_login = user.is_login;

        $.ajax({
            url: 'https://app165.acapp.acwing.com.cn/myspace/userlist/',
            type: "get",
            success(resp) {
                users.value = resp;
            }
        })

        const open_user_profile = function (userId) {
            if (is_login) {
                router.push({
                    name: "userprofile",
                    params: {
                        userId
                    }
                })
            }
            else {
                router.push({
                    name: "login",
                })
            }
        };

        return {
            users, open_user_profile
        }
    }

}
</script>

<style scoped>
@import '../assets/css/style.css';

.fans {
    color: gray;
    font-size: 0.5rem;
    height: 50%;
}

.userName {
    font-weight: bold;
    font-size: 1rem;
    height: 50%;
}

.card {
    cursor: pointer;
}

.card:hover {
    box-shadow: 2px 2px 10px lightgrey;
    transition: 500ms;
}
</style>