<template>
  <Teleport to="body">
    <div v-show="show" class="blur">
      <div
        class="modal-mask"
        :style="{
          background: todo.color,
        }"
      >
        <h1 :style="{ color: getColorByBgColor(todo.color) }">
          <font-awesome-icon
            icon="fa-solid fa-list-check"
            :style="{
              paddingRight: 5,
              fontSize: 28,
            }"
          />
          Task
        </h1>
        <form>
          <div class="title">
            <label :style="{ color: getColorByBgColor(todo.color) }">
              Title
            </label>
            <input
              type="text"
              placeholder="Add a title..."
              :style="{ color: black }"
              :value="todo.title"
              @input="value = $event.target.value"
              required
            />
          </div>
          <div class="description">
            <label :style="{ color: getColorByBgColor(todo.color) }">
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
              :style="{ color: black }"
              :value="todo.description"
              @input="value = $event.target.value"
              required
            />
          </div>
          <div class="status" :style="{ color: getColorByBgColor(todo.color) }">
            <label :style="{ color: getColorByBgColor(todo.color) }">
              <font-awesome-icon
                icon="fa-solid fa-ellipsis-vertical"
                :style="{ margin: 15 }"
              />
            </label>
            <select required>
              <option disabled>Select a status</option>
              <option :selected="checkSelectedStatus(todo.status, 0)">
                Todo
              </option>
              <option :selected="checkSelectedStatus(todo.status, 1)">
                In progress
              </option>
              <option :selected="checkSelectedStatus(todo.status, 2)">
                Done
              </option>
            </select>
          </div>
          <div class="color">
            <label :style="{ color: getColorByBgColor(todo.color) }">
              <font-awesome-icon icon="fa-solid fa-palette" />
            </label>
            <input
              type="color"
              :value="todo.color"
              @value="value = $event.target.value"
              placeholder="Hello"
              required
            />
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button
                class="btn btn-exit"
                :style="{ color: getColorByBgColor(todo.color) }"
                @click="$emit('close')"
              >
                <font-awesome-icon
                  icon="fa-solid fa-arrow-right-from-bracket"
                />
              </button>
              <button
                class="btn btn-save"
                type="submit"
                :style="{ color: getColorByBgColor(todo.color) }"
                @click="$emit('close')"
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
    checkSelectedStatus(todoStatus, optionStatus) {
      if (todoStatus == optionStatus) return true;
      return false;
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
      background: #5c6664;
      border: none;
      line-height: 3;

      &::placeholder {
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
      max-height: 400px;
      resize: vertical;
      border-radius: 5px;
      overflow: hidden;
      border: none;
      font-size: 14px;
      background: #5c6664;

      &::placeholder {
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
    background: #5c6664;
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
      background: #5c6664;
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
      background-color: #5c6664;
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
</style>
