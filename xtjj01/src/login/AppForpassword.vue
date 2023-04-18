<template>
    <div class="box">
        <div class="img"> <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg" alt=""></div>
        <div class="top">
            <router-link to="Login"><span>返回网站首页</span></router-link>
        </div>

        <div class="content"  v-if="!mask">
            <h1>找回密码</h1>
            <form action="" class="pass" >
                <input type="text"  id="username" name="username" placeholder="请输入您的用户名" />
                <input type="text"  id="user_id" name="user_id" placeholder="请输入您的账号" />
                <input type="email" id="email"  name="email"  placeholder="请输入注册账号的邮箱">
                <input type="text" id="phone" name="phone" placeholder="请输入注册账号的手机号码" />
                <button @click="changeMaskTwo"> 提交</button>
                <span> 提示:提交十分钟后登陆</span>
            </form>
        </div>

        <div v-if="maskspan" class="maskspan">
          <div class="parentBox">
            <div class="contantBox"></div>
          </div>
            系统审核中,请稍后......
        </div>
        <div v-if="error" class="maskspan" >
            对不起,您输入的信息有误！
        </div>
        <div class="maskcont" v-if="maskcont">
           <form action="" class="pass" >
                <input type="text"  id="user_id" name="user_id" placeholder="请输入您的账号" />
                <input type="password"  id="password" name="password" placeholder="请输入您新密码" />
                <!-- 提交后到登陆页面 -->
                <router-link to=""> <button @click="changeMaskOne" class="btn"> 提交</button></router-link> 
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
let mask = ref(false);
let maskcont = ref(false);
let maskspan = ref(false);
let error = ref(false);
function changeMaskOne() {
  maskcont.value = !maskcont.value;
  mask.value = !mask.value;
}
function changeMaskTwo() {
  mask.value = !mask.value;
  maskspan.value = !maskspan.value;
  setTimeout(() => {
    maskspan.value = !maskspan.value;
    // 应该将后端传递过来的值赋值给error，判断是否比对成功
    error.value = false;
    // 如果error的值是true，则提示信息错误
    if (error.value) {
      return;
    } else {
      // 否则提交新的密码
      maskcont.value = !maskcont.value;
    }
  }, 2000);
}
</script>
  
  <style lang="less" scoped>
.box {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  .img {
    background-color: #6daa1f;
  }
  .top {
    display: flex;
    flex-direction: row-reverse;
    background-color: #6daa1f;
    width: 100%;
    height: 40px;

    span {
      font-size: 12px;
      color: white;
      text-decoration: underline;
      position: relative;
      top: 61%;
    }
  }
  .parentBox {
    .contantBox {
      width: 120px;
      height: 22px;
      border-radius: 20px;
      color: #514b82;
      border: 2px solid;
      position: relative;
    }
    .contantBox::before {
      content: "";
      position: absolute;
      margin: 2px;
      inset: 0 100% 0 0;
      border-radius: inherit;
      background: #514b82;
      animation: cartoon 2s infinite;
    }

    @keyframes cartoon {
      100% {
        inset: 0;
      }
    }
  }
  .maskspan {
    position: relative;
    left: 670px;
    margin-top: 200px;
    font-size: 15px;
  }
  .maskcont {
    .pass {
      position: absolute;
      left: 0;
      top: 0px;
      right: 0;
      bottom: 0;
      margin: auto;
      display: flex;
      flex-direction: column;
      width: 400px;
      height: 300px;
      // border: 1px red solid;
      // opacity: 1;
      input {
        margin-bottom: 20px;
        border: 1px black solid;
        height: 40px;
      }
      .btn {
        height: 40px;
        width: 400px;
        background-color: #6daa1f;
      }
    }
  }

  .content {
    position: fixed;
    display: flex;
    margin-top: 80px;
    margin-left: 30%;
    width: 600px;
    height: 100%;
    border-top: 3px solid #6daa1f;
    color: black;
    .pass {
      position: absolute;
      left: 0;
      top: -200px;
      right: 0;
      bottom: 0;
      margin: auto;
      display: flex;
      flex-direction: column;
      width: 300px;
      height: 300px;
      input {
        margin-bottom: 20px;
        border: 1px black solid;
        height: 40px;
      }
      button {
        background-color: #6daa1f;
        height: 40px;
      }
    }
  }
}
</style>
  