<template>
  <modal-card :show="showModal" @close="showModal = false" />
  <div class="list">
    <div class="header">
      <h1>{{ title }}</h1>
      <button @click="showModal = true">
        <font-awesome-icon icon="fa-solid fa-plus" />
      </button>
    </div>
    <div class="card-box">
      <div class="card" v-for="task in filteredtasks" :key="task.title">
        <card :task="task" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/List/Card/DefaultCard.vue";
import ModalCard from "@/components/List/Card/ModalCard.vue";

export default {
  name: "ListComponent",
  components: { Card, ModalCard },
  props: {
    title: {
      type: String,
      required: true,
      default: "Title",
    },
    status: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
    filteredtasks() {
      return this.$store.state.tasks.filter(
        (task) => task.status == this.$props.status
      );
    },
  },
};
</script>

<style lang="scss" scoped>
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

  animation-duration: 2s;
  animation-name: animate;

  & > .header {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;

    & > h1 {
      position: relative;
      width: 280px;
      height: 44px;
      font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica,
        Arial, sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      line-height: 150%;
      margin: 24px auto;

      color: #fff;
    }

    & > button {
      position: absolute;
      left: 80%;
      background-color: rgba(0, 0, 0, 0);
      color: #fff;
      border-radius: 25px;
      font-family: sans-serif;
      font-weight: bold;
      font-size: 28px;
      border: none;
      cursor: pointer;
    }
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

@keyframes animate {
  0% {
    opacity: 0;
    transform: translate(0, 200px);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
</style>
