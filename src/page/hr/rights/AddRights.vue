<template>
    <div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="80px">
                   
                    <el-form-item label="名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="URL">
                        <el-input v-model="form.url"></el-input>
                    </el-form-item>
                    <el-form-item label="显示">
                        <el-switch v-model="form.isShow"></el-switch>
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
                    parentId: this.$route.params.parentid,
                    name: '',
                    url:'',
                    isShow:true,
                    description: '',
                }
            }
        },
        methods: {
            onSubmit() {
                this.$http
                .get("/api/Rights/AddRights", {
                    params: {  
                        Id:'',
                        ParentId:this.form.parentId,
                        Name:this.form.name,
                        Url:this.form.url,
                        IsShow: this.form.isShow,
                        Description:this.form.description,
                    }
                })
                .then(res => {
                  
                     this.$router.push('Rights');
                });
           }

        }
    }
</script>