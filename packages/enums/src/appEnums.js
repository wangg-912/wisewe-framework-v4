'use strict'
exports.__esModule = true
exports.SizeButtonEnum =
  exports.RoleEnum =
  exports.PermissionModeEnum =
  exports.PageEnum =
  exports.SettingButtonPositionEnum =
  exports.RouterTransitionEnum =
  exports.ThemeEnum =
  exports.ThemeModeEnum =
  exports.ContentEnum =
    void 0
// 容器枚举
var ContentEnum
;(function (ContentEnum) {
  // auto width
  ContentEnum['FULL'] = 'full'
  // fixed width
  ContentEnum['FIXED'] = 'fixed'
})((ContentEnum = exports.ContentEnum || (exports.ContentEnum = {})))
// 应用主题模式枚举
var ThemeModeEnum
;(function (ThemeModeEnum) {
  ThemeModeEnum['LIGHT'] = 'light-mode'
  ThemeModeEnum['DARK'] = 'dark-mode'
  ThemeModeEnum['SEMI_DARK'] = 'semi-dark-mode'
})((ThemeModeEnum = exports.ThemeModeEnum || (exports.ThemeModeEnum = {})))
// 菜单主题枚举
var ThemeEnum
;(function (ThemeEnum) {
  ThemeEnum['DARK'] = 'dark'
  ThemeEnum['LIGHT'] = 'light'
})((ThemeEnum = exports.ThemeEnum || (exports.ThemeEnum = {})))
//路由动画枚举
var RouterTransitionEnum
;(function (RouterTransitionEnum) {
  RouterTransitionEnum['ZOOM_FADE'] = 'zoom-fade'
  RouterTransitionEnum['ZOOM_OUT'] = 'zoom-out'
  RouterTransitionEnum['FADE_SIDE'] = 'fade-slide'
  RouterTransitionEnum['FADE'] = 'fade'
  RouterTransitionEnum['FADE_BOTTOM'] = 'fade-bottom'
  RouterTransitionEnum['FADE_SCALE'] = 'fade-scale'
})((RouterTransitionEnum = exports.RouterTransitionEnum || (exports.RouterTransitionEnum = {})))
// 配置按钮显示位置
var SettingButtonPositionEnum
;(function (SettingButtonPositionEnum) {
  SettingButtonPositionEnum['AUTO'] = 'auto'
  SettingButtonPositionEnum['HEADER'] = 'header'
  SettingButtonPositionEnum['FIXED'] = 'fixed'
})((SettingButtonPositionEnum = exports.SettingButtonPositionEnum || (exports.SettingButtonPositionEnum = {})))
// 页面配置
var PageEnum
;(function (PageEnum) {
  PageEnum['BASE_HOME'] = '/home'
  PageEnum['ERROR_PAGE'] = '/404'
})((PageEnum = exports.PageEnum || (exports.PageEnum = {})))
/**
 * 权限模式
 */
var PermissionModeEnum
;(function (PermissionModeEnum) {
  // role
  PermissionModeEnum['ROLE'] = 'ROLE'
  // black
  PermissionModeEnum['BACK'] = 'BACK'
})((PermissionModeEnum = exports.PermissionModeEnum || (exports.PermissionModeEnum = {})))
var RoleEnum
;(function (RoleEnum) {
  // super admin
  RoleEnum['SUPER'] = 'systemAdmin'
  // tester
  RoleEnum['TEST'] = 'test'
})((RoleEnum = exports.RoleEnum || (exports.RoleEnum = {})))
var SizeButtonEnum
;(function (SizeButtonEnum) {
  SizeButtonEnum['DEFAULT'] = 'medium'
  SizeButtonEnum['SMALL'] = 'small'
  SizeButtonEnum['MINI'] = 'mini'
})((SizeButtonEnum = exports.SizeButtonEnum || (exports.SizeButtonEnum = {})))
