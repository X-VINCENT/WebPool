<template>
  <Teleport to="body">
    <div v-show="show" class="blur">
      <div
        class="modal-mask"
        :style="{
          background: task.color,
        }"
      >
        <h1 :style="{ color: getColorByBgColor(task.color) }">
          <font-awesome-icon
            icon="fa-solid fa-list-check"
            :style="{
              paddingRight: 5,
              fontSize: 28,
            }"
          />
          Task
        </h1>
        <form @submit.prevent="addTask(task.id)">
          <div class="title">
            <label :style="{ color: getColorByBgColor(task.color) }">
              Title
            </label>
            <input
              type="text"
              placeholder="Add a title..."
              :value="task.title"
              @input="value = $event.target.value"
              ref="title"
              required
            />
          </div>
          <div class="description">
            <label :style="{ color: getColorByBgColor(task.color) }">
              <font-awesome-icon
                icon="fa-solid fa-align-left"
                :style="{
                  paddingRight: 5,
                  fontSize: 16,
                }"
              />
              Description
            </label>
            <textarea
              placeholder="Add a description..."
              :value="task.description"
              @input="value = $event.target.value"
              ref="description"
              required
            />
          </div>
          <div class="status" :style="{ color: getColorByBgColor(task.color) }">
            <label :style="{ color: getColorByBgColor(task.color) }">
              <font-awesome-icon
                icon="fa-solid fa-ellipsis-vertical"
                :style="{ margin: 15 }"
              />
            </label>
            <select required ref="status">
              <option disabled>Select a status</option>
              <option :selected="checkSelectedStatus(task.status, 0)">
                Todo
              </option>
              <option :selected="checkSelectedStatus(task.status, 1)">
                In progress
              </option>
              <option :selected="checkSelectedStatus(task.status, 2)">
                Done
              </option>
            </select>
          </div>
          <div class="color">
            <label :style="{ color: getColorByBgColor(task.color) }">
              <font-awesome-icon icon="fa-solid fa-palette" />
            </label>
            <input
              type="color"
              id="color-picker"
              :value="task.color"
              @value="value = $event.target.value"
              ref="color"
              required
            />
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button
                class="btn btn-exit"
                type="button"
                :style="{ color: getColorByBgColor(task.color) }"
                @click="$emit('close')"
              >
                <font-awesome-icon
                  icon="fa-solid fa-arrow-right-from-bracket"
                />
              </button>
              <button
                class="btn btn-save"
                type="submit"
                :style="{ color: getColorByBgColor(task.color) }"
              >
                <font-awesome-icon icon="fa-solid fa-floppy-disk" />
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
    task: {
      type: Object,
      required: false,
      default() {
        return {
          id: -1,
          title: "",
          description: "",
          status: 0,
          color: "#ffffff",
        };
      },
    },
    show: {
      type: Boolean,
      required: true,
    },
  },
  emits: { close },
  methods: {
    getColorByBgColor(bgColor) {
      if (!bgColor) {
        return "#ffffff";
      }
      return parseInt(bgColor.replace("#", ""), 16) > 0xffffff / 2
        ? "#000000"
        : "#ffffff";
    },
    checkSelectedStatus(taskStatus, optionStatus) {
      if (taskStatus == optionStatus) return true;
      return false;
    },
    addTask(id) {
      let task = {
        id: id,
        title: this.$refs.title.value,
        description: this.$refs.description.value,
        status: this.$refs.status.value,
        color: this.$refs.color.value,
      };

      if (task.status == "Todo") task.status = 0;
      if (task.status == "In progress") task.status = 1;
      if (task.status == "Done") task.status = 2;

      this.$store.dispatch("addTask", task);
      this.$emit("close");

      this.title = "";
      this.description = "";
      this.status = "";
      this.color = "";
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
  font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial,
    sans-serif;

  border: 1px solid;
  border-radius: 40px;

  transition: opacity 0.3s ease;

  animation-duration: 2s;
  animation-name: animate;

  h1 {
    padding: 0;
    font-size: 32px;
    text-align: center;
  }

  label {
    left: 0;
    font-size: 18px;
    font-weight: 700;
    align-items: center;
  }

  .btn {
    position: absolute;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 25px;
    font-family: sans-serif;
    font-weight: 700;
    font-size: 18px;
    border: none;
    padding: 16px;
    top: 90%;
    cursor: pointer;
  }

  .btn-exit {
    left: 6%;
  }

  .btn-save {
    left: 85%;
  }
}

form {
  & > .title {
    margin: 25px auto;

    & > input {
      margin: 5px -6px;
      width: 100%;
      padding: 0.5em;
      border-radius: 5px;
      font-size: 14px;
      background: #f0f0f0;
      border: none;
      line-height: 3;

      &::placeholder {
        color: #323232;
        font-size: 12px;
      }

      &:focus {
        outline: none;
      }
    }
  }

  & > .description {
    margin: 25px auto;

    & > textarea {
      margin: 5px -6px;
      width: 100%;
      height: 200px;
      padding: 0.5em;
      min-height: 18px;
      max-height: 286px;
      resize: vertical;
      border-radius: 5px;
      overflow: visible;
      border: none;
      font-size: 14px;
      background: #f0f0f0;

      &::placeholder {
        color: #323232;
        font-size: 12px;
      }

      &:focus {
        outline: none;
      }
    }
  }

  & > .status {
    position: relative;
    display: flex;
    width: 20em;
    height: 3em;
    line-height: 3;
    background: #f0f0f0;
    overflow: hidden;
    border-radius: 0.25em;
    width: 102%;
    left: -1%;

    &::after {
      content: "\25BC";
      position: absolute;
      top: 0;
      right: 0;
      padding: 0 1em;
      background: #2b2e2e;
      cursor: pointer;
      pointer-events: none;
      transition: 0.25s all ease;
    }

    &:hover::after {
      color: #23b499;
    }

    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      appearance: none;
      outline: 0;
      box-shadow: none;
      border: 0 !important;
      background: #f0f0f0;
      background-image: none;
      flex: 1;
      padding: 0 0.5em;
      cursor: pointer;
      font-size: 14px;

      &::-ms-expand {
        display: none;
      }
    }
  }

  & > .color {
    margin: 25px auto;
    align-items: center;
    line-height: 0;

    & > label {
      position: absolute;
      font-size: 20px;
      margin-top: 2.5%;
      margin-left: calc(50% - 10px);
    }

    & > input {
      -webkit-appearance: none;
      width: 102%;
      height: 48px;
      background-color: #f0f0f0;
      border: 2px solid black;
      border-radius: 5px;
      padding: 0;
      margin-left: -1%;

      &::-webkit-color-swatch-wrapper {
        padding: 0;
      }

      &::-webkit-color-swatch {
        border: none;
      }
    }
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

@keyframes animate {
  0% {
    opacity: 0;
    transform: translate(0, -50%);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
</style>
