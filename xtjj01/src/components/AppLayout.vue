<template>
  <header class="outnav" :class="visible ? 'visible' : ''">
    <div class="nav">
      <ul class="left">
        <!-- <li> -->
        <router-link to=""
          ><img
            src="../assets/image/logo.svg"
            alt="稀土掘金的logo"
            class="logo"
        /></router-link>
        <!-- </li> -->
        <li>
          <router-link to=""><span class="active">首页</span></router-link>
        </li>
        <li>
          <router-link to=""><span>沸点</span></router-link>
          <div class="hongkuang">offer快来</div>
        </li>
        <li>
          <router-link to=""><span>课程</span></router-link>
        </li>
        <li>
          <router-link to=""><span>直播</span></router-link>
        </li>
        <li>
          <router-link to=""><span>活动</span></router-link>
        </li>
        <li>
          <router-link to=""><span>竞赛</span></router-link>
          <div class="hongkuang">码上报名</div>
        </li>
        <li>
          <router-link to=""><span>商城</span></router-link>
        </li>
        <li>
          <router-link to=""><span>APP</span></router-link>
          <div class="hongkuang">邀请有礼</div>
        </li>
        <li>
          <router-link to=""><span>插件</span></router-link>
        </li>
        <!-- <li> -->
        <router-link to=""
          ><img
            src="../assets/image/guanggao.awebp"
            alt="稀土掘金广告"
            class="guanggao"
        /></router-link>
        <!-- </li> -->
      </ul>
      <ul class="right">
        <li>
          <form action="">
            <input type="text" placeholder="探索稀土掘金" class="sousuo" /><i
              class="iconfont icon-sousuo ss"
            ></i>
          </form>
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
        <li>
          <img
            src="../assets/image/touxiang.awebp"
            alt=""
            class="tx"
            @click="dropdownfn"
          />
          <div class="dropdown-menu" :class="dropdown ? '' : 'none'">
            <div class="user">
              <div class="avatar">
                <img src="../assets/image/touxiang.awebp" alt="" />
              </div>
              <div class="detail">
                <span class="top">蔡plus</span>
                <span class="bottom">矿石 <span>1.0w ></span></span>
              </div>
            </div>
            <div class="process">
              <div class="jscore">
                <div class="level">掘友等级<span>JY.4</span></div>
                <div class="js-level">
                  <span>273.5 / 500 ></span>
                </div>
              </div>
              <div class="bar">
                <div class="current-bar"></div>
              </div>
            </div>
            <ul class="action">
              <li>
                <div class="out">
                  <div class="count">0</div>
                  <div class="name">关注</div>
                </div>
              </li>
              <li>
                <div class="out">
                  <div class="count">2</div>
                  <div class="name">赞过</div>
                </div>
              </li>
              <li>
                <div class="out">
                  <div class="count">16</div>
                  <div class="name">收藏</div>
                </div>
              </li>
            </ul>
            <ul class="dropdown-list">
              <li>
                <i class="iconfont icon-zhuye"></i>
                <span>我的主页</span>
              </li>
              <li>
                <i class="iconfont icon-fuli"></i>
                <span>成长福利</span>
              </li>
              <li>
                <i class="iconfont icon-shannianbiji"></i>
                <span>闪念笔记</span>
              </li>
              <li>
                <i class="iconfont icon-huiyuan"></i>
                <span>会员中心</span>
              </li>
              <li>
                <i class="iconfont icon-kecheng"></i>
                <span>课程中心</span>
              </li>
              <li>
                <i class="iconfont icon-youhui"></i>
                <span>我的优惠</span>
              </li>
              <li>
                <i class="iconfont icon-baoming"></i>
                <span>我的报名</span>
              </li>
              <li>
                <i class="iconfont icon-zuji"></i>
                <span>我的足迹</span>
              </li>
            </ul>
            <div class="group">
              <span>我的设置</span>
              <span>退出登录</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";
// 给导航栏的创作者中心旁边的下箭头添加点击事件，点击切换上下箭头
let imgsrc = ref("/static/xiajiantou.svg");
let click = true;
function changeimg() {
  click = !click;
  if (click) {
    imgsrc.value = "/static/xiajiantou.svg";
  } else {
    imgsrc.value = "/static/shangjiantou.svg";
  }
}

// 给导航栏添加向上隐藏事件，当body滚动值大于366px，导航栏向上隐藏。

let visible = ref(true);
function handleScroll() {
  var top = Math.floor(
    document.body.scrollTop ||
      document.documentElement.scrollTop ||
      window.pageYOffset
  );

  if (top > 366) {
    visible.value = false;
  } else {
    visible.value = true;
  }
}

// 添加body滚动值的监听事件
onMounted(() => {
  window.addEventListener("scroll", handleScroll, true);
});

// 给头像添加点击事件，控制dropdown的显示与隐藏
let dropdown = ref(false);
function dropdownfn() {
  dropdown.value = !dropdown.value;
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
  background-color: #fff;
  border-bottom: 1px solid #f1f1f1;
  z-index: 250;
  transition: all 0.2s;
  transform: translate3d(0, -100%, 0);
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
        span {
          color: #515767;
        }
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
        form {
          .sousuo {
            display: inline-block;
            height: 22px;
            width: 200px;
            padding: 2px 0 2px 4px;
            outline: none;
            border: 1px solid #c2c8d1;
            border-radius: 4px;
            font-size: 10px;
            &:hover {
              border: 1px solid #8a919f;
            }
          }
          .ss {
            display: inline-block;
            position: relative;
            text-align: center;
            line-height: 2rem;
            top: 3px;
            left: -36px;
            width: 34px;
            height: 22px;
            background-color: #f2f3f5;
          }
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

.dropdown-menu {
  box-shadow: 0 0 24px rgba(81, 87, 103, 0.16);
  background-color: #fff;
  border: 1px solid #e4e6eb;
  border-radius: 4px;
  position: absolute;
  padding: 15px;
  left: -15rem;
  .user {
    position: relative;
    display: flex;
    margin-bottom: 1rem;
    .avatar {
      position: relative;
      margin-right: 1rem;
      height: 3rem;
      img {
        display: inline-block;
        border-radius: 50%;
        width: 3rem;
      }
    }

    .detail {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 11rem;
      line-height: 18px;
      .bottom {
        font-size: 10px;
      }
      .top {
        font-size: 13px;
        color: #252933;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;

        &:hover {
          color: #515767;
        }
      }
    }
  }

  .process {
    position: relative;
    color: #1e80ff;
    border-radius: 4px;
    background-color: pink;
    padding: 6px 8px 8px;
    background: url(../assets/image/dropdownbj.png) no-repeat;
    background-size: 100% 100%;
    margin-bottom: 1rem;

    .jscore {
      display: flex;
      margin-bottom: 4px;
      justify-content: space-between;
      line-height: 18px;
      font-size: 10px;
      .level {
        span {
          margin-left: 4px;
          font-weight: 600;
        }
      }
    }

    .bar {
      position: relative;
      height: 5px;
      border-radius: 4px;
      background-color: rgba(30, 128, 255, 0.2);
      .current-bar {
        height: 100%;
        width: 60%;
        background-color: #1e80ff;
        border-radius: 4px;
        position: absolute;
        left: 0;
      }
    }
  }

  .action {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid rgba(228, 230, 235, 0.5);
    padding-bottom: 12px;
    margin-bottom: 5px;
    line-height: 18px;

    li {
      .out {
        text-align: center;
        color: #252933;
        .count {
        }

        .name {
          font-size: 10px;
          color: #8a919f;
        }
      }
    }
  }

  .dropdown-list {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(228, 230, 235, 0.5);
    padding-bottom: 8px;
    box-sizing: border-box;

    li {
      .iconfont {
        margin: 0 8px;
        position: relative;
      }
      display: flex;
      align-items: center;
      line-height: 40px;
      color: #252933;
      margin: 0;
      padding: 0 10px 0 0;

      &:hover {
        background-color: #f7f8fa;
        border-radius: 4px;
      }
    }
  }

  .group {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    font-size: 10px;
    line-height: 1.5rem;
    color: #8a919f;

    span {
      &:hover {
        color: #1e80ff;
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
  color: #1e80ff !important;
}
.none {
  display: none !important;
}

.visible {
  transform: translateZ(0);
}
</style>
