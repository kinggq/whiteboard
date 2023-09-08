<script lang="ts" setup>
import { useDialog, useLoadingBar, useMessage, useNotification } from 'naive-ui'
import { kebabCase } from 'lodash'
import { themeJson } from '@/settings'

function setupCssVar() {
  const common = themeJson.naiveThemeOverrides.common

  for (const key in common)
    useCssVar(`--${kebabCase(key)}`, document.documentElement).value = (common as any)[key] || ''
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
  },
})
</script>

<template>
  <n-loading-bar-provider>
    <n-dialog-provider>
      <n-notification-provider>
        <n-message-provider>
          <slot />
          <NaiveProviderContent />
        </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-loading-bar-provider>
</template>
