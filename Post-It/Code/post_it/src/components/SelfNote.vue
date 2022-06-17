<template>
  <div>
    <div class="note-div" v-if="$store.state.notes[id]">
      <h1>{{ $store.state.notes[id].title }}</h1>
      <p>{{ $store.state.notes[id].description }}</p>
    </div>
    <div style="padding-bottom: 20px" v-else>
      <h1 id="">
        No post-it <br />
        Verify index
      </h1>
    </div>
    <div class="btn-container">
      <button class="btn btn-back" @click="goToList()">
        <i class="fas fa-arrow-left">
          <span>Back to all post-it</span>
        </i>
      </button>
    </div>
  </div>
</template>

<script>
import ListNotes from "@/components/ListNotes.vue";
export default {
  name: "SelfNote",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  component: {
    ListNotes,
  },
  methods: {
    goToList() {
      this.$router.push("/");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  padding-inline-start: 0px;
}

.note-div {
  position: relative;
  top: 5%;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  color: white;
  background-color: #161f28;
  list-style-type: none;
  border-radius: 40px;
  box-shadow: 0 10px 5px #24292f;

  & > h1 {
    padding-top: 40px;
    padding-right: 0%;
    padding-bottom: 0%;
    padding-left: 0%;
  }

  & > p {
    align-items: center;
    text-align: justify;
    padding: 20px;
    height: 100%;
    width: calc(100% - 40px);
    max-width: calc(100% - 40px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-wrap;
  }
}

.btn-container {
  width: 100%;
  height: 20%;
  position: relative;
  margin: 0 auto;
}

.btn {
  background-color: #161f28;
  border: 1px solid #bdbdbd;
  height: 48px;
  padding: 0 16px 0 16px;
  margin: 16px 40px 16px 40px;
  border-radius: 24px;
  font-size: 16px;
  cursor: pointer;

  & > i > span {
    padding-left: 10px;
  }
}

.btn-back {
  color: white;
  transition: all 0.8s;

  &:hover {
    color: #161f28;
    box-shadow: inset -200px 0 0 0 #d80286;
  }
}
</style>
