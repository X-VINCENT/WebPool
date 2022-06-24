<template>
  <Teleport to="body">
    <div v-show="show" class="blur">
      <div
        class="modal-mask"
        :style="{
          background: todo.color,
        }"
      >
        <h1 :style="{ color: getColorByBgColor(todo.color) }">Task</h1>
        <form>
          <div class="title">
            <label :style="{ color: getColorByBgColor(todo.color) }">
              Title
            </label>
            <input
              type="text"
              placeholder="Add a title..."
              :style="{ color: getColorByBgColor(todo.color) }"
              :value="todo.title"
              @input="value = $event.target.value"
            />
          </div>
          <div class="description">
            <label :style="{ color: getColorByBgColor(todo.color) }">
              Description
            </label>
            <textarea
              placeholder="Add a description..."
              :style="{ color: getColorByBgColor(todo.color) }"
              :value="todo.description"
              @input="value = $event.target.value"
              required
            />
          </div>
          <div class="status">
            <label :style="{ color: getColorByBgColor(todo.color) }">
              Status
            </label>
            <select>
              <option>Todo</option>
              <option>In progress</option>
              <option>Done</option>
            </select>
          </div>
          <div class="color">
            <label :style="{ color: getColorByBgColor(todo.color) }">
              Color
            </label>
            <input
              type="color"
              :value="todo.color"
              @value="value = $event.target.value"
            />
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button
                class="btn"
                :style="{ color: getColorByBgColor(todo.color) }"
                @click="$emit('close')"
              >
                Exit
              </button>
              <button
                class="btn"
                type="submit"
                :style="{ color: getColorByBgColor(todo.color) }"
                @click="$emit('close')"
              >
                Save
              </button>
            </slot>
          </div>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<script>
export default {
  name: "modalCard",
  props: {
    todo: {
      type: Object,
      required: false,
      default() {
        return {
          title: "",
          description: "",
          status: "undefined",
          color: "#fff",
        };
      },
    },
    show: {
      type: Boolean,
      required: true,
    },
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
  },
};
</script>

<style lang="scss" scoped>
.blur {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.6);
}

.modal-mask {
  position: fixed;
  left: calc(50% - (40% / 2) - 25px);
  top: calc(50% - (70% / 2) - 25px);
  width: 100%;
  height: 100%;
  max-width: 40%;
  max-height: 70%;
  background-color: #1a202c;
  padding: 25px;

  border: 1px solid;
  border-radius: 40px;

  transition: opacity 0.3s ease;

  label {
    margin: 50px;
    font-size: 18px;
    font-weight: 700;
    padding: 10px;
  }

  .btn {
    float: right;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 25px;
    font-family: sans-serif;
    font-weight: 700;
    font-size: 18px;
    border: none;
    padding: 16px;
    cursor: pointer;
  }
}

@media screen and (max-width: 1280px) {
  .modal-mask {
    left: calc(50% - (60% / 2) - 25px);
    max-width: 60%;
  }
}

@media screen and (max-width: 900px) {
  .modal-mask {
    left: calc(50% - (80% / 2) - 25px);
    max-width: 80%;
  }
}
</style>
