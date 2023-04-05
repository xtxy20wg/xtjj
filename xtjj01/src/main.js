import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/main.css";
import "./assets/css/iconfont.css";

import pinia from './store/index'
import router from './route'

const app = createApp(App);
app.use(pinia)
app.use(router)
app.mount('#app')
