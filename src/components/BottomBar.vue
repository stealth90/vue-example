<script setup lang="ts">
import { bottomRoutes } from "@/router/routes";
import { capitalize } from "@/utils";
import { Icon } from "@iconify/vue";
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();

</script>

<template>
  <v-layout v-if="mobile" class="overflow-visible bottom-bar">
    <v-bottom-navigation color="teal" active grow>
      <v-btn v-for="route in bottomRoutes" :to="route.path" :key="route.name">
        <Icon :icon="route.icon" width="24" />
        {{ capitalize(route.name) }}
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>

<style lang="scss" scoped>
.bottom-bar {
  height: 3.5rem;
  flex: unset;
}
</style>
