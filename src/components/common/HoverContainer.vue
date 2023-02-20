<template>
    <div>
        <n-popover
            :placement="placement"
            trigger="hover"
        >
            <template #trigger>
                <div cursor-pointer h-full flex-center>
                    <slot></slot>
                </div>
            </template>
            <span>{{ content }}</span>
        </n-popover>
    </div>
</template>
<script lang="ts" setup>
import { PopoverPlacement } from 'naive-ui';

interface Props {
    content: string
    placement?: PopoverPlacement
}

withDefaults(defineProps<Props>(), {
    content: '',
    placement: 'bottom',

})

</script>
