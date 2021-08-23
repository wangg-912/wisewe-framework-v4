// 容器枚举
export enum ContentEnum {
  // auto width
  FULL = 'full',
  // fixed width
  FIXED = 'fixed'
}
// 应用主题模式枚举
export enum ThemeModeEnum {
  LIGHT = 'light-mode',
  DARK = 'dark-mode',
  SEMI_DARK = 'semi-dark-mode'
}

// 菜单主题枚举
export enum ThemeEnum {
  DARK = 'dark',
  LIGHT = 'light'
}

//路由动画枚举
export enum RouterTransitionEnum {
  ZOOM_FADE = 'zoom-fade',
  ZOOM_OUT = 'zoom-out',
  FADE_SIDE = 'fade-slide',
  FADE = 'fade',
  FADE_BOTTOM = 'fade-bottom',
  FADE_SCALE = 'fade-scale'
}
// 配置按钮显示位置
export enum SettingButtonPositionEnum {
  AUTO = 'auto',
  HEADER = 'header',
  FIXED = 'fixed'
}
// 页面配置
export enum PageEnum {
  BASE_HOME = '/home', // 默认页面path
  ERROR_PAGE = '/404' //错误页面path
}

/**
 * 权限模式
 */
export enum PermissionModeEnum {
  // role
  ROLE = 'ROLE',
  // black
  BACK = 'BACK'
}

// 用户&角色
/**
 * @description: 用户ID信息的枚举
 */
export interface GetUserId {
  userId: string | number
}
/**
 * @description: 用户权限的枚举
 */
export interface GetUserPermission {
  userPermission: any
}
/**
 * @description 角色信息枚举
 */
export interface RoleInfo {
  code: string
  id: string | number
  name: string
  permissionType: number
  typeCode: string | number
}
/**
 * @description: 用户完整信息的枚举
 */
export interface GetUserInfoByUserIdModel {
  roles: RoleInfo[]
  code: string | number
  email?: string
  userId: string | number
  initialPsd: boolean
  name: string
  tel?: string
}

export enum RoleEnum {
  // super admin
  SUPER = 'systemAdmin',
  // tester
  TEST = 'test'
}

export enum SizeButtonEnum {
  DEFAULT = 'medium',
  SMALL = 'small',
  MINI = 'mini'
}
