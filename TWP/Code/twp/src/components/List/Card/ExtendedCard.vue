<template>
  <div
    class="card"
    :style="{
      background: todo.color,
    }"
  >
    <p>Hello</p>
  </div>
</template>

<script>
export default {
  name: "ExtendedCard",
  props: {
    todo: {
      type: Object,
      required: false,
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.card {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
