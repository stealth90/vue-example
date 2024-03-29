<script setup lang="ts">
import type { NewTodo } from "@/types";
import { reactive } from "vue";

const newTodoState = reactive<NewTodo & { isSubmitted: boolean }>({
  name: "",
  error: "",
  isValid: true,
  isSubmitted: false,
});

const emit = defineEmits<{
  (event: "create-todo", todo: string): void;
}>();

const createTodo = () => {
  if (newTodoState.name) {
    emit("create-todo", newTodoState.name);
    newTodoState.name = "";
    newTodoState.isValid = true;
    newTodoState.isSubmitted = false;
    newTodoState.error = "";
  } else {
    newTodoState.isSubmitted = true;
    newTodoState.isValid = false;
    newTodoState.error = "Todo value cannot be empty";
  }
};

const checkValidity = (e: Event) => {
  if (newTodoState.isSubmitted) {
    if ((e.currentTarget as HTMLInputElement).value) {
      newTodoState.isValid = true;
    } else {
      newTodoState.isValid = false;
    }
  }
};

const onKeyPress = (e: KeyboardEvent) => {
  if (e.code === "Enter") {
    createTodo();
  }
};
</script>

<template>
  <div class="add-todo">
    <input
      class="add-todo__input"
      @change="checkValidity($event)"
      placeholder="New todo..."
      v-model="newTodoState.name"
      @keypress="onKeyPress($event)"
    />
    <button
      class="add-todo__button"
      :disabled="!newTodoState.isValid"
      @click="createTodo()"
    >
      Add
    </button>
  </div>
  <p v-show="!newTodoState.isValid">{{ newTodoState.error }}</p>
</template>

<style scoped lang="scss">
.add-todo {
  display: flex;
  &__input {
    color: var(--color-text);
    border: 1px solid;
    border-color: gray;
    border-right: 0;
    padding-left: 1rem;
    flex: 2;
    transition: border-color 300ms;
    &:focus,
    &:active {
      border-color: hsla(160, 100%, 37%, 1);
    }
    &:focus-visible {
      outline: unset;
    }
  }
  &__button {
    background-color: var(--color-text);
    color:  var(--color-background);
    padding: 0 1rem;
    font-size: 12px;
  }
}
</style>
