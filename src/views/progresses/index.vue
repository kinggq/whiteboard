<template>
    <global-card>
        <h1>项目进展</h1>
        <p class="text-[#aaa] text-16px pb-20px">在一个页面跟踪多个项目的进展，并查看汇总和统计</p>
        <n-grid :x-gap="16" :cols="2">
            <n-grid-item>
                <n-card embedded :bordered="themeStore.isDark" round="20px" class="cursor-pointer hover-bg-[#eee]" @click="handleClick">
                    <div h-150px>
                        <h3>跟踪进展</h3>
                        <p class="text-[#aaa]">1 条项目未更新</p>
                        <div flex-between pt-10px>
                            <div class="w-80px h-80px border border-[#d2d2d2] b-rd-100% text-center text-[#51b51f]">
                                <p text-30px>0</p>
                                <p text-12px>正常</p>
                            </div>
                            <div class="w-80px h-80px border border-[#d2d2d2] b-rd-100% text-center text-[#f5942d]">
                                <p text-30px>0</p>
                                <p text-12px>低风险</p>
                            </div>
                            <div class="w-80px h-80px border border-[#d2d2d2] b-rd-100% text-center text-[#df3c3f]">
                                <p text-30px>0</p>
                                <p text-12px>高风险</p>
                            </div>
                            <div class="w-80px h-80px border border-[#d2d2d2] b-rd-100% text-center">
                                <p text-30px>0</p>
                                <p text-12px>已失控</p>
                            </div>
                        </div>
                    </div>
                </n-card>
            </n-grid-item>
            <n-grid-item>
                <n-card embedded :bordered="false" class="cursor-pointer hover-bg-[#eee]" @click="handleClick">
                    <div h-150px text-center m-auto flex-center>
                        <div>
                            <icon-material-symbols:add class="text-60px color-[#aaa]" />
                            <div class="text-20px color-[#aaa]">创建进展</div>
                        </div>
                    </div>
                </n-card>
            </n-grid-item>
        </n-grid>
    </global-card>
</template>
    
<script setup lang='ts'>
import { useThemeStore } from '@/store'

const themeStore = useThemeStore()

const handleClick = () => {
    window.$message?.info('努力搬砖🧱中')
}
</script>
    
<style>
    
</style>
