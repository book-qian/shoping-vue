var m=(e,g,t)=>new Promise((u,n)=>{var b=s=>{try{c(t.next(s))}catch(o){n(o)}},i=s=>{try{c(t.throw(s))}catch(o){n(o)}},c=s=>s.done?u(s.value):Promise.resolve(s.value).then(b,i);c((t=t.apply(e,g)).next())});import{q as k,U as p}from"./app.confing-99f95bd5.js";const a=k.create({});a.defaults.baseURL=p;a.defaults.responseType="json";a.defaults.timeout=2e4;a.interceptors.request.use(e=>m(void 0,null,function*(){return console.log("config=",e),e}),e=>Promise.reject(e));a.interceptors.response.use(e=>e.data,e=>{if(e&&e.response)switch(e.response.status){case 400:e.message="请求错误";break;case 401:e.message="未授权，请登录";break;case 403:e.message="拒绝访问";break;case 404:e.message=`请求地址出错: ${e.response.config.url}`;break;case 408:e.message="请求超时";break;case 500:e.message="服务器内部错误";break;case 501:e.message="服务未实现";break;case 502:e.message="网关错误";break;case 503:e.message="服务不可用";break;case 504:e.message="网关超时";break;case 505:e.message="HTTP版本不受支持";break;default:e.message="服务出错";break}return Promise.reject(e)});export{a as i};
