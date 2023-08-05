<script setup lang="ts">
import { ref, onUpdated } from "vue";
import { RouterLink, useRouter } from "vue-router";
import routes from "@/router/routes";
import { capitalize } from "@/utils";
import type { UserTheme } from "@/App.vue";
const router = useRouter();

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
        <h1>
          {{ capitalize(router?.currentRoute?.value?.name as string) }}
        </h1>
      </div>

      <ul class="nav-routes">
        <RouterLink
          v-for="route in routes"
          :to="route.path"
          :key="route.name"
          >{{ capitalize(route.name) }}</RouterLink
        >
      </ul>
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

    .theme-switch {
      display: flex;
      flex: initial;
      margin-left: 1rem;
    }
  }
}
</style>
