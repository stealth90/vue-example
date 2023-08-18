<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{ open: boolean }>();
const emit = defineEmits(["close-modal", "create-note"]);

const newNoteName = ref("Nuova cartella");
const errorMessage = ref("");

const handleCreateNote = () => {
  if(newNoteName.value){
    emit('create-note',newNoteName.value)
  }else{
    errorMessage.value = "Inserisci un nome valido"
  }
}

const handleErrorMessage = () => {
  if(newNoteName.value){
    errorMessage.value = "";
  }
}

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
        <v-btn variant="text" class="close-icon" @click="emit('close-modal')">
          Annulla
        </v-btn>
        <v-toolbar-title>Nuova cartella</v-toolbar-title>
        <v-btn variant="text" @click="handleCreateNote">Fine</v-btn>
      </v-toolbar>
      <v-card-text>
        <v-text-field
          density="compact"
          single-line
          hide-details
          clearable
          v-model="newNoteName"
          placeholder="Nuova cartella"
          variant="outlined"
          @update:model-value="handleErrorMessage"
          :error-messages="errorMessage"
        ></v-text-field>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.v-toolbar {
  background-color: var(--color-background-mute);

  .v-btn {
    font-size: 12px;
    text-transform: capitalize;
    margin: 0;
  }
}
:deep(.v-toolbar__content) {
  justify-content: space-between;
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
