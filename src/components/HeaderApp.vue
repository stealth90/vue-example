<script setup lang="ts">
import { useRouter } from "vue-router";
import { capitalize } from "@/utils";
import { Icon } from "@iconify/vue";
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();
const router = useRouter();
const routeName = router?.currentRoute?.value?.name as string;

defineEmits(["toogle-drawer"]);
</script>

<template>
  <header class="header">
    <nav class="wrapper">
      <div class="d-flex justify-center align-center">
        <Icon
          v-if="!mobile"
          width="22"
          icon="fa6-solid:bars"
          class="hamburger-icon"
          @click.stop="$emit('toogle-drawer')"
        />
      </div>
      <div class="branding">
        <img
          alt="Vue logo"
          class="logo"
          src="@/assets/logo.svg"
          width="25"
          height="25"
        />
        <h1>
          {{ capitalize(routeName) }}
        </h1>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
}
.hamburger-icon {
  margin-right: 1rem;
  cursor: pointer;
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
