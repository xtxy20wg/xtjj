<template>
  <main class="main">
    <div class="index-nav" :class="height ? 'index-nav-height' : ''">
      <app-menu></app-menu>
    </div>
    <div class="timeline">
      <div class="timeline-list">
        <div class="hot">
          <app-hotlist></app-hotlist>
        </div>
      </div>
    </div>
    <aside>
      <app-tip></app-tip>
    </aside>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import AppMenu from "./AppMenu.vue";
import AppHotlist from "./AppHotlist.vue";
import AppTip from "./AppTip.vue";
// 给主页的侧nav添加粘性布局切换top的侦听事件
let height = ref(false);
function handleScroll() {
  var top = Math.floor(
    document.body.scrollTop ||
      document.documentElement.scrollTop ||
      window.pageYOffset
  );

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
  display: flex;
  flex-direction: row;
  // background-color: #ccc;
  max-width: 930px;
  min-height: 1800px;
  margin: 0 auto;
  margin-top: 5.5rem;
  font-size: 12px;
  .index-nav {
    position: sticky;
    top: 66px;
    margin-right: 20px;
    height: fit-content;
  }
  .timeline {
    position: relative;
    width: 47rem;
    margin-right: 20px;
    .hot {
      display: flex;
      flex-direction: row;
      padding: 0 0.3rem;
      border-radius: 4px;
      margin-bottom: 1.5rem;
      background-color: #fff;
      :last-child {
        border-right: none;
      }
    }
  }
}

.index-nav-height {
  top: 15px !important;
}
</style>
