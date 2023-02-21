declare namespace EnumType {
    type LoginModuleKey = keyof typeof import('@/enum').EnumLoginModule

    /** 布局模式 */
    type LayoutComponentName = keyof typeof import('@/enum').EnumLayoutComponentName
}

declare namespace App {
    type GlobalMenuOption = import('naive-ui').MentionOption & {
        key: string
        label: string
        routeName: string
        routePath: string
        children?: GlobalMenuOption[]
    }
}
