<template>
  <div class="home">
    <list-component :title="`Todo`" :status="0" />
    <list-component :title="`In progress`" :status="1" />
    <list-component :title="`Done`" :status="2" />
  </div>
</template>

<script>
import ListComponent from "@/components/List/ListComponent.vue";

export default {
  name: "HomeComponent",
  components: { ListComponent },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  display: grid;
  column-gap: 50px;
  grid-template-columns: auto auto auto;
  padding: 10px;
  align-items: center;
}

@media screen and (max-width: 1280px) {
  .home {
    grid-template-columns: auto auto;
  }
}

@media screen and (max-width: 720px) {
  .home {
    grid-template-columns: auto;
  }
}
</style>
