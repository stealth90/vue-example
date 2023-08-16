<script setup lang="ts">

const props = defineProps<{ open: boolean }>();
const emit = defineEmits(["close-modal", "create-folder"])
</script>

<template>
  <v-dialog :model-value="props.open" width="auto">
    <v-card>
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="emit('close-modal')"
          >Close Dialog</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped></style>
