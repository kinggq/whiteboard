import { localStg } from '@/utils'

export function getToken() {
    return localStg.get('token') || ''
}

export function getUserInfo() {
    const emptyInfo: Auth.UserInfo = {
        userId: '',
        userName: '',
        userRole: 'user'
    }
    return localStg.get('userInfo') || emptyInfo
}
