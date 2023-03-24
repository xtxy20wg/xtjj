<template>
  <div class="outnav">
    <div class="nav">
      <ul class="left">
        <!-- <li> -->
        <route-link
          ><img
            src="../assets/image/logo.svg"
            alt="稀土掘金的logo"
            class="logo"
        /></route-link>
        <!-- </li> -->
        <li>
          <route-link><span class="active">首页</span></route-link>
        </li>
        <li>
          <route-link><span>沸点</span></route-link>
          <div class="hongkuang">offer快来</div>
        </li>
        <li>
          <route-link><span>课程</span></route-link>
        </li>
        <li>
          <route-link><span>直播</span></route-link>
        </li>
        <li>
          <route-link><span>活动</span></route-link>
        </li>
        <li>
          <route-link><span>竞赛</span></route-link>
          <div class="hongkuang">码上报名</div>
        </li>
        <li>
          <route-link><span>商城</span></route-link>
        </li>
        <li>
          <route-link><span>APP</span></route-link>
          <div class="hongkuang">邀请有礼</div>
        </li>
        <li>
          <route-link><span>插件</span></route-link>
        </li>
        <!-- <li> -->
        <route-link
          ><img
            src="../assets/image/guanggao.awebp"
            alt="稀土掘金广告"
            class="guanggao"
        /></route-link>
        <!-- </li> -->
      </ul>
      <ul class="right">
        <li>
          <input type="text" placeholder="探索稀土掘金" class="sousuo" /><i
            class="iconfont icon-sousuo ss"
          ></i>
        </li>
        <li>
          <div class="more">
            <input type="button" value="创作者中心" class="btn" />
            <div class="xjt">
              <img src="../assets/image/xiajiantou.svg" alt="" />
            </div>
          </div>
        </li>
        <li>
          <div class="vip">
            <div class="vip1">
              <img src="../assets/image/huiyuan.svg" alt="" class="huiyuan" />
            </div>
            <div class="viptext">会员</div>
          </div>
        </li>
        <li><i class="iconfont icon-lingdang"></i></li>
        <li><img src="../assets/image/touxiang.awebp" alt="" class="tx" /></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.outnav {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  height: 4rem;
  color: #515767;
  background-color: #fff;
  border-bottom: 1px solid #f1f1f1;
  a {
    display: inline-block;
  }
  .nav {
    display: flex;
    position: relative;
    align-items: center;
    line-height: 4rem;
    height: 100%;
    max-width: 1440px;
    margin-left: 10rem;
    .left {
      cursor: pointer;
      li {
        position: relative;
        border: 1px solid transparent;
        border-left: none;
        &:hover {
          border-bottom: 1px solid #1e80ff;
          color: #333;
        }
      }
      span {
        display: inline-block;
        text-align: center;
        :first-child {
          color: #1e80ff;
        }
      }
    }
    .right {
      margin-left: 2rem;
      cursor: pointer;
      .sousuo {
        display: inline-block;
        height: 22px;
        width: 200px;
        padding: 2px 0 2px 4px;
        outline: none;
        border: 1px solid #c2c8d1;
        border-radius: 4px;
        font-size: 10px;
      }
      .ss {
        display: inline-block;
        position: relative;
        text-align: center;
        line-height: 2rem;
        top: 2px;
        left: -39px;
        width: 36px;
        height: 22px;
        background-color: #f2f3f5;
      }
      .more {
        display: flex;
        .btn {
          background-color: #1e80ff;
          color: #fff;
          border: 0;
          height: 28px;
          font-size: 1rem;
          padding: 0 1rem;
          border-radius: 3px 0px 0px 3px;
        }
        .xjt {
          display: flex;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          height: 28px;
          width: 1rem;
          border-left: 1px solid hsla(0, 0, 100%, 0.1);
          border-radius: 0 3px 3px 0;
          background-color: #1e80ff;
          img {
            width: 3rem;
          }
        }
      }
      .vip {
        display: flex;
        align-items: center;
        height: 100%;
        position: relative;
        .vip1 {
          position: relative;
          top: 6px;
          left: -3px;
          .huiyuan {
            width: 1.75rem;
          }
        }
      }
    }
  }
}
.tx {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  position: relative;
  top: 8px;
}
ul,
li {
  padding: 0;
  display: inline-block;
  list-style: none;
}
li {
  margin: 0 1rem;
}
.logo {
  margin-right: 1rem;
  margin-left: 2rem;
  width: auto;
  height: 18px;
  vertical-align: middle;
}
.hongkuang {
  position: absolute;
  top: 2px;
  left: -2px;
  background-color: #ee502f;
  padding: 2px 7px;
  white-space: nowrap;
  border-radius: 50px;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  transform: scale(0.4);
  line-height: 18px;
  color: #fff;
}
.guanggao {
  max-width: 100px;
  position: relative;
  top: -2px;
  vertical-align: middle;
}

.iconfont {
  color: #8a919f;
}
.active {
  color: #1e80ff;
}
</style>
