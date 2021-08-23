import { getStorageShortName } from './../helper/envHelper'
import { createStorage as create } from './storageCache'
import { enableStorageEncryption } from './../encryption/encryptionSetting'
/**
 * @description 创建配置
 * @param storage
 * @returns {Object}
 */
const createOptions = (storage = sessionStorage) => {
  return {
    // 调试模式不加密
    hasEncrypt: enableStorageEncryption,
    storage,
    prefixKey: getStorageShortName(),
  }
}

export const WebStorage = create(createOptions())

export const createStorage = (storage = sessionStorage) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return create(createOptions(storage))!
}

export default WebStorage
