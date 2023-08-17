<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useDisplay } from "vuetify";
import router from "@/router";
import { onBeforeUpdate } from "vue";

defineEmits(["toogle-drawer"]);

const { mobile } = useDisplay();
const routeName = router?.currentRoute?.value?.name?.toString() || "";

const isFirstRouteLevel = (): boolean => {
  console.log({routeName})
  return ["home", "folders"].includes(routeName);
};

onBeforeUpdate(()=> {
  console.log('update')
})

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
          v-if="isFirstRouteLevel()"
          alt="Vue logo"
          class="logo"
          src="@/assets/logo.svg"
          width="25"
          height="25"
        />
        <v-btn v-else variant="text" @click="router.back()">
          <template v-slot:prepend>
            <Icon icon="iconamoon:arrow-left-2-light" width="24" color="orange"></Icon>
          </template>
          Indietro
        </v-btn>
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
    padding: 1rem;

    .branding {
      display: flex;
      align-items: center;
      gap: 8px;
      img {
        max-width: 50px;
      }

      .v-btn {
        padding: 0;
        text-transform: capitalize;
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
