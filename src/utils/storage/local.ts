import { decrypto, encrypto } from '../crypto'

interface StorageData<T> {
  value: T
  expire: number | null
}

function createLocalStorage<T extends StorageInterface.Local>() {
  const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7
  function set<K extends keyof T>(key: K, value: T[K], expire: number | null = DEFAULT_CACHE_TIME) {
    const storageData: StorageData<T[K]> = {
      value,
      expire: expire !== null ? new Date().getTime() + expire * 1000 : null,
    }
    window.localStorage.setItem(key as string, encrypto(storageData))
  }

  function get<K extends keyof T>(key: K) {
    const json = window.localStorage.getItem(key as string)
    if (json) {
      let storageData: StorageData<T[K]> | null = null
      try {
        storageData = decrypto(json)
      }
      catch {

      }
      if (storageData) {
        const { value, expire } = storageData
        if (expire === null || expire >= Date.now())
          return value as T[K]
      }
      remove(key)
    }
    return null
  }

  function remove(key: keyof T) {
    window.localStorage.removeItem(key as string)
  }

  return {
    set,
    get,
    remove,
  }
}

export const localStg = createLocalStorage()
