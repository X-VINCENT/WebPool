import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      {
        title: "Learn Vue.js",
        description: "You have to learn Vue.js",
        status: 1,
        color: "#32a852",
      },
      {
        title: "Learn React.js",
        description: "You have to learn React.js",
        status: 1,
        color: "#000000",
      },
      {
        title: "Learn Node.js",
        description: "You have to learn Node.js",
        status: 1,
        color: "#000000",
      },
      {
        title: "Learn Nuxt.js",
        description: "You have to learn Nuxt.js",
        status: 0,
        color: "#000000",
      },
      {
        title: "Learn HTML",
        description: "You have to learn HTML",
        status: 2,
        color: "#000000",
      },
      {
        title: "Learn CSS",
        description: "You have to learn CSS",
        status: 2,
        color: "#000000",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {
    deleteTodo(context, payload) {
      context.state.todos.splice(payload, 1);
    },
  },
  modules: {},
});
