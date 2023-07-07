<template>
  <v-layout class="overflow-visible" style="height: 56px">
    <v-bottom-navigation color="teal" active grow>
      <v-btn to="/">
        <v-icon icon="mdi-history" />
        Home
      </v-btn>
      <v-btn to="/about">
        <v-icon icon="mdi-heart" />
        About
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>
