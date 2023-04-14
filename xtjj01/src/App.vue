<template>
  <router-view>
    <!-- 暂时位于home下 -->
    <!-- <AppHome/> -->
    <AppUser />
  </router-view>
</template>

<script setup>
import AppHome from "./page/AppHome.vue";
import AppUser from "./user/AppUser.vue";
</script>

<style></style>
