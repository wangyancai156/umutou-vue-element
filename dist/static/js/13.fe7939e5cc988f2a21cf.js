webpackJsonp([13],{"3xEY":function(t,e){},kDIz:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){return{Pagesize:10,PageIndex:1,TotalCount:0,status:"PO-030",table:[]}},activated:function(){this.initialization()},methods:{initialization:function(){this.getPurchaseNoticeView()},handleSizeChange:function(t){this.Pagesize=t,this.getPurchaseNoticeView()},handleCurrentChange:function(t){this.PageIndex=t,this.getPurchaseNoticeView()},getPurchaseNoticeView:function(){var t=this;this.$http.get("/api/PurchaseOrder/getPurchaseOrderViewByStatus",{params:{PageIndex:this.PageIndex,PageSize:this.Pagesize,StatuId:this.status}}).then(function(e){t.table=e.data.EntityList,t.TotalCount=e.data.TotalCount,t.PageIndex=e.data.PageIndex,console.log(e.data.EntityList)})},selsChange:function(t){this.sels=t},inBound:function(){this.$router.push("addpurchaseorder")},dateFormat:function(t,e){var a=t[e.property];return void 0==a?"":a.substring(0,10)}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.table},on:{"selection-change":t.selsChange}},[a("el-table-column",{staticStyle:{width:"5%"},attrs:{type:"selection"}}),t._v(" "),a("el-table-column",{staticStyle:{width:"30%"},attrs:{prop:"Id",label:"采购编号"}}),t._v(" "),a("el-table-column",{staticStyle:{width:"15%"},attrs:{prop:"PurchaseType.Description",label:"采购类型"}}),t._v(" "),a("el-table-column",{staticStyle:{width:"30%"},attrs:{prop:"Supplier.Name",label:"供应商"}}),t._v(" "),a("el-table-column",{staticStyle:{width:"20%"},attrs:{prop:"PaymentType.Name",label:"付款方案"}}),t._v(" "),a("el-table-column",{staticStyle:{width:"20%"},attrs:{prop:"CreateUser.UserName",label:"请购人"}}),t._v(" "),a("el-table-column",{staticStyle:{width:"20%"},attrs:{prop:"CreateDate",label:"操作时间",formatter:t.dateFormat}}),t._v(" "),a("el-table-column",{staticStyle:{width:"5%"},attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"}},[a("span",{on:{click:function(a){t.addPurchaseOrderDetail(e.row)}}},[t._v(" 确认到货 ")])])]}}])})],1),t._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":t.PageIndex,"page-sizes":[5,10,20,100],"page-size":t.Pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.TotalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},staticRenderFns:[]};var s=a("VU/8")(n,i,!1,function(t){a("3xEY")},null,null);e.default=s.exports}});