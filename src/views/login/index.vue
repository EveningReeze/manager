<!--
 * @Author: @wangzisheng @Z17690728020@163.com
 * @Date: 2022-08-28 14:26:16
 * @LastEditors: @wangzisheng @Z17690728020@163.com
 * @LastEditTime: 2022-08-28 17:22:54
 * @FilePath: \manager\src\views\login\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="login-box">
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="80px" class="demo-ruleForm">

      <el-form-item label="账号" prop="username">
        <el-input v-model="ruleForm.username" clearable />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" type="password" show-password />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model.number="ruleForm.code" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
        >登录</el-button
      >
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'
import { LoginData } from '@/type/login'
import type { FormInstance } from 'element-plus'
import { login } from '@/request/api'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup () {
    const data = reactive(new LoginData())
    const resetFrom = () => {
      data.ruleForm.username = ''
      data.ruleForm.password = ''
      data.ruleForm.code = ''
    }
    const rules = {
      username: [
        { required: true, message: '请输入账号', trigger: 'blur' },
        { min: 3, max: 5, message: '账号长度在3-5', trigger: 'blur' }
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 3, max: 10, message: '密码长度在3-10', trigger: 'blur' }
      ],
      code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
    }
    const router = useRouter()
    const ruleFormRef = ref<FormInstance>()
    const submitForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return
      formEl.validate((valid) => {
        if (valid) {
          setTimeout(() => {
            console.log(login)
            localStorage.setItem('token', '123')
            router.push('/')
          }, 3000)
        } else {
          console.log('error submit!')
          return false
        }
      })
    }
    const resetForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return
      formEl.resetFields()
    }
    return {
      ...toRefs(data),
      rules,
      resetFrom,
      ruleFormRef,
      submitForm,
      resetForm
    }
  }
})
</script>

<style lang="scss" scoped>
.login-box {
    width: 100%;
    height: 100%;
    background: url("@/assets/login-img/bj.png");
    padding: 1px;
    .demo-ruleForm {
        width: 500px;
        margin: 200px auto;
        background-color: aqua;
        padding: 30px;
    }
}
</style>
