import { request } from '@/service/request'

export function fetchLogin(username: string, password: string) {
    return request.post<ApiAuth.UserInfo>('/base/login', { username, password })
}
