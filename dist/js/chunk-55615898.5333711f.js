(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55615898"],{"2fdb":function(e,s,i){"use strict";var t=i("5ca1"),n=i("d2c8"),r="includes";t(t.P+t.F*i("5147")(r),"String",{includes:function(e){return!!~n(this,e,r).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},5147:function(e,s,i){var t=i("2b4c")("match");e.exports=function(e){var s=/./;try{"/./"[e](s)}catch(i){try{return s[t]=!1,!"/./"[e](s)}catch(n){}}return!0}},"56e8":function(e,s,i){"use strict";i.r(s);var t=function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("div",[i("p",[e._v(e._s(e.permissions))]),e.checkPermission("vuex-helpers:permissionsButton:update")?i("el-button",{attrs:{type:"primary"},on:{click:e.updatePermissions}},[e._v("更新权限")]):e._e(),i("el-button",{attrs:{type:"danger",disabled:!e.checkPermission("vuex-helpers:permissionsButton:reset")}},[e._v("修改权限")]),i("p",[e._v("PS：这里使用 disabled 是为了显示效果，在项目可以使用 v-if 指令。")]),i("p",{staticClass:"sub_head"},[e._v("html :")]),i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.htmlCode,expression:"htmlCode"}]},[i("code",{staticClass:"html"})]),i("p",{staticClass:"sub_head"},[e._v("javascript :")]),i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.javascriptCode,expression:"javascriptCode"}]},[i("code",{staticClass:"javascript"})]),i("p",{staticClass:"sub_head"},[e._v("checkPermissionMixin :")]),i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.mixinCode,expression:"mixinCode"}]},[i("code",{staticClass:"javascript"})])],1)},n=[],r=(i("6762"),i("2fdb"),i("cebc")),o=i("2f62"),c={computed:Object(o["d"])("permission",["permissions"]),methods:Object(r["a"])({},Object(o["c"])("permission",["updatePermissions"]),{checkPermission:function(e){return this.permissions.includes(e)}})},a='<div>\n  <p>{{permissions}}</p>\n\n  <el-button type="primary" v-if="checkPermission(\'vuex-helpers:permissionsButton:update\')" @click="updatePermissions">更新权限</el-button>\n  <el-button type="danger" :disabled="!checkPermission(\'vuex-helpers:permissionsButton:reset\')">修改权限</el-button>\n</div>',p="import checkPermissionMixin from '../mixins/checkPermissionMixin'\n\nexport default {\n  mixins: [checkPermissionMixin],\n\n  created() {\n    this.updatePermissions()\n    // this.$store.dispatch('permission/updatePermissions')\n  }\n}",u="import { mapState, mapGetters, mapActions } from 'vuex'\n\nexport default {\n  computed: mapGetters('permission', ['permissions']),\n\n  // computed: mapState({\n  //   permissions: state => state.permission.permissions\n  // }),\n\n  methods: {\n    ...mapActions('permission', ['updatePermissions']),\n\n    checkPermission(permission) {\n      return this.permissions.includes(permission)\n    }\n  }\n}",m={mixins:[c],data:function(){return{htmlCode:a,javascriptCode:p,mixinCode:u}},created:function(){this.updatePermissions()}},d=m,h=i("2877"),l=Object(h["a"])(d,t,n,!1,null,null,null);s["default"]=l.exports},6762:function(e,s,i){"use strict";var t=i("5ca1"),n=i("c366")(!0);t(t.P,"Array",{includes:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),i("9c6c")("includes")},aae3:function(e,s,i){var t=i("d3f4"),n=i("2d95"),r=i("2b4c")("match");e.exports=function(e){var s;return t(e)&&(void 0!==(s=e[r])?!!s:"RegExp"==n(e))}},d2c8:function(e,s,i){var t=i("aae3"),n=i("be13");e.exports=function(e,s,i){if(t(s))throw TypeError("String#"+i+" doesn't accept regex!");return String(n(e))}}}]);
//# sourceMappingURL=chunk-55615898.5333711f.js.map