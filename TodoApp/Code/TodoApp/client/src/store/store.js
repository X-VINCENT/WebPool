import { createStore } from "vuex";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";
import { modules } from "./modules";

const tasks = require("./data/tasks.json");

export default createStore({
  state: {
    tasks: tasks,
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: modules,
});
