<!--
 * @Author: yangyongqian
 * @Date: 2023-04-10 14:19:05
 * @Description:商品详情页
-->
<template>
  <el-card :body-style="{ padding: '0px' }" class="good-detail-container">
    <img :src="`${USER_URL}${detailRef.img}`" class="image" alt="商品图片" />
    <div style="padding: 14px">
      <p>名称：{{ detailRef.name }}</p>
      <p>价格：{{ detailRef.price }}</p>
      <div class="bottom">
        <el-input-number v-model="numRef" :min="1" :max="999" @change="handleChange" />
        <el-divider direction="vertical" />
        <el-button type="primary" @click="joinCarts">加入购物车</el-button>
        <el-button type="success" @click="goCarts">购物车</el-button>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts" setup name="goodDetail">
import { USER_URL } from '@/config/app.confing'
import { onMounted, ref } from 'vue';
import { goodDetail, joinCat } from '@/api/cat'
import { GoodDetail, JoinCat } from '@/types/api'
import { ElMessage } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

const numRef = ref<number>(1);
const detailRef = ref<GoodDetail>({})
const p_id = ref<number>() // 产品id

const getGoodData = async () => {
  try {
    const { id } = route.query
    if (!id) return
    p_id.value = +id
    const data = await goodDetail(+id)
    if (data) detailRef.value = data
  } catch (error: any) {
    ElMessage.error(error)
  }
}

onMounted(() => {
  getGoodData()
})

const handleChange = (value: number) => {
  console.log(value)

}

// 加入购物车
const joinCarts = async () => {
  const { name: p_name, img: p_img, price: p_price } = detailRef.value
  const params = {
    p_id: p_id.value,
    p_name,
    p_num: numRef.value,
    p_price,
    p_img
  }

  try {
    const { code, msg } = await joinCat(params)
    if (code === 200) {
      ElMessage.success('操作成功')
    } else {
      ElMessage.error(msg)
    }
  } catch (error: any) {
    ElMessage.error(error)
  }
}

// 去购物车
const goCarts = () => {
  router.push('/carts')
}
</script>

<style scoped>
.good-detail-container img {
  width: 385px;
}
</style>
 
