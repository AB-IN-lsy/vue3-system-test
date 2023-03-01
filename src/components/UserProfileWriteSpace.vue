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

export default {
    name: "UserProfileWriteSpace",
    setup(props, context) {
        // ref定义一个变量，若获取变量需用.value
        let content = ref('');

        const submit = function () {
            if (!content.value) return;
            context.emit('submit', content.value);
            content.value = "";
        }
        return {
            content, submit
        }
    }
}
</script>

<style scoped></style>