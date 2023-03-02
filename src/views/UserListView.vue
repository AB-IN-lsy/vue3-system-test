<!--
 * @Author: NEFU AB-IN
 * @Date: 2023-02-28 23:12:01
 * @FilePath: \vue3-system-test\src\views\UserListView.vue
 * @LastEditTime: 2023-03-02 15:41:52
-->
<template>
    <FrameWork>
        <div class="card mg-bot-1" v-for="user in users" :key="user.id">
            <div class="card-body">
                <div class="row">
                    <div class="col-1">
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
import { ref } from 'vue';
// 采用Ajax进行数据交互

export default {
    name: 'UserListView',
    components: {
        FrameWork
    },
    setup() {
        let users = ref([]);

        $.ajax({
            url: 'https://app165.acapp.acwing.com.cn/myspace/userlist/',
            type: "get",
            success(resp) {
                users.value = resp;
            }
        })
        return {
            users,
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

.card{
    cursor: pointer;
}

.card:hover{
    box-shadow: 2px 2px 10px lightgrey;
    transition: 500ms;
}

</style>