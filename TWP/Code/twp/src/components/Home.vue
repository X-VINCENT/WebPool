<template>
  <div class="home">
    <div class="list">
      <h1>Todo</h1>
      <div class="card-box">
        <div
          class="card"
          v-for="(todo, id) in $store.state.todos"
          :key="todo.title"
        >
          <card :todo="todo" :id="id" />
        </div>
      </div>
    </div>
    <div class="list">
      <h1>In progress</h1>
      <div class="card-box">
        <div
          class="card"
          v-for="(todo, id) in $store.state.todos"
          :key="todo.title"
        >
          <card :todo="todo" :id="id" />
        </div>
      </div>
    </div>
    <div class="list">
      <h1>Done</h1>
      <div class="card-box">
        <div
          class="card"
          v-for="(todo, id) in $store.state.todos"
          :key="todo.title"
        >
          <card :todo="todo" :id="id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/List/Card/CardItem";

export default {
  components: { Card },
  name: "HomeComponent",
  mounted() {},
  methods: {
    randomColor() {
      const r = () => Math.floor(256 * Math.random());

      return `rgb(${r()}, ${r()}, ${r()})`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  display: grid;
  column-gap: 50px;
  grid-template-columns: auto auto auto;
  padding: 10px;
  align-items: center;
}

@media screen and (max-width: 1280px) {
  .home {
    grid-template-columns: auto auto;
  }
}

@media screen and (max-width: 720px) {
  .home {
    grid-template-columns: auto;
  }
}

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
}
</style>
