<script setup lang="ts">
import { RouterView } from "vue-router";
import BottomBar from "@/components/BottomBar/BottomBar.vue";
import HeaderApp from "./components/HeaderApp.vue";
</script>

<template>
  <HeaderApp />
  <RouterView />
  <BottomBar />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
}
</style>
