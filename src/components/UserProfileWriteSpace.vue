<!--
 * @Author: NEFU AB-IN
 * @Date: 2023-03-01 11:13:16
 * @FilePath: \vue3-system-test\src\components\UserProfileWriteSpace.vue
 * @LastEditTime: 2023-03-03 10:00:24
-->
<template>
    <div class="card mg-top-1">
        <div class="card-body">
            <label for="exampleFormControlTextarea1" class="form-label ">
                发表帖子
            </label>
            <!-- textarea和content的内容绑定起来 -->
            <textarea v-model="content" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            <button @click="submit" type="button" class="btn btn-primary mg-top-1"
                style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: 1.5rem; --bs-btn-font-size: 1rem;">
                发帖
            </button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import $ from 'jquery'
import { useStore } from 'vuex';


export default {
    name: "UserProfileWriteSpace",
    setup(props, context) {
        // ref定义一个变量，若获取变量需用.value
        let content = ref('');
        const store = useStore();
        const submit = function () {
            if (!content.value) return;
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/myspace/post/",
                type: "POST",
                data: {
                    content: content.value,
                },
                headers: {
                    'Authorization': "Bearer " + store.state.user.access,
                },
                success(resp) {
                    // resp 先包含是否添加成功
                    if (resp.result === "success") {
                        context.emit('submit', content.value);
                        content.value = "";
                    }
                }
            });

        }
        return {
            content, submit
        }
    }
}
</script>

<style scoped></style>