import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// [!] File Where we've decalared Global Rules
import "./config/vee-validate-rules";

const app = createApp(App);
app.use(router);
app.mount("#app");
