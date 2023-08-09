<script setup lang="ts">
import type { UserTheme } from '@/App.vue';
import { onUpdated } from 'vue';
import { ref } from 'vue';

const props = defineProps<{ drawer: boolean }>();
defineEmits(["close-drawer"]);
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

onUpdated(() => {
  if (themeValue.value) {
    setTheme(themeValue.value);
  }
});
</script>
<template>
  <v-card class="app-drawer">
    <v-layout>
      <v-navigation-drawer :model-value="props.drawer" temporary>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
          title="John Leider"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-view-dashboard"
            title="Home"
            value="home"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-forum"
            title="About"
            value="about"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-forum"
            title="Close"
            value="close"
            @click.stop="$emit('close-drawer')"
          ></v-list-item>
          <v-switch
            hide-details
            false-value="☀️"
            true-value="🌙"
            :label="themeValue"
            class="theme-switch"
            inset
            v-model="themeValue"
            value="false"
          ></v-switch>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>

<style scoped>
.app-drawer {
  z-index: 9999999;
}
</style>