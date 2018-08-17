<template>
  <div class="content" id="user-admin">
    <div id="user-list">
      <el-table v-loading="loading" ref="multipleTable" :data="tableData" border style="width:100%" tooltip-effect="dark" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="date" label="注册日期"></el-table-column>
        <el-table-column prop="name" label="性别"> </el-table-column>
        <el-table-column prop="address" label="用户"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div id="user-list-bottom">
        <!--<el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>-->
        <!--<el-button @click="toggleSelection()">取消选择</el-button>-->
        <el-button size="mini" type="danger" @click="allDel">删除</el-button>
        <div id="user-list-pager">
          <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Menu',
  data () {
    return {
      msg: '用户管理',
      tableData: [{
        date: '2016-05-02',
        name: '男',
        address: '18383231371'
      }, {
        date: '2016-05-04',
        name: '女',
        address: '18383231372'
      }, {
        date: '2016-05-01',
        name: '男',
        address: '18383231373'
      }, {
        date: '2016-05-03',
        name: '女',
        address: '18383231374'
      }],
      multipleSelection: [],
      loading:true
    }
  },
  mounted () {
    this.loading = false
  },
  methods: {
    handleEdit(index, row) {//编辑事件
      console.log(index, row);
    },
    handleDelete(index, row) {//删除事件
      console.log(index, row);
    },
    toggleSelection(rows) {
//      if (rows) {
//        rows.forEach(row => {
//          this.$refs.multipleTable.toggleRowSelection(row);
//      });
//      } else {
//        this.$refs.multipleTable.clearSelection();
//      }
    },
    handleSelectionChange(val) {//复选框事件
      console.log(val)
      this.multipleSelection = val;
    },
    allDel(){
      if(this.multipleSelection.length != 0){
        console.log(this.multipleSelection)
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
          });
        }).catch(() => {
          this.$message({
          });
        });
      }else{
        this.$confirm('请先选择要删除的信息', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
          });
        }).catch(() => {
          this.$message({
          });
        });
      }
    }
  }
}
</script>

<style>
#user-list{position:relative; width:100%; background-color:#fff;}
#user-list-bottom{padding:10px; display:flex; align-items:center; justify-content:space-between;}
</style>
