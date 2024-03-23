import "./assets/app.scss";
import "element-plus/dist/index.css";
import "material-icons/iconfont/material-icons.css";
import "material-symbols";
import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);

app.mount("#app");
