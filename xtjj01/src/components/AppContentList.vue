<template>
    <div class="Content">
        <div class="navigate">
          <span class="nav-item  " @click="()=>{tab = 1}" ref="One" :class="tab===1?'active':''">推荐</span>
          <span class="nav-item  "  @click="()=>{tab = 2}" ref="Two" :class="tab===2?'active':''">最新</span>
            <!-- <router-link to=""><span class="nav-item">推荐</span></router-link>
            <router-link ><span class="nav-item">最新</span></router-link> -->
        </div>

        <div class="maina">
          <div class="metaContainer">
              <span class="author">掘金酱</span>
              <span class="dividing" style="float:left;width: 1px;height: 15px;margin: auto 8px ;background: #e5e5e5;"></span>
              <span class="time" style="color: #86909C;">20天前</span>
          </div>
          <div class="info-box">
              <div class="text">
                  <div class="info-one"> 全民参与，邀新入驻得好礼！丨人工智能创作者扶持计划</div>
                  <div class="info-two">
                        人工智能领域的创作者集结令来啦~在掘金写技术文章，快速复制大牛之路！马上入股绝对不亏！
                  </div>
              </div>
              <div class="img">
                  <img src="../assets/image/infoimg/one.webp" alt="" class="img-one">
              </div>
          </div>
        </div>

          <AppListOne  v-for="item in arrayName" :key="index" 
          :data="item.data" 
          :cont="arrayCont[item.id]" 
          :timea="arrayTime[item.id]" 
          :smcont="smarrayCont[item.id]"
          v-show="tab==1" />

          <AppListTwo   v-for="item in arrayName" :key="index" 
          :data="item" 
          :cont="arrayCont" 
          v-show="tab==2"></AppListTwo>
    </div>
</template>

<script setup>
import useListOne from "../store/ListOne";
import { ref } from "vue";
import { storeToRefs } from "pinia";
import AppListOne from "./AppListOne.vue";
import AppListTwo from "./AppListTwo.vue";

const tab = ref(1);

const ListOneStore = useListOne();
// 解构
const { name, time, content, smcontent } = storeToRefs(ListOneStore);
// data
const arrayTime = time.value;
const arrayName = name.value;
const arrayCont = content.value;
const smarrayCont = smcontent.value;
</script>

<style lang="less" scoped>
.active::after {
  content: "";
  width: 50%;
  height: 0.2em;
  /* background-color: var(--c-title-underline-color); */
  background: #1e80ff;
  position: absolute;
  bottom: -1px;
  left: 12px;
}
.Content {
  display: flex;
  flex-direction: column;
  color: #252933;
  background-color: #ffffff;
  height: 100%;
  // padding-right: 20px;
  .navigate {
    padding: 1rem;
    border-bottom: solid 1px #e4e6eb;
    .nav-item {
      padding: 1rem 1rem;
      font-size: 14px;
      cursor: pointer;
      position: relative;
      &:hover {
        color: #007fff;
      }
    }
  }
  .comList {
    padding: 0px 12px;
  }
  .maina {
    //
    padding: 0rem 2rem;
    .metaContainer {
      display: flex;
      margin: 7px 1px;
      font-size: 1rem;
      .author {
        &:hover {
          color: #007fff;
        }
      }
    }
    .info-box {
      display: flex;
      flex-direction: row;
      // padding: 1rem 2rem;
      border-bottom: solid 1px #e4e6eb;
      .text {
        .info-one {
          color: #86909c;
          font-size: 16px;
        }
        .info-two {
          padding-bottom: 1rem;
          padding-top: 1rem;
          color: #b99e9c;
          font-size: 12px;
        }
      }

      .img {
        // clear: both;
        height: 80px;

        .img-one {
          height: 80px;
          width: 120px;
          margin-left: 24px;
        }
      }
    }
  }
}
</style>
