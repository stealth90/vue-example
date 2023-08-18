<script setup lang="ts">
import { Icon } from "@iconify/vue";

defineEmits(["create-folder", "create-note"]);
</script>

<template>
  <div class="bottom-note-actions">
    <div class="icon-wrapper">
      <Icon
        icon="ion:trash-outline"
        color="orange"
        class="icon create-folder"
        width="26"
        @click="$emit('create-folder')"
      />
    </div>
    <div class="icon-wrapper">
      <Icon
        icon="ion:share-outline"
        color="orange"
        class="icon create-note"
        width="26"
        @click="$emit('create-note')"
      />
    </div>
  </div>
</template>

<style scoped>
.bottom-note-actions {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: var(--color-background-soft);
}

.icon-wrapper {
  display: flex;
  border-radius: 50%;
  background-color: #ffa50000;
  transition: background-color 300ms;
  padding: 0.5rem;
  align-items: center;
  height: fit-content;
}
</style>
