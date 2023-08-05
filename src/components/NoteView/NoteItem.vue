<script setup lang="ts">
import type { Note } from "@/types";
import { Icon } from "@iconify/vue";
const props = defineProps<{ note: Note; index: number }>();
</script>

<template>
  <div>
    <p>note</p>
  </div>
</template>

<style lang="scss" scoped></style>
