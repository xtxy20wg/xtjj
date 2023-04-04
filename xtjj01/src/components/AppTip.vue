<template>
  <div class="top">
    <div class="firstline">
      <div class="text">
        <span>下午好!</span>
        <div class="secondline">点亮在社区的每一天</div>
      </div>
      <button>
        <span>去签到</span>
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.top {
  box-shadow: none;
  box-sizing: border-box;
  padding: 20px 16px;
  border-radius: 4px;
  background-color: #fff;
  margin-bottom: 1.66rem;
  .firstline {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 183px;
    .text {
      display: flex;
      flex-direction: column;
      span {
        font-size: 14px;
        color: #1d2129;
        font-weight: 500;
        line-height: 17px;
      }
      .secondline {
        margin-top: 2px;
        font-size: 10px;
      }
    }
  }
  button {
    border-radius: 4px;
    height: 2.5rem;
    width: 5.4rem;
    font-size: 11px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(30, 128, 255, 0.3);
    background-color: rgba(30, 128, 255, 0.05);
    margin-left: 28px;
    color: #1171ee;
    &:hover {
      background-color: rgba(30, 128, 255, 0.1);
      border-color: rgba(30, 128, 255, 0.45);
    }
  }
}
</style>
