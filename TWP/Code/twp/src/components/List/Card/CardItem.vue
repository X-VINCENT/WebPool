<template>
  <div
    class="card"
    :style="{
      background: todo.color,
    }"
  >
    <card-title :title="todo.title" />
    <card-description :description="todo.description" />
    <div class="btn-container">
      <EditButton :todo="todo" :id="id" />
      <DeleteButton :id="id" />
    </div>
  </div>
</template>

<script>
import DeleteButton from "@/components/List/Items/DeleteButton";
import EditButton from "@/components/List/Items/EditButton";
import CardTitle from "@/components/List/Items/CardTitle";
import CardDescription from "@/components/List/Items/CardDescription";

export default {
  components: { DeleteButton, EditButton, CardTitle, CardDescription },
  props: {
    todo: {
      type: Object,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  text-align: left;

  width: 320px;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12), 0px 16px 32px rgba(0, 0, 0, 0.08);
  border-radius: 28px;

  flex: none;
  order: 0;
  flex-grow: 0;

  & > .btn-container {
    width: 100%;
  }
}
</style>
