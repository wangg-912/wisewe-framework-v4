import type { GlobEnvConfig } from '@wisewe-framework-v4/typing/config'

/**
 *获取全局配置（打包时将独立提取配置）
 */
export function getGlobEnvConfig(): GlobEnvConfig {
  const env = import.meta.env
  return env as unknown as GlobEnvConfig
}

/**
 * @description: Development model
 */
export const devMode = 'development'

/**
 * @description: Production mode
 */
export const prodMode = 'production'

/**
 * @description: Get environment variables
 * @returns:
 * @example:
 */
export function getEnv(): string {
  return import.meta.env.MODE
}

/**
 * @description: Is it a development mode
 * @returns:
 * @example:
 */
export function isDevMode(): boolean {
  return import.meta.env.DEV
}

/**
 * @description: Is it a production mode
 * @returns:
 * @example:
 */
export function isProdMode(): boolean {
  return import.meta.env.PROD
}
