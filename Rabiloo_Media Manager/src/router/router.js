import {createRouter, createWebHistory}  from 'vue-router'
import UploadFile from "../components/view/UploadFile.vue";

const routes = [{ path: "/files", component: UploadFile }];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});