<template>
  <main class="main">
    <div class="index-nav">
      <app-menu></app-menu>
    </div>
  </main>
</template>

<script setup>
import AppMenu from "./AppMenu.vue";
</script>

<style lang="less" scoped>
.main {
  background-color: #ccc;
  max-width: 1000px;
  min-height: 800px;
  margin: 0 auto;
  .index-nav {
    position: static;
    top: 80px;
    margin-right: 20px;
  }
}
</style>
