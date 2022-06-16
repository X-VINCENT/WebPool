import { createRouter, createWebHistory } from "vue-router";
import AllPostItView from "../views/AllPostItView.vue";

const routes = [
  {
    path: "/",
    name: "all_post_it",
    component: AllPostItView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
