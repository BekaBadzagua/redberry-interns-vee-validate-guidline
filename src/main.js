import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// [!] Files Where we've decalared Global Rules & messages
import "./config/vee-validate/rules";
import "./config/vee-validate/messages";

const app = createApp(App);
app.use(router);
app.mount("#app");
