// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Dash_Profile from "../views/Dash_Profile.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "Dash_Profile",
    component: Dash_Profile,
  },
  {
    path: "/AboutView",
    name: "AboutView",
    component:AboutView
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
