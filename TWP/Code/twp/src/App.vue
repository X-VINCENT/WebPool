<template>
  <button class="btn-navbar" @click="displayNavBar = !displayNavBar">
    <font-awesome-icon icon="fa-solid fa-bars" />
  </button>
  <nav>
    <ul class="nav-bar" v-show="displayNavBar">
      <li>
        <router-link to="/">
          <font-awesome-icon icon="fa-solid fa-home" />
        </router-link>
      </li>
      <li>
        <router-link to="/calendar">
          <font-awesome-icon icon="fa-solid fa-calendar-alt" />
        </router-link>
      </li>
    </ul>
  </nav>
  <div id="router-container">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayNavBar: true,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.btn-navbar {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  border-radius: 25px;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 28px;
  border: none;
  margin: -84px auto 0 -45%;
  padding: 12px 16px;
  z-index: 101;
  cursor: pointer;
}

nav {
  position: fixed;
  z-index: 100;
  width: 100%;
  margin: -100px auto;

  animation-duration: 2s;
  animation-name: animate;

  .nav-bar {
    border-radius: 25px;
    height: fit-content;
    display: inline-flex;
    background-color: rgba(0, 0, 0, 0.4);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    align-items: center;
    padding: 0 10px;
    text-align: center;

    li {
      list-style: none;
      color: white;
      font-family: sans-serif;
      font-weight: bold;
      padding: 12px 16px;
      margin: 0 8px;
      position: relative;
      cursor: pointer;
      white-space: nowrap;

      &:before {
        content: " ";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: -1;
        transition: 0.2s;
        border-radius: 25px;
      }

      &:hover {
        color: black;

        &:before {
          background: linear-gradient(to bottom, #e8edec, #d2d1d3);
          box-shadow: 0px 3px 20px 0px black;
          transform: scale(1.2);
        }
      }
    }
  }

  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 28px;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#router-container {
  margin: 100px auto;
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
