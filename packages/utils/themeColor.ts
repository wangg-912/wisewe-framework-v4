import color from 'css-color-function'
import { formula } from './constant'
/**
 * @description 颜色生成器
 * @param {String }primary
 * @returns { Object }
 */
export const generateColors = (primary: string) => {
  const colors = {}
  Object.keys(formula).forEach((key) => {
    const value = formula[key].replace(/primary/g, primary)
    colors[key] = color.convert(value)
  })
  return colors
}
/**
 * @description 获取颜色模板
 * @param data
 * @returns
 */
export const getStyleTemplate = (data: any) => {
  const colorMap = {
    '#3a8ee6': 'shade-1',
    '#409eff': 'primary',
    '#53a8ff': 'light-1',
    '#66b1ff': 'light-2',
    '#79bbff': 'light-3',
    '#8cc5ff': 'light-4',
    '#a0cfff': 'light-5',
    '#b3d8ff': 'light-6',
    '#c6e2ff': 'light-7',
    '#d9ecff': 'light-8',
    '#ecf5ff': 'light-9'
  }
  Object.keys(colorMap).forEach((key) => {
    const value = colorMap[key]
    data = data.replace(new RegExp(key, 'ig'), value)
  })
  return data
}

/**
 * @description 写入新的css样式
 * @param stylesheetCount
 * @param originalStyle
 * @param colors
 */
export const writeNewStyle = (stylesheetCount, originalStyle, colors) => {
  Object.keys(colors).forEach((key) => {
    originalStyle = originalStyle.replace(new RegExp('(:|\\s+)' + key, 'g'), '$1' + colors[key])
  })
  const styleSheets = Array.from(document.styleSheets).filter((styleSheet) => !styleSheet.href || styleSheet.href.startsWith(window.location.origin))
  if (stylesheetCount === styleSheets.length) {
    const style = document.createElement('style')
    style.setAttribute('type', 'text/css')
    style.innerText = originalStyle
    document.head.appendChild(style)
  } else {
    document.head.lastChild.innerText = originalStyle
  }
}
