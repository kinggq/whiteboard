<template>
    <n-space>
        <n-avatar-group :options="options" :size="30" :max="3" />
        <n-button @click="show = true">添加成员</n-button>
    </n-space>
    <n-modal v-model:show="show">
        <n-card
            style="width: 600px"
            title="添加成员"
            :bordered="false"
            size="huge"
            role="dialog"
            aria-modal="true"
        >
            <n-transfer
                ref="transfer"
                v-model:value="value"
                :options="transferOption"
                :render-target-label="renderLabel"
            />
            <template #footer>
                <n-space justify="end">
                    <n-button @click="onNegativeClick">取消</n-button>
                    <n-button @click="onPositiveClick" type="primary">确认</n-button>
                </n-space>
            </template>
        </n-card>
        
    </n-modal>
</template>
    
<script setup lang='ts'>
import { NAvatar, TransferRenderTargetLabel } from 'naive-ui'
import { h, ref } from 'vue'

const show = ref(false)

const onNegativeClick = () => {
    show.value = false
}

const onPositiveClick = () => {
    show.value = false
}

const renderLabel: TransferRenderTargetLabel = function ({ option }) {
    return h(
        'div',
        {
            style: {
                display: 'flex',
                margin: '6px 0'
            }
        },
        {
            default: () => [
                h(NAvatar, {
                    round: true,
                    src: option.value as string,
                    size: 'small',
                    fallbackSrc:
                        'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
                }),
                h(
                    'div',
                    {
                        style: {
                            display: 'flex',
                            marginLeft: '6px',
                            alignSelf: 'center'
                        }
                    },
                    { default: () => option.label }
                )
            ]
        }
    )
}

const options = [
    {
        name: '张三',
        src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
    },
    {
        name: '李四',
        src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
    },
    {
        name: '王五',
        src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
    },
    {
        name: '赵六',
        src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
    },
    {
        name: '七仔',
        src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
    }
]

const transferOption = [
    {
        label: '07akioni',
        value: 'https://avatars.githubusercontent.com/u/18677354?s=60&v=4'
    },
    {
        label: 'amadeus711',
        value: 'https://avatars.githubusercontent.com/u/46394163?s=60&v=4'
    },
    {
        label: 'Talljack',
        value: 'https://avatars.githubusercontent.com/u/34439652?s=60&v=4'
    },
    {
        label: 'JiwenBai',
        value: 'https://avatars.githubusercontent.com/u/43430022?s=60&v=4'
    },
    {
        label: 'songjianet',
        value: 'https://avatars.githubusercontent.com/u/19239641?s=60&v=4'
    }
]

const value = ref([transferOption[0].value])
</script>
    
<style>
</style>
