<!--
 * @Author: yangyongqian
 * @Date: 2023-03-29 09:09:55
 * @Description:登录组件
-->
<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router';
import { h } from 'vue'
import { ElMessage } from 'element-plus'
import { login } from '@/api/user'
import Storage from '@/utils/storage'

const router = useRouter()

const ruleForm = reactive({
  name: '',// 用户名
  pwd: '' // 密码
})
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  name: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  pwd: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  const twoTime = new Date().getTime() + 60 * 60 * 1000 * 2
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      try {
        const { code, msg, data, token } = await login({ name: ruleForm.name, pwd: ruleForm.pwd })
        if (code === 200) {
          // 2小时过期
          Storage.set('userInfo', data, twoTime)
          Storage.set('token', token, twoTime);
          router.push('/goodList')
        } else {
          ElMessage.error(msg)
        }
      } catch (error: any) {
        ElMessage.error(error)
      }


    } else {
      ElMessage({
        message: h('p', null, [
          h('span', null, '请输入必填信息'),
        ]),
      })
    }
  })
}


const handleReg = () => {
  router.push('/register')
}

</script>

<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>用户登录</span>
      </div>
    </template>
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" status-icon>
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input v-model="ruleForm.pwd" type="password" show-password />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          登录
        </el-button>
        <el-button @click="handleReg">
          <el-link type="info"> 注册</el-link>
        </el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
