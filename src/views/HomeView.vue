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
  <main>
    <h1>Create a todo</h1>
    <AddTodo @create-todo="handleCreateTodo" />
    <ul>
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    </ul>
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;

  h1 {
    margin-bottom: 16px;
    text-align: center;
  }
}
</style>
