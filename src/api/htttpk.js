import axios from 'axios';
import apiConfig from '../../config/api.config'
import Qs from 'qs';

axios.defaults.timeout = 50000;
axios.defaults.baseURL = apiConfig.baseUrl;

//http request 拦截器
axios.interceptors.request.use(
 
  config => {
    const username = window.localStorage.getItem('ms_username');
    const userkey = window.localStorage.getItem('ms_userkey');
    if(config.method === 'OPTIONS'){
      console.log("拦截器"+config.method );
    }
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    if(config.method === 'post'|| config.method ==="get" ) {
      config.data = Qs.stringify(config.data);
      config.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, PATCH, DELETE',
        'Authorization':'bearer' + ' ' + userkey+'|'+username
      }
      console.log("拦截器");
      console.log(userkey+"|"+username);
    }
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);


//http response 拦截器
axios.interceptors.response.use(
  response => {
    if(response.data.errCode ==2||response.data.errCode==401){
      router.push({
        path:"/login",
        querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
      })
    }
    return response;
  },
  error => {
    return Promise.reject(error)
  }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url,params={}){
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params:Qs.stringify(params) 
    })
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err)
    })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

 export function post(url,data = {}){
   return new Promise((resolve,reject) => {
     axios.post(url,data)
          .then(response => {
            resolve(response.data);
          },err => {
            reject(err)
          })
   })
 }

 /**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.patch(url,data)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
  })
}

 /**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.put(url,data)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
  })
}

