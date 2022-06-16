<template>
  <div id="main-div">
    <div id="list">
      <ul>
        <li class="post-it">
          <h1>My first post-it title</h1>
          <p>This is a description.</p>
          <div class="btn-container">
            <button class="btn btn-open">
              <i class="fas fa-ellipsis-h"></i>
            </button>
            <button class="btn btn-delete">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </li>
        <li class="post-it">
          <h1>My second post-it title</h1>
          <p>
            This is a description This is a description This is a description
            This is a description This is a description This is a description
            This is a description This is a description This is a description
            This is a description This is a description This is a description
            This is a description This is a description This is a description
            This is a description This is a description This is a description
            This is a description This is a description This is a description
            This is a description This is a description This is a description
            This is a description This is a description This is a description
            This is a description This is a description This is a description
            This is a description This is a description This is a description
            This is a description This is a description This is a description.
          </p>
          <div class="btn-container">
            <button class="btn btn-open">
              <i class="fas fa-ellipsis-h"></i>
            </button>
            <button class="btn btn-delete">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </li>
        <li class="post-it">
          <h1>My third post-it title</h1>
          <p>This is a description.</p>
          <div class="btn-container">
            <button class="btn btn-open">
              <i class="fas fa-ellipsis-h"></i>
            </button>
            <button class="btn btn-delete">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </li>
      </ul>
    </div>
    <div class="add-post-it">
      <button class="btn btn-add">
        <i class="fas fa-plus"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListNotes",
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
    padding-left: 0%;
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
</style>
