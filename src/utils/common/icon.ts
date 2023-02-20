import { Icon } from '@iconify/vue'
import { NIcon } from 'naive-ui'
import { h } from 'vue'

export function renderIcon(icon: string, props = { size: 12}) {
    return () => h(NIcon, props, { default: () => h(Icon, { icon })})
}
