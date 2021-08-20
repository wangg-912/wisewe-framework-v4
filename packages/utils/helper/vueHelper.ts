import { watch, computed, WatchSource, getCurrentInstance, onMounted, onUnmounted, nextTick, reactive, ComponentInternalInstance } from 'vue'
import { error } from './../log'
/**
 * @description 根据监听值，返回值
 * @param {String} source 计算属性KEY
 * @param {Function} fn
 * @returns 值
 */
export function explicitComputed<T, S>(source: WatchSource<S>, fn: () => T) {
  const v = reactive<any>({ value: fn() })
  watch(source, () => (v.value = fn()))
  return computed<T>(() => v.value)
}
/**
 * @description 拦截挂载完毕
 * @param fn
 * @param sync
 */
export function tryOnMounted(fn: () => void, sync = true) {
  if (getCurrentInstance()) {
    onMounted(fn)
  } else if (sync) {
    fn()
  } else {
    nextTick(fn)
  }
}
/**
 * @description 检验卸载
 * @param fn
 */
export function tryOnUnmounted(fn: () => Promise<void> | void) {
  getCurrentInstance() && onUnmounted(fn)
}
/**
 * @description
 * @param fn
 */
export function tryTsxEmit<T extends any = ComponentInternalInstance>(fn: (_instance: T) => Promise<void> | void) {
  const instance = getCurrentInstance() as any
  instance && fn.call(null, instance)
}
/**
 * @description 是否创建
 */
export function isInSetup() {
  if (!getCurrentInstance()) {
    error('Please put Function in the setup function!')
  }
}
