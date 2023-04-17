<template>
<<<<<<< HEAD
    <router-view>
        <!-- <AppForpassword></AppForpassword> -->
    </router-view>
=======
  <router-view>
    <!-- 暂时位于home下 -->
    <!-- <AppHome /> -->
    <!-- <AppUser /> -->
    <AppUserinfo />
  </router-view>
>>>>>>> ccf5d997b6d802a5922dce59e1859f7111f25aa8
</template>

<script setup>
import AppForpassword from "./login/AppForpassword.vue";
import AppLogin from "./login/AppLogin.vue";
import AppHome from "./page/AppHome.vue";
import AppUser from "./user/AppUser.vue";
import AppUserinfo from "./userinfo/AppUserinfo.vue";
</script>

<style></style>
