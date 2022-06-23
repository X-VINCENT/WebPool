<template>
  <div
    class="card"
    :style="{
      background: todo.color,
    }"
  ></div>
</template>

<script>
export default {
  name: "ExtendedCard",
  props: {
    todo: {
      type: Object,
      required: false,
    },
    id: {
      type: Number,
      required: false,
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.card {
  position: fixed;
  left: 25%;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 20;
  max-width: 500px;
  width: 100%;
}
</style>
