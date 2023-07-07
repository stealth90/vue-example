<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="header">
    <nav class="wrapper">
      <div class="branding">
        <img
          alt="Vue logo"
          class="logo"
          src="@/assets/logo.svg"
          width="25"
          height="25"
        />
        <h1>Vue Todos</h1>
      </div>

      <ul class="nav-routes">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
}
header {
  nav {
    display: flex;
    align-items: center;
    padding: 25px 16px;

    .branding {
      display: flex;
      align-items: center;
      gap: 8px;
      img {
        max-width: 50px;
      }

      h1 {
        font-size: 24px;
      }
    }

    .nav-routes {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      gap: 12px;
      list-style: none;

      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
}
</style>
