<template>
  <div class="userinfo">
    <img src="../../assets/image/touxiang.awebp" alt="" class="tx" />
    <div class="info-box">
      <div class="top">
        <h2><span>用户1</span></h2>
      </div>
      <div class="usericon">
        <span class="rank">
          <img src="../../assets/image/userinfoimg/rank.awebp" alt="" />
        </span>
        <span class="level">
          <img src="../../assets/image/userinfoimg/level.svg" alt="" />
        </span>
        <div class="vip">
          <img src="../../assets/image/userinfoimg/uservipsvg.svg" alt="" />
        </div>
        <img
          src="../../assets/image/userinfoimg/huizhang.awebp"
          alt=""
          class="huizhang"
        />
      </div>
      <div class="interduction">
        <div class="ileft">
          <div class="career">你从事什么职业?</div>
          <div class="knowledge">你有哪些爱好?</div>
        </div>
        <div class="iright">
          <button class="setuserinfo">编辑个人资料</button>
        </div>
      </div>
    </div>
  </div>
  <div class="wall">
    <div class="warp">
      <div class="bleft">
        <img src="../../assets/image/userinfoimg/count.png" alt="" />
        <div class="">获得徽章 1</div>
      </div>
      <ul class="list">
        <li>
          <img src="../../assets/image/userinfoimg/huizhang.awebp" alt="" />
        </li>
        <img src="../../assets/image/userinfoimg/right.svg" alt="" />
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.userinfo {
  display: flex;
  padding: 2.3rem;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  .tx {
    flex: 0 0 auto;
    margin-right: 2.4rem;
    width: 6.5rem;
    height: 6.5rem;
    background-color: #f9f9f9;
    border-radius: 50%;
  }

  .info-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1 1 auto;
    .top {
      margin-bottom: 8px;
      h2 {
        span {
          color: #000;
          font-weight: 600 !important;
        }
      }
    }

    .usericon {
      display: flex;
      align-items: center;
      line-height: 1.2;
      margin-bottom: 8px;

      .rank {
        // display: inline-block;
        display: flex;
        align-items: center;
        margin-left: 0.33rem;
        vertical-align: middle;
        img {
          vertical-align: super;
          width: 30px;
          height: 13px;
        }
      }

      .level {
        margin-left: 0.667rem;
        display: inline-flex;
        img {
          height: 1.15rem;
        }
      }

      .vip {
        width: 16px;
        height: 16px;
        cursor: pointer;
        display: flex;
        position: relative;
        margin-left: 4px;
        margin-top: 3px;
        img {
          width: 14px;
          height: 14px;
        }
      }
      .huizhang {
        width: 20px;
        height: 20px;
        margin-left: 0.267rem;
      }
    }
    .interduction {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .ileft {
        .career {
          color: #4a68ad;
          cursor: pointer;
        }
        .knowledge {
          margin-top: 0.4rem;
          color: #4a68ad;
          cursor: pointer;
          &:before {
            contain: "+";
          }
        }
      }
      .iright {
        display: flex;
        align-items: flex-end;
        .setuserinfo {
          color: #007fff;
          padding: 0;
          height: 2.3rem;
          font-weight: 500;
          border: 1px solid #007fff;
          background-color: #fff;
          border-radius: 4px;
          width: 8rem;
        }
      }
    }
  }
}

.wall {
  display: flex;
  background-color: #fff;
  height: 52px;
  align-items: center;
  font-weight: 400;
  color: #1d2129;
  padding: 0 2.5rem;
  margin-bottom: 1rem;
  .warp {
    display: flex;
    height: 90%;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #e4e6eb;
    .bleft {
      display: flex;
      align-items: center;
      height: 28px;
      img {
        width: 20px;
        height: 20px;
        margin-right: 8px;
      }
    }
    .list {
      display: flex;
      height: 28px;
      align-items: center;
      li {
        height: 100%;
        margin-right: 4px;
        img {
          margin-top: 2px;
          width: 24px;
          height: 24px;
        }
      }
      img {
        margin-left: 14px;
        width: 7px;
        height: 13px;
      }
    }
  }
}

.career:before,
.knowledge:before {
  content: "+ ";
}
</style>
