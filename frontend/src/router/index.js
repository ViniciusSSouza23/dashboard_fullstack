import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TemplateDefault from "@/template/TemplateDefault.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        template: TemplateDefault
      }
    }
  ]
});

export default router;
