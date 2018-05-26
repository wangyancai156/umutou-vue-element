<template>
    <div>
        <div class="container">
          <div class="handle-box">
            <el-button type="danger" icon="delete" class="handle-del mr10" >批量取消</el-button>
            <el-button type="primary" icon="delete" class="handle-del mr10">批量关联</el-button>  
            <el-cascader :options="options" change-on-select @change="rightsChange" ></el-cascader>
          </div>
          <el-table ref="list" @selection-change="selChange"  :data="table" style="width: 100%; " >
            <el-table-column type="selection"  >
            </el-table-column>
            <el-table-column prop="Name" label="名称" >
            </el-table-column>
            <el-table-column prop="Level" label="等级">
            </el-table-column>
            <el-table-column prop="Url" label="链接">
            </el-table-column>
            <el-table-column prop="CreateDate" label="添加时间">
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
      id: "",
      table: [],
      options: []
    };
  },

  activated() {
    this.initialization();
  },
  methods: {
    //初始化页面
    initialization() {
      this.getQuery();
      this.getRights();
    },
    //获取传值
    getQuery() {
      this.Id = this.$route.query.parentId;
      console.log(this.$route.query);
    },
    //获取功能
    getRights() {
      this.$http
        .get("/api/Rights/GetRightsTreeView", {
          params: {
            id: 0
          }
        })
        .then(res => {
          this.options = res.data[0].children;
          console.log(this.options);
        });
    },
    rightsChange(key) {
      var keyid = key[key.length-1];
      this.$http
        .get("/api/Rights/GetRightsView", {
          params: {
            id: keyid
          }
        })
        .then(res => {
          this.table = res.data[0].Child;
          console.log(this.table);
        });
    },
    //选择
    selChange(key, type) {},
    //提交
    onSubmit() {
      this.$http
        .get("/api/Role/AddRole", {
          params: {
            Id: ""
          }
        })
        .then(res => {
          this.$router.push("role");
        });
    }
  }
};
</script>