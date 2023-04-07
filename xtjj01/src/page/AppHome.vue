<template>
  <router-view>
    <app-layout></app-layout>
    <app-content></app-content>
  </router-view>

</template>

<script setup>

import AppLayout from "../components/AppLayout.vue";
import AppContent from "../components/AppContent.vue";
</script>

<style></style>
