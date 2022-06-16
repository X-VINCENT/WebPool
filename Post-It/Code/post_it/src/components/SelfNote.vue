<template>
  <div id="main-div">
    <div class="note-div">
      <h1>My second post-it title</h1>
      <p>This is a description</p>
    </div>
    <div class="btn-container">
      <button class="btn btn-back">
        <i class="fas fa-arrow-left">
          <span>Back to all post-it</span>
        </i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelfNote",
  props: {
    msg: String,
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
