<template>
  <app-layout></app-layout>
  <div class="main">
    <div class="userview">
      <div class="left">
        <app-userinfo></app-userinfo>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script setup>
import AppLayout from "../components/AppLayout.vue";
import AppUserinfo from "../components/AppUserinfo.vue";
</script>

<style lang="less" scoped>
.main {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 960px;

  .userview {
    display: flex;
    margin-bottom: 6rem;
    margin-top: 5.5rem;

    .left {
      flex: 1 1 auto;
      min-width: 0;
    }

    .right {
      flex: 0 0 auto;
      margin-left: 1rem;
      width: 20rem;
      line-height: 1.2;
    }
  }
}
</style>
