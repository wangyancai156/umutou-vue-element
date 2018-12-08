import Vue from 'vue';
import App from './App';
import apiConfig from '../config/api.config'
import Axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, Axios);
Axios.defaults.baseURL = apiConfig.baseUrl;

import router from './router';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
import "babel-polyfill";

Vue.use(VueRouter);
Vue.use(ElementUI, { size: 'small' });

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {

    const username = localStorage.getItem('ms_username');
    const userkey = localStorage.getItem('ms_userkey');

    if (!username) {
        next('/login');
    } else if (!userkey) {
        next('/login');
    } else {
        Axios.get("/api/Account/Verification", {
            params: {
                UserId: username,
                Userkey: userkey
            }
        }).then(res => {

            if (!res.data && to.path !== '/login') {
                console.log("错误");
                next('/login');
            } else {
                console.log("正确");
                next();
            }

        });

    }
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');