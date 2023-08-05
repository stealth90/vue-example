<script setup lang="ts">
import { Icon } from "@iconify/vue";

defineEmits(["create-folder", "create-note"]);
</script>

<template>
  <div class="bottom-tab-actions">
    <Icon
      icon="basil:folder-plus-outline"
      color="orange"
      class="icon create-folder"
      width="26"
      @click="$emit('create-folder')"
    />
    <Icon
      icon="ion:create-outline"
      color="orange"
      class="icon create-note"
      width="26"
      @click="$emit('create-note')"
    />
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
  padding: 1.5rem 2rem;
}


</style>
