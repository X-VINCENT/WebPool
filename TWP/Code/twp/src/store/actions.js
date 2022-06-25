export const actions = {
  addTask(context, payload) {
    let id = context.state.tasks.map((item) => item.id).indexOf(payload.id);

    if (id == -1) {
      payload.id = context.state.tasks.length;
      context.state.tasks.push(payload);
    } else {
      context.state.tasks.splice(id, 1);
      context.state.tasks.push(payload);
      context.state.tasks.sort();
    }
  },
  deleteTask(context, payload) {
    let id = context.state.tasks.map((item) => item.id).indexOf(payload);

    context.state.tasks.splice(id, 1);
  },
};
