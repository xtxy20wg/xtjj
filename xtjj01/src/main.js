import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/main.css";
import "./assets/css/iconfont.css";
const app = createApp(App);
import pinia from './store/index'
createApp(App).use(pinia).mount('#app')
