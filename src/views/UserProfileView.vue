<!--
 * @Author: NEFU AB-IN
 * @Date: 2023-03-01 10:48:37
 * @FilePath: \vue3-system-test\src\views\UserProfileView.vue
 * @LastEditTime: 2023-03-03 12:58:11
-->
<template>
    <FrameWork>
        <!-- div.row>(div.col-3+div.col-9) -->
        <div class="row">
            <div class="col-3">
                <!-- @的为父组件绑定的函数 :为绑定属性 -->
                <UserProfileInfo @unFollow="unFollow" @follow="follow" :user="user">
                </UserProfileInfo>
                <UserProfileWriteSpace @submit="submit" v-if="is_me">
                </UserProfileWriteSpace>
            </div>
            <div class="col-9">
                <UserProfilePosts :posts="posts">
                </UserProfilePosts>
            </div>
        </div>
    </FrameWork>
</template>

<script>

import FrameWork from '@/components/FrameWork.vue';
import UserProfileInfo from '@/components/UserProfileInfo.vue';
import UserProfilePosts from '@/components/UserProfilePosts.vue';
import UserProfileWriteSpace from '@/components/UserProfileWriteSpace.vue';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import $ from 'jquery'
import { useStore } from 'vuex';
import { computed } from 'vue';
import { getAccess } from '@/assets/js/index'

export default {
    name: 'UserProfileView',
    components: {
        FrameWork, UserProfileInfo, UserProfilePosts, UserProfileWriteSpace
    },

    // setup：初始化定义函数和变量
    setup() {
        // 点击到这的链接时，传了params，在路由中的URL设置对应的变量，在这里通过useRoute获取
        const route = useRoute();
        const userId = parseInt(route.params.userId);
        const store = useStore();
        const user = reactive({});
        const posts = reactive({})


        // 获取用户信息
        $.ajax({
            url: "https://app165.acapp.acwing.com.cn/myspace/getinfo/",
            type: "GET",
            data: {
                user_id: userId,
            },
            headers: {
                'Authorization': "Bearer " + getAccess(),
            },
            // 这里就不用往store传了，因为access已经有了
            success(resp) {
                user.id = resp.id;
                user.username = resp.username;
                user.photo = resp.photo;
                user.followerCount = resp.followerCount;
                user.is_followed = resp.is_followed;
            }
        });
        // 获取该用户所有文章
        $.ajax({
            url: "https://app165.acapp.acwing.com.cn/myspace/post/",
            type: "GET",
            data: {
                user_id: userId,
            },
            headers: {
                //  store.state.user.access
                'Authorization': "Bearer " + getAccess(),
            },
            success(resp) {
                posts.count = resp.length;
                posts.posts = resp;
            }
        });

        // 判断是否使自己，才展现编辑区
        const is_me = computed(function () {
            return userId === store.state.user.id;
        })
        // 父组件定义的触发函数（事件）
        const follow = function () {
            if (user.isFollowed) return;
            user.isFollowed = true;
            user.followerCount++;
        }

        const unFollow = function () {
            if (!user.isFollowed) return;
            user.isFollowed = false;
            user.followerCount--;
        }

        const submit = function (content) {
            posts.count++;
            // 在最后面加:push, 在最前面加:unshift
            posts.posts.unshift({
                id: posts.count,
                userId: 1,
                content: content,
            })
        }

        return {
            user, follow, unFollow, posts, submit, is_me
        }

    }

}
</script>
