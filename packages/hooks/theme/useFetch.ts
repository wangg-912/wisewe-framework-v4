import { ref } from 'vue'
/**
 * @description 同步获取自定义主题文件接口钩子函数
 * @param url
 * @param isBlob
 * @returns
 */
const useFetch = async (url: string, isBlob: boolean) => {
  const data = ref(null)
  const address = ref('')
  await new Promise((resolve, reject) => {
    const client = new XMLHttpRequest()
    client.responseType = isBlob ? 'blob' : ''
    client.onreadystatechange = () => {
      if (client.readyState !== 4) return
      if (client.status === 200) {
        const urlArr = client.responseURL.split('/')
        resolve((data.value = client.response), (address.value = urlArr[urlArr.length - 1]))
      } else {
        reject(new Error(client.statusText))
      }
    }
    client.open('GET', url)
    client.send()
  })
  return {
    data: data.value,
    url: address.value
  }
}
export { useFetch }
