<template>
    <div class="main">
          <div class="metaContainer">
              <span class="author">{{data}}</span>
              <span class="dividing" style="float:left;width: 1px;height: 15px;margin: auto 8px ;background: #e5e5e5;"></span>
              <span class="time" style="color: #86909C;">{{timea}}</span>
              <span class="dividing" style="float:left;width: 1px;height: 15px;margin: auto 8px ;background: #e5e5e5;"></span>
              <span class="fenlei">前段·后端·Vue</span>
              
          </div>
          <div class="info-box">
              <div class="text">
                  <div class="info-one"> {{ cont }}</div>
                  <div class="info-two">
                  {{smcont}}
                  </div>
                  <div class="iconCon">
                    <div>
                      <svg t="1680509495767" class="icon " viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2415" width="200" height="200"><path d="M512.3 276.9c-228.4 0-374 178.5-393.8 255.9 19.3 78.2 165.5 256 393.8 256s373.8-176.5 393.9-256c-19.7-78.2-165.6-255.9-393.9-255.9z m0 452.9c-182.3 0-303.2-131.1-331.5-196.7C209.6 467.4 331.2 336 512.3 336c181.9 0 303 131.2 331.5 196.9-28.6 65.6-149.8 196.9-331.5 196.9z" fill="#666666" p-id="2416"></path><path d="M512.3 434.4c-54.4 0-98.4 44.1-98.4 98.5s44.1 98.4 98.4 98.4c54.4 0 98.5-44.1 98.5-98.4 0-54.4-44.1-98.5-98.5-98.5z m0 137.9c-21.7 0-39.4-17.7-39.4-39.4s17.6-39.4 39.4-39.4 39.4 17.7 39.4 39.4-17.7 39.4-39.4 39.4z" fill="#666666" p-id="2417"></path></svg>
                      <span class="data">3.9w</span>
                    </div>    
                      
                      <div class="aa">
                        <svg t="1680511289070" class="icon  " viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3700" width="200" height="200"><path d="M887.4 514.6l-88.7 354.9c-2.5 9.9-11.3 16.8-21.5 16.8H380.6V481.1l13.7-38.1 92.6-258.4 1.2-3.5 0.8-3.6c6.3-26.6 30.1-45.4 57.4-45.3h0.1c17.4 0 33.2 7.2 44.6 20.3 11.4 13.1 16.3 29.8 13.8 47l-30.3 211.6-10.8 75.9h302.1c9.4 0 15 5.3 17.5 8.5 4.3 5.4 5.8 12.5 4.1 19.1zM314.1 886.3H158.8c-12.2 0-22.2-9.9-22.2-22.2V509.2c0-12.2 10-22.2 22.2-22.2h155.3v399.3z m551.8-465.8H640.4l30.2-211.6c10.8-75.6-47.9-143.3-124.3-143.3h-0.1c-58.1 0-108.7 39.9-122.1 96.5l-92.6 258.4H158.8c-23.5 0-46.1 9.3-62.7 26-16.6 16.6-26 39.2-26 62.7v354.9c0 23.5 9.3 46.1 26 62.7 16.6 16.6 39.2 26 62.7 26h618.3c40.7 0 76.2-27.7 86.1-67.2l88.7-354.9c14-55.9-28.3-110.2-86-110.2z m0 0" fill="#8493B2" p-id="3701"></path></svg>
                        <span class="data">40w</span>
                      </div>
                      
                       <div class="aa">
                        <svg t="1680511388356" class="icon " viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4692" width="200" height="200"><path d="M853.333333 768c35.413333 0 64-20.650667 64-55.978667V170.581333A63.978667 63.978667 0 0 0 853.333333 106.666667H170.666667C135.253333 106.666667 106.666667 135.253333 106.666667 170.581333v541.44C106.666667 747.285333 135.338667 768 170.666667 768h201.173333l110.016 117.44a42.752 42.752 0 0 0 60.586667 0.042667L651.904 768H853.333333z m-219.029333-42.666667h-6.250667l-115.797333 129.962667c-0.106667 0.106667-116.010667-129.962667-116.010667-129.962667H170.666667c-11.776 0-21.333333-1.621333-21.333334-13.312V170.581333A21.205333 21.205333 0 0 1 170.666667 149.333333h682.666666c11.776 0 21.333333 9.536 21.333334 21.248v541.44c0 11.754667-9.472 13.312-21.333334 13.312H634.304zM341.333333 490.666667a42.666667 42.666667 0 1 0 0-85.333334 42.666667 42.666667 0 0 0 0 85.333334z m170.666667 0a42.666667 42.666667 0 1 0 0-85.333334 42.666667 42.666667 0 0 0 0 85.333334z m170.666667 0a42.666667 42.666667 0 1 0 0-85.333334 42.666667 42.666667 0 0 0 0 85.333334z" fill="#3D3D3D" p-id="4693"></path></svg>
                        <span calss="data">3.2w</span>
                       </div>
                        

                
                  </div>
              </div>
              <div class="img">
                  <img src="../assets/image/infoimg/one.webp" alt="" class="img-one">
              </div>
          </div>
    </div>
</template>

<script setup>
// 引入pinia
import useListOne from "../store/ListOne";
import { defineProps } from "vue";
const props = defineProps({
  data: {
    type: String,
    default: () => ({})
  },
  cont: {
    type: String,
    default: () => {}
  },
  timea: {
    type: String,
    default: () => {}
  },
  smcont: {
    type: String,
    default: () => {}
  }
});

// 调用pinia
const ListOneStore = useListOne();
</script>





<style lang="less" scoped>
.main {
  padding: 0rem 2rem;
  &:hover {
    cursor: pointer;
    background-color: #fafafa;
  }
  .metaContainer {
    display: flex;
    margin: 7px 1px;
    font-size: 1rem;
    .fenlei {
      &:hover {
        color: #007fff;
      }
    }
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
        color: #252933;
        font-size: 16px;
      }
      .info-two {
        padding-bottom: 1rem;
        padding-top: 1rem;
        color: #b99e9c;
        font-size: 12px;
      }
    }
    .iconCon {
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      .aa {
        display: flex;
        flex-direction: row;
        &:hover {
          color: #007fff;
        }
      }
      .icon {
        height: 16px;
        width: 16px;
        vertical-align: text-bottom;
        margin-right: 4px;
      }
      .data {
        margin-right: 20px;
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
</style>
