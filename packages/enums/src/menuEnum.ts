/**
 * @description: 菜单类型
 */
export enum MenuTypeEnum {
  // 左侧菜单模式
  SIDEBAR = 'sidebar',
  // 顶部菜单混合模式
  MIX = 'mix',
  // 顶部菜单模式
  TOP_MENU = 'top-menu',
  MIX_SIDEBAR = 'mix-sidebar'
}

/**
 * @description 菜单模式
 */
export enum MenuModeEnum {
  VERTICAL = 'vertical', //垂直
  HORIZONTAL = 'horizontal', //水平
  VERTICAL_RIGHT = 'vertical-right', //垂直右侧
  INLINE = 'inline' //嵌入
}
/**
 * @description 折叠触发器位置
 */
export enum TriggerEnum {
  // 不显示
  NONE = 'none',
  // 菜单底部
  FOOTER = 'footer',
  // 头部
  HEADER = 'header'
}
/**
 * @description 菜单显示位置
 */
export enum MenuSplitTyeEnum {
  NONE,
  TOP,
  LEFT
}
/**
 * @description 头部菜单位置
 */
export enum TopMenuAlignEnum {
  CENTER = 'center',
  START = 'start',
  END = 'end'
}
