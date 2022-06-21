<template>
  <button class="btn" @click="deleteTodo()">
    <font-awesome-icon icon="fa-solid fa-trash-alt" />
  </button>
</template>

<script>
export default {
  name: "DeleteButton",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    deleteTodo() {},
  },
};
</script>

<style lang="scss" scoped>
.btn {
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  color: #fff;
  left: 80%;
  border-radius: 25px;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 14px;
  border: none;
  padding: 12px 16px;
  cursor: pointer;
}
</style>
