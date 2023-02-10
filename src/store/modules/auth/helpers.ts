import { localStg } from '@/utils'

export function getToken() {
    return localStg.get('token') || ''
}
