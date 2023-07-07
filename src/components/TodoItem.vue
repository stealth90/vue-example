<script setup lang="ts">
import type { Todo } from "@/types";

const props = defineProps<{
  todo: Todo;
}>();
</script>

<template>
  <li class="todo-item">
    <input class="todo-item__input" type="checkbox" :checked="todo.completed" />
    <span class="todo-item__name">{{ todo.name }}</span>
  </li>
</template>

<style scoped lang="scss">
.todo-item {
  display: flex;
  background-color: #fff;
}
</style>
