<script setup lang="ts">
import routes from "@/router/routes";
import { capitalize } from "@/utils";
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();

const activeRouteIndex = ref(0);

</script>

<template>
  <v-layout v-if="mobile" class="overflow-visible bottom-bar">
    <v-bottom-navigation
      color="teal"
      active
      grow
      v-model="activeRouteIndex"
      @update:model-value="activeRouteIndex = $event.target.value"
    >
      <v-btn v-for="(route, _, i) in routes" :to="route.path" :key="route.name">
        <Icon
          :icon="i === activeRouteIndex ? route.activeIcon : route.icon"
          width="24"
        />
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
