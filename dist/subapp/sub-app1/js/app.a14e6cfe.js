(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["sub-app1-app"]=t():e["sub-app1-app"]=t()})(window,(function(){return function(e){function t(t){for(var r,u,i=t[0],l=t[1],s=t[2],c=0,f=[];c<i.length;c++)u=i[c],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9afe7c60","chunk-2d0c063b":"d73c32e2","chunk-2d20ef88":"9f43a191","chunk-2d21e557":"458ad6d0","chunk-2d222356":"42282d61","chunk-2d226554":"379671fd","chunk-2d2300e6":"f4f655d3"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var s=new Error;a=function(t){l.onerror=l.onload=null,clearTimeout(c);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/subapp/sub-app1/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp_sub-app1"]=window["webpackJsonp_sub-app1"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var p=s;return a.push([0,"vendors~app"]),n()}({0:function(e,t,n){e.exports=n("56d7")},2395:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"bootstrap",(function(){return U})),n.d(t,"mount",(function(){return W})),n.d(t,"unmount",(function(){return J}));var r=n("5530"),o=n("1da1"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("96cf"),n("b0c0"),n("2b0e")),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],l=(n("7c55"),n("2877")),s={},c=Object(l["a"])(s,u,i,!1,null,null,null),p=c.exports,f=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{on:{click:function(t){return t.stopPropagation(),e.save.apply(null,arguments)}}},[e._v("测试storage 命名空间 存值")]),n("div",{on:{click:function(t){return t.stopPropagation(),e.handleGet.apply(null,arguments)}}},[e._v("测试storage 命名空间 取值")]),n("div",{on:{click:function(t){return t.stopPropagation(),e.handleRmove.apply(null,arguments)}}},[e._v("测试 storage 命名空间 清除")]),n("div",{on:{click:function(t){return t.stopPropagation(),e.handleClear.apply(null,arguments)}}},[e._v("测试 storage 命名空间 清空")]),n("div",[e._v(" 父应用传过来的值: "+e._s(e.parentData)+" ")]),n("div",[e._v("父应用的方法 "),n("button",{on:{click:function(t){return t.stopPropagation(),e.parentAlert.apply(null,arguments)}}},[e._v("点我")])]),n("div",[e._v("调用父应用的登出方法 "),n("button",{on:{click:function(t){return t.stopPropagation(),e.parentLogout.apply(null,arguments)}}},[e._v("登出")])]),n("router-link",{attrs:{to:"/home"}},[e._v("测试401页面")])],1)},v=[],h=(n("e9c4"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])}),_=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),e._v(" check out the "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],b={name:"HelloWorld",props:{msg:String}},m=b,g=(n("e212"),Object(l["a"])(m,h,_,!1,null,"df6a9e02",null)),y=g.exports,w={name:"Home",components:{HelloWorld:y},data:function(){return{parentData:a["default"].prototype.parentData}},mounted:function(){},methods:{parentAlert:function(){a["default"].prototype.parentFns.portal_alert("来自子应用的值")},parentLogout:function(){a["default"].prototype.parentFns.portal_logout()},save:function(){sessionStorage.setItem("a",JSON.stringify({a:"b"}))},handleGet:function(){alert(sessionStorage.getItem("a"))},handleRmove:function(){sessionStorage.removeItem("a")},handleClear:function(){sessionStorage.clear()}}},k=w,j=(n("bf89"),Object(l["a"])(k,d,v,!1,null,"a75feab0",null)),E=j.exports;a["default"].use(f["a"]);var O=[{path:"/",name:"Home",component:E},{path:"/about",name:"About",redirect:"/about/index",component:function(){return n.e("about").then(n.bind(null,"f820"))},children:[{path:"index",component:function(){return n.e("chunk-2d222356").then(n.bind(null,"ce42"))},children:[{path:"sub",component:function(){return n.e("chunk-2d21e557").then(n.bind(null,"d4b3"))}}]}]},{path:"/home",component:function(){return n.e("chunk-2d0c063b").then(n.bind(null,"4229"))}},{path:"/lala",name:"lala",component:function(){return n.e("chunk-2d20ef88").then(n.bind(null,"b246"))},children:[{path:"aaa",component:function(){return n.e("chunk-2d2300e6").then(n.bind(null,"eb3f"))},children:[{path:"bbb",component:function(){return n.e("chunk-2d226554").then(n.bind(null,"e7e1"))}}]}]}],P=new f["a"]({mode:"history",base:Object({NODE_ENV:"production",BASE_URL:"/subapp/sub-app1/"}).VUE_APP_BASE_PATH||(window.__POWERED_BY_QIANKUN__?"/sub-app1":"/"),routes:O}),x=P,N=n("2f62");a["default"].use(N["a"]);var S=new N["a"].Store({state:{},mutations:{},actions:{},modules:{}}),A=n("5c96"),R=n.n(A);n("0fae"),n("83f4");a["default"].config.productionTip=!1,a["default"].use(R.a,{size:"small"});var C=null,D=n("9224"),I=D.name;function T(){C=new a["default"]({router:x,store:S,render:function(e){return e(p)}}).$mount("#app")}var $=x.options,B=$.base,L=$.mode;if(window.__POWERED_BY_QIANKUN__){if("history"!==L)throw"在此子应用中router.js 中开启 browserhistory，不懂联系csj";if("/"+I!==B)throw"请保证router.js 中 base字段与 package.json字段一致 如 /sub-app1 不懂联系csj"}function U(){return H.apply(this,arguments)}function H(){return H=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=n.length>0&&void 0!==n[0]?n[0]:{},a["default"].prototype.parentData=Object(r["a"])({},t.data),a["default"].prototype.parentFns=t.fns;case 3:case"end":return e.stop()}}),e)}))),H.apply(this,arguments)}function W(){return F.apply(this,arguments)}function F(){return F=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:T();case 1:case"end":return e.stop()}}),e)}))),F.apply(this,arguments)}function J(){return K.apply(this,arguments)}function K(){return K=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:C.$destroy(),C=null;case 2:case"end":return e.stop()}}),e)}))),K.apply(this,arguments)}window.__POWERED_BY_QIANKUN__||T()},"5a39":function(e,t,n){},"7c55":function(e,t,n){"use strict";n("2395")},"83f4":function(e,t,n){window.__POWERED_BY_QIANKUN__&&(n.p=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)},9224:function(e){e.exports=JSON.parse('{"name":"sub-app1","version":"0.1.0","private":true,"scripts":{"build":"vue-cli-service build","lint":"vue-cli-service lint","start":"vue-cli-service serve --port 8081"},"dependencies":{"core-js":"^3.6.4","element-ui":"^2.13.0","vue":"^2.6.11","vue-router":"^3.1.5","vuex":"^3.1.2"},"devDependencies":{"@vue/cli-plugin-babel":"^4.2.0","@vue/cli-plugin-eslint":"^4.2.0","@vue/cli-service":"^4.2.0","@vue/eslint-config-standard":"^5.1.0","babel-eslint":"^10.0.3","eslint":"^6.7.2","eslint-plugin-import":"^2.20.1","eslint-plugin-node":"^11.0.0","eslint-plugin-promise":"^4.2.1","eslint-plugin-standard":"^4.0.0","eslint-plugin-vue":"^6.1.2","less":"^3.0.4","less-loader":"^5.0.0","vue-template-compiler":"^2.6.11"}}')},"9eb7":function(e,t,n){},bf89:function(e,t,n){"use strict";n("9eb7")},e212:function(e,t,n){"use strict";n("5a39")}})}));