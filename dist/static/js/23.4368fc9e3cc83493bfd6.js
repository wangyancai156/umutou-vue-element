webpackJsonp([23],{"7KqG":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={data:function(){return{PurchaseType:{data:[],val:""},Supplier:{data:[],val:"",loading:!1},PaymentType:{data:[],val:""}}},activated:function(){this.initialization()},methods:{initialization:function(){this.getPurchaseType(),this.getPaymentType(),this.getSupplier()},getPurchaseType:function(){var e=this;this.$http.get("/api/PurchaseOrder/GetPurchaseType",{}).then(function(t){e.PurchaseType.data=t.data,e.PurchaseType.val=t.data[0].Id,console.log(t.data[0].Id)})},getSupplier:function(){var e=this;this.$http.get("/api/PurchaseOrder/GetSupplierView",{}).then(function(t){e.Supplier.data=t.data,e.Supplier.val=t.data[0].Id,console.log(t.data)})},getPaymentType:function(){var e=this;this.$http.get("/api/PurchaseOrder/GetPaymentType",{}).then(function(t){e.PaymentType.data=t.data,e.PaymentType.val=t.data[0].Id,console.log(t.data[0].Id)})},onSubmit:function(){var e=this,t=window.localStorage.getItem("ms_username");this.$http.get("/api/PurchaseOrder/AddPurchaseOrder",{params:{PurchaseTypeId:this.PurchaseType.val,SupplierId:this.Supplier.val,PaymentTypeId:this.PaymentType.val,Note:"",CreateUserId:t}}).then(function(t){setTimeout(e.$router.push("mypurchaseorder"),1e3)})},onCancel:function(){setTimeout(this.$router.push("mypurchaseorder"),1e3)}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"form-box"},[a("el-form",{ref:"form",attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"采购类型"}},[a("el-select",{staticClass:"handle-select mr10",staticStyle:{width:"100%"},attrs:{placeholder:"请选择采购类型"},model:{value:e.PurchaseType.val,callback:function(t){e.$set(e.PurchaseType,"val",t)},expression:"PurchaseType.val"}},e._l(e.PurchaseType.data,function(e){return a("el-option",{key:e.Id,attrs:{label:e.Description,value:e.Id}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"供应商"}},[a("el-select",{staticClass:"handle-select mr10",staticStyle:{width:"100%"},attrs:{filterable:"",placeholder:"选择供应商"},model:{value:e.Supplier.val,callback:function(t){e.$set(e.Supplier,"val",t)},expression:"Supplier.val"}},e._l(e.Supplier.data,function(e){return a("el-option",{key:e.Id,attrs:{label:e.Name,value:e.Id}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"付款类型"}},[a("el-select",{staticClass:"handle-select mr10",staticStyle:{width:"100%"},attrs:{placeholder:"选择付款类型"},model:{value:e.PaymentType.val,callback:function(t){e.$set(e.PaymentType,"val",t)},expression:"PaymentType.val"}},e._l(e.PaymentType.data,function(e){return a("el-option",{key:e.Id,attrs:{label:e.Name,value:e.Id}})}))],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("提交")]),e._v(" "),a("el-button",{on:{click:e.onCancel}},[e._v("取消")])],1)],1)],1)])])},staticRenderFns:[]},i=a("VU/8")(l,r,!1,null,null,null);t.default=i.exports}});