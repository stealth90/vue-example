<script setup lang="ts">
import AddTodo from "@/components/AddTodo.vue";
import type { Todo } from "@/types";
import { ref } from "vue";
import { uid } from "uid";
import TodoItem from "@/components/TodoItem.vue";
import { generateRandomColor } from "@/utils";

const todos = ref<Todo[]>([]);

const handleCreateTodo = (newTodo: string) => {
  todos.value.push({
    id: uid(),
    completed: false,
    editMode: false,
    name: newTodo,
    ...generateRandomColor(),
  });
  setTodoListLocalStorage()
};

const fetchTodoList = () => {
  if (localStorage.getItem("todoList")) {
    const savedTodoList = JSON.parse(
      localStorage.getItem("todoList") as string
    );
    todos.value = savedTodoList;
  }
};

fetchTodoList();

const setTodoListLocalStorage = () => {
  localStorage.setItem("todoList", JSON.stringify(todos.value));
};

const toggleEditTodo = (todoPos: number) => {
  todos.value[todoPos].editMode = !todos.value[todoPos].editMode;
  setTodoListLocalStorage();
};

const updateTodo = (todoVal: string, todoPos: number) => {
  todos.value[todoPos].name = todoVal;
  setTodoListLocalStorage();
};

const toggleTodoComplete = (todoPos: number) => {
  todos.value[todoPos].completed = !todos.value[todoPos].completed;
  setTodoListLocalStorage();
};

const deleteTodo = (todo: Todo) => {
  todos.value = todos.value.filter((todoFilter) => todoFilter.id !== todo.id);
  setTodoListLocalStorage();
};
</script>

<template>
  <main>
    <h1>Create a todo</h1>
    <AddTodo @create-todo="handleCreateTodo" />
    <ul>
      <TodoItem
        v-for="(todo, index) in todos"
        :key="todo.id"
        :todo="todo"
        :index="index"
        @edit-todo="toggleEditTodo"
        @update-todo="updateTodo"
        @toggle-complete="toggleTodoComplete"
        @delete-todo="deleteTodo"
      />
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
