import Vue from 'vue';
import App from './App';
import apiConfig from '../config/api.config'
import Axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from 'vuex'
Axios.defaults.withCredentials = false;


import router from './router';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
import "babel-polyfill";
import {post,fetch,patch,put} from './api/htttpk';
//import a from './api/axios';
//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;

//Vue.use(a)
Vue.use(VueAxios, Axios);
Axios.defaults.baseURL = apiConfig.baseUrl;
Vue.use(Vuex)
Vue.use(VueRouter);
Vue.use(ElementUI, { size: 'small' });


//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    
    const username = window.localStorage.getItem('ms_username');
    const userkey = window.localStorage.getItem('ms_userkey');
    if ((!username || !userkey) && to.path !== '/login') {
        next('/login');
    } else {
       
        console.log("验证时要钥匙");
        console.log(userkey);
        next();
        /** 
        if (to.path == '/login') {
            next();
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
        }*/

    }
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');