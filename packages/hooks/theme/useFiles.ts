import { useFetch } from './useFetch'
import * as elePackage from 'element-plus/package.json'
const { version } = elePackage
const elementPlusUrl = `//unpkg.zhimg.com/element-plus@${version}`
export const useFiles = () => {
  /**
   * @description 同步获取字体
   * @param fontFiles
   * @returns
   */
  const getFontFiles = async (fontFiles: any) => {
    const fonts = await Promise.all(
      fontFiles.map((font: any) => {
        return useFetch(`${elementPlusUrl}/lib/theme-chalk/fonts/${font}`, true)
      })
    )
    return fonts
  }
  /**
   * @description 同步获取样式
   * @returns 剔除font的样式
   */
  const getIndexStyle = async () => {
    const { data } = await useFetch(`${elementPlusUrl}/lib/theme-chalk/index.css`)
    return data.replace(/@font-face{[^}]+}/, '')
  }
  /**
   * @description 同步获取主题并分开返回
   * @returns
   */
  const getSeparatedStyles = async () => {
    const { data } = await useFetch(`${elementPlusUrl}/lib/theme-chalk/`)
    const styles = data.match(/href="[\w-]+\.css"/g).map((str) => str.split('"')[1])
    const files = await Promise.all(
      styles.map((file) => {
        return useFetch(`${elementPlusUrl}/lib/theme-chalk/${file}`)
      })
    )
    return files
  }

  return {
    getFontFiles,
    getIndexStyle,
    getSeparatedStyles
  }
}
