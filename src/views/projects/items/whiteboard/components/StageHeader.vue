<template>
    <div flex-between py-10px px-10px>
        <div flex-center>
            <n-badge :value="stage.issues.length" color="#999" />
            <h4 pl-5px>{{ stage.stages_name }}</h4>
        </div>
        <div flex-between>
            <n-button text>
                <icon-material-symbols:add text-22px />
            </n-button>
            <n-button text>
                <icon-ic:outline-more-horiz text-22px />
            </n-button>
        </div>
    </div>
</template>
    
<script setup lang='ts'>

interface Props {
    stage: ApiTask.Stage
}

defineProps<Props>()
</script>
    
<style>
    
</style>
