<template>
  <div>
    <div class="top">
      <span>返回网站首页</span>
    </div>
        <div class="content">
          <h1>找回密码</h1>
          <form action="" method="post" class="pass" >
              <input type="text"  id="username" name="username" placeholder="请输入您的用户名" />
              <input type="text"  id="user_id" name="user_id" placeholder="请输入您的账号" />
              <input type="email" id="email"  name="email"  placeholder="请输入注册账号的邮箱">
              <input type="text" id="phone" name="phone" placeholder="请输入注册账号的手机号码" />
              <button>提交</button>
          </form>
    </div>
    
  </div>
    
  
</template>


<script setup>
</script>

<style lang="less" scoped>
.top {
  display: flex;
  flex-direction: row-reverse;
  background-color: #6daa1f;
  width: 100%;
  height: 60px;

  span {
    font-size: 12px;
    color: white;
    text-decoration: underline;
    position: relative;
    top: 30%;
  }
}
.content {
  position: fixed;
  display: flex;
  // position: absolute; left: 0; top: 0; right: 0; bottom: 0;
  // margin: auto;
  margin-top: 80px;
  margin-left: 30%;
  // left: 30%;
  width: 600px;
  height: 100%;
  border-top: 1px solid #6daa1f;
  color: black;
  .pass {
    position: absolute;left: 0;top: 0;right: 0;bottom: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 300px;

    input {
      margin-bottom: 20px;
      border: 1px black solid;
      height: 30px;
    }
    button {
      // margin-top: 20px;
    }
  }
}
</style>
