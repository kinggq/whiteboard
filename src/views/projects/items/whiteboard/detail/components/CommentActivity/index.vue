<template>
    <n-tabs animated>
        <n-tab-pane name="comment" tab="评论">
            <Comment />
        </n-tab-pane>
        <n-tab-pane name="activity" tab="活动">
            activity
        </n-tab-pane>
    </n-tabs>
</template>
    
<script setup lang='ts'>
import Comment from './Comment.vue'
</script>
    
<style>
    
</style>
