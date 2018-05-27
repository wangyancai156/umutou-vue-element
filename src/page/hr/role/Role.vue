<template>
  <div class="container">
    <div class="handle-box">
      <el-button type="danger" icon="delete" class="handle-del mr10" @click="deletemodel"> 批量删除</el-button>
      <el-button type="primary" icon="delete" class="handle-del mr10" @click="add"> 添加权限 </el-button>
      <el-select v-model="search.val" clearable placeholder="请选择部门" class="handle-select mr10" @change="getRole">
        <el-option v-for="item in search.organization" :key="item.Id" :label="item.Name" :value="item.Id"></el-option>
      </el-select>
    </div>
    <el-table ref="list" @selection-change="selsChange" :data="table" style="width: 100%; ">
      <el-table-column type="selection">
      </el-table-column>
      <el-table-column prop="OrganizationName" label="组织名称">
      </el-table-column>
      <el-table-column prop="Name" label="名称">
      </el-table-column>
      <el-table-column prop="IsValid" label="状态" :formatter="stateFormat"> >
      </el-table-column>
      <el-table-column prop="Description" label="说明">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="small" @click="edit(scope.row)">编辑</el-button>
          <el-button size="small" @click="relationrights(scope.row)">添加功能</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
export default {
    data() {
        return {
            table: [],
            sels: [],
            search: {
                organization: [],
                val: ""
            }
        };
    },
    activated() {
        this.initialization();
    },
    methods: {
        //初始化页面
        initialization() {
            this.getOrganization();
            this.getRole(0);
        },
        //获取组织架构
        getOrganization() {
            this.$http
                .get("/api/Organization/GetOrganizationView", {
                    params: {
                        id: 0
                    }
                })
                .then(res => {
                    this.search.organization = res.data[0].Child;
                    console.log(res.data[0].Child);
                });
        },
        //获取角色
        getRole(val) {
            this.$http
                .get("/api/Role/GetRoleView", {
                    params: {
                        organizationId: val
                    }
                })
                .then(res => {
                    this.table = res.data;
                });
            console.log(this.table);
        },
        //格式化状态
        stateFormat(row, column) {
            var state = row[column.property];
            if (state == 1) {
                return "有效";
            } else {
                return "无效";
            }
        },
        //多选
        selsChange(sels) {
            //被选中的行组成数组
            this.sels = sels;
        },
        //添加角色
        add() {
            this.$router.push({
                path: "/addrole",
                query: { parentId: this.id }
            });
        },
        //编辑角色
        edit(row) {
            this.$router.push({ path: "/editrole", query: { model: row } });
        },
        //删除角色
        deletemodel() {
            var ids = "";
            this.sels.forEach(element => {
                ids = ids + element.Id + "|";
            });

            ids = ids.substring(0, ids.length - 1);
            console.log(ids);

            this.$http
                .get("/api/Role/DeleteRole", {
                    params: {
                        id: ids
                    }
                })
                .then(res => {
                    this.getRole();
                });
        },
        relationrights(row) {
            this.$router.push({
                path: "/relationrights",
                query: { parentId: row.Id }
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
