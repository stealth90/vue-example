<script setup lang="ts">
import type { Note } from "@/types";
defineProps<{ note: Note; lastItem: boolean }>();
defineEmits(["open-edit-mode"]);

</script>

<template>
  <div class="note-item" @click="$emit('open-edit-mode')">
    <p class="note-title">{{ note.content }}</p>
    <div class="note-details">
      <p>{{ note.createdAt }}</p>
    </div>
  </div>
  <hr v-if="!lastItem" />
</template>

<style lang="scss" scoped>
.note-item {
  background-color: var(--color-background);
  padding: 0.5rem 0;
  border-radius: 5rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding-left: 1rem;

  .note-title {
    font-weight: 600;
    font-size: 1rem;
  }

  .note-details {
    flex: 1;
    position: relative;
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    color: var(--color-border-hover);
  }
}
hr {
  margin-left: 2.4rem;
  border: 1px solid var(--color-border);
}
</style>
