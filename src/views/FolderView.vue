<script setup lang="ts">
import BottomTabActions from "@/components/NoteView/BottomTabActions.vue";
import CreateFolder from "@/components/NoteView/CreateFolder.vue";
import FolderItem from "@/components/NoteView/FolderItem.vue";
import type { Folder } from "@/types";
import { readFromLocalStorage, saveToLocalStorage } from "@/utils";
import { uid } from "uid";
import { ref } from "vue";
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();

const folders = ref<Folder[]>([]);
const open = ref(false);

const fetchNotesList = () => {
  folders.value = readFromLocalStorage<Folder[]>("folders") || [];
};

fetchNotesList();

const setNotesToLocalStorage = () => {
  saveToLocalStorage("folders", folders?.value);
};

const handleCreateFolder = (folderName: string) => {
  handleCloseModal();
  folders?.value?.push({ id: uid(), name: folderName, notes: [] });
  setNotesToLocalStorage();
};

const handleCloseModal = () => {
  open.value = false;
};

const handleOpenModal = () => {
  open.value = true;
};
</script>

<template>
  <main class="note-view" :class="{ mobile: mobile }">
    <h1>Cartelle</h1>
    <v-text-field
      variant="solo"
      density="compact"
      single-line
      hide-details
      clearable
      label="Cerca"
      prepend-inner-icon="mdi-magnify"
    ></v-text-field>
    <div class="folders-folder-list">
      <FolderItem
        v-for="(folder, index) in folders"
        :key="folder.id"
        :folder="folder"
        :lastItem="index === folders.length - 1"
        :index="index"
      />
    </div>
    <CreateFolder
      :open="open"
      @create-folder="handleCreateFolder"
      @close-modal="handleCloseModal"
    />
  </main>
  <BottomTabActions @create-folder="handleOpenModal" />
</template>

<style scoped>
h1 {
  position: sticky;
  top: 0;
  background-color: inherit;
}
.folders-folder-list {
  background-color: var(--color-background);
  border-radius: 1rem;
  padding: 0.5rem 0 0.5rem 1rem;
}
.note-view {
  background-color: var(--color-background-soft);
  height: 100%;
  position: relative;
  padding: 0 2rem;
  overflow-y: auto;
  &.mobile {
    margin-bottom: 5.125rem;
  }
}
:deep(.v-field.v-field--appended) {
  background-color: var(--color-background-mute);
}
.v-text-field {
  margin-bottom: 1rem;
}
</style>
