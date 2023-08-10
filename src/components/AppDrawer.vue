<script setup lang="ts">
import type { UserTheme } from "@/App.vue";
import routes from "@/router/routes";
import { onUpdated } from "vue";
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import { capitalize } from "vue";

const props = defineProps<{ drawer: boolean }>();
const emit = defineEmits(["close-drawer"]);
const parseTheme = (theme: string): UserTheme => {
  return theme === `🌙` ? "dark" : "light";
};

const stringifyTheme = (theme: UserTheme): string => {
  return theme === "dark" ? `🌙` : `☀️`;
};

const getTheme = (): string => {
  return stringifyTheme(localStorage.getItem("user-theme") as UserTheme);
};

const setTheme = (theme: string) => {
  const themeParsed = parseTheme(theme);
  localStorage.setItem("user-theme", themeParsed);
  document.documentElement.className = themeParsed;
};

const themeValue = ref(getTheme());

const handleCloseDrawer = () => {
  if (props.drawer) {
    emit("close-drawer");
  }
};

onUpdated(() => {
  if (themeValue.value) {
    setTheme(themeValue.value);
  }
});
</script>
<template>
  <v-card class="app-drawer">
    <v-layout>
      <v-navigation-drawer
        :model-value="props.drawer"
        temporary
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
          title="John Leider"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav class="navigation-list">
          <v-list-item
            v-for="route in routes"
            :to="route.path"
            :key="route.name"
            :title="capitalize(route.name)"
            @click="handleCloseDrawer"
          >
            <template v-slot:prepend>
              <Icon :icon="route.icon" class="route-icon" width="22" />
            </template>
          </v-list-item>
          <v-list-item>
            <v-switch
              hide-details
              false-value="☀️"
              true-value="🌙"
              :label="themeValue"
              inset
              v-model="themeValue"
              value="false"
            ></v-switch>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <div
        class="drawer-overlay"
        :class="{ 'drawer-open': props.drawer }"
        @click.stop="handleCloseDrawer"
      ></div>
    </v-layout>
  </v-card>
</template>

<style scoped>
.app-drawer {
  z-index: 9999999;
}

.navigation-list {
  display: flex;
  flex-direction: column;
  height: calc(100% - 48px);
}

.route-icon {
  margin-right: 1rem;
}

.drawer-overlay {
  transform: translateX(-150%);
  width: 100vw;
  background-color: rgba(0, 0, 0, 0);
  flex: 1;
  transition: background-color 200ms, transform 200ms 0.2s;
  left: 256px;
  z-index: 1004;
  position: fixed;
  height: 100dvh;
  top: 0px;
  bottom: 0px;
  &.drawer-open {
    transform: translateX(0);
    transition: transform 200ms, background-color 100ms ease-out 0.1s;
    background-color: rgba(0, 0, 0, 0.2);
  }
}
</style>
