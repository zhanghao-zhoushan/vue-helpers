(function(e){function n(n){for(var r,i,a=n[0],s=n[1],c=n[2],l=0,p=[];l<a.length;l++)i=a[l],o[i]&&p.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(n);while(p.length)p.shift()();return u.push.apply(u,c||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,i=1;i<t.length;i++){var s=t[i];0!==o[s]&&(r=!1)}r&&(u.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={app:0},u=[];function i(e){return a.p+"js/"+({}[e]||e)+"."+{"chunk-2d0c9386":"96a72f0f","chunk-2d0d5c8f":"08fa2b21","chunk-2d229a06":"8833cb66","chunk-4715cd4a":"63ebdc88","chunk-55615898":"5333711f"}[e]+".js"}function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise(function(n,r){t=o[e]=[n,r]});n.push(t[2]=r);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.src=i(e),u=function(n){s.onerror=s.onload=null,clearTimeout(c);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+u+")");i.type=r,i.request=u,t[1](i)}o[e]=void 0}};var c=setTimeout(function(){u({type:"timeout",target:s})},12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(n)},a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="",a.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var f=c;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("64a9"),o=t.n(r);o.a},"56d7":function(e,n,t){"use strict";t.r(n);t("1951"),t("450d");var r=t("eedf"),o=t.n(r),u=(t("6611"),t("e772")),i=t.n(u),a=(t("1f1a"),t("4e4b")),s=t.n(a),c=(t("cadf"),t("551c"),t("f751"),t("097d"),t("2b0e")),l=(t("0fae"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("h1",[e._v("vuex helpers")]),t("div",{staticClass:"panel"},[t("el-button",{staticClass:"panel__button",attrs:{type:"primary"},on:{click:function(n){return e.jumpTopage("store")}}},[e._v("Store")]),t("el-button",{staticClass:"panel__button",attrs:{type:"primary"},on:{click:function(n){return e.jumpTopage("user")}}},[e._v("User")]),t("el-button",{staticClass:"panel__button",attrs:{type:"success"},on:{click:function(n){return e.jumpTopage("config")}}},[e._v("Config")]),t("el-button",{staticClass:"panel__button",attrs:{type:"info"},on:{click:function(n){return e.jumpTopage("permission")}}},[e._v("Permission")]),t("el-button",{staticClass:"panel__button",attrs:{type:"warning"},on:{click:function(n){return e.jumpTopage("createNamespaced")}}},[e._v("Namespaced")])],1),t("router-view")],1)}),f=[],p={name:"app",methods:{jumpTopage:function(e){this.$router.push(e)}}},d=p,m=(t("034f"),t("2877")),h=Object(m["a"])(d,l,f,!1,null,null,null),v=h.exports,b=t("8c4f");c["default"].use(b["a"]);var g=new b["a"]({routes:[{path:"",redirect:"/store"},{path:"/store",name:"store",component:function(){return t.e("chunk-2d229a06").then(t.bind(null,"ddf6"))}},{path:"/user",name:"user",component:function(){return t.e("chunk-2d0d5c8f").then(t.bind(null,"7088"))}},{path:"/config",name:"config",component:function(){return t.e("chunk-2d0c9386").then(t.bind(null,"57e3"))}},{path:"/permission",name:"permission",component:function(){return t.e("chunk-55615898").then(t.bind(null,"56e8"))}},{path:"/createNamespaced",name:"createNamespaced",component:function(){return t.e("chunk-4715cd4a").then(t.bind(null,"72cf"))}}]}),y=g,_=t("2f62"),j=t("795b"),k=t.n(j),w={name:"Sailor",age:"27",job:"程序猿",city:"上海",userId:9527,mobile:18888888888};function O(){return new k.a(function(e){setTimeout(function(){return e(w)},500)})}var T={userInfo:{}},P={userInfo:function(e){return e.userInfo}},x={updateUserInfo:function(e){var n=e.commit;n("clearUserInfo"),O().then(function(e){return n("setUserInfo",e)})}},S={setUserInfo:function(e,n){e.userInfo=n},clearUserInfo:function(){T.userInfo="更新中..."}},I={namespaced:!0,state:T,getters:P,actions:x,mutations:S},C=t("cebc"),E={STATE:[{value:1,label:"成功"},{value:2,label:"失败"}],JOB:[{value:1,label:"前端程序猿"},{value:2,label:"后端程序猿"}]};function U(){return new k.a(function(e){setTimeout(function(){return e(E)},500)})}var A={options:{}},B={options:function(e){return e.options}},J={updateOptions:function(e){var n=e.commit;n("clearOptions"),U().then(function(e){return n("setOptions",e)})}},M={setOptions:function(e,n){e.options=Object(C["a"])({},n)},clearOptions:function(){A.options={STATE:"更新中...",JOB:"更新中..."}}},N={namespaced:!0,state:A,getters:B,actions:J,mutations:M},q=["vuex-helpers:permissions:index","vuex-helpers:permissionsButton:update"];function $(){return new k.a(function(e){setTimeout(function(){return e(q)},500)})}var L={permissions:{}},z={permissions:function(e){return e.permissions}},D={updatePermissions:function(e){var n=e.commit;n("clearPermissions"),$().then(function(e){return n("setPermissions",e)})}},F={setPermissions:function(e,n){e.permissions=n},clearPermissions:function(){L.permissions="更新中..."}},G={namespaced:!0,state:L,getters:z,actions:D,mutations:F},H=t("b054"),K=t.n(H);c["default"].use(_["b"]);var Q=!1,R=new _["b"].Store({modules:{user:I,config:N,permission:G},strict:Q,plugins:Q?[K()()]:[]});t("ac6a");c["default"].directive("highlightjs",{deep:!0,bind:function(e,n){var t=e.querySelectorAll("code");t.forEach(function(e){n.value&&(e.textContent=n.value),hljs.highlightBlock(e)})},componentUpdated:function(e,n){var t=e.querySelectorAll("code");t.forEach(function(e){n.value&&(e.textContent=n.value,hljs.highlightBlock(e))})}}),c["default"].use(s.a),c["default"].use(i.a),c["default"].use(o.a),c["default"].config.productionTip=!1,new c["default"]({router:y,store:R,render:function(e){return e(v)}}).$mount("#app")},"64a9":function(e,n,t){}});
//# sourceMappingURL=app.f81a5a7f.js.map