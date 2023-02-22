<template>
     <n-grid x-gap="12" :cols="4">
        <n-gi v-for="(item, index) in projectList" :key="index">
            <div
                h-160px
                text-center
                flex
                flex-col
                justify-center
                items-center
                cursor-pointer
                hover-rd-6px
                class="hover-bg-[#eee]"
            >
                <icon-octicon:project text-50px text-primary  />
                <p py-10px text-18px>{{ item.project_name }}</p>
            </div>
        </n-gi>
        <n-gi>
            <div class="green" />
        </n-gi>
    </n-grid>
</template>
<script setup lang="ts">

const projectList = [
    { project_name: '测试项目', id: 1 },
    { project_name: 'bug管理', id: 2 },
    { project_name: '产品设计', id: 3 },
    { project_name: '需求管理', id: 4 },
    { project_name: '用户反馈', id: 5 },
    { project_name: '排期', id: 6 },
]
</script>
