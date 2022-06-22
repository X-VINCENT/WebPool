export const actions = {
  deleteTodo(context, payload) {
    context.state.todos.splice(payload, 1);
  },
};
