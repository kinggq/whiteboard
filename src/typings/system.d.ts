declare namespace EnumType {
    type LoginModuleKey = keyof typeof import('@/enum').EnumLoginModule

    /** 布局模式 */
    type LayoutComponentName = keyof typeof import('@/enum').EnumLayoutComponentName
}
