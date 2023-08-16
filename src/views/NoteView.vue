<script setup lang="ts">
import BottomTabActions from "@/components/NoteView/BottomTabActions.vue";
import CreateFolder from "@/components/NoteView/CreateFolder.vue";
import type { Note } from "@/types";
import { ref } from "vue";

const notes = ref<Note[]>([]);
const open = ref(false);
const handleCreateFolder = () => {};
const handleCloseModal = () => {open.value = false};
const handleOpenModal = () => {open.value = true};
</script>

<template>
  <main class="note-view">
    <h1>Cartelle</h1>
    <NoteItem
      v-for="(note, index) in notes"
      :key="note.id"
      :note="note"
      :index="index"
    />
    <BottomTabActions @create-folder="handleOpenModal" />
    <CreateFolder :open="open" @create-folder="handleCreateFolder" @close-modal="handleCloseModal" />
  </main>
</template>

<style scoped>
.note-view {
  height: 100%;
  position: relative;
  padding: 2rem;
}
</style>
