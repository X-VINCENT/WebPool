<template>
  <div class="calendar">
    <Calendar />
  </div>
</template>

<script>
// @ is an alias to /src
import Calendar from "@/components/Calendar.vue";

export default {
  name: "CalendarView",
  components: {
    Calendar,
  },
};
</script>
