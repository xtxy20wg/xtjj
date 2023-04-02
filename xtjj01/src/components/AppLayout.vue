<template>
  <header class="outnav">
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
            <div class="xjt" @click="changeimg()">
              <img :src="imgsrc" alt="" />
            </div>
          </div>
          <ul class="morelist" :class="{ 'none': click }">
            <li>
              <span><i class="iconfont icon-qianbi"></i>写文章</span>
            </li>
            <li>
              <span><i class="iconfont icon-feidian"></i>发沸点</span>
            </li>
            <li>
              <span><i class="iconfont icon-biji"></i>写笔记</span>
            </li>
            <li>
              <span><i class="iconfont icon-writecode"></i>写代码</span>
            </li>
            <li>
              <span><i class="iconfont icon-caogao"></i>草稿箱</span>
            </li>
          </ul>
        </li>
        <li>
          <div class="vip">
            <div class="vip1">
              <img src="../assets/image/huiyuan.svg" alt="" class="huiyuan" />
            </div>
            <div class="viptext">会员</div>
          </div>
        </li>
        <li class="outmenu">
          <i class="iconfont icon-lingdang"></i>
          <ul class="menu">
            <li><span>评论</span></li>
            <li><span>赞和收藏</span></li>
            <li><span>新增粉丝</span></li>
            <li><span>私信</span></li>
            <li><span>系统通知</span></li>
          </ul>
        </li>
        <li><img src="../assets/image/touxiang.awebp" alt="" class="tx" /></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
let imgsrc = ref("/static/xiajiantou.svg");
let click = true;
function changeimg() {
  click = !click;
  if (click) {
    imgsrc.value = "/static/xiajiantou.svg";
  } else {
    imgsrc.value = "/static/shangjiantou.svg";
  }
  console.log(click, imgsrc);
}
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
  z-index: 250;
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
      li {
        position: relative;
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
          left: -37px;
          width: 34px;
          height: 22px;
          background-color: #f2f3f5;
        }
        .morelist {
          position: absolute;
          top: 2.8rem;
          left: -11px;
          padding: 8px 0;
          display: block;
          background-color: #fff;
          line-height: 2.5rem;
          box-sizing: border-box;
          border-radius: 6px;
          box-shadow: 0 0 2rem rgba(81, 87, 103, 0.16);
          li {
            margin: 0 6px;
            width: 8rem;
            :hover {
              background-color: #f7f8fa;
            }
            span {
              i {
                display: inline-block;
                padding-top: 1px;
                padding-right: 8px;
                text-align: center;
                line-height: 26px;
                // color: #515767 !important;
              }
              display: block;
              text-align: center;
              line-height: 2.5rem;
              padding-left: 2px;
              padding-right: 2rem;
              border-radius: 4px;
            }
          }
        }
        .menu {
          position: absolute;
          top: 46px;
          left: -100px;
          display: none;
          background-color: #fff;
          box-sizing: border-box;
          padding: 8px 0;
          line-height: 2.5rem;
          border-radius: 6px;
          box-shadow: 0 0 2rem rgba(81, 87, 103, 0.16);
          li {
            width: 9rem;
            :hover {
              background-color: #f7f8fa;
            }
            span {
              display: block;
              padding-left: 5px;
              border-radius: 4px;
            }
          }
        }
      }
      .outmenu {
        &:hover {
          .menu {
            display: block;
          }
        }
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
.none {
  display: none !important;
}
</style>
