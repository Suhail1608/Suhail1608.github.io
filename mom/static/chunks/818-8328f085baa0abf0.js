(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[818],{6493:function(e,t,a){"use strict";var n=a(3827);a(4090),a(3090),t.Z=e=>{let{verify:t,unVerify:a,label:s,icon:A,iconType:c,secondary:i,link:r,cb:l,disabled:d}=e;return i?i?(0,n.jsxs)("button",{onClick:l,className:"button-sec ".concat(c?"iconType":r?"linkType":""),children:[(0,n.jsx)(n.Fragment,{children:A})," ",s]}):void 0:(0,n.jsxs)("button",{disabled:d,onClick:l,className:"button ".concat(c?"iconType":t?"verifyBtn":a?"unVerifyBtn":""),children:[s," ",(0,n.jsx)(n.Fragment,{children:A})]})}},5703:function(e,t,a){"use strict";a.d(t,{Z:function(){return h}});var n=a(3827),s=a(4090),A=a(6493);a(9019);var c=a(8292),i=a(703);a(9617),a(5034);var r={src:"/_next/static/media/Verified.7d7e5cae.svg",height:80,width:80,blurWidth:0,blurHeight:0},l={src:"/_next/static/media/Warning.a2c7941c.svg",height:80,width:80,blurWidth:0,blurHeight:0},d=a(8809),u=a(9329),o=a(7907),h=e=>{let{meetingData:t,isAdmin:a}=e,h=t.img?t.img:c.Z,f=(0,o.useRouter)(),g=(0,o.usePathname)(),[b,m]=(0,s.useState)(t.verified),[x,v]=(0,s.useState)(!1);async function w(){v(!0),m(!b),await (0,d.T_)(t.id,!b),v(!1)}return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"meeting-card",children:[(0,n.jsxs)("div",{className:"meeting-left",children:[(0,n.jsx)("div",{className:"meeting-title",children:t.title}),(0,n.jsxs)("div",{className:"meeting-thumb",children:[t.img&&(0,n.jsx)(i.default,{className:"img",width:100,height:100,src:t.img,alt:""}),!t.img&&(0,n.jsx)(i.default,{className:"img",src:h,alt:""})]}),b&&(0,n.jsxs)("span",{className:"verified tag",children:[(0,n.jsx)(i.default,{width:20,src:r,alt:""})," Verified"]}),!b&&(0,n.jsxs)("span",{className:"warning tag",children:[(0,n.jsx)(i.default,{width:20,src:l,alt:""})," Yet to be verified"]}),(0,n.jsxs)("span",{className:"date",children:["Submitted on: ",t.createdAt.toString().slice(0,24)]})]}),(0,n.jsx)("div",{className:"meeting-right",children:(0,n.jsxs)("div",{className:"meeting-button",children:[(0,n.jsx)(A.Z,{cb:()=>{v(!0),f.push("".concat(g,"/meeting-page/").concat(t.id))},label:"View"}),!a&&(0,n.jsx)(A.Z,{label:"Edit"}),a&&(0,n.jsx)(A.Z,{cb:()=>{w()},unVerify:b,verify:!b,label:"".concat(b?"Disprove":"Verify")})]})})]}),(0,n.jsx)(u.Z,{show:x})]})}},5034:function(e,t,a){"use strict";a(3827),a(703),a(4090),a(9133),a(8292)},5362:function(e,t,a){"use strict";var n=a(3827);a(4090),a(3372),t.Z=e=>{let{value:t,setValue:a,placeholder:s,pwd:A,required:c}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("input",{required:!0,className:"input-box",placeholder:s,value:t,onChange:e=>{a(e.target.value)},type:A?"password":"text"})})}},9329:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(3827);a(4090),a(9617);var s=a(703),A={src:"/_next/static/media/loading.c7cd0122.svg",height:200,width:200,blurWidth:0,blurHeight:0};a(8223);var c=e=>{let{show:t}=e;return(0,n.jsx)("div",{style:{display:"".concat(t?"flex":"none")},className:"loadingScreen",children:(0,n.jsx)(s.default,{width:100,src:A,alt:""})})}},9617:function(e,t,a){"use strict";a(3827),a(4090),a(7614),a(6493),a(703)},9084:function(e,t,a){"use strict";var n=a(3827),s=a(4090);a(3800);var A=a(7907);t.Z=e=>{let{count:t,page:a,setPage:c}=e,i=(0,A.useSearchParams)();function r(e){let t=new URL(window.location.href);t.searchParams.set("page",e),window.history.replaceState({},"",t.toString()),c(e)}return parseInt(i.get("page")),(0,s.useEffect)(()=>{let e=new URL(window.location.href);e.searchParams.set("page",a),window.history.replaceState({},"",e.toString())},[a]),(0,s.useEffect)(()=>{c(0)},[i.get("q")]),(0,n.jsxs)("div",{className:"paginationBox",children:[(0,n.jsx)("button",{className:"pButton",onClick:()=>{0!==a&&c(a-1)},children:"Prev"}),a>=3&&(0,n.jsx)("button",{className:"pButton",value:0,onClick:e=>{r(parseInt(e.target.value))},children:1}),a>3&&(0,n.jsx)("span",{children:"..."}),a>1&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("button",{className:"pButton",value:a-2,onClick:e=>{r(parseInt(e.target.value))},children:a-1})}),a>0&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("button",{className:"pButton",value:a-1,onClick:e=>{r(parseInt(e.target.value))},children:a})}),(0,n.jsx)("button",{id:"pgBtn-active",className:"pButton",value:a,onClick:e=>{r(parseInt(e.target.value))},children:a+1}),a+1<t&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("button",{className:"pButton",value:a+1,onClick:e=>{r(parseInt(e.target.value))},children:a+2})}),a+2<t&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("button",{className:"pButton",value:a+2,onClick:e=>{r(parseInt(e.target.value))},children:a+3})}),a+4<t&&(0,n.jsx)("span",{children:"..."}),a+3<t&&(0,n.jsx)("button",{className:"pButton",value:t-1,onClick:e=>{r(parseInt(e.target.value))},children:t}),(0,n.jsx)("button",{className:"pButton",onClick:()=>{a+1<t&&c(a+1)},children:"Next"})]})}},3818:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var n=a(3827),s=a(4090),A=a(5703);a(5882);var c=a(5362),i=a(6493),r={src:"/_next/static/media/Search.9646b95d.svg",height:30,width:30,blurWidth:0,blurHeight:0},l={src:"/_next/static/media/Sort.ded125d5.svg",height:16,width:24,blurWidth:0,blurHeight:0},d=a(703),u=a(7907);a(8792);var o=a(1201),h=a(9084),f=a(9329),g=e=>{var t;let{searchParams:a}=e,[g,b]=(0,s.useState)(""),[m,x]=(0,s.useState)(!1);(0,u.useRouter)();let v=(0,u.useSearchParams)();(0,u.usePathname)();let w=parseInt(v.get("page")),[j,p]=(0,s.useState)(w||0),[B,E]=(0,s.useState)(0),[S,N]=(0,s.useState)(0),[Q,C]=(0,s.useState)([]),[I,y]=(0,s.useState)(!1),D=null===(t=JSON.parse(localStorage.getItem("isAuth")))||void 0===t?void 0:t.id,k="1980-01-01",O=new Date().toISOString();function Z(){if(x(!1),""!==g){let e=new URL(window.location.href);e.searchParams.set("q",g),window.history.replaceState({},"",e.toString())}else{let e=new URL(window.location.href);e.searchParams.delete("q"),window.history.replaceState({},"",e.toString())}}return(0,s.useEffect)(()=>{(async()=>{let e=await (0,o.cw)(g,"",D,k,O,"");N(e),E(Math.ceil(e/10))})()},[v]),(0,s.useEffect)(()=>{(async()=>{y(!0),JSON.parse(localStorage.getItem("isAuth")).id;let e=v.get("sort")?v.get("sort"):"desc",t=v.get("q")?v.get("q"):"";C(await (0,o.sf)(t,e,10*j,"",D,k,O,"")),y(!1)})()},[v]),(0,s.useEffect)(()=>{let e=new URL(window.location.href);e.searchParams.delete("q"),window.history.replaceState({},"",e.toString())},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"MeetingListComp",children:[(0,n.jsxs)("div",{className:"uiBox",children:[" ",S>10&&(0,n.jsx)(h.Z,{setPage:p,count:B,page:j})]}),(0,n.jsxs)("div",{className:"MeetingSearch",onKeyDown:e=>{"Enter"===e.key&&Z()},children:[(0,n.jsx)(c.Z,{placeholder:"Search",value:g,setValue:b}),(0,n.jsx)(i.Z,{cb:()=>{Z()},icon:(0,n.jsx)(d.default,{src:r,alt:""}),iconType:!0}),(0,n.jsx)(i.Z,{cb:()=>{!function(){x(!m);let e=new URL(window.location.href);e.searchParams.set("sort",!0===m?"desc":"asc"),window.history.replaceState({},"",e.toString())}()},icon:(0,n.jsx)(d.default,{src:l,alt:""}),iconType:!0})]}),(0,n.jsx)("div",{className:"MeetingListBox",children:(0,n.jsx)("div",{className:"MeetingList",children:Q.map(e=>(0,n.jsx)(A.Z,{meetingData:e},e.id))})})]}),(0,n.jsx)(f.Z,{show:I})]})}},1201:function(e,t,a){"use strict";a.d(t,{$c:function(){return i},$r:function(){return l},F1:function(){return c},VF:function(){return r},cw:function(){return o},dK:function(){return s},dd:function(){return u},gP:function(){return A},sf:function(){return d}}),a(5355);var n=a(3472),s=(0,n.$)("70a1eac2b3ecb82c0d8b446e686cc008862f79cb");(0,n.$)("630da7b7ac32a911f63e74245320851dcf609a9d");var A=(0,n.$)("a50d3b651c714dccdc9895db6da1ef4d9a05d38b"),c=(0,n.$)("348778e0b398aa7da0c3b1fa5457767b06f521b7"),i=(0,n.$)("243347d08c3d58d1cd3ed9b5c1220e342304b4f9"),r=(0,n.$)("016bf822895cd41a73309570eef2ea0daaddf7d3"),l=(0,n.$)("00f9b0e994de1aac191341958d6cdaf34cd96f5b");(0,n.$)("f10dadaeaf27178cc4d97e6bc178b80cdeb3dbc5");var d=(0,n.$)("898e39c4c09d02ff06581eeb8bfb2096d939f062"),u=(0,n.$)("cf3ae6f3eb8d84377f076e842363a13594d9b924"),o=(0,n.$)("c70a9ffcaca2a643bde4401e75e14517403b13e9")},8809:function(e,t,a){"use strict";a.d(t,{Cm:function(){return c},T_:function(){return s},gJ:function(){return A}}),a(5355);var n=a(3472),s=(0,n.$)("607834ef87ec35b605a3a3709c61c388bdeb134d"),A=(0,n.$)("be453c1511cd9b24c4e3423f9810c35301ca7f88"),c=(0,n.$)("eff0942dbebd40b3b4f2711aa1a85dc9cfc72320");(0,n.$)("317c90d4ce30729deb477c7c00e6acf6c752284f")},3090:function(){},9019:function(){},9133:function(){},3372:function(){},8223:function(){},7614:function(){},3800:function(){},5882:function(){},8292:function(e,t){"use strict";t.Z={src:"/_next/static/media/meetingSnap.93a34529.jpg",height:4016,width:6016,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oADAMBAAIQAxAAAAGkGn//xAAVEAEBAAAAAAAAAAAAAAAAAAADAv/aAAgBAQABBQK0sy//xAAWEQEBAQAAAAAAAAAAAAAAAAACAAH/2gAIAQMBAT8BZy//xAAWEQEBAQAAAAAAAAAAAAAAAAACAAH/2gAIAQIBAT8BC2//xAAZEAABBQAAAAAAAAAAAAAAAAABAAIDMUH/2gAIAQEABj8CfIDWFf/EABcQAQEBAQAAAAAAAAAAAAAAAAERACH/2gAIAQEAAT8hF1XwKb//2gAMAwEAAgADAAAAEPf/xAAXEQEAAwAAAAAAAAAAAAAAAAABACFB/9oACAEDAQE/EAJWT//EABYRAQEBAAAAAAAAAAAAAAAAACEAQf/aAAgBAgEBPxBDt//EABcQAQEBAQAAAAAAAAAAAAAAAAERIQD/2gAIAQEAAT8QS+FYgBR3be//2Q==",blurWidth:8,blurHeight:5}}}]);