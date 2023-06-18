<script setup lang="ts"></script>

<template>
  <v-layout class="overflow-visible" style="height: 56px">
    <v-bottom-navigation color="teal" grow>
      <v-btn>
        <v-icon icon="mdi-history" />
        Recents
      </v-btn>
      <v-btn>
        <v-icon icon="mdi-heart" />
        Favorites
      </v-btn>
      <v-btn>
        <v-icon icon="mdi-map-marker" />
        Nearby
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>
