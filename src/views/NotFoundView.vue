<!--
 * @Author: NEFU AB-IN
 * @Date: 2023-03-01 10:46:41
 * @FilePath: \vue3-system-test\src\views\NotFoundView.vue
 * @LastEditTime: 2023-03-02 16:41:56
-->
<template>
    <NavBar></NavBar>
    <FrameWork>
        <div id="root">
            <div class="box-404-wrap">
                <div class="box">
                    <div class="d-flex flex-column align-items-center">
                        <div class="text-wrap">
                            <h1 data-t="404" class="h1">404</h1>
                        </div>
                        <div class="text-center mt-2">页面不存在或者您没有权限访问。</div>
                        <div class="mt-4">
                            <RouterLink role="button" tabindex="0" class="btn btn-primary" :to="{ name: 'home' }">
                                回首页
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </FrameWork>
</template>

<script>
import FrameWork from '@/components/FrameWork.vue';
import NavBar from '@/components/NavBar.vue';


export default {
    name: "NotFoundView",
    components: { FrameWork, NavBar }
}
</script>

<style scoped></style>