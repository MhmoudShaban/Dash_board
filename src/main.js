import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@mdi/font/css/materialdesignicons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// إنشاء Vuetify بدون Font Awesome
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi", // تعيين Material Design Icons كمجموعة الأيقونات الافتراضية
  },
});

const app = createApp(App);

// استخدام Vue Router و Vuetify في التطبيق
app.use(router).use(vuetify).mount("#app");
