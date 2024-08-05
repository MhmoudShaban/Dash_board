import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../Views/AboutView.vue";

const routes = [
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
