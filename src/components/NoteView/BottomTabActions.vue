<script setup lang="ts">
import { Icon } from "@iconify/vue";

defineEmits(["create-folder", "create-note"]);
</script>

<template>
  <div class="bottom-tab-actions">
    <div class="icon-wrapper">
      <Icon
        icon="basil:folder-plus-outline"
        color="orange"
        class="icon create-folder"
        width="26"
        @click="$emit('create-folder')"
      />
    </div>
    <div class="icon-wrapper">
      <Icon
        icon="ion:create-outline"
        color="orange"
        class="icon create-note"
        width="26"
        @click="$emit('create-note')"
      />
    </div>
  </div>
</template>

<style scoped>
.bottom-tab-actions {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
}

.icon-wrapper {
  display: flex;
  border-radius: 50%;
  background-color: #ffa50000;
  transition: background-color 300ms;
  padding: 0.5rem;
  align-items: center;
  height: fit-content;

  &:hover {
    background-color: #ffa500aa;
  }
}
</style>
