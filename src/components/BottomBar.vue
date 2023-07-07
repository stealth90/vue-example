<script setup lang="ts">
import routes from "@/router/routes";

const capitalize = (sentence: string) => {
  return sentence
    .split(" ")
    .map((el) => `${el.charAt(0).toUpperCase()}${el.slice(1)}`)
    .join(" ");
};
</script>

<template>
  <v-layout class="overflow-visible" style="height: 56px">
    <v-bottom-navigation color="teal" active grow>
      <v-btn v-for="route in routes" :to="route.path" :key="route.name">
        <v-icon :icon="route.icon" />
        {{ capitalize(route.name) }}
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>
