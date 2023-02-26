<template>
    <div relative>
        <div>
            <div>
                <n-tag
                    size="small"
                    v-for="(tag, index) in issue.tags"
                    :key="index"
                    :bordered="false"
                    :type="tag.tag_type"
                >
                {{ tag.tag_name }}
                </n-tag>
                <span pl-6px pr-20px>{{ issue.subject }}</span>
            </div>
        </div>
        <n-button text absolute-rt>
            <icon-ic:outline-more-horiz text-22px />
        </n-button>
    </div>
    <div flex-between mt-20px>
        <div></div>
        <n-avatar
            round
            size="small"
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
    </div>
</template>
    
<script setup lang='ts'>

interface Props {
    issue: ApiTask.Issue
}

defineProps<Props>()

</script>
    
<style>
    
</style>
