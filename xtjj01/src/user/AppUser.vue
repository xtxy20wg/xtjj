<template>
  <app-layout></app-layout>
  <div class="main">
    <div class="userview">
      <div class="left">
        <app-userinfo></app-userinfo>
      </div>
      <div class="right">
        <div class="stiky" :class="{ 'top': height === true }">
          <app-achievement></app-achievement>
        </div>
      </div>
    </div>
  </div>
  <app-bubble></app-bubble>
</template>

<script setup>
import { ref, onMounted } from "vue";
import AppLayout from "../components/AppLayout.vue";
import AppUserinfo from "../components/AppUserinfo.vue";
import AppAchievement from "../components/AppAchievement.vue";
import AppBubble from "../components/AppBubble.vue";
let height = ref(false);
function handleScroll() {
  var top = Math.floor(
    document.body.scrollTop ||
      document.documentElement.scrollTop ||
      window.pageYOffset
  );
  console.log(top);
  if (top > 366) {
    height.value = true;
  } else {
    height.value = false;
  }
}
onMounted(() => {
  window.addEventListener("scroll", handleScroll, true);
});
</script>

<style lang="less" scoped>
.main {
  position: relative;
  margin: 0 auto;
  width: 56%;
  max-width: 960px;
  height: 2000px;

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
      width: 18rem;
      line-height: 1.2;
      height: auto;
      .stiky {
        position: fixed;
        top: 5.5rem;
        width: 20rem;
        transition: all 0.2s;
      }
    }
  }
}

.top {
  top: 2rem !important;
}
</style>
