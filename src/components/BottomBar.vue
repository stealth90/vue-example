<script setup lang="ts">
import routes from "@/router/routes";
import { capitalize } from "@/utils";
import { Icon } from "@iconify/vue";
</script>

<template>
  <v-layout class="overflow-visible bottom-bar">
    <v-bottom-navigation color="teal" active grow>
      <v-btn v-for="route in routes" :to="route.path" :key="route.name">
        <Icon :icon="route.icon" width="24" />
        {{ capitalize(route.name) }}
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>

<style lang="scss" scoped>
.bottom-bar{
  height: 3.5rem;
  flex: unset;
}
</style>
