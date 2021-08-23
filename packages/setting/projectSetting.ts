import type { ProjectConfig } from '@wisewe-framework-v4/typing/config'
import { ContentEnum, PermissionModeEnum, ThemeEnum, RouterTransitionEnum, SettingButtonPositionEnum } from '@wisewe-framework-v4/enums' // app 枚举
import { MenuTypeEnum, MenuModeEnum, TriggerEnum } from '@wisewe-framework-v4/enums'
import { CacheTypeEnum } from '@wisewe-framework-v4/enums'
const setting: ProjectConfig = {
  //是否显示配置按钮
  showSetting: true,
  //配置按钮显示位置
  settingButtonPosition: SettingButtonPositionEnum.HEADER,
  //权限模式
  permissionMode: PermissionModeEnum.ROLE,
  //权限相关的缓存存储在sessionStorage或localStorage中
  permissionCacheType: CacheTypeEnum.LOCAL,
  //应用主题颜色
  themeColor: '#409eff',
  // 网站为灰色模式
  grayMode: false,
  // 颜色弱点模式
  colorWeak: false,
  // 是否取消菜单，顶部，多选项卡页面显示，以便可能嵌入其他系统
  fullContent: false,
  // 主窗体模式
  contentMode: ContentEnum.FULL,
  // 是否显示标签栏
  showLogo: true,
  // 手机模式菜单控制器
  mobileTrigger: false,
  // 显示底部版权
  showfooter: false,
  // 水印模式
  waterMark: false,
  // 头部配置
  headerSetting: {
    // 头部背景颜色
    bgColor: '#ffffff',
    // 是否固定头部
    fixed: true,
    // 是否显示Header容器
    show: true,
    // 主题
    theme: ThemeEnum.LIGHT,
    // 是否显示全屏按钮
    showFullScreen: true,
    // 是否显示通知
    showNotice: true,
    // 显示菜单搜索
    showSearch: true,
  },
  // 菜单配置
  menuSetting: {
    show: true,
    // 侧边栏菜单背景颜色
    bgColor: '#001529',
    // 是否固定左侧菜单
    fixed: true,
    // 菜单合并状态
    collapsed: false,
    // 是否显示LOGO TITLE
    showLogoTitle: true,
    // 默认宽度
    menuWidth: 240,
    // 菜单模式
    mode: MenuModeEnum.INLINE,
    // 菜单类型
    type: MenuTypeEnum.SIDEBAR,
    // 菜单主题
    theme: ThemeEnum.DARK,
    // 顶部菜单布局
    topMenuAlign: 'center',
    // Fold trigger position
    trigger: TriggerEnum.HEADER,
  },
  // 标签配置
  tagsSetting: {
    // 是否显示标签
    show: true,
    // 是否显示右键功能
    showContextmenu: true,
    // 是否显示快捷功能
    showQuick: true,
  },
  // 动画配置
  transitionSetting: {
    // 开启动画
    enable: true,
    // 基础动画
    basicTransition: RouterTransitionEnum.FADE_SIDE,
    // 开启页面加载模式
    openPageLoading: true,
    // 开启顶部进度
    openNProgress: true,
  },
  // 是否启用KeepAlive缓存最好在开发过程中关闭，否则每次都需要清除缓存
  openKeepAlive: true,
  // 是否显示面包屑
  showBreadCrumb: true,
  // 是否显示面包屑图标
  showBreadCrumbIcon: false,
  // 是否可以嵌入iframe页面
  canEmbedIFramePage: true,
}

export default setting
