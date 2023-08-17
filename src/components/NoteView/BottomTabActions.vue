<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();

defineEmits(["create-folder", "create-note"]);
defineProps<{
  countItem?: number;
  onlyNote?: boolean;
}>();
</script>

<template>
  <div class="bottom-tab-actions" :class="{ 'only-notes': onlyNote, 'mobile': mobile }">
    <div v-if="!onlyNote" class="icon-wrapper" >
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
    <p class="notes-count" v-if="onlyNote">
      {{ countItem }} {{ countItem === 1 ? "nota" : "note" }}
    </p>
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
  padding: 1rem;
  background-color: var(--color-background-soft);
  &.mobile {
    bottom: 3.5rem;
  }
  &.only-notes{
    justify-content: flex-end;
  }
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

.notes-count {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 12px;
}
</style>
