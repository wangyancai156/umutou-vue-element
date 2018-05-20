<template>
    <div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="部门">
                        <el-select  v-model="form.organization.val" clearable placeholder="请选择部门" class="handle-select mr10" style="width:150px">
                            <el-option v-for="item in form.organization.data" :key="item.Id" :label="item.Name"  :value="item.Id" ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="功能">
                        <el-select  v-model="form.rights.system_val" clearable  placeholder="选择系统" @change="selChange(form.rights.system_val,'page')"  class="handle-select mr10"  style="width:150px">
                            <el-option v-for="item in form.rights.system_data" :key="item.Id" :label="item.Name"  :value="item.Id"  ></el-option>
                        </el-select>
                        <el-select  v-model="form.rights.page_val" clearable multiple collapse-tags placeholder="选择共能" class="handle-select mr10" style="width:150px">
                            <el-option-group v-for="gtoup in form.rights.page_data" :key="gtoup.Id" :label="gtoup.Name"  :value="gtoup.Id" >
                                <el-option v-for="item in gtoup.Child" :key="item.Id" :label="item.Name"  :value="item.Id"  ></el-option>
                            </el-option-group>
                        </el-select>
                        <el-cascader placeholder="试试搜索：指南"  multiple :options="options"  filterable ></el-cascader>
                    </el-form-item>
                    <el-form-item label="名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="说明">
                        <el-input type="textarea" rows="5" v-model="form.description"></el-input>
                    </el-form-item>
                     <el-form-item>
                        <el-button type="primary" @click="onSubmit">提交</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                form: {
                    name: '',
                    description: '',
                    organization:{
                        val:"",
                        data:[]
                    },
                    rights:{
                        system_val:"",
                        system_data:[],
                        page_val:"",
                        page_data:[],
                        function_val:"",
                        function_data:[],
                    }
                }, 
                options: [{
                    value: 'zhinan',
                    label: '指南',
                    children: [{
                        value: 'shejiyuanze',
                        label: '设计原则',
                        children: [{
                        value: 'yizhi',
                        label: '一致'
                        }, {
                        value: 'fankui',
                        label: '反馈'
                        }, {
                        value: 'xiaolv',
                        label: '效率'
                        }, {
                        value: 'kekong',
                        label: '可控'
                        }]
     
                    }]
                }]
            }
        },
        mounted() {
            this.initialization();
        },
        methods: {
            //初始化页面
            initialization() {
                this.getOrganization();
                this.selChange(0,"system");
            },
            //获取组织架构
            getOrganization(){
                this.$http
                .get("/api/Organization/GetOrganizationView", {
                    params: {
                        id: 0
                    }
                })
                .then(res => {
                    this.form.organization.data = res.data[0].Child; 
                    
                });
            },
            //获取功能
            selChange(key,type){
                 console.log( type ); 
                console.log( key ); 
                this.$http
                .get("/api/Rights/GetRightsView", {
                    params: {
                            id: key
                        }
                    })
                .then(res => {
                    console.log( res.data[0].Child ); 
                    if(type=="system"){
                        this.form.rights.system_data =res.data[0].Child;
                    }else if(type=="page"){
                        this.form.rights.page_data =res.data[0].Child;
                    }else if(type=="function"){
                        this.form.rights.page_data =res.data[0].Child;
                    }
                });
            },
            //提交
            onSubmit() {
                this.$http
                .get("/api/Role/AddRole", {
                    params: {  
                        Id:"",
                        Name: this.form.name,
                        Description:this.form.description,
                        Organizationid:this.form.organization.val,   
                    }
                })
                .then(res => {
                    this.$router.push('role');
                });
           }
        }
    }
</script>