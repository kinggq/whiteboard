<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'
import { MenuOption } from 'naive-ui';
import { ref } from 'vue';
import { themeStore } from '../store'

const store = themeStore()
const isDark = useDark()
store.dark = isDark.value

const toggleDark = useToggle(isDark)

const handleToggleDark = () => {
  toggleDark()
  store.dark = isDark.value
}

const menuOptions: MenuOption[] = [
  {
    label: '项目',
    key: '1',
  },
  {
    label: '进展',
    key: '2',
  },
  {
    label: '知识库',
    key: '3',
  },
  {
    label: '日历',
    key: '4',
  },
  {
    label: '汇报',
    key: '4',
  },
  {
    label: '动态',
    key: '4',
  },
]

const activeKey = ref<string | null>('1')

const handleClickGithub = () => {
  window.open('https://github.com/kinggq/whiteboard', '_blank')
}
</script>
<template>
  <header
    flex-between
    h-60px
    pl-20px
    pr-20px
    class="ligh-bg-#EDF5F0"
  >
    <div>
      <img src="/vite.svg"  alt="">
    </div>
    <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
    <div class="flex items-center h-full">
      <n-input
        class="dark-bg-#3A3A3E "
      />
      <tooltip classs="w-50px ml-20px" content="github">
        <div @click="handleClickGithub" class="i-mdi-github text-24px"></div>
      </tooltip>
      <tooltip classs="w-50px" content="主题模式">
        <div @click="handleToggleDark" class="i-carbon-sun dark:i-carbon-moon text-24px"></div>
      </tooltip>
      
    </div>
  </header>
</template>
<style scoped>
.dark header {
  border-bottom: 1px solid rgba(255,255,255,0.09);
}
header {
  border-bottom: 1px solid rgb(239, 239, 245);
}
</style>
