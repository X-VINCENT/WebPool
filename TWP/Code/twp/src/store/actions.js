export const actions = {
  addTask(context, payload) {
    let id = context.state.tasks.map((item) => item.id).indexOf(payload);

    console.log(id);
  },
  deleteTask(context, payload) {
    let id = context.state.tasks.map((item) => item.id).indexOf(payload);

    context.state.tasks.splice(id, 1);
  },
};
