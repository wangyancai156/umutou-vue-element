webpackJsonp([30],{"8Ht2":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={data:function(){return{form:{ParentId:"",Name:"",Description:""}}},activated:function(){this.form.ParentId=this.$route.query.parentid,console.log(this.$route.query)},methods:{onSubmit:function(){var t=this;this.$http.get("/api/Organization/AddOrganization",{params:{ParentId:this.form.ParentId,Name:this.form.Name,Description:this.form.Description}}).then(function(e){t.$router.push("organization")})}}},i={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container"},[r("div",{staticClass:"form-box"},[r("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:t.form.Name,callback:function(e){t.$set(t.form,"Name",e)},expression:"form.Name"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"说明"}},[r("el-input",{attrs:{type:"textarea",rows:"5"},model:{value:t.form.Description,callback:function(e){t.$set(t.form,"Description",e)},expression:"form.Description"}})],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("提交")]),t._v(" "),r("el-button",[t._v("取消")])],1)],1)],1)])])},staticRenderFns:[]},n=r("VU/8")(o,i,!1,null,null,null);e.default=n.exports}});