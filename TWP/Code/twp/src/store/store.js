import { createStore } from "vuex";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";
import { modules } from "./modules";

const todos = require("./todos.json");

export default createStore({
  state: {
    todos: todos,
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: modules,
});
