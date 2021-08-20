/**
 * @description 判断是否 十六进制颜色值
 * @param   {String}  color   十六进制颜色值
 * @return  {Boolean} 输入形式如 #fff000 #f00
 */
export function isHexColor(color: string) {
  const reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-f]{6})$/
  return reg.test(color)
}

/**
 * @description RGB 颜色值转换为 十六进制颜色值；r, g, 和 b 需要在 [0, 255] 范围内
 * @param r {Number}
 * @param g {Number}
 * @param b {Number}
 * @return {String} 如#ff00ff
 */
export function rgbToHex(r: number, g: number, b: number) {
  // tslint:disable-next-line:no-bitwise
  const hex = ((r << 16) | (g << 8) | b).toString(16)
  return '#' + new Array(Math.abs(hex.length - 7)).join('0') + hex
}

/**
 *@description 将十六进制颜色转换为其RGB表示形式
 *@param {String} hex 要变换的颜色
 *@returns 所传递颜色的RGB表示形式
 */
export function hexToRGB(hex: string) {
  let sHex = hex.toLowerCase()
  if (isHexColor(hex)) {
    if (sHex.length === 4) {
      let sColorNew = '#'
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sHex.slice(i, i + 1).concat(sHex.slice(i, i + 1))
      }
      sHex = sColorNew
    }
    const sColorChange: number[] = []
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt('0x' + sHex.slice(i, i + 2)))
    }
    return 'RGB(' + sColorChange.join(',') + ')'
  }
  return sHex
}
/**
 * @description 判断是否暗色
 * @param {String} color 颜色参数
 * @returns {Boolean}
 */
export function colorIsDark(color: string) {
  if (!isHexColor(color)) return
  const [r, g, b] = hexToRGB(color)
    .replace(/(?:\(|\)|rgb|RGB)*/g, '')
    .split(',')
    .map((item) => Number(item))
  return r * 0.299 + g * 0.578 + b * 0.114 < 192
}

/**
 *@description 根据通过的百分比，使十六进制颜色变暗
 *@param {String} color 默认颜色
 *@param {Number}  amount 数量更改颜色的数量
 *@returns {String} 处理后颜色的十六进制表示形式
 */
export function darken(color: string, amount: number) {
  color = color.indexOf('#') >= 0 ? color.substring(1, color.length) : color
  amount = Math.trunc((255 * amount) / 100)
  return `#
  ${subtractLight(color.substring(0, 2), amount)}
  ${subtractLight(color.substring(2, 4), amount)}
  ${subtractLight(color.substring(4, 6), amount)}
  `
}

/**
 *@description 根据通过的百分比使6字符的十六进制颜色变亮
 *@param {String} color 颜色要更改的颜色
 *@param {Number} amount 数量更改颜色的数量
 *@returns {String} 处理后的颜色表示为十六进制
 */
export function lighten(color: string, amount: number) {
  color = color.indexOf('#') >= 0 ? color.substring(1, color.length) : color
  amount = Math.trunc((255 * amount) / 100)
  return `#${addLight(color.substring(0, 2), amount)}${addLight(color.substring(2, 4), amount)}${addLight(color.substring(4, 6), amount)}`
}

/* 将指定的百分比添加到十六进制颜色（RR，GG或BB）以使其更亮 */
/**
 *@description 将通过百分比累加到十六进制颜色的R，G或B
 *@param {String} color 颜色要更改的颜色
 *@param {Number} amount 数量更改颜色的数量
 *@returns {String} 处理后的颜色
 */
function addLight(color: string, amount: number) {
  const cc = parseInt(color, 16) + amount
  const c = cc > 255 ? 255 : cc
  return c.toString(16).length > 1 ? c.toString(16) : `0${c.toString(16)}`
}

/**
 *@description 计算RGB颜色的亮度
 *@param {Number} r 红色
 *@param {Number} g 绿色
 *@param {Number} b 蓝色
 @returns {String} 处理后的RGB颜色
 */
function luminanace(r: number, g: number, b: number) {
  const a = [r, g, b].map((v) => {
    v /= 255
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  })
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722
}

/**
 * @description 计算两种rgb颜色之间的对比度
 * @param {String} rgb1 rgb 一种颜色
 * @param {String} rgb2 rgb 另一种颜色
 */
function contrast(rgb1: string[], rgb2: number[]) {
  return (luminanace(~~rgb1[0], ~~rgb1[1], ~~rgb1[2]) + 0.05) / (luminanace(rgb2[0], rgb2[1], rgb2[2]) + 0.05)
}

/**
 * @description 根据与背景的对比来确定最佳的文本颜色（黑色或白色）
 * @param {String} hexColor 上一次最新选择的颜色
 * @returns 处理后的文本颜色
 */
export function calculateBestTextColor(hexColor: string) {
  const rgbColor = hexToRGB(hexColor.substring(1))
  const contrastWithBlack = contrast(rgbColor.split(','), [0, 0, 0])

  return contrastWithBlack >= 12 ? '#000000' : '#FFFFFF'
}

/**
 * @description 将指示的百分比减去十六进制颜色的R，G或B
 * @param {String} 颜色要更改的颜色
 * @param {Number} 数量更改颜色的数量
 * @returns {String} 处理后的颜色
 */
function subtractLight(color: string, amount: number) {
  const cc = parseInt(color, 16) - amount
  const c = cc < 0 ? 0 : cc
  return c.toString(16).length > 1 ? c.toString(16) : `0${c.toString(16)}`
}
/**
 * @description 反转颜色根据已知颜色
 * @param hex {String} 待转换颜色
 * @returns
 */
export function invertColor(hex: string) {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1)
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }
  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.')
  }

  // invert color components
  // eslint-disable-next-line prefer-const
  const r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
    // eslint-disable-next-line prefer-const
    g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
    b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16)
  // pad each with zeros and return
  return '#' + padZero(r) + padZero(g) + padZero(b)
}
function padZero(str: string, len?: number) {
  len = len || 2
  const zeros = new Array(len).join('0')
  return (zeros + str).slice(-len)
}
