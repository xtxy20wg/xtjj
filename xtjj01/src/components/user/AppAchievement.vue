<template>
  <div class="achievement">
    <div class="title">个人成就</div>
    <div class="body">
      <div class="read">
        <svg
          data-v-27d6eaca=""
          data-v-1e8be6f4=""
          width="25"
          height="25"
          viewBox="0 0 25 25"
          class="icon stat-view-icon"
        >
          <g
            data-v-27d6eaca=""
            data-v-1e8be6f4=""
            fill="none"
            fill-rule="evenodd"
          >
            <circle
              data-v-27d6eaca=""
              data-v-1e8be6f4=""
              cx="12.5"
              cy="12.5"
              r="12.5"
              fill="#E1EFFF"
            ></circle>
            <path
              data-v-27d6eaca=""
              data-v-1e8be6f4=""
              fill="#7BB9FF"
              d="M4 12.5S6.917 7 12.75 7s8.75 5.5 8.75 5.5-2.917 5.5-8.75 5.5S4 12.5 4 12.5zm8.75 2.292c1.208 0 2.188-1.026 2.188-2.292 0-1.266-.98-2.292-2.188-2.292-1.208 0-2.188 1.026-2.188 2.292 0 1.266.98 2.292 2.188 2.292z"
            ></path>
          </g>
        </svg>
        <span>文章被阅读 754</span>
      </div>
      <div class="value">
        <svg
          data-v-27d6eaca=""
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          class="icon stat-jp-icon"
        >
          <g data-v-27d6eaca="" fill="none" fill-rule="evenodd">
            <circle
              data-v-27d6eaca=""
              cx="12.5"
              cy="12.5"
              r="12.5"
              fill="#E1EFFF"
            ></circle>
            <path
              data-v-27d6eaca=""
              fill="#7BB9FF"
              d="M16.694 13.516l-3.719 3.055a1.1 1.1 0 0 1-1.412-.013l-2.77-2.362-3.597 2.437a.693.693 0 0 1-.895-.101.649.649 0 0 1-.008-.876l3.68-4.096a1.1 1.1 0 0 1 1.507-.122l2.653 2.135 2.248-2.4-1.34-1.358a.5.5 0 0 1 .327-.85l5.438-.313a.5.5 0 0 1 .528.533l-.368 5.449a.5.5 0 0 1-.855.317l-1.417-1.435z"
            ></path>
          </g>
        </svg>
        <span>掘力值 187</span>
      </div>
    </div>
  </div>
  <div class="focus">
    <div class="item">
      <div class="item-title border">关注了</div>
      <div class="item-count border">0</div>
    </div>
    <div class="item">
      <div class="item-title">关注者</div>
      <div class="item-count">0</div>
    </div>
  </div>
  <div class="more">
    <div class="more-item">
      <div class="title">收藏集</div>
      <div class="count">2</div>
    </div>
    <div class="more-item">
      <div class="title">关注标签</div>
      <div class="count">14</div>
    </div>
    <div class="more-item">
      <div class="title">加入于</div>
      <div class="count">2022-12-10</div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.achievement {
  margin-bottom: 1rem;
  background-color: #fff;
  border-radius: 2px;
  .title {
    padding: 1.333rem;
    font-size: 1.333rem;
    font-weight: 400;
    color: #31445b;
    border-bottom: 1px solid rgba(230, 230, 231, 0.5);
  }
  .body {
    padding: 1.333rem;
    .read {
      display: flex;
      align-items: center;
      font-size: 1rem;
      color: #000;
      margin-bottom: 0.8rem;
      line-height: 1.2;

      svg {
        flex: 0 0 auto;
        margin-right: 1.2rem;
      }
    }
    .value {
      display: flex;
      align-items: center;
      color: #000;
      svg {
        flex: 0 0 auto;
        margin-right: 1.2rem;
      }
    }
  }
}

.focus {
  display: flex;
  position: relative;
  margin-bottom: 1rem;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  .item {
    flex: 1 1 auto;
    padding: 1rem 0;
    text-align: center;
    color: #31445b;
    .item-title {
      font-size: 1.1rem;
      font-weight: 500;
    }
    .item-count {
      margin-top: 0.5rem;
      font-size: 1.33rem;
      font-weight: 500;
    }
  }
}

.item::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1px;
  height: 50%;
  background-color: #f3f3f4;
  transform: translate(-50%, -50%);
}

.more {
  .more-item {
    display: flex;
    padding: 1.25rem 0.417rem;
    font-size: 1rem;
    color: #000;
    border-top: 1px solid rgba(230, 230, 231, 0.5);
    cursor: pointer;
    .title {
      margin-right: auto;
    }
    .count {
    }
  }
}
</style>
