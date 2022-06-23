export const actions = {
  deleteTodo(context, payload) {
    let id = context.state.todos.map((item) => item.id).indexOf(payload);

    context.state.todos.splice(id, 1);
  },
};
