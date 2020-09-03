<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <h2>英雄列表</h2>
    </div>
    <el-button size="mini" type="success" class="btn" @click="openAdd">添加英雄</el-button>
    <!-- table -->
    <el-table
      :data="list"
      style="width: 100%"
      border
      stripe>
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别"
        width="180">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="openEdit(scope.row)">修改</el-button>
          <el-button size="mini" type='success' @click="handleDel(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.$http.get('/heroes')
        .then((res) => {
          if (res.status === 200) {
            this.list = res.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 删除
    handleDel(id) {
      this.$http.delete(`/heroes/${id}`)
        .then((res) => {
          if (confirm('您确定删除吗？')) {
            this.loadData();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 添加
    openAdd() {
      this.$router.push({ name: 'herosadd' });
    },
    // 修改页面
    openEdit(row) {
      this.$router.push({name: 'herosedit', query: { id: row.id }});
    }
  }
};
</script>

<style>
.btn{
  margin-bottom: 10px;
}
</style>
