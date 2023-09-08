import { httpClient } from './http'

export function fetchLogin(username: string, password: string) {
  return httpClient.post<ApiAuth.UserInfo>('/base/login', { username, password })
}
