import { createStore } from "vuex";

export default createStore({
  state: {
    notes: [
      {
        title: "Learn Vue.js",
        description: "You have to learn Vue.js.",
      },
      {
        title: "Learn React.js",
        description: "You have to learn React.js.",
      },
      {
        title: "Learn Node.js",
        description: "You have to learn Node.js.",
      },
    ],
  },
  mutations: {},
  actions: {
    addNote(context, payload) {
      context.state.notes.push(payload);
    },
    removeNote(context, payload) {
      context.state.notes.splice(payload, 1);
    },
  },
  getters: {},
});
