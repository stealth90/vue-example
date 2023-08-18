<script setup lang="ts">
import { ref } from "vue";
import BottomNoteActions from "@/components/NoteView/BottomNoteActions.vue";
const props = defineProps<{ open: boolean }>();
const emit = defineEmits(["close-modal", "create-note"]);

const newNote = ref("");
const errorMessage = ref("");
const createdDate = ref(
  new Intl.DateTimeFormat("it-IT", {
    dateStyle: "long",
    timeStyle: "short",
  }).format()
);

const handleCreateNote = () => {
  if (newNote.value) {
    emit("create-note", newNote.value);
  } else {
    errorMessage.value = "Inserisci un nome valido";
  }
};

</script>

<template>
  <v-dialog
    :model-value="props.open"
    persistent
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar>
        <v-btn
          variant="text"
          color="orange"
          class="close-icon"
          @click="emit('close-modal')"
        >
          Annulla
        </v-btn>
        <v-toolbar-title>Nuova nota</v-toolbar-title>
        <v-btn :disabled="!newNote.length" variant="text" color="orange" @click="handleCreateNote"
          >Salva</v-btn
        >
      </v-toolbar>
      <v-toolbar>
        <v-toolbar-title class="note-date">{{ createdDate }}</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-textarea
          row-height="100"
          label=""
          no-resize
          variant="outlined"
          hide-details
          v-model="newNote"
        ></v-textarea>
      </v-card-text>
      <v-card-actions>
        <BottomNoteActions />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.v-toolbar {
  background-color: var(--color-background);
  .v-btn {
    font-size: 14px;
    text-transform: capitalize;
    margin: 0;
  }
  &:nth-of-type(2):deep(.v-toolbar__content) {
    height: 2rem !important;
  }
}
:deep(.v-toolbar__content) {
  justify-content: space-between;
}

.v-card-text {
  display: flex;
  margin-bottom: 1rem;
  .v-input--horizontal {
    display: flex;
  }
}
:deep(.v-input__control) {
  flex: 1;
}

.note-date {
  font-size: 12px;
  color: var(--color-border-hover);
}
.v-toolbar-title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  margin-inline-start: 0;
  font-weight: bold;
}
</style>
