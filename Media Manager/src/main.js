import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import { router } from "./router/router";
import { createStore } from "vuex";
import { uploadFile } from "./store/UploadFile";

const app = createApp(App);

const store = createStore({
  modules: {
    uploadFile,
  },
});

app.use(store, ElementPlus).use(router).mount("#app");
