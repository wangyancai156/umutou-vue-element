<template>
    <div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="部门">
                        <el-select  v-model="form.organization.val" placeholder="请选择部门" width="100%" >
                            <el-option-group v-for="gtoup in form.organization.data" :key="gtoup.id" :label="gtoup.text">
                                <el-option v-if="gtoup.nodes.length==0"  :key="gtoup.id" :label="gtoup.text"  :value="gtoup.id" ></el-option>
                                <el-option v-for="item in gtoup.nodes" :key="item.id" :label="item.text"  :value="item.id" ></el-option>
                            </el-option-group>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="姓名">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="电话">
                        <el-input v-model="form.telephone"></el-input>
                    </el-form-item>
                     <el-form-item>
                        <el-button type="primary" @click="onSubmit">提交</el-button>
                        <el-button>取消</el-button> 注：用户添加后密码默认为‘111111’
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
                    telephone:'',
                    organization:{
                        val:"",
                        data:[]
                    }
                }, 
            }
        },
        mounted() {
            this.initialization();
        },
        methods: {
            //初始化页面
            initialization() {
                this.getOrganization();
            },
            //获取组织架构
            getOrganization(){
                this.$http
                .get("/api/Organization/GetOrganizationTree", {
                
                })
                .then(res => {
                    this.form.organization.data = res.data[0].nodes; 
                     console.log( res.data[0].nodes ); 
                });
            },
            //提交
            onSubmit() {
                this.$http
                .get("/api/Users/AddUsers", {
                    params: {  
                        Id:"",
                        Name: this.form.name,
                        Pwd:"111111",
                        Organizationid:this.form.organization.val,
                        Telephone:this.form.telephone
                    }
                })
                .then(res => {
                    this.$router.push('user');
                });
           }
        }
    }
</script>