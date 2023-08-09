<script setup lang="ts">
import { RouterView } from "vue-router";
import BottomBar from "@/components/BottomBar.vue";
import HeaderApp from "@/components/HeaderApp.vue";
import { onMounted, ref } from "vue";
import AppDrawer from "./components/AppDrawer.vue";

export type UserTheme = "light" | "dark";

const drawer = ref(false);

const getMediaPreference = (): UserTheme => {
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

const handleToogleDrawer = () => {
  drawer.value = !drawer.value;
};

onMounted(() => {
  const initUserTheme = getTheme() || getMediaPreference();
  setTheme(initUserTheme);
});

</script>

<template>
  <div class="app">
    <HeaderApp @toogle-drawer="handleToogleDrawer" />
    <AppDrawer @close-drawer="handleToogleDrawer" :drawer="drawer" />
    <div
      class="router-content"
      :class="{
        'drawer-open': drawer,
      }"
    >
      <RouterView />
    </div>
    <BottomBar />
  </div>
</template>

<style lang="scss">
@import "@/assets/base.css";
.app {
  display: flex;
  flex-direction: column;
  height: 100dvh;
}
.router-content {
  flex: 1;
  overflow-y: auto;
  opacity: 1;
  transition: opacity 300ms;
  &.drawer-open{
    opacity: 0.2;
  }
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}
</style>
