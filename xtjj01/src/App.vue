<template>
  <router-view>
    <!-- 暂时位于home下 -->
    <!-- <AppHome /> -->
    <!-- <AppUser /> -->
    <AppUserinfo />
  </router-view>
</template>

<script setup>
import AppHome from "./page/AppHome.vue";
import AppUser from "./user/AppUser.vue";
import AppUserinfo from "./userinfo/AppUserinfo.vue";
</script>

<style></style>
