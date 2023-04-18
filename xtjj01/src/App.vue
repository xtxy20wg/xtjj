<template>
  <router-view>
    <AppForpassword/>
    <!-- 暂时位于home下 -->
    <!-- <AppHome /> -->
    <!-- <AppUserinfo /> -->
  </router-view>

</template>

<script setup>
import AppForpassword from "./login/AppForpassword.vue";
import AppLogin from "./login/AppLogin.vue";
import AppHome from "./page/AppHome.vue";
import AppUser from "./user/AppUser.vue";
import AppUserinfo from "./userinfo/AppUserinfo.vue";
</script>

<style></style>
