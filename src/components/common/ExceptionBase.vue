<template>
    <div h-full flex-col-center>
        <div>
            <icon-custom-no-permission text-400px text-primary v-if="type === '403'" />
            <icon-custom-not-found text-400px text-primary v-if="type === '404'" />
            <icon-custom-service-error text-400px text-primary v-if="type === '500'" />
        </div>
        <router-link :to="{ name: homePath }" mt-30px>
            <n-button type="primary">返回首页</n-button>
        </router-link>
    </div>
</template>
<script setup lang="ts">
import { routeName } from '@/router'

type ExceptionType = '403' | '404' | '500'

interface Props {
    type: ExceptionType
}

defineProps<Props>()

const homePath = routeName('root')
</script>
