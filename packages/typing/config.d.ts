import { RouterTransitionEnum, ThemeEnum } from '@wisewe-framework-v4/enums/appEnum'
/**
 *@description 菜单栏接口配置
 */
export interface MenuSetting {
  show: boolean
  bgColor: string
  fixed: boolean
  collapsed: boolean
  showLogoTitle: boolean
  menuWidth: number
  mode: string
  type: string
  theme: string
  topMenuAlign: string
  trigger: string
}
/**
 * @description TAG标签栏接口配置
 */
export interface TagsSetting {
  show: boolean
  showContextmenu: boolean
  showQuick: boolean
}
/**
 * @description 顶栏配置
 */
export interface HeaderSetting {
  bgColor: string
  fixed: boolean
  show: boolean
  theme: ThemeEnum
  showFullScreen: boolean
  showNotice: boolean
  showSearch: boolean
}

/**
 * @description 动画接口
 */
export interface TransitionSetting {
  enable: boolean // 是否打开页面切换动画
  basicTransition: RouterTransitionEnum // 路由切换动画
  openPageLoading: boolean // 是否打开页面切换加载
  openNProgress: boolean // 是否打开顶部进度条
}

/**
 * @description 项目配置接口
 */
export interface ProjectConfig {
  showSetting: boolean // 是否显示配置按钮
  settingButtonPosition: string
  permissionMode: string
  permissionCacheType: any
  grayMode: boolean // 网站灰色模式，用于可能悼念的日期开启
  colorWeak: boolean // 是否开启色弱模式
  themeColor: string // 主题色
  fullContent: boolean
  contentMode: string
  showLogo: boolean
  headerSetting: HeaderSetting
  menuSetting: MenuSetting
  tagsSetting: TagsSetting
  openKeepAlive: boolean
  showBreadCrumb: boolean
  showBreadCrumbIcon: boolean
  canEmbedIFramePage: boolean
  mobileTrigger: boolean
  showfooter: boolean
  waterMark: boolean
  transitionSetting: TransitionSetting
}
interface ProjectSettingWrap {
  projectSetting: Readonly<ProjectConfig>
}

export interface GlobConfig {
  // 网站标题
  title: string
  // 项目路径
  apiUrl: string
  uploadUrl?: string
  urlPrefix?: string
  shortName: string
}
export interface GlobEnvConfig {
  VITE_GLOB_APP_TITLE: string
  VITE_GLOB_APP_SHORT_NAME: string
}
