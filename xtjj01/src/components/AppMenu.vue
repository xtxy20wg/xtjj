<template>
  <nav class="nav">
    <div class="list">
      <div class="list-content active">
        <i class="iconfont icon-guanzhu"></i>
        <span>关注</span>
      </div>
    </div>
    <div class="list">
      <div class="list-content">
        <i class="iconfont icon-zhinanzhen"></i>
        <span>综合</span>
      </div>
    </div>
    <div class="list">
      <div class="list-content">
        <i class="iconfont icon-houduan"></i>
        <span>后端</span>
      </div>
    </div>
    <div class="list">
      <div class="list-content">
        <i class="iconfont icon-qianduan"></i>
        <span>前端</span>
      </div>
    </div>
    <div class="list">
      <div class="list-content">
        <i class="iconfont icon-android"></i>
        <span>Android</span>
      </div>
    </div>
    <div class="list">
      <div class="list-content">
        <i class="iconfont icon-ios"></i>
        <span>iOS</span>
      </div>
    </div>
    <div class="list">
      <div class="list-content">
        <i class="iconfont icon-rengongzhineng"></i>
        <span>人工智能</span>
      </div>
    </div>
    <div class="list">
      <div class="list-content">
        <i class="iconfont icon-gongju"></i>
        <span>开发工具</span>
      </div>
    </div>
    <div class="list">
      <div class="list-content">
        <i class="iconfont icon-daimarensheng"></i>
        <span>代码人生</span>
      </div>
    </div>
    <div class="list">
      <div class="list-content">
        <i class="iconfont icon-yuedu"></i>
        <span>阅读</span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.iconfont {
  margin-right: 12px;
}
.nav {
  max-width: 140px;
  box-sizing: border-box;
  padding: 6px;
  background-color: #fff;
  font-size: 13px;
  //   color: #515767;
  cursor: pointer;
  border-radius: 4px;
  // margin-top: 100px;
  .list {
    display: flex;
    flex-direction: column;
    .list-content {
      display: flex;
      line-height: 16px;
      padding: 10px 17px;
      border-radius: 4px;
      flex-direction: row;
      align-items: center;
      vertical-align: middle;
      &:hover {
        color: #1e80ff !important;
        background-color: #f7f8fa;
      }
    }
  }
}

.active {
  background-color: #eaf2ff;
  color: #1e80ff;
}
</style>
