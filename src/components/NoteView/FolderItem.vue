<script setup lang="ts">
import router from "@/router";
import type { Folder } from "@/types";
import { Icon } from "@iconify/vue";
const props = defineProps<{ folder: Folder; index: number; lastItem: boolean }>();

const handleGoToNotes = () => {
  router.push({path: `/folders/${props.folder.name}/notes`})
}

</script>

<template>
  <div class="folder-item" @click="handleGoToNotes">
    <Icon
      icon="ion:folder-outline"
      color="orange"
      class="icon create-folder"
      width="24"
    />
    <div class="folder-wrapper">
      <p class="folder-name">{{ folder.name }}</p>
      <div class="folder-counter-wrapper">
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

.folder-name{
  font-weight: 500;
}
.folder-item {
  background-color: var(--color-background);
  padding: 0.5rem 0;
  border-radius: 5rem;
  display: flex;
  align-items: center;

  .folder-wrapper {
    padding-left: 1rem;
    flex: 1;
    position: relative;
    display: flex;
    justify-content: space-between;
    .folder-counter-wrapper{
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
