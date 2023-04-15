<template>
  <AppLayout />
  <div class="main">
    <nav class="backuser">
      <li>
        <!-- <router-link> -->
        <i class="byte-icon" style="position: relative; top: -1px"
          ><svg
            t="1561636243047"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="411757"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M389.76 512l346.88 346.88a21.12 21.12 0 0 1 0 30.08l-30.08 30.08a21.12 21.12 0 0 1-30.08 0L299.52 542.08a42.24 42.24 0 0 1 0-60.16l376.96-376.96a21.12 21.12 0 0 1 30.08 0l30.08 30.08a21.12 21.12 0 0 1 0 30.08z"
              p-id="411758"
            ></path>
          </svg>
        </i>
        返回个人主页
        <!-- </router-link> -->
      </li>
    </nav>
    <div class="bottom">
      <aside class="infolist">
        <ul>
          <li>
            <div class="nav-item active">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.2222 2C14.6518 2 15 2.29848 15 2.66667V13.3333C15 13.7015 14.6518 14 14.2222 14H1.77778C1.34822 14 1 13.7015 1 13.3333V2.66667C1 2.29848 1.34822 2 1.77778 2H14.2222ZM8.33333 10C8.51743 10 8.66667 10.1492 8.66667 10.3333V11C8.66667 11.1841 8.51743 11.3333 8.33333 11.3333H3.66667C3.48257 11.3333 3.33333 11.1841 3.33333 11V10.3333C3.33333 10.1492 3.48257 10 3.66667 10H8.33333ZM6 7.33333C6.18409 7.33333 6.33333 7.48257 6.33333 7.66667V8.33333C6.33333 8.51743 6.18409 8.66667 6 8.66667H3.66667C3.48257 8.66667 3.33333 8.51743 3.33333 8.33333V7.66667C3.33333 7.48257 3.48257 7.33333 3.66667 7.33333H6ZM12.2273 4.3335C12.3779 4.3335 12.5 4.4556 12.5 4.60622V7.60622C12.5 7.75685 12.3779 7.87895 12.2273 7.87895H9.77273C9.6221 7.87895 9.5 7.75685 9.5 7.60622V4.60622C9.5 4.4556 9.6221 4.3335 9.77273 4.3335H12.2273Z"
                  fill="#8A919F"
                  class="close-path"
                ></path>
              </svg>

              个人资料
            </div>
          </li>
          <li>
            <div class="nav-item">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.52929 1.16934C9.03085 1.05713 8.51879 1 7.99976 1C7.4806 1 6.96843 1.05715 6.46988 1.16942L6.18222 1.2342L5.2856 3.27897L3.07716 3.03754L2.87752 3.25499C2.1785 4.01637 1.65408 4.9245 1.34667 5.91628L1.26001 6.19586L2.57424 8L1.43235 9.56756L1.26001 9.80414L1.34667 10.0837C1.65408 11.0755 2.1785 11.9836 2.87752 12.745L3.07716 12.9625L5.2856 12.721L6.06381 14.4958L6.18222 14.7658L6.46988 14.8306C6.96843 14.9428 7.4806 15 7.99976 15C8.51879 15 9.03085 14.9429 9.52929 14.8307L9.81692 14.7659L10.7139 12.721L12.9224 12.9625L13.122 12.745C13.8209 11.9837 14.3453 11.0757 14.6527 10.0841L14.7394 9.80452L13.4253 8L14.5671 6.43206L14.7394 6.19548L14.6527 5.91593C14.3453 4.92428 13.8209 4.01628 13.122 3.25499L12.9224 3.03754L10.7139 3.27897L9.81692 1.2341L9.52929 1.16934ZM8.10175 10.2993C9.31678 10.2993 10.3018 9.31434 10.3018 8.09932C10.3018 6.88429 9.31678 5.89932 8.10175 5.89932C6.88673 5.89932 5.90175 6.88429 5.90175 8.09932C5.90175 9.31434 6.88673 10.2993 8.10175 10.2993Z"
                  fill="#8A919F"
                  class="close-path"
                ></path>
              </svg>

              账号设置
            </div>
          </li>
          <li>
            <div class="nav-item">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.05186 2.08489C9.05186 1.48572 8.56614 1 7.96697 1C7.36781 1 6.88209 1.48572 6.88209 2.08489V2.43127C6.01392 2.61567 5.24402 3.0205 4.62731 3.62715C3.75899 4.48131 3.23197 5.69796 3.12659 7.1599C3.03491 8.4319 2.84718 9.4646 1.8079 10.9355C1.3976 11.5162 1.77542 12.3909 2.54958 12.3909H13.4482C14.2224 12.3909 14.6002 11.5162 14.1899 10.9355C13.1506 9.4646 12.9629 8.4319 12.8712 7.1599C12.7659 5.69796 12.2388 4.48131 11.3705 3.62715C10.7387 3.00566 9.94615 2.59599 9.05186 2.41814V2.08489ZM6.24359 13.037C6.1262 13.037 6.01611 13.094 5.94833 13.1899C5.88055 13.2857 5.86351 13.4085 5.90263 13.5192C6.20741 14.3815 7.02978 15.0002 7.99757 15.0002C8.96536 15.0002 9.78772 14.3815 10.0925 13.5192C10.1316 13.4085 10.1146 13.2857 10.0468 13.1899C9.97902 13.094 9.86894 13.037 9.75155 13.037H6.24359Z"
                  fill="#8A919F"
                  class="close-path"
                ></path>
              </svg>
              消息设置
            </div>
          </li>
          <li>
            <div class="nav-item">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.6667 1C14.0349 1 14.3334 1.29848 14.3334 1.66667V14.3333C14.3334 14.7015 14.0349 15 13.6667 15H2.33341C1.96522 15 1.66675 14.7015 1.66675 14.3333V4.66667C1.66675 4.29848 1.96522 4 2.33341 4H3.33008V10.7C3.33008 10.8657 3.46439 11 3.63008 11H4.03008C4.19576 11 4.33008 10.8657 4.33008 10.7V4H4.33341V1.66667C4.33341 1.29848 4.63189 1 5.00008 1H13.6667ZM11.6667 9.33333C11.6667 9.14924 11.5175 9 11.3334 9H7.33339C7.1493 9 7.00006 9.14924 7.00006 9.33333V10C7.00006 10.1841 7.1493 10.3333 7.33339 10.3333H11.3334C11.5175 10.3333 11.6667 10.1841 11.6667 10V9.33333ZM11.6667 5.99984C11.6667 5.81574 11.5175 5.6665 11.3334 5.6665H7.33339C7.1493 5.6665 7.00006 5.81574 7.00006 5.99984V6.6665C7.00006 6.8506 7.1493 6.99984 7.33339 6.99984H11.3334C11.5175 6.99984 11.6667 6.8506 11.6667 6.6665V5.99984Z"
                  fill="#8A919F"
                  class="close-path"
                ></path>
              </svg>

              简历管理
            </div>
          </li>
          <li>
            <div class="nav-item">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.2741 12.2136C15.3968 9.5633 15.2298 5.68383 12.773 3.22703C10.3162 0.770226 6.4367 0.603177 3.78642 2.72588L13.2741 12.2136ZM12.7873 12.7586L12.7586 12.7873C12.7634 12.7825 12.7682 12.7777 12.773 12.773C12.7777 12.7682 12.7825 12.7634 12.7873 12.7586ZM12.2134 13.2742C9.56318 15.3968 5.68379 15.2297 3.22703 12.773C0.770267 10.3162 0.603183 6.43682 2.72578 3.78656L12.2134 13.2742Z"
                  fill="#8A919F"
                  class="close-path"
                ></path>
              </svg>

              屏蔽管理
            </div>
          </li>
          <li>
            <div class="nav-item">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="svg"
              >
                <path
                  d="M5.45056 3.70649C5.28106 3.80585 5.08603 3.85307 4.88985 3.84226L3.98818 3.79258C3.60939 3.77171 3.25141 3.96697 3.06388 4.29674L2.44288 5.38879C2.25905 5.71205 2.26978 6.11061 2.47074 6.42351L2.98142 7.21868C3.08496 7.37989 3.14001 7.56746 3.14001 7.75906V8.06135C3.14001 8.25295 3.08496 8.44052 2.98142 8.60174L2.4167 9.48105C2.21574 9.79395 2.20501 10.1925 2.38884 10.5158L2.96509 11.5291C3.15261 11.8589 3.51059 12.0541 3.88938 12.0333L4.88998 11.9781C5.08616 11.9673 5.28118 12.0146 5.45069 12.1139L5.69343 12.2562C5.86061 12.3542 5.99572 12.4987 6.08232 12.672L6.56531 13.6389C6.73464 13.9778 7.081 14.192 7.4599 14.192H8.54114C8.92004 14.192 9.2664 13.9778 9.43573 13.6389L9.91845 12.6726C10.0051 12.4992 10.1402 12.3547 10.3073 12.2567L10.5509 12.114C10.7205 12.0146 10.9155 11.9674 11.1117 11.9782L12.1118 12.0333C12.4906 12.0542 12.8486 11.8589 13.0361 11.5291L13.6123 10.5159C13.7961 10.1926 13.7854 9.79406 13.5844 9.48117L13.0203 8.60275C12.9167 8.44153 12.8617 8.25396 12.8617 8.06236V7.75806C12.8617 7.56645 12.9167 7.37888 13.0203 7.21767L13.5304 6.42339C13.7313 6.11049 13.7421 5.71193 13.5582 5.38868L12.9373 4.29673C12.7498 3.96696 12.3918 3.7717 12.013 3.79257L11.1118 3.84223C10.9156 3.85304 10.7206 3.80582 10.5511 3.70646L10.3073 3.56356C10.1401 3.46556 10.005 3.3211 9.9184 3.14774L9.52524 2.36072C9.35591 2.02176 9.00955 1.80762 8.63065 1.80762L7.37039 1.80762C6.99149 1.80762 6.64513 2.02176 6.4758 2.36072L6.08238 3.14828C5.99578 3.32163 5.86067 3.46609 5.69349 3.56409L5.45056 3.70649Z"
                  stroke="currentColor"
                  class="nofill"
                ></path>
                <circle
                  cx="8.00056"
                  cy="7.99958"
                  r="2.28571"
                  stroke="currentColor"
                ></circle>
              </svg>
              标签管理
            </div>
          </li>
        </ul>
      </aside>
      <div class="userinfo">
        <div class="view">
          <div class="title">个人资料</div>
          <div class="userform">
            <div class="inputtext">
              <form action="post" class="inputform">
                <div class="divide"></div>
                <div class="form-item">
                  <label for="">用户名</label>
                  <div class="content">
                    <div class="text-out">
                      <input
                        type="text"
                        name="username"
                        id=""
                        placeholder="请填写用户名"
                        value="用户1"
                      />
                      <span>5/25</span>
                    </div>
                  </div>
                </div>
                <div class="divide"></div>
                <div class="form-item">
                  <label for="">邮箱</label>
                  <div class="content">
                    <div class="text-out">
                      <input
                        type="text"
                        name="email"
                        id=""
                        placeholder="请填写邮箱"
                        value="email@qq.com"
                      />
                      <span>12/50</span>
                    </div>
                  </div>
                </div>
                <div class="divide"></div>
                <div class="form-item">
                  <label for="">手机</label>
                  <div class="content">
                    <div class="text-out">
                      <input
                        type="text"
                        name="telephone"
                        id=""
                        placeholder="请填写电话号码"
                        value="11111111111"
                      />
                    </div>
                  </div>
                </div>
                <div class="divide"></div>
                <div class="form-item">
                  <label for="">密码</label>
                  <div class="content">
                    <div class="text-out">
                      <button class="setpwd">更改密码</button>
                    </div>
                  </div>
                </div>
                <div class="divide"></div>
              </form>
            </div>
            <div class="avatar"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppLayout from "../components/AppLayout.vue";
</script>

<style lang="less" scoped>
.main {
  position: relative;
  margin: 0 auto;
  margin-top: 5.5rem;
  width: 100%;
  max-width: 80rem;

  .backuser {
    position: sticky;
    top: 5rem;
    width: 100%;
    height: 3.833rem;
    display: flex;
    align-items: center;
    margin: 2rem auto 1.333rem;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    transition: all 0.2s;
    transform: translateZ(0);
    padding-left: 2rem;
    li {
      font-size: 13px;
      color: #909090;

      .byte-icon {
        width: 1rem !important;
        height: 1rem !important;
        display: inline-block;
        vertical-align: middle;
        line-height: 1;
        color: #909090 !important;
      }
      &:hover {
        color: #1d7dfa !important;
        path {
          fill: #1d7dfa;
        }
      }
    }
  }

  .bottom {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    .infolist {
      box-sizing: border-box;
      width: 16rem;
      height: 45rem;
      background-color: #fff;
      padding: 8px;
      ul {
        li {
          div {
            display: flex;
            align-items: center;
            font-weight: 400;
            height: 4rem;
            width: 100%px;
            font-size: 13px;
            color: #4e5969;
            border-radius: 4px;
            svg {
              margin-right: 12px;
              margin-left: 24px;
            }
          }

          &:hover {
            div {
              background: #e8f3ff;
              color: #1d7dfa !important;
              svg {
                path {
                  fill: #1d7dfa;
                }
              }
            }
          }
        }
      }
    }

    .userinfo {
      position: relative;
      padding: 1.75rem;
      background-color: #fff;
      border-radius: 2px;
      box-sizing: border-box;
      margin-left: 1rem;
      width: 100%;
      min-height: 45rem;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      .view {
        .title {
          font-weight: 600;
          font-size: 1.75rem;
          line-height: 1.5rem;
          color: #333;
          margin-bottom: 1.5rem;
        }
        .userform {
          display: flex;
          .inputtext {
            min-width: 20rem;
            width: 100%;
            .inputform {
              display: block;
              margin-top: 0;
              .divide {
                margin-left: 1rem;
                margin-top: 1.1rem;
                margin-bottom: 1.1rem;
                width: 100%;
                border-top: 1px solid #eaeaea;
              }
              .form-item {
                margin-bottom: 1.1rem;
                white-space: nowrap;
                label {
                  width: 4.5rem;
                  font-weight: 500;
                  font-size: 14px;
                  color: #333;
                  margin-left: 1.666rem;
                  margin-right: 1.25rem;
                  display: inline-block;
                  text-align: left;
                  padding-right: 0;
                }
                .content {
                  display: inline-block;
                  position: relative;
                  line-height: 2.666rem;
                  width: 100%;

                  .text-out {
                    max-width: 440px;
                    min-width: 100px;
                    position: relative;
                    width: 100%;
                    display: inline-block;
                    font-size: 14px;
                    line-height: 1.5;
                    vertical-align: middle;
                    border-collapse: separate;
                    border-spacing: 0;
                    input {
                      resize: none;
                      outline: none;
                      width: 85%;
                      height: 2.4rem;
                      display: block;
                      box-shadow: none;
                      border: 1px solid #ddd;
                      border-radius: 2px;
                      transition: border 0.3s;
                      background-color: #fafafa;
                      color: #1d2129;
                      box-sizing: border-box;
                      padding-left: 1rem;
                      padding-right: 4rem;
                    }
                    span {
                      position: absolute;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      top: 0;
                      bottom: 0;
                      height: 2.4rem;
                      line-height: 2.4rem;
                      right: 6rem;
                      font-size: 12px;
                    }
                    .setpwd {
                      color: #007fff;
                      padding: 0;
                      height: 2.3rem;
                      font-weight: 500;
                      border: 1px solid #007fff;
                      background-color: #fff;
                      border-radius: 4px;
                      width: 8rem;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

.backuser:before {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  height: 200%;
  width: 100%;
  z-index: -1;
  background-color: unset;
}

.nofill {
  fill: none !important;
}

.active {
  background: #e8f3ff;
  color: #1d7dfa !important;
  svg {
    path {
      fill: #1d7dfa;
    }
  }
}
</style>
