import './bootstrap';
import { createApp } from "vue";
import router from '../assets/js/vue/router/IndexRouter'

import App from "./App.vue";

const app = createApp(App)

app.use(router)
app.mount("#app")

