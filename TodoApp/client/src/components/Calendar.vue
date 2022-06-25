<template>
  <div class="calendar">
    <v-date-picker is-dark v-model="date" :select-attribute="selectAttribute" />
  </div>
</template>

<script>
export default {
  name: "CalendarComponent",
  data() {
    return {
      date: new Date(),
      selectAttribute: {
        dot: true,
      },
    };
  },
  computed: {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "v-calendar/dist/style.css";

.calendar {
  margin: 24px auto;
}
</style>
