import { localStg } from '@/utils'

export function getToken() {
    return localStg.get('token') || ''
}

export function getUserInfo() {
    const emptyInfo: Auth.UserInfo = {
        id: 0,
        username: '',
        nick_name: '',
        phone: '',
        avatar: '',
        user_role: 'admin'
    }
    return localStg.get('userInfo') || emptyInfo
}

export function clearAuthStorage() {
    localStg.remove('token')
    localStg.remove('userInfo')
}
