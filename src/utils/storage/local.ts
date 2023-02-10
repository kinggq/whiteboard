import { decrypto } from '../crypto'

interface StorageData<T> {
    value: T
    expire: number | null
}

function createLocalStorage<T extends StorageInterface.Local>() {
    function get<K extends keyof T>(key: K) {
        const json = window.localStorage.getItem(key as string)
        if (json) {
            let storageData: StorageData<T[K]> | null = null
            try {
                storageData = decrypto(json)
            } catch {

            }
            if (storageData) {
                const { value, expire } = storageData
                if (expire === null || expire >= Date.now()) {
                    return value as T[K]
                }
            }
            remove(key)
        }
        return null
    }

    function remove(key: keyof T) {
        window.localStorage.removeItem(key as string)
    }

    return {
        get,
        remove,
    }
}

export const localStg = createLocalStorage()
