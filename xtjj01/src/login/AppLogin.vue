<template>
    <div class="login">

        <div class="head">
                <div class="shouye_head">
                    <a href="">稀土掘金</a>
                </div>
        </div>
      
        <div class="dowebok " id="dowebok" :class="{rightPanelActive : state.isActive}">
            <!-- 注册 -->
            <div class="form-container sign-up" >
                <form action="" method="post" class="register" >
                    <h1>注册</h1>
                    <input type="text"  id="username" name="username" placeholder="请输入用户名" />
                    <input type="text"  id="user_id" name="user_id" placeholder="账号" />
                    <input type="password" id="pwd" name="password" placeholder="请输入密码" />
                    <input type="password" id="second_pwd" name="second_pwd" placeholder="请再次输入密码" />
                    <input type="email" id="email"  name="email"  placeholder="请输入正确的邮箱格式">
                    <input type="text" id="birth" name="birth" placeholder="出生日期 以YYYY-MM-DD格式" />
                    <input type="text" id="phone" name="phone" placeholder="手机号码" />
                    <input type="text" id="address" name="address" placeholder="收货地址" />
                    <button>注册</button>
                </form>
            </div>
            
            <!-- 登录 -->
            <div class="form-container sign-in">
                <form action="" method="post" class="sign">
                    <h1>登录</h1>
                    <input type="text" name="user_id" placeholder="账号">
                    <input type="password"  name="password" placeholder="密码">
                    <a href="###">忘记密码？</a>
                    <button>登录</button>
                </form>
            </div>
            
            <!-- mask -->
            <div class="overlay-container">
                <div class="overlay">
                    <!-- 登录mask-->
                    <div class="overlay-panel mask-left">
                        <h1>已有帐号？</h1>
                        <p>请使用您的帐号进行登录</p>
                        <button class="ghost" id="signIn" @click="ChangeStyle">登录</button>
                    </div>
                    <!-- 注册mask -->
                    <div class="overlay-panel mask-right">
                        <h1>没有帐号？</h1>
                        <p>点击注册</p>
                        <button class="ghost" id="signUp" @click="ChangeStyle">注册</button>
                    </div>
                </div>
            </div>
        
          </div>
    </div>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  isActive: false
});

function ChangeStyle() {
  state.isActive = !state.isActive;
  // console.log(state.isActive);
}
</script >

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.head {
  position: relative;
  height: 45px;
  background-color: #000000;
}
.shouye_head {
  width: 1000px;
  margin: 0 auto;
  height: 45px;
  line-height: 45px;
}
.shouye_head a {
  color: #ffffff;
  font-size: 22px;
  font-weight: 600;
}
.dowebok {
  margin: 20px auto 0px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 1000px;
  max-width: 100%;
  height: 750px;
}
h1 {
  font-weight: bold;
}
p {
  font-size: 14px;
  line-height: 10px;
  margin: 20px 0 20px;
}
span {
  font-size: 12px;
}
a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}
.form-container form {
  background: #fff;
  display: flex;
  flex-direction: column;
  /* padding:0 50px; */
  height: 100%;
  justify-content: center;
  align-items: center;
  /* text-align:center; */
}
.social-container {
  margin: 20px 0;
}
.social-container a {
  border: 1px solid #ddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}
.social-container a:hover {
  background-color: #eee;
}
.form-container input {
  background: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 300px;
  outline: none;
}
button {
  border-radius: 15px;
  border: 1px solid #20b2aa;
  background: #20b2aa;
  width: 100px;
  height: 40px;
  line-height: 30px;
  color: #fff;
  font-size: 17px;
  font-weight: bold;
  letter-spacing: 4px;
  transition: transform 80ms ease-in;
  cursor: pointer;
}
button:active {
  transform: scale(0.95);
}
button:focus {
  outline: none;
}
button.ghost {
  background: #20b2aa;
  border-color: #fff;
}
.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}
.sign-in {
  left: 0;
  width: 50%;
  z-index: 2;
}
.sign-up {
  left: 0;
  width: 50%;
  z-index: 1;
  opacity: 0;
}
.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}
.overlay {
  background: #b7d61c;
  background: linear-gradient(to right, rgb(158, 203, 23), lightseagreen)
    no-repeat 0 0 / cover;
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateY(0);
  transition: transform 0.6s ease-in-out;
}
.overlay-panel {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  text-align: center;
  transform: translateY(0);
  transition: transform 0.6s ease-in-out;
}
.mask-right {
  right: 0;
  transform: translateY(0);
}
.mask-left {
  transform: translateY(-50%);
}

/* Move signin to right 向右移动登录 */
.dowebok.rightPanelActive .sign-in {
  transform: translateY(100%);
}
/* Move overlay to left 登录蒙版向左移动叠加层 */
.dowebok.rightPanelActive .overlay-container {
  transform: translateX(-100%);
}
/* Bring signup over signin 通过登录进行注册 */
.dowebok.rightPanelActive .sign-up {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
}
/* Move overlay back to right 将叠加层移回右侧 */
.dowebok.rightPanelActive .overlay {
  transform: translateX(50%);
}
/* Bring back the text to center 使文本回到中心 */
.dowebok.rightPanelActive .mask-left {
  transform: translateY(0);
}
/* Same effect for right 右侧效果相同 */
.dowebok.rightPanelActive .mask-right {
  transform: translateY(50%);
}
/* 提示语的颜色设置 */
.error {
  color: #ff0000;
}
</style>
