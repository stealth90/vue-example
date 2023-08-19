<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="mx-auto d-flex flex-column justify-center align-center">
    <slot name="icon">
      <Icon
        icon="emojione-monotone:see-no-evil-monkey"
        class="icon"
        color="orange"
        width="82"
      />
    </slot>
    <slot name="content">
      <p class="text-h5 py-2">Ops... Nessun dato </p>
    </slot>
  </div>
</template>


<style scoped>
.icon{

}
</style>
