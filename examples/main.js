import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import 'element-plus/lib/theme-chalk/index.css'
import WButton from '../packages/components'

// console.log(CountTo)

const app = createApp(App)
app.use(ElementPlus)
app.use(WButton)
app.mount('#app')

export default app
