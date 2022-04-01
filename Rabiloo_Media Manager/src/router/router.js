import { createRouter, createWebHistory } from "vue-router";
import UploadFile from "../components/view/UploadFile.vue";
import ListMedia from "../components/view/ListMedia.vue";

const routes = [
  { path: "/", component: ListMedia },
  { path: "/files", component: UploadFile },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
