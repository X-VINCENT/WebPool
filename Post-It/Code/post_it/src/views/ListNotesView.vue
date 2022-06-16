<template>
  <div>
    <ListNotes />
  </div>
</template>

<script>
// @ is an alias to /src
import ListNotes from "@/components/ListNotes.vue";

export default {
  name: "ListNotesView",
  components: {
    ListNotes,
  },
};
</script>
