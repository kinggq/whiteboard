<template>
    <n-dropdown :options="options" @select="handleSelect">
        <n-space align="center" px-12px cursor-pointer>
            <n-avatar
                round
                :size="30"
                src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
            />
            <span>{{ auth.userInfo.userName }}</span>
        </n-space>
    </n-dropdown>
</template>
<script lang="ts" setup>
import { renderIcon } from '@/utils'
import { DropdownOption } from 'naive-ui'
import { useAuthStore } from '@/store'

const auth = useAuthStore()

const handleSelect = (key: string) => {
    if (key === 'logout') {
        window.$dialog?.info({
            title: '提示',
            content: '确认退出登录？',
            positiveText: '确认',
            negativeText: '取消',
            onPositiveClick: () => {
                auth.logout()
            }
        })
    }
}

const options: DropdownOption[] = [
    {
        label: '个人设置',
        key: 'userSettings',
        icon: renderIcon('ph:user-circle-gear', { size: 20 })
    },
    {
        label: '退出登录',
        key: 'logout',
        icon: renderIcon('material-symbols:logout', { size: 20 })
    }
]
</script>
