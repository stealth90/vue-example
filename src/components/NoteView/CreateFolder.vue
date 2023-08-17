<script setup lang="ts">
const props = defineProps<{ open: boolean }>();
const emit = defineEmits(["close-modal", "create-folder"]);
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
        <v-btn variant="text" @click="emit('create-folder')">Fine</v-btn>
      </v-toolbar>
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
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
.v-toolbar::v-deep .v-toolbar__content {
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
