<!--
 * @Author: NEFU AB-IN
 * @Date: 2023-03-01 10:48:37
 * @FilePath: \vue3-system-test\src\views\UserProfileView.vue
 * @LastEditTime: 2023-03-04 11:59:49
-->
<template>
    <NavBar></NavBar>
    <FrameWork>
        <!-- div.row>(div.col-3+div.col-9) -->
        <div class="row">
            <div class="col-3">
                <!-- @的为父组件绑定的函数 :为绑定属性 -->
                <UserProfileInfo @unFollow="unFollow" @follow="follow" :user="user">
                </UserProfileInfo>
                <UserProfileWriteSpace @submitPost="submitPost" v-if="is_me">
                </UserProfileWriteSpace>
            </div>
            <div class="col-9">
                <UserProfilePosts @deletePost="deletePost" :posts="posts" :user="user">
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
import NavBar from '@/components/NavBar.vue';

export default {
    name: 'UserProfileView',
    components: {
        FrameWork,
        UserProfileInfo,
        UserProfilePosts,
        UserProfileWriteSpace,
        NavBar
    },

    // setup：初始化定义函数和变量
    setup() {
        // 点击到这的链接时，传了params，在路由中的URL设置对应的变量，在这里通过useRoute获取
        const route = useRoute();
        const userId = parseInt(route.params.userId);
        const store = useStore();
        const user = reactive({});
        const posts = reactive({})

        // console.log(getAccess());

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

        // 判断是否是自己，才展现编辑区
        const is_me = computed(function () {
            return userId === store.state.user.id;
        })
        // 父组件定义的触发函数（事件）
        const follow = function () {
            if (user.is_followed) return;
            // 若只在组件中修改了关注状态是不行的，因为最终状态的体现是要放在父组件这，所以这里的状态也要变
            user.is_followed = true;
            user.followerCount++;
        }

        const unFollow = function () {
            if (!user.is_followed) return;
            user.is_followed = false;
            user.followerCount--;
        }

        const submitPost = function (content) {
            posts.count++;
            // 在最后面加:push, 在最前面加:unshift
            posts.posts.unshift({
                id: posts.count,
                userId: userId,
                content: content,
            })
        }


        const deletePost = function (post_id) {
            posts.posts = posts.posts.filter(post => post.id !== post_id);
            posts.count = posts.posts.length;

        };

        return {
            user, follow, unFollow, posts, submitPost, is_me, deletePost
        }

    }

}
</script>
