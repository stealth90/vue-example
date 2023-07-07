<script setup lang="ts">
import { RouterView } from "vue-router";
import BottomBar from "@/components/BottomBar.vue";
import HeaderApp from "@/components/HeaderApp.vue";
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
