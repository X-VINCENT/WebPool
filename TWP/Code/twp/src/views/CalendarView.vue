<template>
  <div class="home">
    <Calendar />
  </div>
</template>

<script>
// @ is an alias to /src
import Calendar from "@/components/Calendar.vue";

export default {
  name: "HomeView",
  components: {
    Calendar,
  },
};
</script>
