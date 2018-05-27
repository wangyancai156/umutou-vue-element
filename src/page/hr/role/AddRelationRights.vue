<template>
    <div>
        <div class="container">
            <div class="handle-box">
                <el-button type="primary" icon="delete" class="handle-del mr10" @click="onRelation">批量关联</el-button>
                <el-cascader :options="options" change-on-select @change="getNotRelationRights"></el-cascader>
            </div>
            <el-table @selection-change="selChange" :data="table" style="width: 100%; ">
                <el-table-column type="selection">
                </el-table-column>
                <el-table-column prop="PathName" label="路径">
                </el-table-column>
                <el-table-column prop="Name" label="名称">
                </el-table-column>
                <el-table-column prop="Level" label="等级">
                </el-table-column>
                <el-table-column prop="Description" label="说明">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            Id: "",
            options: [],
            table: [],
            selectd: []
        };
    },
    activated() {
        this.initialization();
    },
    methods: {
        //初始化页面
        initialization() {
            this.getQuery();
            this.getRightsTree();
        },
        //获取传值
        getQuery() {
            this.Id = this.$route.query.parentId;
            console.log(this.$route.query);
        },
        //获取下拉框
        getRightsTree() {
            this.$http
                .get("/api/Rights/GetRightsTreeNoLeafView", {
                    params: {
                        id: 0
                    }
                })
                .then(res => {
                    this.options = res.data[0].children;
                    console.log(this.options);
                });
        },
        //获取没有被关联的功能
        getNotRelationRights(key) {
            console.log(key);
            var keyid = key[key.length - 1];
            this.$http
                .get("/api/Role/GetRoleRightsNotIn", {
                    params: {
                        roleid: this.Id,
                        rightid: keyid
                    }
                })
                .then(res => {
                    console.log(res);
                    this.table = res.data;
                });
        },
        //多选
        selChange(key) {
            this.selectd = key;
        },
        //添加关系
        onRelation() {
            var ids = "";
            this.selectd.forEach(element => {
                ids = ids + "|" + element.Id;
            });
            ids = ids.substring(1,ids.length)
            console.log(ids);
            console.log(this.Id);

            this.$http
                .get("/api/Role/RelationRigths", {
                    params: {
                        roleId: this.Id,
                        rightid: ids
                    }
                })
                .then(res => {
                     this.$router.push({ path: "/relationrights", query: { parentId: this.Id } });
                });
        }
    }
};
</script>