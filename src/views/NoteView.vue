<script setup lang="ts">
import BottomTabActions from "@/components/BottomTabActions.vue";
import NoItemsPlaceholder from "@/components/NoItemsPlaceholder.vue";
import CreateNote from "@/components/NoteView/CreateNote.vue";
import NoteItem from "@/components/NoteView/NoteItem.vue";
import type { Folder, Note } from "@/types";
import { readFromLocalStorage, saveToLocalStorage } from "@/utils";
import { computed } from "vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();
const route = useRoute();

const searchValue = ref<string>();
const notes = ref<Note[]>([]);
const editNote = ref<Note>();
const editNotePos = ref<number>();
const open = ref(false);

const notesFiltered = computed(() => {
  return notes.value.filter((note) =>
    note.content.includes(searchValue.value || "")
  );
});

const fetchNotesList = () => {
  const allFolders = readFromLocalStorage<Folder[]>("folders") || [];
  notes.value =
    allFolders?.find((folder) => folder.name === route.params.folder)?.notes ||
    [];
};

fetchNotesList();

const setNotesToLocalStorage = () => {
  const allFolders = readFromLocalStorage<Folder[]>("folders") || [];
  const newFolders = allFolders.map((folder) => {
    if (folder.name === route.params.folder) {
      return {
        ...folder,
        notes: notes.value,
      };
    }
    return folder;
  });
  saveToLocalStorage("folders", newFolders);
};

const handleCreateNote = (note: Note) => {
  notes?.value?.push(note);
  handleCloseModal();
  setNotesToLocalStorage();
};

const handleEditNote = (noteToEdit: Note) => {
  notes.value[editNotePos.value!] = noteToEdit;
  handleCloseModal();
  setNotesToLocalStorage();
};

const handleCloseModal = () => {
  open.value = false;
  editNote.value = undefined;
  editNotePos.value = undefined;
};

const handleOpenModal = () => {
  open.value = true;
};

const handleOnEditNote = (noteID: number) => {
  editNote.value = notes.value[noteID];
  editNotePos.value = noteID;
  handleOpenModal();
};
</script>

<template>
  <main class="note-view" :class="{ mobile: mobile }">
    <h1>Note</h1>
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
    <div class="notes-folder-list">
      <NoteItem
        v-for="(note, index) in notesFiltered"
        v-if="notesFiltered.length"
        :key="note.id"
        :note="note"
        :lastItem="index === notesFiltered.length - 1"
        @open-edit-mode="() => handleOnEditNote(index)"
      />
      <NoItemsPlaceholder v-else />
    </div>
    <CreateNote
      v-if="open"
      :open="open"
      :noteToEdit="editNote"
      @create-note="handleCreateNote"
      @close-modal="handleCloseModal"
      @edit-note="handleEditNote"
    />
  </main>
  <BottomTabActions
    :countItem="notes.length"
    :onlyNote="true"
    @create-note="handleOpenModal"
  />
</template>

<style scoped>
h1 {
  position: sticky;
  top: 0;
  background-color: inherit;
}
.notes-folder-list {
  background-color: var(--color-background);
  border-radius: 1rem;
  padding: 0.5rem 0 0.5rem 1rem;
}
.note-view {
  background-color: var(--color-background-soft);
  height: 100%;
  position: relative;
  padding: 0 2rem;
  margin-bottom: 0;
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
