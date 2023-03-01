<!--
 * @Author: NEFU AB-IN
 * @Date: 2023-02-28 21:12:41
 * @FilePath: \vue3-system-test\src\components\NavBar.vue
 * @LastEditTime: 2023-03-01 19:32:35
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
                    <li class="nav-item">
                        <RouterLink class="nav-link" :to="{ name: 'userprofile' }">用户动态</RouterLink>
                    </li>
                </ul>
                <ul class="navbar-nav ">
                    <li class="nav-item">
                        <RouterLink class="nav-link" :to="{ name: 'login' }">登录</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" :to="{ name: 'register' }">注册</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavBar"

}


</script>

<style scoped></style>