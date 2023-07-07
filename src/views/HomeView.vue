<script setup lang="ts">
import AddTodo from "@/components/AddTodo.vue";
import type { Todo } from "@/types";
import { ref } from "vue";
import { uid } from "uid";
import TodoItem from "@/components/TodoItem.vue";

const todos = ref<Todo[]>([]);

const handleCreateTodo = (newTodo: string) => {
  console.log({ newTodo });
  todos.value.push({
    id: uid(),
    completed: false,
    editMode: false,
    name: newTodo,
  });
  console.log({ todos: todos.value });
};
</script>

<template>
  <h1>This is an home page</h1>
  <AddTodo @create-todo="handleCreateTodo" />
  <ul>
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </ul>
</template>
