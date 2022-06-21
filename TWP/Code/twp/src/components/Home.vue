<template>
  <div class="home">
    <div class="list">
      <h1>Todo</h1>
      <div class="card-box">
        <div
          class="card"
          v-for="todo in todos"
          :key="todo.id"
          :style="{ background: randomColor() }"
        >
          <h1>{{ todo.title }}</h1>
          <p>{{ todo.description }}</p>
          <DeleteButton :id="todo.id" />
        </div>
      </div>
    </div>
    <div class="list">
      <h1>In progress</h1>
      <div class="card-box">
        <div
          class="card"
          v-for="todo in todos"
          :key="todo.id"
          :style="{ background: randomColor() }"
        >
          <h1>{{ todo.title }}</h1>
          <p>{{ todo.description }}</p>
        </div>
      </div>
    </div>
    <div class="list">
      <h1>Done</h1>
      <div class="card-box">
        <div
          class="card"
          v-for="todo in todos"
          :key="todo.id"
          :style="{ background: randomColor() }"
        >
          <h1>{{ todo.title }}</h1>
          <p>{{ todo.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DeleteButton from "@/components/TodoList/TodoItem/TodoDeleteButton";
const Status = {
  TODO: 0,
  IN_PROGRESS: 1,
  DONE: 2,
};

export default {
  components: { DeleteButton },
  name: "HomeComponent",
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Learn Vue.js",
          description: "You have to learn Vue.js",
          status: Status.TODO,
        },
        {
          id: 2,
          title: "Learn React.js",
          description: "You have to learn React.js",
          status: Status.TODO,
        },
        {
          id: 3,
          title: "Learn Node.js",
          description: "You have to learn Node.js",
          status: Status.TODO,
        },
        {
          id: 4,
          title: "Learn Nuxt.js",
          description: "You have to learn Nuxt.js",
          status: Status.TODO,
        },
        {
          id: 5,
          title: "Learn Nuxt.js",
          description: "You have to learn Nuxt.js",
          status: Status.TODO,
        },
        {
          id: 6,
          title: "Learn Nuxt.js",
          description: "You have to learn Nuxt.js",
          status: Status.TODO,
        },
      ],
    };
  },
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

  .card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    text-align: left;

    width: 320px;

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
