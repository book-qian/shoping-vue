var b=(n,d,o)=>new Promise((p,m)=>{var i=e=>{try{r(o.next(e))}catch(s){m(s)}},c=e=>{try{r(o.throw(e))}catch(s){m(s)}},r=e=>e.done?p(e.value):Promise.resolve(e.value).then(i,c);r((o=o.apply(n,d)).next())});import{E as x,a as I}from"./el-input-873f0f50.js";import{E as F}from"./el-card-891d99b8.js";import{l as C,E as L,a as S,b as B}from"./user-d57bf5b9.js";import{d as R,r as E,a as N,c as T,w as t,o as q,b as a,e as k,u as U,h as v,p as D,f as M,g as V,_ as $}from"./index-a68fc6dd.js";import{S as h}from"./storage-bb3fdbc1.js";import{E as y}from"./app.confing-99f95bd5.js";import"./_initCloneObject-6c7f8d6d.js";import"./http-75f6350a.js";const j=n=>(D("data-v-68216f6f"),n=n(),M(),n),z=j(()=>V("div",{class:"card-header"},[V("span",null,"用户登录")],-1)),A=R({__name:"Login",setup(n){const d=U(),o=E({name:"",pwd:""}),p=N(),m=E({name:[{required:!0,message:"请输入用户名",trigger:"blur"}],pwd:[{required:!0,message:"请输入密码",trigger:"blur"}]}),i=r=>b(this,null,function*(){const e=new Date().getTime()+72e5;r&&(yield r.validate((s,u)=>b(this,null,function*(){if(s)try{const{code:l,msg:f,data:g,token:w}=yield C({name:o.name,pwd:o.pwd});l===200?(h.set("userInfo",g,e),h.set("token",w,e),d.push("/goodList")):y.error(f)}catch(l){y.error(l)}else y({message:v("p",null,[v("span",null,"请输入必填信息")])})})))}),c=()=>{d.push("/register")};return(r,e)=>{const s=x,u=L,l=I,f=S,g=B,w=F;return q(),T(w,{class:"box-card"},{header:t(()=>[z]),default:t(()=>[a(g,{ref_key:"ruleFormRef",ref:p,model:o,rules:m,"label-width":"120px","status-icon":""},{default:t(()=>[a(u,{label:"用户名",prop:"name"},{default:t(()=>[a(s,{modelValue:o.name,"onUpdate:modelValue":e[0]||(e[0]=_=>o.name=_)},null,8,["modelValue"])]),_:1}),a(u,{label:"密码",prop:"pwd"},{default:t(()=>[a(s,{modelValue:o.pwd,"onUpdate:modelValue":e[1]||(e[1]=_=>o.pwd=_),type:"password","show-password":""},null,8,["modelValue"])]),_:1}),a(u,null,{default:t(()=>[a(l,{type:"primary",onClick:e[2]||(e[2]=_=>i(p.value))},{default:t(()=>[k(" 登录 ")]),_:1}),a(l,{onClick:c},{default:t(()=>[a(f,{type:"info"},{default:t(()=>[k(" 注册")]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}}});const Y=$(A,[["__scopeId","data-v-68216f6f"]]);export{Y as default};
