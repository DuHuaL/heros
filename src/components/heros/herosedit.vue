<template>
  <el-card class="box-card">
    <h2 class="sub-header">修改英雄</h2>
    <el-form :model="formData"  label-width=100>
      <el-form-item label="英雄名称">
        <el-input type="text" v-model.trim="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="英雄性别">
        <el-input type="text" v-model.trim="formData.gender"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" size="mini" @click="handleEdit">提交</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        gender: ''
      },
      id: -1
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.id = this.$route.query.id;
      this.$http.get(`/heroes/${this.id}`)
        .then((res) => {
          if (res.status === 200) {
            this.formData = res.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleEdit() {
      this.$http.patch(`/heroes/${this.id}`, this.formData)
        .then((res) => {
          if (res.status === 200) {
            this.$router.push({ name: 'heros' });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
};
</script>

<style>

</style>
