(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d917fbb"],{5143:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"portal-errPage-container"},[i("el-row",{staticClass:"errPage-container-content"},[i("el-col",{attrs:{span:12}},[i("h1",{staticClass:"text-jumbo text-ginormous"},[t._v("Oops!")]),i("h2",[t._v("你没有权限访问该页面")]),i("h6",[t._v("如有不满请联系你领导")]),i("ul",{staticClass:"list-unstyled"},[i("li",[t._v(" 或者你可以 "),i("span",{on:{click:function(e){return e.stopPropagation(),t.return_page.apply(null,arguments)}}},[t._v("回首页")])])])]),i("el-col",{attrs:{span:12}},[i("img",{attrs:{src:t.errGif,width:"313",height:"428",alt:"Girl has dropped her ice cream."},on:{click:function(e){t.dialogVisible=!0}}})])],1),i("el-dialog",{attrs:{visible:t.dialogVisible,title:"随便看","modal-append-to-body":!1},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("img",{staticClass:"pan-img",attrs:{src:t.ewizardClap}})])],1)},s=[],n=i("5530"),r=(i("0d03"),i("c740"),i("ac1f"),i("00b4"),i("cc6c")),l=i.n(r),c=i("2f62"),o={name:"Page401",data:function(){return{errGif:l.a+"?"+ +new Date,ewizardClap:"https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646",dialogVisible:!1}},computed:Object(n["a"])({},Object(c["c"])(["subApp"])),methods:{getFirstPath:function(t){if(!t.noDisplay&&!t.hidden){var e=t.path;return t.children&&t.children.length&&(e=this.getFirstPath(t.children[0])),e}},return_page:function(){var t,e,i=sessionStorage.getItem("refreshApp",!0);if(i){var a=this.subApp.findIndex((function(t){return t.appPrefix===i}));t=this.subApp[a]}else t=this.subApp[0];for(var s=0;s<t.appMenus.length;s++)if(e=this.getFirstPath(t.appMenus[s]),e)break;/\/$/.test(e)&&(e=e.substring(0,e.length-1)),console.log(e),this.$router.push({path:e})}}},p=o,u=i("2877"),d=Object(u["a"])(p,a,s,!1,null,null,null);e["default"]=d.exports},cc6c:function(t,e,i){t.exports=i.p+"img/401.089007e7.gif"}}]);