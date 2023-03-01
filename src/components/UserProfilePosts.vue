<!--
 * @Author: NEFU AB-IN
 * @Date: 2023-03-01 11:12:49
 * @FilePath: \vue3-system-test\src\components\UserProfilePosts.vue
 * @LastEditTime: 2023-03-01 20:28:45
-->
<template>
    <div class="card mg-bot-1">
        <div class="card-body">
            <!-- 每一个循环对象，最外层都需要添加一个key属性，保证不一样 -->
            <div v-for="post in posts.posts" :key="post.id">
                <div class="card mg-bot-1">
                    <div class="card-body">
                        <div class="post float-left">
                            {{ post.content }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserProfilePosts",
    props: {
        posts: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped>
@import '../assets/css/style.css';

</style>