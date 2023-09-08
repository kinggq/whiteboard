<script setup lang='ts'>
import {
  AddMember,
  Menu,
  Setting,
  Sidebar,
} from './common'
import { routeName } from '@/router'

const route = useRoute()

const showSidebar = computed(() =>
  route.name === routeName('projects_items_whiteboard')
    || route.name === routeName('projects_items_whiteboard_detail'),
)
</script>

<template>
  <div flex flex-col>
    <header class="border-b-1px border-b-[#e3e3e3] dark:border-b-[#212222]">
      <div flex-between>
        <div>
          <h3 pl-20px pt-10px>
            Bug管理
          </h3>
          <Menu />
        </div>
        <n-space pr-20px>
          <AddMember />
          <Setting />
        </n-space>
      </div>
    </header>
    <Sidebar v-show="showSidebar" />
    <div v-if="showSidebar" px-20px pt-10px flex-1 overflow-hidden>
      <router-view />
    </div>
    <n-scrollbar v-else>
      <div px-20px py-10px flex-1 overflow-hidden>
        <router-view />
      </div>
    </n-scrollbar>
  </div>
</template>

<style>

</style>
