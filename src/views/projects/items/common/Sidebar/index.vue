<template>
    <div w-full px-20px py-10px flex-between>
        <AddList />
        <div flex>
            <UnfinishedTask />
            <Filter />
            <Sort />
            <TaskField />
            <FilterBase />
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import {
    AddList,
    UnfinishedTask,
    Filter,
    Sort,
    TaskField,
    FilterBase
} from './components'

</script>
    
<style>
    
</style>
