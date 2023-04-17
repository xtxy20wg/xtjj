<template>
  <router-view>
    <app-layout></app-layout>
    <app-content></app-content>
    <app-bubble></app-bubble>
  </router-view>
</template>

<script setup>
import AppLayout from "../components/AppLayout.vue";
import AppContent from "../components/AppContent.vue";
import AppBubble from "../components/AppBubble.vue";
</script>

<style></style>
