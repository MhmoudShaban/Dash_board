// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Dash_Profile from "../views/Dash_Profile.vue";
import AboutView from "../views/AboutView.vue";
import ChartsView from "@/views/ChartsView.vue";
import AddProduct from "@/components/AddProduct.vue";

const routes = [
  {
    path: "/",
    name: "AboutView",
    component: AboutView,
  },
  {
    path: "/Dash_Profile",
    name: "Dash_Profile",
    component: Dash_Profile,
  },

  {
    path: "/ChartsView",
    name: "ChartsView",
    component: ChartsView,
  },
  {
    path: "/add-product",
    name: "AddProduct",
    component: AddProduct,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
