<template>
    <div class="container"> 
        <div class="handle-box">
            <el-button type="primary" icon="delete" class="handle-del mr10" @click="deleteuser()"> 批量删除</el-button>
            <el-button type="primary" icon="delete" class="handle-del mr10"><router-link to="adduser" >添加员工</router-link></el-button>  
            <el-select  v-model="search.org" clearable placeholder="请选择部门" class="handle-select mr10" style="width:150px">
                <el-option-group v-for="gtoup in search.organization" :key="gtoup.id" :label="gtoup.text">
                    <el-option :key="gtoup.id" :label="gtoup.text"  :value="gtoup.id" ></el-option>
                    <el-option v-for="item in gtoup.nodes" :key="item.id" :label="gtoup.text+'-'+item.text"  :value="item.id" ></el-option>
                </el-option-group>
            </el-select>
            <el-input style="width:150px" v-model="search.name" clearable placeholder="姓名"></el-input>
            <el-button type="primary" icon="search" @click="getUserPage">搜索</el-button>
        </div>
        <el-table ref="list" @selection-change="selsChange"  :data="table" style="width: 100%; " >
            <el-table-column type="selection"  >
            </el-table-column>
            <el-table-column prop="Id" label="员工号" >
            </el-table-column>
            <el-table-column prop="UserName" label="姓名" >
            </el-table-column>
            <el-table-column prop="OrganizationName" label="部门" >
            </el-table-column>
            <el-table-column prop="Telephone" label="电话">
            </el-table-column>
            <el-table-column prop="SignState" label="状态"  :formatter="stateFormat" >
            </el-table-column>
            <el-table-column prop="LastSignTime" label="最后登陆时间">
            </el-table-column>
            <el-table-column  label="操作">
                <template slot-scope="scope">
                    <el-button size="small"  >编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            table: [], //用户数据
            sels:[], // 选中的数据
            search:{
                name:"",
                org:"",//部门选中的值
                organization:[], //组织架构用于搜索
            }
           
        };
    },
    mounted() {
        this.initialization();
    },
    methods: {
        //初始化页面
        initialization() {
           this.getUserPage();
           this.getOrganization();
        },
        //获取员工列表
        getUserPage(){
            this.$http
            .get("/api/Users/GetUsers", {
                params: {
                    OrganizationId:this.search.org,
                    Name:this.search.name,
                }
            })
            .then(res => {
                this.table = res.data ;
                console.log( res.data );
            });
        },
        //获取组织架构
        getOrganization(){
            this.$http
            .get("/api/Organization/GetOrganizationTree", {
             
            })
            .then(res => {
                this.search.organization = res.data[0].nodes;  
            });
        },
        //格式化状态
        stateFormat(row, column){
            var state = row[column.property];
            if(state==1){
                return "有效";
            }else{
                return "无效";
            }
        },
        selsChange(sels) { 
            //被选中的行组成数组 
            this.sels = sels;
        },
        deleteuser (){
           var ids="";
           this.sels.forEach(element => {
               ids = ids +"|"+ element.Id;
           });

            this.$http
            .get("/api/Users/DeleteUsers", {
                params: {
                    id:ids
                }
            })
            .then(res => {
                this.initialization();
            });
        }
    }
};
</script>


<style>
.el-table .warning-row {
    background: oldlace;
}

.el-table .success-row {
    background: #f0f9eb;
}
</style>
