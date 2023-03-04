<!--
 * @Author: NEFU AB-IN
 * @Date: 2023-03-01 11:12:49
 * @FilePath: \vue3-system-test\src\components\UserProfilePosts.vue
 * @LastEditTime: 2023-03-04 11:00:42
-->
<template>
    <div class="card mg-bot-1">
        <div class="card-body">
            <!-- 每一个循环对象，最外层都需要添加一个key属性，保证不一样 -->
            <div v-for="post in posts.posts" :key="post.id">
                <div class="card mg-bot-1">
                    <div class="card-body">
                        <div class="post">
                            {{ post.content }}
                            <button @click="deletePost(post.id)" v-if="is_me" type="button"
                                class="btn btn-danger btn-sm float-right">
                                删除
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex';
import $ from 'jquery'

export default {
    name: "UserProfilePosts",
    props: {
        posts: {
            type: Object,
            required: true,
        },
        user: {
            type: Object,
            required: true,
        }
    },
    setup(props, context) {
        const store = useStore();
        const is_me = computed(function () {
            return props.user.id === store.state.user.id;
        })

        const deletePost = post_id => {
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/myspace/post/",
                type: "DELETE",
                data: {
                    post_id,
                },
                headers: {
                    'Authorization': "Bearer " + store.state.user.access,
                },
                success(resp) {
                    if (resp.result === "success") {
                        context.emit('deletePost', post_id);
                    }
                }
            })
        }

        return {
            is_me, deletePost
        }
    }
}
</script>

<style scoped>
@import '../assets/css/style.css';
</style>