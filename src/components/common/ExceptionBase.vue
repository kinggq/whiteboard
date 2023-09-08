<script setup lang="ts">
import { routeName } from '@/router'

type ExceptionType = '403' | '404' | '500'

interface Props {
  type: ExceptionType
}

defineProps<Props>()

const homePath = routeName('root')
</script>

<template>
  <div h-full flex-col-center>
    <div>
      <icon-custom-no-permission v-if="type === '403'" text-400px text-primary />
      <icon-custom-not-found v-if="type === '404'" text-400px text-primary />
      <icon-custom-service-error v-if="type === '500'" text-400px text-primary />
    </div>
    <router-link :to="{ name: homePath }" mt-30px>
      <n-button type="primary">
        返回首页
      </n-button>
    </router-link>
  </div>
</template>
