<template>
    <div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="名称">
                        <el-input v-model="form.Name"></el-input>
                    </el-form-item>
                    <el-form-item label="URL">
                        <el-input v-model="form.Url"></el-input>
                    </el-form-item>
                    <el-form-item label="显示">
                        <el-switch v-model="form.IsShow"></el-switch>
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
        Url: "",
        IsShow: "",
        Description: "",
        ParentId: ""
      }
    };
  },
  activated() {
    this.form.Id = this.$route.query.model.Id;
    this.form.Name = this.$route.query.model.Name;
    this.form.Url = this.$route.query.model.Url;
    this.form.IsShow = this.$route.query.model.IsShow;
    this.form.Description = this.$route.query.model.Description;
    this.form.ParentId = this.$route.query.model.ParentId;
    console.log(this.$route.query.model);
  },
  methods: {
    onSubmit() {
      this.$http
        .get("/api/Rights/UpdateRights", {
          params: {
            Id: this.form.Id,
            ParentId: this.form.ParentId,
            Name: this.form.Name,
            Url: this.form.Url,
            IsShow: this.form.IsShow,
            Description: this.form.Description
          }
        })
        .then(res => {
          this.$router.push("Rights");
        });
    }
  }
};
</script>