<template>
  <div class="download-block">
    <div class="download">
      <div class="downloadcontent">
        <img src="../../assets/image/erweima.png" alt="" />
        <div class="box">
          <div class="headline">下载稀土掘金APP</div>
          <div class="footline">一个帮助开发者成长的社区</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.download-block {
  box-shadow: none;
  border-radius: 4px;
  margin-bottom: 1.66rem;
  background-color: #fff;
  cursor: pointer;
  .download {
    .downloadcontent {
      display: flex;
      align-items: center;
      padding: 1.26rem;
      img {
        margin-right: 16px;
        width: 3.5rem;
      }
      .box {
        .headline {
          font-size: 13px;
          color: #252933;
          margin-bottom: 0.33rem;
        }

        .footline {
          font-size: 10px;
        }
      }
    }
  }
}
</style>
