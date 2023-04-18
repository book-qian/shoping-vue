<!--
 * @Author: yangyongqian
 * @Date: 2023-04-13 17:24:56
 * @Description:购物车页面
-->
<template>
  <el-table class="cart-container" :data="tableData" border style="width: 1200px">
    <el-table-column prop="c_id" label="购物车ID" />
    <el-table-column prop="p_name" label="商品名称" />
    <el-table-column prop="pImg" label="商品图片" width="180">
      <template #default="scope">
        <img class="good-img" :src="`${USER_URL}${scope.row.p_img}`" alt="商品图片">
      </template>
    </el-table-column>
    <el-table-column label="数量" width="180">
      <template #default="scope">
        <el-input-number v-model="scope.row.p_num" :min="1" @change="handleChange(scope.row)" />
      </template>
    </el-table-column>
    <el-table-column prop="p_price" label="价格" />
    <el-table-column prop="p_total" label="总金额" />
    <el-table-column label="操作">
      <template #default="scope">
        <el-button type="danger" size="small" @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script  lang="ts" setup name="carts">
import { USER_URL } from '@/config/app.confing'
import { onMounted, ref } from 'vue';
import { cartList, modifyCart, deleteCart } from '@/api/cat'
import { ElMessage } from 'element-plus'
import { CartList } from '@/types/api'

let tableData = ref<CartList[]>([]);
const getTableData = async () => {
  try {
    const { data, code, msg } = await cartList()
    if (code === 200) {
      tableData.value = data
    } else {
      ElMessage.error(msg)
    }
  } catch (error: any) {
    ElMessage.error(error)
  }
}

// 删除
const handleDelete = async (data: CartList) => {
  try {
    const { code, msg } = await deleteCart({ c_id: data.c_id })
    if (code === 200) {
      ElMessage.success(msg)
      getTableData()
    } else {
      ElMessage.error(msg)
    }
  } catch (error: any) {
    ElMessage.error(error)
  }
}

// 数量变化
let timer: any
const handleChange = (data: CartList) => {
  // 防抖处理
  clearTimeout(timer)
  timer = setTimeout(async () => {
    try {
      const { code, msg } = await modifyCart({
        c_id: data?.c_id,
        p_num: data?.p_num
      })

      if (code === 200) {
        ElMessage.success(msg)
      } else {
        ElMessage.error(msg)
      }
    } catch (error: any) {
      ElMessage.error(error)
    }
  }, 500)

}

onMounted(() => {
  getTableData()
})
</script>

<style scoped>
.cart-container .good-img {
  width: 30px;
  height: 30px;
}
</style>

