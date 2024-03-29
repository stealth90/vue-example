<script setup lang="ts">
import type { Todo } from "@/types";
import { Icon } from "@iconify/vue";
defineProps<{ todo: Todo; index: number }>();

defineEmits(["edit-todo", "update-todo", "toggle-complete", "delete-todo"]);
</script>

<template>
  <li :style="{ backgroundColor: todo.backgroundColor, color: todo.color }">
    <input
      type="checkbox"
      :checked="todo.completed"
      @input="$emit('toggle-complete', index)"
    />
    <div class="todo">
      <input
        v-if="todo.editMode"
        type="text"
        :value="todo.name"
        @input="
          $emit(
            'update-todo',
            ($event.target as HTMLInputElement)?.value,
            index
          )
        "
      />
      <span
        v-else
        class="todo-name"
        :class="{
          'completed-todo': todo.completed,
        }"
      >
        {{ todo.name }}
      </span>
    </div>
    <div class="todo-actions">
      <Icon
        v-if="todo.editMode"
        icon="ph:check-circle"
        class="icon check-icon"
        color="41b080"
        width="22"
        @click="$emit('edit-todo', index)"
      />
      <Icon
        v-else
        icon="ph:pencil-fill"
        class="icon edit-icon"
        color="41b080"
        width="22"
        @click="$emit('edit-todo', index)"
      />
      <Icon
        icon="ph:trash"
        class="icon trash-icon"
        color="f95e5e"
        width="22"
        @click="$emit('delete-todo', todo)"
      />
    </div>
  </li>
</template>

<style lang="scss" scoped>
li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 10px;
  box-shadow: 0px 0px 25px 1px rgba(0, 0, 0, 0.1);
  border-radius: 5rem;
  margin-top: 1rem;
  &:hover {
    .todo-actions {
      opacity: 1;
    }
  }

  input[type="checkbox"] {
    appearance: none;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    cursor: pointer;
    &:checked {
      background-color: #41b080;
    }
  }

  .todo-name {
    height: 2rem;
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
  }

  .todo {
    flex: 1;

    .completed-todo {
      text-decoration: line-through;
    }

    input[type="text"] {
      width: 100%;
      padding: 2px 6px;
      border: 2px solid #41b080;
      color: var(--color-text);
    }
  }

  .todo-actions {
    display: flex;
    gap: 6px;
    opacity: 0;
    transition: 150ms ease-in-out;
    .icon {
      cursor: pointer;
    }
  }
}
</style>
