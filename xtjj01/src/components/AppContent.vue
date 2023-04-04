<template>
  <main class="main">
    <div class="index-nav">
      <app-menu></app-menu>
    </div>
    <div class="timeline">
      <div class="timeline-list">
        <div class="hot">
          <app-hotlist></app-hotlist>
        </div>
      </div>
      <div class="ContentList">
        <AppContentList/>
      </div>
    </div>
  </main>
</template>

<script setup>
import AppMenu from "./AppMenu.vue";
import AppHotlist from "./AppHotlist.vue";
import AppContentList from "./AppContentList.vue";
</script>

<style lang="less" scoped>
.main {
  position: relative;
  display: flex;
  flex-direction: row;
  background-color: #ccc;
  max-width: 930px;
  min-height: 800px;
  margin: 0 auto;
  margin-top: 5.5rem;
  // z-index: -1;
  .index-nav {
    position: static;
    top: 80px;
    margin-right: 20px;
  }
  .timeline {
    position: relative;
    width: 47rem;
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
</style>
