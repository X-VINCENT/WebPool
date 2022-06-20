<template>
  <div class="home">
    <div class="list">
      <h1>Todo</h1>
      <div class="card-box">
        <div class="card">
          <h1>Title</h1>
          <p>Description</p>
        </div>
        <div class="card">
          <h1>Title</h1>
          <p>Description</p>
        </div>
        <div class="card">
          <h1>Title</h1>
          <p>Description</p>
        </div>
        <div class="card">
          <h1>Title</h1>
          <p>Description</p>
        </div>
        <div class="card">
          <h1>Title</h1>
          <p>Description</p>
        </div>
        <div class="card">
          <h1>Title</h1>
          <p>Description</p>
        </div>
      </div>
    </div>
    <div class="list">
      <h1>In progress</h1>
      <div class="card">
        <h1>Title</h1>
        <p>Description</p>
      </div>
    </div>
    <div class="list">
      <h1>Done</h1>
      <div class="card">
        <h1>Title</h1>
        <p>Description</p>
      </div>
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
  padding: 0 10px;
  gap: 16px;

  position: relative;
  width: 368px;
  height: 648px;

  background-color: #1a202c;
  border: 1px solid;
  border-color: #4a5568;
  border-radius: 16px;

  & > h1 {
    width: 320px;
    height: 44px;
    font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial,
      sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 200%;

    color: #fff;
  }

  .card-box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
    border-radius: 24px;

    overflow-y: auto;
    scrollbar-color: blue red;

    &::-webkit-scrollbar {
      width: 8px;
      height: 100%;
      background-color: #42b983;
      border-radius: 3px;
      padding-right: 20px;
    }

    &::-webkit-scrollbar-thumb {
      background: #2c7d59;
      border-radius: 3px;
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    text-align: left;

    width: 320px;

    background: #d93535;

    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12),
      0px 16px 32px rgba(0, 0, 0, 0.08);
    border-radius: 8px;

    flex: none;
    order: 0;
    flex-grow: 0;

    & > h1 {
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

    & > p {
      width: 272px;
      height: 40px;
      margin: 10px 24px;

      font-family: "SF Pro Text";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 140%;

      color: rgba(255, 255, 255, 0.75);
    }
  }
}
</style>
