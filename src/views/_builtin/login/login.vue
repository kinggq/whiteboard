<template>
    <div flex justify-center items-center h-full>
        <n-card max-w-400px min-w-320px rounded-10px>
            <div>
                <h1 text-center>Whiteboard</h1>
                <main pt-20px>
                    <h3 class="text-primary text-18px font-medium">账号登录</h3>
                    <div pt-24px>
                        <transition>
                            <component :is="activeModule.component"></component>
                        </transition>
                    </div>
                    <n-divider class="text-14px text-[#666]">
                        其他登录方式
                    </n-divider>
                </main>
            </div>
        </n-card>
    </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { PwdLogin, Register } from './components'
import { EnumLoginModule } from '@/enum'

interface Props {
    module: EnumType.LoginModuleKey
}
const props = defineProps<Props>()

const modules = [
    { key: 'pwd-login', label: EnumLoginModule['pwd-login'], component: PwdLogin },
    { key: 'register', label: EnumLoginModule['register'], component: Register }
]
console.log(props.module)
const activeModule = computed(() => {
    const active = { ...modules[0] }
    const findModule = modules.find(item => item.key === props.module)
    if (findModule) {
        Object.assign(active, findModule)
    }
    return active
})
</script>
