<!--
 * @Author: NEFU AB-IN
 * @Date: 2023-03-01 10:48:37
 * @FilePath: \vue3-system-test\src\views\UserProfileView.vue
 * @LastEditTime: 2023-03-01 20:56:07
-->
<template>
    <FrameWork>
        <!-- div.row>(div.col-3+div.col-9) -->
        <div class="row">
            <div class="col-3">
                <!-- @的为父组件绑定的函数 :为绑定属性 -->
                <UserProfileInfo @unFollow="unFollow" @follow="follow" :user="user">
                </UserProfileInfo>
                <UserProfileWriteSpace  @submit="submit">
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


export default {
    name: 'UserProfileView',
    components: {
        FrameWork, UserProfileInfo, UserProfilePosts, UserProfileWriteSpace
    },
    // setup：初始化定义函数和变量
    setup() {
        const user = reactive({
            id: 1,
            userName: "AB-IN",
            firstName: "Siyuan",
            lastName: "Liu",
            followerCount: 87,
            isFollowed: false,
        });
        const posts = reactive({
            count: 2,
            posts: [
                {
                    id: 1,
                    userId: 1,
                    content: "长天远树山山白，不辨梅花与柳花",
                },
                {
                    id: 2,
                    userId: 1,
                    content: "何时杖尔看南雪，我与梅花两白头",
                }
            ]
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
            user, follow, unFollow, posts, submit
        }

    }

}
</script>
