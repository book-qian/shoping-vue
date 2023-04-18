<!--
 * @Author: yangyongqian
 * @Date: 2023-04-10 10:41:12
 * @Description: 商品列表
-->
<template>
  <div class="goods-container">
    <div class="item" v-for="item in listRef" :key="item.id">
      <router-link :to="{ path: '/goodDetail', query: { id: item.id } }">
        <img :src="`${USER_URL}${item.img}`" alt="商品图片">
        <p class="txt">价格：{{ item.price }}</p>
        <p class="txt">名称：{{ item.name }}</p>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { list } from '@/api/list'
import { ElMessage } from 'element-plus'
import { USER_URL } from '@/config/app.confing'
import { listResult } from '@/types/api'


const listRef = ref<Array<listResult>>([])
const getGoodData = async () => {
  try {
    const data: any = await list()
    listRef.value = data
  } catch (error: any) {
    ElMessage.error(error)
  }
}

onMounted(() => {
  getGoodData()
})

</script>

<style scoped>
.goods-container {
  display: flex;
}

.goods-container a {
  text-decoration: none;
}

.item {
  width: 300px;
  height: 500px;
  border: 1px solid #ddd;
  margin: 10px;
}

.item img {
  width: 300px;
  height: 400px;
}

.item .txt {
  text-indent: 10px;
}
</style>
