<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  name: "CardTitle",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
h1 {
  width: 272px;
  height: 24px;
  margin: 10px 24px;

  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;

  color: #fff;
}
</style>
