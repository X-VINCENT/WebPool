<template>
  <button class="btn" @click="editTodo(todo, id)">
    <font-awesome-icon icon="fa-solid fa-pen-alt" />
  </button>
</template>

<script>
export default {
  name: "EditButton",
  props: {
    todo: {
      type: Object,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    editTodo(todo, id) {
      console.log(todo.title + todo.description + id);
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  color: #fff;
  left: 70%;
  border-radius: 25px;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 14px;
  border: none;
  padding: 16px;
  cursor: pointer;
}
</style>
