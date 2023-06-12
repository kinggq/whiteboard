declare namespace Auth {
    type RoleType = keyof typeof import('@/enum').EnumUserRole

    type UserInfo = {
        id: number
        username: string
        // userRole: RoleType
        nick_name: string
        phone: string
        avatar: string
    }
}
