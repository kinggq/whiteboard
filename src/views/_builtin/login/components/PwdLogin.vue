<script lang="ts" setup>
import type { FormInst, FormRules } from 'naive-ui'
import { formRule } from '@/utils'
import { useAuthStore } from '@/store'

const auth = useAuthStore()
const formRef = ref<HTMLElement & FormInst>()

const roules: FormRules = {
  username: formRule.username,
  password: formRule.password,
}

const model = reactive({
  username: '',
  password: '',
})

async function handleSubmit() {
  await formRef.value?.validate()
  const { username, password } = model

  auth.login(username, password)
}
</script>

<template>
  <n-form ref="formRef" :model="model" size="large" :rules="roules" :show-label="false">
    <n-form-item path="username">
      <n-input v-model:value="model.username" placeholder="admin" />
    </n-form-item>
    <n-form-item path="password">
      <n-input v-model:value="model.password" placeholder="admin" type="password" show-password-on="click" />
    </n-form-item>
    <n-space :vertical="true" :size="24">
      <n-space justify="space-between">
        <n-checkbox>记住我</n-checkbox>
        <n-button :text="true">
          忘记密码？
        </n-button>
      </n-space>
      <n-button :block="true" :loading="auth.loginLoading" type="primary" size="large" @click="handleSubmit">
        确定
      </n-button>
    </n-space>
  </n-form>
</template>
