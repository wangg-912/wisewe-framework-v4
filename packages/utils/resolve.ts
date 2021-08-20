import * as path2 from 'path'
export function pathResolve(basePath: string, routePath: string) {
  return path2.resolve(basePath, routePath)
}
