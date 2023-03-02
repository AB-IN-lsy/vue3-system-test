<!--
 * @Author: NEFU AB-IN
 * @Date: 2023-03-01 11:12:18
 * @FilePath: \vue3-system-test\src\components\UserProfileInfo.vue
 * @LastEditTime: 2023-03-01 21:15:08
-->
<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-4">
                    <img class="img-fluid rounded mx-auto d-block" src="https://oss.ab-in.cn/images/AB-IN.jpg" alt="">
                </div>
                <div class="col-8">
                    <div class="card-info userName">{{ user.userName }}</div>
                    <div class="card-info fans ">{{ fullName }}</div>
                    <div class="card-info fans ">粉丝: {{ user.followerCount }}</div>
                    <div class="card-info float-right">
                        <button @click="follow" v-if="!user.isFollowed" type="button"
                            class="btn btn-secondary btn-sm card-info">
                            +关注
                        </button>
                        <button @click="unFollow" v-if="user.isFollowed" type="button"
                            class="btn btn-success btn-sm card-info">
                            已关注
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    name: "UserProfileInfo",

    // props: 存储父组件传递给子组件的数据
    // 父组件向子组件传递信息：父组件用:绑定，子组件用props接受
    // 子组件向父组件传递信息：子组件定义函数，在函数中触发父组件中定义的事件即可
    props: {
        user: {
            type: Object,
            required: true, // 父元素必须传过来
        }
    },
    setup(props, context) {
        let fullName = computed(
            function () {
                return props.user.firstName + " " + props.user.lastName;
            }
        )
        // context 中包含许多API，其中emit可以触发父组件绑定的@事件
        const follow = function () {
            context.emit('follow');
        }
        const unFollow = function () {
            context.emit('unFollow');
        }

        return {
            fullName, follow, unFollow,
        }
    }

}
</script>

<style scoped>
@import '../assets/css/style.css';

.fans {
    color: gray;
    font-size: 0.5rem;
}

.userName {
    font-weight: bold;
    font-size: 1rem;
}

button {
    padding: 2px 4px;
    font-size: 0.5rem;
}

.card-info {
    text-align: left;
}
</style>