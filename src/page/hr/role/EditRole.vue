<template>
    <div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="部门">
                        <el-select  v-model="form.Organization.val" clearable placeholder="请选择部门" class="handle-select mr10" style="width:150px">
                            <el-option v-for="item in form.Organization.data" :key="item.Id" :label="item.Name"  :value="item.Id" ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="名称">
                        <el-input v-model="form.Name"></el-input>
                    </el-form-item>
                    <el-form-item label="说明">
                        <el-input type="textarea" rows="5" v-model="form.Description"></el-input>
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
  data: function() {
    return {
      form: {
        Id: "",
        Name: "",
        Description: "",
        Organization: {
          val: "",
          data: []
        }
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
      this.getQuery();
    },
    //获取传值
    getQuery() {
      this.form.Id = this.$route.query.model.Id;
      this.form.Name = this.$route.query.model.Name;
      this.form.Description = this.$route.query.model.Description;
      this.form.Organization.val = this.$route.query.model.OrganizationId;
      console.log(this.$route.query.model);
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
          this.form.Organization.data = res.data[0].Child;
        });
    },
    //提交
    onSubmit() {
      this.$http
        .get("/api/Role/UpdateRole", {
          params: {
            Id: this.form.Id ,
            Name: this.form.Name,
            Description: this.form.Description,
            Organizationid: this.form.Organization.val
          }
        })
        .then(res => {
          this.$router.push("role");
        });
    }
  }
};
</script>