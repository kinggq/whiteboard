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

export function clearAuthStorage() {
    localStg.remove('token')
    localStg.remove('userInfo')
}
