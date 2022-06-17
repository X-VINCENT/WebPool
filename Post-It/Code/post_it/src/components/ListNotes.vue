<template>
  <div>
    <div id="list">
      <ul>
        <li class="post-it" v-for="(note, index) in Notes" :key="note.title">
          <h1>{{ note.title }}</h1>
          <p>{{ note.description }}</p>
          <div class="btn-container">
            <button class="btn btn-open" @click="goToSelfView(index)">
              <i class="fas fa-ellipsis-h"></i>
            </button>
            <button class="btn btn-delete" @click="removeNote(index)">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </li>
      </ul>
    </div>
    <div class="add-post-it">
      <form @submit.prevent="addNote()">
        <div class="half">
          <label>Title</label>
          <input type="text" v-model="title" id="input_title" required />
        </div>
        <div class="half">
          <label>Description</label>
          <input
            type="text"
            v-model="description"
            id="input_description"
            required
          />
        </div>
        <button type="submit" class="btn btn-add">
          <i class="fas fa-plus"></i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListNotes",
  methods: {
    addNote() {
      let note = {
        title: this.title,
        description: this.description,
      };

      if (this.title != "" && this.description != "") this.Notes.push(note);

      this.title = "";
      this.description = "";
    },
    removeNote(index) {
      console.log(index);
      this.Notes.splice(index, 1);
    },
    goToSelfView(index) {
      this.$router.push(`/note/${index}`);
    },
  },
  data() {
    return {
      Notes: [
        { title: "Learn Vue.js", description: "You have to learn Vue.js." },
        { title: "Learn React.js", description: "You have to learn React.js." },
        { title: "Learn Nuxt.js", description: "You have to learn Nuxt.js." },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  padding-inline-start: 0px;
}

.post-it {
  position: relative;
  top: 5%;
  left: 50%;
  margin: 0 0 0 -200px;
  width: 400px;
  height: 400px;
  color: white;
  background-color: #161f28;
  list-style-type: none;
  border-radius: 40px;
  box-shadow: 0 10px 5px #24292f;

  & > h1 {
    padding-top: 10%;
    padding-right: 0%;
    padding-bottom: 0%;
    padding-left: 20px;
    height: 40px;
    width: 360px;
    max-height: 40px;
    max-width: 360px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & > p {
    align-items: center;
    text-align: justify;
    padding: 20px;
    height: 100px;
    width: 360px;
    max-height: 100px;
    max-width: 360px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-wrap;
  }
}

.btn-container {
  width: 100%;
  height: 20%;
  position: absolute;
  margin: 10% auto;
}

.btn {
  background-color: #2c3e50;
  border: 1px solid #bdbdbd;
  width: 48px;
  height: 48px;
  padding: 0 16px 0 16px;
  margin: 16px 40px 16px 40px;
  border-radius: 24px;
  font-size: 16px;
  cursor: pointer;
}

.btn-open {
  color: green;
  transition: all 0.5s;

  &:hover {
    transform: rotate(90deg);
  }
}

.btn-delete {
  color: red;
  transition: all 0.5s;

  &:hover {
    transform: rotate(45deg);
  }
}

.btn-add {
  color: white;
  transition: all 0.5s;

  &:hover {
    transform: rotate(360deg);
  }
}

.add-post-it {
  border: 3px solid #161f28;
  border-radius: 40px;
  margin: 50px;
  box-shadow: 0 10px 5px #24292f;
}

.half {
  padding-top: 20px;
  align-self: center;

  & > label {
    font-size: 24px;
    font-weight: bold;
  }

  & > input {
    display: block;
    color: white;
    background-color: #161f28;
    margin: 5px auto;
    padding: 5px 10px 5px 10px;
    border: none;
    border-radius: 40px;
    resize: both;
  }
}

#input_title {
  width: 67%;
  font-size: 24px;
}

#input_description {
  width: 73%;
  height: 100px;
  font-size: 16px;
  box-sizing: border-box;
}
</style>
