<template>
  <div>
    <SelfNote :id="$route.params.id" />
  </div>
</template>

<script>
// @ is an alias to /src
import SelfNote from "@/components/SelfNote.vue";

export default {
  name: "SelfNoteView",
  components: {
    SelfNote,
  },
};
</script>
