<template>
  <Teleport to="body">
    <modal-card :task="task" :show="showModal" @close="showModal = false" />
  </Teleport>
  <div
    class="card"
    :style="{
      background: task.color,
    }"
  >
    <h1 :style="{ color: getColorByBgColor(task.color) }">
      {{ task.title }}
    </h1>
    <p :style="{ color: getColorByBgColor(task.color) }">
      {{ task.description }}
    </p>
    <div class="btn-container">
      <button
        class="btn"
        :style="{ color: getColorByBgColor(task.color) }"
        @click="showModal = true"
      >
        <font-awesome-icon icon="fa-solid fa-pen-alt" />
      </button>
      <button
        class="btn"
        :style="{ color: getColorByBgColor(task.color) }"
        @click="deleteTask(task.id)"
      >
        <font-awesome-icon icon="fa-solid fa-trash-alt" />
      </button>
    </div>
  </div>
</template>

<script>
import ModalCard from "@/components/List/Card/ModalCard.vue";

export default {
  name: "DefaultCard",
  components: { ModalCard },
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    getColorByBgColor(bgColor) {
      if (!bgColor) {
        return "";
      }
      return parseInt(bgColor.replace("#", ""), 16) > 0xffffff / 2
        ? "#000000"
        : "#ffffff";
    },
    deleteTask(id) {
      this.$store.dispatch("deleteTask", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  text-align: left;

  width: 320px;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12), 0px 16px 32px rgba(0, 0, 0, 0.08);
  border-radius: 28px;

  flex: none;
  order: 0;
  flex-grow: 0;

  animation-duration: 2s;
  animation-name: animate;

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
    height: 24px;
    margin: 10px 24px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;

    color: rgba(255, 255, 255, 0.75);
  }

  & > .btn-container {
    width: 100%;

    & > .btn {
      position: relative;
      background-color: rgba(0, 0, 0, 0);
      color: #fff;
      left: 70%;
      border-radius: 25px;
      font-family: sans-serif;
      font-weight: bold;
      font-size: 14px;
      border: none;
      padding: 16px;
      cursor: pointer;
    }
  }
}

@keyframes animate {
  0% {
    opacity: 0;
    transform: translate(-50%, 0);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
</style>
