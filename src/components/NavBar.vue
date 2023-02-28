<!--
 * @Author: NEFU AB-IN
 * @Date: 2023-02-28 21:12:41
 * @FilePath: \vue3-system-test\src\components\NavBar.vue
 * @LastEditTime: 2023-02-28 23:17:08
-->
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <a class="navbar-brand" href="#">Vue3 </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">首页</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/userList">好友列表</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">用户动态</a>
                    </li>
                </ul>
                <ul class="navbar-nav ">
                    <li class="nav-item">
                        <a class="nav-link" href="#">登录</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">注册</a>
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