<script setup lang="ts">
import BottomTabActions from "@/components/BottomTabActions.vue";
import CreateFolder from "@/components/FolderView/CreateFolder.vue";
import CreateNote from "@/components/NoteView/CreateNote.vue";
import FolderItem from "@/components/FolderView/FolderItem.vue";
import type { Folder } from "@/types";
import { readFromLocalStorage, saveToLocalStorage } from "@/utils";
import { uid } from "uid";
import { computed, ref } from "vue";
import { useDisplay } from "vuetify";
import NoItemsPlaceholder from "@/components/NoItemsPlaceholder.vue";

const { mobile } = useDisplay();

const folders = ref<Folder[]>([]);
const openCreateFolderModal = ref(false);
const openCreateNoteModal = ref(false);
const searchValue = ref<string>();

const fetchNotesList = () => {
  folders.value = readFromLocalStorage<Folder[]>("folders") || [];
};

fetchNotesList();


const notesFiltered = computed(() => {
  return folders.value.filter((folder) =>
    folder.name.includes(searchValue.value || "")
  );
});

const setNotesToLocalStorage = () => {
  saveToLocalStorage("folders", folders?.value);
};

const handleCreateFolder = (folderName: string) => {
  handleCloseCreateFolderModal();
  folders?.value?.push({ id: uid(), name: folderName, notes: [] });
  setNotesToLocalStorage();
};

const handleCreateNote = (folderName: string) => {
  handleCloseCreateFolderModal();
  folders?.value?.push({ id: uid(), name: folderName, notes: [] });
  setNotesToLocalStorage();
};

const handleCloseCreateFolderModal = () => {
  openCreateFolderModal.value = false;
};

const handleCloseCreateNoteModal = () => {
  openCreateFolderModal.value = false;
};

const handleOpenCreateFolderModal = () => {
  openCreateFolderModal.value = true;
};

const handleOpenCreateNoteModal = () => {
  openCreateNoteModal.value = true;
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
      v-model="searchValue"
    ></v-text-field>
    <div class="folders-folder-list">
      <FolderItem
        v-for="(folder, index) in notesFiltered"
        v-if="notesFiltered.length"
        :key="folder.id"
        :folder="folder"
        :lastItem="index === notesFiltered.length - 1"
        :index="index"
      />
      <NoItemsPlaceholder v-else />
    </div>
    <CreateFolder
      :open="openCreateFolderModal"
      @create-folder="handleCreateFolder"
      @close-modal="handleCloseCreateFolderModal"
    />
    <CreateNote
      :open="openCreateNoteModal"
      @create-note="handleCreateNote"
      @close-modal="handleCloseCreateNoteModal"
    />
  </main>
  <BottomTabActions @create-folder="handleOpenCreateFolderModal" @create-note="handleOpenCreateNoteModal" />
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
