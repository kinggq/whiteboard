<script setup lang="ts">
import GridContent from './GridContent.vue'
import { routeName } from '@/router'

const { routerPush } = useRouterPush()

function handleClick(id: number) {
  routerPush({ name: routeName('projects_items'), query: { id } })
}

function handleAddProject() {
  window.$message?.info('努力搬砖🧱中')
}

const projectList = [
  // { project_name: '测试项目', id: 1 },
  { project_name: 'bug管理', id: 2 },
  // { project_name: '产品设计', id: 3 },
  // { project_name: '需求管理', id: 4 },
  // { project_name: '用户反馈', id: 5 },
  // { project_name: '排期', id: 6 },
]
</script>

<template>
  <n-grid x-gap="12" :cols="4">
    <n-gi v-for="(item, index) in projectList" :key="index">
      <GridContent @click="handleClick(item.id)">
        <icon-bx:bxs-bug-alt class="color-[#5ac8fa] text-50px" />
        <p py-10px text-18px>
          {{ item.project_name }}
        </p>
      </GridContent>
    </n-gi>
    <n-gi>
      <GridContent class="color-[#aaa]" @click="handleAddProject">
        <icon-material-symbols:add-chart text-50px />
        <p py-10px text-18px>
          创建项目
        </p>
      </GridContent>
    </n-gi>
  </n-grid>
</template>
