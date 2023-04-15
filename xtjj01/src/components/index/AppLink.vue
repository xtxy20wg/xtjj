<template>
  <div class="link-block">
    <ul>
      <li>
        <img src="../../assets/image/xtjjmini.png" alt="" />
        <span>稀土掘金漫游指南</span>
      </li>
      <li>
        <img src="../../assets/image/chrome.png" alt="" />
        <span>掘金浏览器插件</span>
      </li>
      <li>
        <img src="../../assets/image/translation.png" alt="" />
        <span>掘金翻译计划</span>
      </li>
      <li>
        <img src="../../assets/image/weibo.png" alt="" />
        <span>官方微博</span>
      </li>
      <li>
        <img src="../../assets/image/wechat.png" alt="" />
        <span>微信公众号</span>
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.link-block {
  box-shadow: none;
  background-color: #fff;
  margin-bottom: 1.66rem;
  ul {
    padding: 1rem 0;
    li {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0.66rem 1.36rem;
      color: #333;
      font-size: 1.05rem;
      img {
        width: 2.5rem;
        padding-right: 0.8rem;
      }
    }
  }
}

ul,
li {
  list-style: none;
}
</style>
