<script lang="ts" setup>

import { MenuOption } from 'naive-ui';
import { ref } from 'vue';

import { themeStore } from '@/store';

const appStore = themeStore()


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
    key: '5',
  },
  {
    label: '动态',
    key: '6',
  },
]

const activeKey = ref<string | null>('1')

const handleClickGithub = () => {
  window.open('https://github.com/kinggq/whiteboard', '_blank')
}

const value = ref('Drive My Car')
const options = [
        {
          label: '偏好设置',
          value: '偏好设置'
        },
        {
          label: '退出登录',
          value: '退出登录'
        },
    ]
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
      <!-- <tooltip classs="w-50px ml-20px" content="github">
        <div @click="handleClickGithub" class="i-mdi-github text-24px"></div>
      </tooltip> -->
        <n-popselect :options="options" trigger="click">
            <n-avatar
                round
                size="small"
                src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
            />
        </n-popselect>
      
    </div>
    <!-- <n-button @click="appStore.showPreference = true">偏好设置1</n-button> -->
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
