<template>
  <div>
    <AllPostIt />
  </div>
</template>

<script>
// @ is an alias to /src
import AllPostIt from "@/components/AllPostIt.vue";

export default {
  name: "AllPostItView",
  components: {
    AllPostIt,
  },
};
</script>
