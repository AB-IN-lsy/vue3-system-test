/*
 * @Author: NEFU AB-IN
 * @Date: 2023-03-02 20:42:42
 * @FilePath: \vue3-system-test\src\store\user.js
 * @LastEditTime: 2023-03-02 22:22:05
 */
import $ from 'jquery';
import jwt_decode from 'jwt-decode';


// 用户信息被存在了全局store里
const ModuleUser = {
    state: {
        id: "",
        username: "",
        photo: "",
        followerCount: 0,
        access: "",
        refresh: "",
        is_login: false,
    },
    getters: {
    },
    // mutations里不支持异步 (可记为不访问链接)
    mutations: {
        // state相当于存在store的数据
        updateUser(state, user) {
            state.id = user.id;
            state.username = user.username;
            state.photo = user.photo;
            state.followerCount = user.followerCount;
            state.access = user.access;
            state.refresh = user.refresh;
            state.is_login = user.is_login;
        },
        updateAccess(state, access) {
            state.access = access;
        },
        //退出的话，就是将state清空即可
        logout(state) {
            state.id = "";
            state.username = "";
            state.photo = "";
            state.followerCount = 0;
            state.access = "";
            state.refresh = "";
            state.is_login = false;
        }
    },
    // 支持异步操作 （访问链接）
    actions: {
        // context用来调用API
        // data就是调用时传过来的JSON数据
        login(context, data) {
            // 第一步 通过Ajax，传入username和passwd，后端返回JWT
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/api/token/",
                type: "POST",
                data: {
                    username: data.username,
                    password: data.password,
                },
                success(resp) {
                    // 如果成功了，那么就是获取到了jwt
                    const { access, refresh } = resp; // 获取access和refresh
                    const access_obj = jwt_decode(access); // jwt解码

                    // 每隔4.5分钟刷新一次access
                    setInterval(() => {
                        $.ajax({
                            url: "https://app165.acapp.acwing.com.cn/api/token/refresh/",
                            type: "POST",
                            data: {
                                refresh,
                            },
                            success(resp) {
                                // 调用mutation的API
                                context.commit('updateAccess', resp.access);
                            }
                        });
                    }, 4.5 * 60 * 1000);
                    // 第二步，知道了userid，通过get获取
                    $.ajax({
                        url: "https://app165.acapp.acwing.com.cn/myspace/getinfo/",
                        type: "GET",
                        data: {
                            user_id: access_obj.user_id,
                        },
                        // JWT验证所需要的，需要加上access
                        headers: {
                            'Authorization': "Bearer " + access,
                        },
                        success(resp) {
                            // 调用mutation的API
                            context.commit("updateUser", {
                                ...resp, // 拓展运算符，将JSON数据其按逗号展开
                                access: access,
                                refresh: refresh,
                                is_login: true,
                            });
                            data.success();
                        },
                    })
                },
                error() {
                    data.error();
                }
            });
        },
    },
    modules: {
    }
};

export default ModuleUser;
