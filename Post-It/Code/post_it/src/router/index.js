import { createRouter, createWebHistory } from "vue-router";
import ListNotesView from "../views/ListNotesView.vue";
import SelfNoteView from "../views/SelfNoteView.vue";

const routes = [
  {
    path: "/",
    name: "list_notes",
    component: ListNotesView,
  },
  {
    path: "/note",
    name: "self_note",
    component: SelfNoteView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
