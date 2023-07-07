<script setup lang="ts">
import routes from "@/router/routes";
import { capitalize } from "@/utils";
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
