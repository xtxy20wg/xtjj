<template>
  <div class="hotlist">
    <div class="top">
      <div class="left">
        <img src="../../assets/image/zonghewenzhangbang.png" alt="" />
        <span>综合文章榜</span>
      </div>
      <router-link to=""><span>更多></span></router-link>
    </div>
    <ul>
      <div class="content">
        <li>
          <div class="index">1</div>
          <router-link to="" class="hidden">
            <span>睡后收入(无人直播)</span>
          </router-link>
        </li>
        <li>
          <div class="index">2</div>
          <router-link to="" class="hidden">
            <span>预测2024年之后的前端开发模式</span>
          </router-link>
        </li>
        <li>
          <div class="index">3</div>
          <router-link to="" class="hidden">
            <span>Xcode 中 Swift Package Manager 速度慢</span>
          </router-link>
        </li>
      </div>
    </ul>
  </div>
  <div class="hotlist">
    <div class="top">
      <div class="left">
        <img src="../../assets/image/jingxuanzhuanlanbang.png" alt="" />
        <span>精选专栏榜</span>
      </div>
      <router-link to=""><span>更多></span></router-link>
    </div>
    <ul>
      <div class="content">
        <li>
          <div class="dot1 size"></div>
          <router-link to="" class="hidden">
            <span>从零到无穷大 —— 移动开发工程师的升级打怪之路</span>
          </router-link>
        </li>
        <li>
          <div class="dot2 size"></div>
          <router-link to="" class="hidden">
            <span>让我们一起Golang</span>
          </router-link>
        </li>
        <li>
          <div class="dot3 size"></div>
          <router-link to="" class="hidden">
            <span>《SpringBoot零基础入门》</span>
          </router-link>
        </li>
      </div>
    </ul>
  </div>
  <div class="hotlist">
    <div class="top">
      <div class="left">
        <img src="../../assets/image/tuijianshoucangji.png" alt="" />
        <span>推荐收藏集</span>
      </div>
      <router-link to=""><span>更多></span></router-link>
    </div>
    <ul>
      <div class="content">
        <li>
          <div class="dot1 size"></div>
          <router-link to="" class="hidden">
            <span>超级经典的，每日必看的</span>
          </router-link>
        </li>
        <li>
          <div class="dot2 size"></div>
          <router-link to="" class="hidden">
            <span>Flutter专题</span>
          </router-link>
        </li>
        <li>
          <div class="dot3 size"></div>
          <router-link to="" class="hidden">
            <span>数据可视化</span>
          </router-link>
        </li>
      </div>
    </ul>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.hotlist {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  margin: 0 auto;
  padding: 1rem 0.7rem;
  background-color: #fff;
  border-right: 1px solid rgba(228, 230, 235, 0.5);
  color: #252933;
  .top {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    align-items: center;
    span {
      cursor: pointer;
      color: #8a919f;
    }
    .left {
      display: flex;
      align-items: center;
      flex-direction: row;
      font-size: 1.1rem;
      line-height: 1.2rem;

      span {
        cursor: auto;
        color: #252933 !important;
      }
      img {
        width: 1.4rem;
        margin-right: 0.66rem;
      }
    }
  }
  ul {
    min-height: 5rem;
    .content {
      li {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 0.4rem;
        line-height: 1.4rem;

        .index {
          background: linear-gradient(
            180deg,
            #f64242 20%,
            rgba(246, 66, 66, 0.4) 80%
          );
          -webkit-background-clip: text;
          color: transparent;
          min-width: 0.8rem;
          justify-content: center;
          align-items: center;
          margin-left: 0.4rem;
          margin-right: 0.4rem;
          font-weight: 800;
        }
        &:nth-child(2) {
          .index {
            background: linear-gradient(
              180deg,
              #ff7426 20%,
              rgba(255, 116, 38, 0.4) 80%
            );
            -webkit-background-clip: text;
            color: transparent;
          }
        }
        &:nth-child(3) {
          .index {
            background: linear-gradient(
              180deg,
              #ffac0c 20%,
              rgba(255, 172, 12, 0.4) 80%
            );
            -webkit-background-clip: text;
            color: transparent;
          }
        }
        .dot1 {
          background-color: #f64242 !important;
          flex-shrink: 0;
        }
        .dot2 {
          background-color: #ff7426 !important;
        }
        .dot3 {
          background-color: rgba(255, 172, 12, 0.4) !important;
        }
      }
    }
  }
}

.hidden {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  color: #252933;
  :hover {
    color: #1e80ff;
  }
}

.size {
  width: 3px;
  height: 3px;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
}
</style>
