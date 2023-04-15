<template>
  <div class="banner-block" :class="close ? 'none' : ''">
    <div class="banner">
      <img src="../assets/image/guanggao1.webp" alt="" />
      <div class="ctrl-box">
        <div class="" @click="closefn()">
          <img src="../assets/image/close.png" alt="" />
        </div>

        <span class="label">
          <span class="icon none">投放</span>
          <span>广告</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
let close = ref(false);
function closefn() {
  close.value = true;
}
</script>

<style lang="less" scoped>
.banner-block {
  box-shadow: none;
  overflow: hidden;
  border-radius: 4px;
  margin-bottom: 1.66rem;
  .banner {
    position: relative;
    font-size: 0;
    cursor: pointer;
    height: 100px;
    img {
      display: block;
      height: 100px;
    }

    .ctrl-box {
      img {
        position: absolute;
        display: none;
        top: 0.3rem;
        right: 0.3rem;
        height: 10px;
      }

      .label {
        position: absolute;
        right: -14px;
        bottom: -3px;
        height: 36px;
        font-size: 20px;
        z-index: 1;
        text-align: center;
        line-height: 36px;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.2);
        border: 1px solid #fff;
        border-radius: 6px;
        padding-left: 15px;
        padding-right: 15px;
        font-weight: 300;
        transform: scale(0.4);
        -webkit-transform: scale(0.4);
        &:hover {
          right: -27px;
          .icon {
            display: inline-block;
            margin-right: 4px;
          }
        }
      }
    }
    &:hover {
      .ctrl-box {
        img {
          display: block;
        }
      }
    }
  }
}

.none {
  display: none;
}
</style>
