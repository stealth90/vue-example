<script setup lang="ts">
import BottomTabActions from "@/components/NoteView/BottomTabActions.vue";
import type { Note } from "@/types";
import { ref } from "vue";

const notes = ref<Note[]>([]);
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
    <BottomTabActions />
  </main>
</template>

<style scoped>
.note-view {
  height: 100%;
  position: relative;
  padding: 2rem;
}
</style>
