webpackJsonp([29],{Sb3S:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={data:function(){return{form:{Id:"",ParentId:"",Name:"",Url:"",IsShow:"",Description:"",Icon:""}}},activated:function(){this.form.ParentId=this.$route.query.parentId,console.log(this.$route.query)},methods:{onSubmit:function(){var t=this;console.log(this.from),this.$http.get("/api/Rights/AddRights",{params:{Id:"",ParentId:this.form.ParentId,Name:this.form.Name,Url:this.form.Url,IsShow:this.form.IsShow,Description:this.form.Description,Icon:this.form.Icon}}).then(function(e){t.$router.push("Rights")})}}},s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"container"},[o("div",{staticClass:"form-box"},[o("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"名称"}},[o("el-input",{model:{value:t.form.Name,callback:function(e){t.$set(t.form,"Name",e)},expression:"form.Name"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"URL"}},[o("el-input",{model:{value:t.form.Url,callback:function(e){t.$set(t.form,"Url",e)},expression:"form.Url"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"图标"}},[o("el-input",{model:{value:t.form.Icon,callback:function(e){t.$set(t.form,"Icon",e)},expression:"form.Icon"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"显示"}},[o("el-switch",{model:{value:t.form.IsShow,callback:function(e){t.$set(t.form,"IsShow",e)},expression:"form.IsShow"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"说明"}},[o("el-input",{attrs:{type:"textarea",rows:"5"},model:{value:t.form.Description,callback:function(e){t.$set(t.form,"Description",e)},expression:"form.Description"}})],1),t._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("提交")]),t._v(" "),o("el-button",[t._v("取消")])],1)],1)],1)])])},staticRenderFns:[]},i=o("VU/8")(r,s,!1,null,null,null);e.default=i.exports}});