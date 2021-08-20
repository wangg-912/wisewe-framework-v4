import { createStorage } from './../cache'
import { BASE_LOCAL_CACHE_KEY, BASE_SESSION_CACHE_KEY } from '@wisewe-framework-v4/enums/cacheEnum'

const ls = createStorage(localStorage)
const ss = createStorage()
/**
 * @description 混存接口
 */
interface CacheStore {
  local: Recordable
  session: Recordable
}
/**
 * @description:  持久缓存对象
 */
const cacheStore: CacheStore = {
  // 本地存储缓存
  local: {},
  // 会话存储缓存
  session: {}
}
/**
 * @description 初始化缓存
 */
function initCache() {
  cacheStore.local = ls.get(BASE_LOCAL_CACHE_KEY) || {}
  cacheStore.session = ss.get(BASE_SESSION_CACHE_KEY) || {}
}

initCache()

/**
 * @description 设置本地缓存
 * @param {String} key KEY
 * @param {Any} value 值
 * @param {Boolean} immediate
 */
export function setLocal(key: string, value: any, immediate = false) {
  const local = ls.get(BASE_LOCAL_CACHE_KEY)?.[BASE_LOCAL_CACHE_KEY] || {}
  cacheStore.local[BASE_LOCAL_CACHE_KEY] = { ...local, ...cacheStore.local[BASE_LOCAL_CACHE_KEY] } || {}
  cacheStore.local[BASE_LOCAL_CACHE_KEY][key] = value
  if (immediate) {
    ls.set(BASE_LOCAL_CACHE_KEY, cacheStore.local)
  }
}
/**
 * @description 根据KEY 获取对应VALUE
 * @param {String} key KEY
 * @returns {String} 值
 */
export function getLocal<T>(key: string): T | null {
  try {
    return cacheStore.local[BASE_LOCAL_CACHE_KEY][key]
  } catch (error) {
    return null
  }
}
/**
 * @description 根据KEY 移除对应VALUE
 * @param {String} key KEY
 */
export function removeLocal(key: string) {
  if (cacheStore.local[BASE_LOCAL_CACHE_KEY]) {
    Reflect.deleteProperty(cacheStore.local[BASE_LOCAL_CACHE_KEY], key)
  }
}
/**
 * @description 清除所有CACHE
 * @param {Boolean} immediate
 */
export function clearLocal(immediate = false) {
  cacheStore.local = {}
  immediate && ls.remove(BASE_LOCAL_CACHE_KEY)
}
/**
 * @description 设置SESSION
 * @param {String} key KEY
 * @param {String} value 值
 * @param {Boolean} immediate
 */
export function setSession(key: string, value: any, immediate = false) {
  const session = ss.get(BASE_SESSION_CACHE_KEY)?.[BASE_SESSION_CACHE_KEY] || {}

  cacheStore.session[BASE_SESSION_CACHE_KEY] = { ...session, ...cacheStore.session[BASE_SESSION_CACHE_KEY] } || {}

  cacheStore.session[BASE_SESSION_CACHE_KEY][key] = value

  if (immediate) {
    ss.set(BASE_SESSION_CACHE_KEY, cacheStore.session)
  }
}

/**
 * @description 根据KEY 获取SESSION对应VALUE
 * @param {String} key KEY
 */
export function getSession<T>(key: string): T | null {
  try {
    return cacheStore.session[BASE_SESSION_CACHE_KEY][key]
  } catch (error) {
    return null
  }
}
/**
 * @description 根据KEY 移除SESSION对应VALUE
 * @param {String} key KEY
 */
export function removeSession(key: string) {
  if (cacheStore.session[BASE_SESSION_CACHE_KEY]) {
    Reflect.deleteProperty(cacheStore.session[BASE_SESSION_CACHE_KEY], key)
  }
}
/**
 * @description 清除SESSION
 * @param {Boolean} immediate
 */
export function clearSession(immediate = false) {
  cacheStore.session = {}
  immediate && ss.remove(BASE_SESSION_CACHE_KEY)
}

/**
 * @description 清除所有缓存包括CACHE和SESSION
 */
export function clearAll() {
  clearLocal()
  clearSession()
}

/**
 * @description 永久缓存
 */
export function persistentCache() {
  const localCache = cacheStore.local
  const sessionCache = cacheStore.session
  ls.set(BASE_LOCAL_CACHE_KEY, localCache)
  ss.set(BASE_SESSION_CACHE_KEY, sessionCache)
}

;(() => {
  /**
   * @description 页面销毁前写入本地永久缓存
   */
  window.addEventListener('beforeunload', () => {
    persistentCache()
  })
  const storageChange = (detail: any) => {
    const { key, newValue, oldValue } = detail
    if (!key) {
      clearAll()
      return
    }
    if (!!newValue && !!oldValue) {
      BASE_LOCAL_CACHE_KEY === key && clearLocal()
      BASE_SESSION_CACHE_KEY === key && clearSession()
    }
  }
  window.addEventListener('storage', storageChange)
})()
