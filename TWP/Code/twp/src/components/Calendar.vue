<template>
  <div class="calendar">
    <v-date-picker
      is-dark
      v-model="date"
      :select-attribute="selectAttribute"
      @dayclick="onDayClick"
    />
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
  computed: {
    dates() {
      return this.days.map((day) => day.date);
    },
    attributes() {
      return this.dates.map((date) => ({
        highlight: true,
        dates: date,
      }));
    },
  },
  methods: {
    onDayClick(day) {
      const idx = this.days.findIndex((d) => d.id === day.id);
      if (idx >= 0) {
        this.days.splice(idx, 1);
      } else {
        this.days.push({
          id: day.id,
          date: day.date,
        });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "v-calendar/dist/style.css";

.calendar {
  margin: 24px auto;
}
</style>
