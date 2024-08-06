// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Dash_Profile from "../views/Dash_Profile.vue";
import AboutView from "../views/AboutView.vue";
import ShowAll from "../views/ShowAll.vue"; //
import EditItem from "@/views/EditItem.vue";

const routes = [
  {
    path: "/",
    name: "Dash_Profile",
    component: Dash_Profile,
  },
  {
    path: "/AboutView",
    name: "AboutView",
    component: AboutView,
  },
  {
    path: "/show-all",
    name: "ShowAll",
    component: ShowAll,
  },
  {
    path: "/edit",
    name: "edit",
    component: EditItem,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
