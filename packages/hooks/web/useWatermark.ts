import { getCurrentInstance, onBeforeUnmount, ref, Ref, unref } from 'vue'

const domSymbol = Symbol('watermark-dom')

/**
 * @description 使用水印钩子函数
 * @param appendEle
 * @returns
 */
export function useWatermark(appendEle: Ref<HTMLElement | null> = ref(document.body)) {
  let func = function () {}
  const id = domSymbol.toString()
  const clear = () => {
    const domId = document.getElementById(id)
    if (domId) {
      const el = unref(appendEle)
      el && el.removeChild(domId)
    }
    window.removeEventListener('resize', func)
  }
  const createWatermark = (str: string) => {
    clear()

    const can = document.createElement('canvas')
    can.width = 240
    can.height = 180

    const cans = can.getContext('2d')
    if (cans) {
      cans.rotate((-20 * Math.PI) / 120)
      cans.font = '15px Vedana'
      cans.fillStyle = 'rgba(0, 0, 0, 0.15)'
      cans.textAlign = 'left'
      cans.textBaseline = 'middle'
      cans.fillText(str, can.width / 20, can.height)
    }

    const div = document.createElement('div')
    div.id = id
    div.style.pointerEvents = 'none'
    div.style.top = '3px'
    div.style.left = '0px'
    div.style.position = 'absolute'
    div.style.zIndex = '100000'
    div.style.width = document.documentElement.clientWidth + 'px'
    div.style.height = document.documentElement.clientHeight - 4 + 'px'
    div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat'
    const el = unref(appendEle)
    el && el.appendChild(div)
    return id
  }

  function setWatermark(str: string) {
    createWatermark(str)
    func = () => {
      createWatermark(str)
    }
    window.addEventListener('resize', func)
    const instance = getCurrentInstance()
    if (instance) {
      onBeforeUnmount(() => {
        clear()
      })
    }
  }

  return { setWatermark, clear }
}
