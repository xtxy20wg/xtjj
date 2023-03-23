<template>
  <div class="outnav">
    <div class="left">
      <ul>
        <li>
          <route-link><span>首页</span></route-link>
        </li>
        <li>
          <route-link><span>沸点</span></route-link>
        </li>
        <li>
          <route-link><span>课程</span></route-link>
          <div class="hongkuang">offer快来</div>
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
        <li>
          <route-link
            ><img
              src="../assets/image/guanggao.awebp"
              alt="稀土掘金广告"
              class="guanggao"
          /></route-link>
        </li>
      </ul>
    </div>
    <!-- <div class="right">
      <ul>
        <li><input type="text" placeholder="探索稀土掘金" /><i></i></li>
        <li>
          <input type="button" value="创作者中心" />
          <div class="xjt"><i></i></div>
        </li>
        <li><i></i><span>会员</span></li>
        <li><i></i></li>
        <li><img src="../assets/image/touxiang.awebp" alt="" class="tx" /></li>
      </ul>
    </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.outnav {
  width: 100%;
  height: 5rem;
  color: #515767;
  a {
    display: inline-block;
  }
  .left {
    display: inline-block;
  }
  .right {
    display: inline-block;
  }
}
.tx {
  border-radius: 50%;
}
ul,
li {
  padding: 0;
  margin: 0;
  display: inline-block;
  list-style: none;
}
.hongkuang {
  position: absolute;
}
.guanggao {
  max-width: 115px;
}
</style>
