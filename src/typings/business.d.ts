declare namespace Auth {
    type RoleType = keyof typeof import('@/enum').EnumUserRole

    type UserInfo = {
        userId: string
        userName: string
        userRole: RoleType
    }
}
