<script setup lang="ts">
import type { Note } from "@/types";
import { Icon } from "@iconify/vue";
defineProps<{ note: Note; index: number; lastItem: boolean }>();
</script>

<template>
  <div class="note-item">
    <Icon
      icon="ion:folder-outline"
      color="orange"
      class="icon create-note"
      width="24"
    />
    <div class="note-wrapper">
      <p class="note-name">{{ note.name }}</p>
      <div class="note-counter-wrapper">
        <p>0</p>
        <Icon
          icon="iconamoon:arrow-right-2-thin"
          class="counter-icon"
          width="22"
        />
      </div>
    </div>
  </div>
  <hr v-if="!lastItem" />
</template>

<style lang="scss" scoped>

.note-name{
  font-weight: 500;
}
.note-item {
  background-color: var(--color-background);
  padding: 0.5rem 0;
  border-radius: 5rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  .note-wrapper {
    padding-left: 1rem;
    flex: 1;
    position: relative;
    display: flex;
    justify-content: space-between;
    .note-counter-wrapper{
      display: flex;
      align-items: center;
      color: gray;
      margin-right: 0.5rem;
    }
  }
}
hr {
  margin-left: 2.4rem;
  border: 1px solid var(--color-border);
}
</style>
