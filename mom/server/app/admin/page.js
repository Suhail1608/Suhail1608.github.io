(()=>{var e={};e.id=3,e.ids=[3],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},6063:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>c,routeModule:()=>m,tree:()=>d});var s=r(482),n=r(9108),a=r(2563),i=r.n(a),o=r(8300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=["",{children:["admin",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,2758)),"C:\\Users\\djang\\OneDrive\\Desktop\\m-o-m\\src\\app\\admin\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1965)),"C:\\Users\\djang\\OneDrive\\Desktop\\m-o-m\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\djang\\OneDrive\\Desktop\\m-o-m\\src\\app\\admin\\page.js"],p="/admin/page",u={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/admin/page",pathname:"/admin",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},2390:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},5439:(e,t,r)=>{Promise.resolve().then(r.bind(r,2349))},4625:()=>{},2349:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(5344),n=r(9977),a=r(3729);r(4538);var i=r(5109),o=r(8428);let l=()=>{let[e,t]=(0,a.useState)(""),[r,l]=(0,a.useState)(""),[d,c]=(0,a.useState)(!1),p=(0,o.useRouter)();return s.jsx("div",{className:"adminLoginPage",children:s.jsx("div",{className:"adminLoginForm",children:(0,s.jsxs)("form",{className:"loginForm",children:[d&&s.jsx("span",{className:"err",children:"Invalid credentials"}),s.jsx("label",{children:"Admin ID"}),s.jsx(n.Z,{value:e,setValue:t,placeholder:"Admin"}),s.jsx("label",{children:"Password"}),s.jsx(n.Z,{pwd:!0,value:r,setValue:l,placeholder:"Password"}),s.jsx(i.Z,{cb:t=>{t.preventDefault(),"admin"===e&&"123"===r?(localStorage.setItem("admin",!0),p.push("admin/meetings-panel")):c(!0)},label:"Login"})]})})})}},5109:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(5344);r(3729),r(9754);let n=({verify:e,unVerify:t,label:r,icon:n,iconType:a,secondary:i,link:o,cb:l,disabled:d})=>i?i?(0,s.jsxs)("button",{onClick:l,className:`button-sec ${a?"iconType":o?"linkType":""}`,children:[s.jsx(s.Fragment,{children:n})," ",r]}):void 0:(0,s.jsxs)("button",{disabled:d,onClick:l,className:`button ${a?"iconType":e?"verifyBtn":t?"unVerifyBtn":""}`,children:[r," ",s.jsx(s.Fragment,{children:n})]})},9977:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(5344);r(3729),r(4919);let n=({value:e,setValue:t,placeholder:r,pwd:n,required:a})=>s.jsx(s.Fragment,{children:s.jsx("input",{required:!0,className:"input-box",placeholder:r,value:e,onChange:e=>{t(e.target.value)},type:n?"password":"text"})})},2758:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>a,__esModule:()=>n,default:()=>i});let s=(0,r(6843).createProxy)(String.raw`C:\Users\djang\OneDrive\Desktop\m-o-m\src\app\admin\page.js`),{__esModule:n,$$typeof:a}=s,i=s.default},1965:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a,metadata:()=>n});var s=r(5036);r(5023);let n={title:"Minutes of meeting",description:"Generated by create next app"},a=function({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{children:e})})}},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(337);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},4538:()=>{},5023:()=>{},9754:()=>{},4919:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,356,404],()=>r(6063));module.exports=s})();