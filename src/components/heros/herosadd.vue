<template>
  <el-card class="box-card">
    <h2 class="sub-header">添加英雄</h2>
    <el-form :model="formData"  label-width=100>
      <el-form-item label="英雄名称">
        <el-input type="text" v-model.trim="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="英雄性别">
        <el-input type="text" v-model.trim="formData.gender"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" size="mini" @click="handleAdd">提交</el-button>
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
      }
    };
  },
  methods: {
    handleAdd() {
      this.$http.post(`http://localhost:3000/heroes`, this.formData)
        .then((res) => {
          if (res.status === 201) {
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
