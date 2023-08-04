<script setup lang="ts">
import { RouterView } from "vue-router";
import BottomBar from "@/components/BottomBar.vue";
import HeaderApp from "@/components/HeaderApp.vue";
import { onMounted } from "vue";

export type UserTheme = 'light' | 'dark';

const getMediaPreference = () : UserTheme  => {
  const hasDarkPreference = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  if (hasDarkPreference) {
    return "dark";
  } else {
    return "light";
  }
};

const getTheme = (): UserTheme | null => {
  return localStorage.getItem("user-theme") as UserTheme;
};

const setTheme = (theme: UserTheme) => {
  localStorage.setItem("user-theme", theme);
  document.documentElement.className = theme;
};

onMounted(() => {
  const initUserTheme = getTheme() || getMediaPreference();
  setTheme(initUserTheme);
});
</script>

<template>
  <HeaderApp />
  <RouterView />
  <BottomBar />
</template>

<style lang="scss">
@import "@/assets/base.css";

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}
</style>
