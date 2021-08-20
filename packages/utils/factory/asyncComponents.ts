import { defineAsyncComponent } from 'vue'
import Skeleton from './Skeleton.vue'
import Empty from './Empty.vue'

const noop = () => {}
interface Options {
  size?: 'default' | 'small' | 'large'
  delay?: number
  timeout?: number
  loading?: boolean
  retry?: boolean
}
/**
 * @description 异步加载组件
 * @param loader 工厂模式
 * @param options 加载配置
 * @returns 异步加载完毕的组件
 */
export function createAsyncComponent(loader: Fn, options: Options = {}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { delay = 650, timeout = 3000, loading = false, retry = true } = options
  const dyCp = (loading: boolean) => {
    return loading ? Skeleton : undefined
  }

  return defineAsyncComponent({
    loader,
    loadingComponent: dyCp(loading),
    errorComponent: Empty,
    timeout,
    delay,
    /**
     *@param {*}错误错误消息对象
     *@param {*} retry一个函数，指示加载程序承诺拒绝时异步组件是否应重试
     *@param {*}失败失败结束
     *@param {*}尝试允许的最大重试次数
     */
    onError: !retry
      ? noop
      : (error, retry, fail, attempts) => {
          if (error.message.match(/fetch/) && attempts <= 3) {
            //重试提取错误，最多3次尝试
            retry()
          } else {
            //请注意，重试/失败类似于承诺的解决/拒绝：
            //必须调用其中之一才能继续进行错误处理。
            fail()
          }
        }
  })
}
