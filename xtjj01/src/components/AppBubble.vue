<template>
  <div class="suspend">
    <button class="top" :class="{ 'flex': height === true }" @click="backtop()">
      <i class="iconfont icon-backtop"></i>
    </button>
    <button class="bubble">
      <i class="iconfont icon-quanzi"></i>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
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

// 回到顶部方法
function backtop() {
  document.documentElement.scrollTop = 0;
}
</script>

<style lang="less" scoped>
.suspend {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 1000;
  .top {
    margin: 1rem 0 0;
    padding: 0;
    width: 3.33rem;
    height: 3.33rem;
    line-height: 1;
    color: #909090;
    background-color: #fff;
    border: 1px solid #f1f1f1;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(50, 50, 50, 0.04);
    display: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .bubble {
    margin: 1rem 0 0;
    padding: 0;
    width: 3.33rem;
    height: 3.33rem;
    line-height: 1;
    color: #909090;
    background-color: #fff;
    border: 1px solid #f1f1f1;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(50, 50, 50, 0.04);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    i {
      color: #1e80ff;
      font-size: 22px !important;
    }
  }
}

.flex {
  display: flex !important;
}
</style>
