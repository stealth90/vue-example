<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="header">
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="25"
      height="25"
    />

    <nav class="wrapper">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
    &:first-of-type {
      border: 0;
    }
    &.router-link-exact-active {
      color: var(--color-text);
      &:hover {
        background-color: transparent;
      }
    }
  }
}
header.header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  align-items: center;
  .wrapper {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
}
a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
