<template>
    <div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="80px">
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
        Description: "" 
      }
    };
  },
  activated() {
    this.initialization();
  },
  methods: {
    //初始化页面
    initialization() {
      this.getQuery();
    },
    //获取传值
    getQuery() {
      this.form.Id = this.$route.query.model.Id;
      this.form.Name = this.$route.query.model.Name;
      this.form.Description = this.$route.query.model.Description;
      console.log(this.$route.query.model);
    },
    //提交
    onSubmit() {
      this.$http
        .get("/api/Role/UpdateRole", {
          params: {
            Id: this.form.Id ,
            Name: this.form.Name,
            Description: this.form.Description 
          }
        })
        .then(res => {
          this.$router.push("role");
        });
    }
  }
};
</script>