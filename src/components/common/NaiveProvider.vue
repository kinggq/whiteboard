<template>
    <n-loading-bar-provider>
        <n-dialog-provider>
            <n-notification-provider>
                <n-message-provider>
                    <slot></slot>
                    <naive-provider-content />
                </n-message-provider>
            </n-notification-provider>
        </n-dialog-provider>
    </n-loading-bar-provider>
</template>
<script lang="ts" setup>
import { defineComponent, h } from 'vue'
import { useNotification, useDialog, useLoadingBar, useMessage } from 'naive-ui'
import { themeJson } from '@/settings'
import { useCssVar } from '@vueuse/core'
import { kebabCase } from 'lodash'

function setupCssVar() {
    const common = themeJson.naiveThemeOverrides.common

    for (const key in common) {
        useCssVar(`--${kebabCase(key)}`, document.documentElement).value= (common as any)[key] || ''
    }
}

const NaiveProviderContent = defineComponent({
    name: 'NaiveProviderContent',
    setup() {
        window.$notification = useNotification()
        window.$dialog = useDialog()
        window.$loadingBar = useLoadingBar()
        window.$message = useMessage()
        setupCssVar()
    },
    render() {
        return h('div')
    }
})
</script>
