<!--
 * @Author: NEFU AB-IN
 * @Date: 2023-02-28 21:49:44
 * @FilePath: \vue3-system-test\src\components\Framework.vue
 * @LastEditTime: 2023-02-28 23:09:50
-->
<template>
    <div class="home">
        <div class="container">
            <div class="card">
                <div class="card-body">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "FrameWork"
}

</script>

<style scoped>
.container {
    margin-top: 1rem;
}
</style>