<template>
  <p>{{ description }}</p>
</template>

<script>
export default {
  name: "CardDescription",
  props: {
    description: {
      type: String,
      required: true,
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
p {
  width: 272px;
  height: 24px;
  margin: 10px 24px;

  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;

  color: rgba(255, 255, 255, 0.75);
}
</style>
