<template>
  <div>
    <div class="container">
      <div class="handle-box">
        <el-button type="danger" icon="delete" class="handle-del mr10" @click="onDisRelation">批量取消</el-button>
        <el-button type="danger" icon="delete" class="handle-del mr10" @click="add">添加关联</el-button>
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
            this.getRelationRights();
        },
        //获取传值
        getQuery() {
            this.Id = this.$route.query.parentId;
            console.log(this.$route.query);
        },
        //获取已经关联的功能
        getRelationRights() {
            this.$http
                .get("/api/Role/GetRoleRights", {
                    params: {
                        id: this.Id
                    }
                })
                .then(res => {
                    this.table = res.data;
                    console.log(this.table);
                });
        },
        //选择
        selChange(key) {
            this.selectd = key;
        },
        //取消关系
        onDisRelation() {
            var ids = "";
            this.selectd.forEach(element => {
                ids = ids + "|" + element.Id;
            });

            ids = ids.substring(1, ids.length);
            this.$http
                .get("/api/Role/CancelRelationRigths", {
                    params: {
                        roleId: this.Id,
                        rightid: ids
                    }
                })
                .then(res => {
                    this.getRelationRights();
                });
        },
        add() {
            this.$router.push({
                path: "/addrelationrights",
                query: { parentId: this.Id }
            });
        }
    }
};
</script>