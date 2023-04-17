<template>
    <div class="content">
        <form action="" method="post" class="pass" >
            <h1>找回密码</h1>
            <input type="text"  id="username" name="username" placeholder="请输入用户名" />
            <input type="text"  id="user_id" name="user_id" placeholder="账号" />
            <input type="email" id="email"  name="email"  placeholder="请输入正确的邮箱格式">
            <input type="text" id="phone" name="phone" placeholder="手机号码" />
            <button>提交</button>
        </form>
    </div>
  
</template>


<script setup>
</script>

<style lang="less" scoped>
.content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 500px;

  .pass {
    display: flex;
    flex-direction: column;
    input {
      margin-top: 20px;
      border: 1px black solid; 
      height: 30px;
    }
    button{
        margin-top: 20px;
    }
  }
}
</style>
