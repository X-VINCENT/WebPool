<template>
  <div class="home">
    <div class="list">
      <h1>To do</h1>
    </div>
    <div class="list">
      <h1>In progress</h1>
    </div>
    <div class="list">
      <h1>Done</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px auto;
  gap: 16px;

  position: relative;
  width: 368px;
  height: 648px;

  background-color: #1a202c;
  border: 1px solid;
  border-color: #4a5568;
  border-radius: 16px;

  h1 {
    width: 320px;
    height: 44px;
    font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial,
      sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;

    color: #fff;

    flex: none;
    order: 0;
    flex-grow: 0;
  }
}
</style>
