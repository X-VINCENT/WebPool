<template>
  <nav>
    <ul class="nav-bar">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/calendar">Calendar</router-link></li>
    </ul>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  .nav-bar {
    border-radius: 25px;
    height: fit-content;
    display: inline-flex;
    background-color: rgba(0, 0, 0, 0.4);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    align-items: center;
    padding: 0 10px;

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
</style>
