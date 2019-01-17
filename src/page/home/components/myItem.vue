<template>
    <div class="myItem">
      <div class="header">
        <img src="https://dn-wenjuan-com.qbox.me/1545968540880_%E4%B8%8B%E8%BD%BDAPP3%E5%B0%8F.png">
      </div>
      <main>
        <div class="nav">
          <div class="nav-logo">
            <img src="https://www.wenjuan.com/static/images/logo_dog_festival.png?v=4e717467a8704b6a3be2ecb6be808e0a">
          </div>
          <ul class="nav-content">
            <li>我的项目</li>
            <li>免费模板</li>
            <li>高级功能</li>
            <li>样本收集</li>
            <li @mouseenter="handleMouseenter" @mouseleave="handleLeave">
              企业服务
              <i class="iconfont icon8">&#xe625;</i>
              <ul class="service" v-show="isShow">
                <li>顾客体验管理系统<i>推荐</i></li>
                <li>专业调研服务</li>
                <li>开放平台</li>
              </ul>
            </li>
            <li>帮助中心</li>
          </ul>
          <div class="user-logo" @mouseenter="handleMouseenter1" @mouseleave="handleLeave1">
            <img src="http://thirdwx.qlogo.cn/mmopen/iahOCZIeXGS52RWVqCrhW7kY2S3DIx8xYIZKwTnqe2fK5hrrAibenkHCcQ4cfRZlQ85r7Mw6h0FRUZ9Y6XicGnCI2opI6qZ1LeD/132">
          </div>
          <div class="user-detail" v-show="isShow1">
            <div></div>
            <p>夜黑风好</p>
            <ul>
              <li><i class="iconfont icon9">&#xe60e;</i><span>我的账户</span></li>
              <li><i class="iconfont icon10">&#xe6ad;</i><span>我的钱包</span></li>
              <li><i class="iconfont icon11">&#xe612;</i><span>联系人</span></li>
              <li><i class="iconfont icon12">&#xe635;</i><span>站内信</span></li>
              <li><i class="iconfont icon13">&#xe673;</i><span>退出登录</span></li>
            </ul>
          </div>
        </div>
        <div class="list-wrapper">
          <div class="list-header">
            <div class="header-logo">
              <i class="iconfont icon1">&#xe641;</i>
              <i class="iconfont icon2">&#xe62b;</i>
            </div>
            <div class="header-search">
              <div class="input" @click="handleClick1">
                <input type="text" placeholder="全部类型">
                <i class="iconfont icon4" :class="{fanzhuan:isShow3}">&#xe600;</i>
                <dl v-show="isShow3">
                  <dd v-for="item of typeList" :key="item.id">{{item.desc}}</dd>
                </dl>
              </div>
              <div class="input" @click="handleClick2">
                <input type="text" placeholder="全部时间">
                <i class="iconfont icon4" :class="{fanzhuan:isShow4}">&#xe600;</i>
                <dl v-show="isShow4">
                  <dd v-for="item of timeList" :key="item.id">{{item.desc}}</dd>
                </dl>
              </div>
              <div class="input">
                <input type="text" placeholder="搜索">
                <i class="iconfont icon5">&#xe60b;</i>
              </div>
            </div>
            <div class="header-recycle">
              <div>回收站</div>
              <i class="iconfont icon6">&#xe61a;</i>
            </div>
          </div>
          <ul class="list-box">
            <li class="list">
              <img src="https://www.wenjuan.com/static/images/new_project_ico.png" alt="plus">
              <p class="newStart">新建</p>
            </li>
            <li class="list">
              <span>问卷</span>
              <p class="list-title">问卷标题</p>
              <p class="list-time">3天前</p>
              <div class="list-content">
                <div>0份数据</div>
                <div>
                  未发布
                  <i class="iconfont icon7">&#xec1e;</i>
                </div>
              </div>
            </li>
            <li class="list">
              <span>问卷</span>
              <p class="list-title">问卷标题</p>
              <p class="list-time">3天前</p>
              <div class="list-content">
                <div>0份数据</div>
                <div>
                  未发布
                  <i class="iconfont icon7">&#xec1e;</i>
                </div>
              </div>
            </li>
            <li class="list">
              <span>问卷</span>
              <p class="list-title">问卷标题</p>
              <p class="list-time">3天前</p>
              <div class="list-content">
                <div>0份数据</div>
                <div>
                  未发布
                  <i class="iconfont icon7">&#xec1e;</i>
                </div>
              </div>
            </li>
            <li class="list">
              <span>问卷</span>
              <p class="list-title">问卷标题</p>
              <p class="list-time">3天前</p>
              <div class="list-content">
                <div>0份数据</div>
                <div>
                  未发布
                  <i class="iconfont icon7">&#xec1e;</i>
                </div>
              </div>
            </li>
            <li class="list">
              <span>问卷</span>
              <p class="list-title">问卷标题</p>
              <p class="list-time">3天前</p>
              <div class="list-content">
                <div>0份数据</div>
                <div>
                  未发布
                  <i class="iconfont icon7">&#xec1e;</i>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="foot1"></div>
        <div class="foot2">
          <img src="https://www.wenjuan.com/static/images/bq_logo.png?v=33b528b6e968681bc23c271e7819a97a" alt="">
        </div>
      </main>
    </div>
</template>

<script>
    export default {
        name: "myItem",
        data() {
          return {
            isShow: false,
            isShow1: false,
            isShow3: false,
            isShow4: false,
            typeList:[
              {
                id:'0001',
                desc:'全部类型'
              },{
                id:'0002',
                desc:'问卷'
              },{
                id:'0003',
                desc:'投票'
              },{
                id:'0004',
                desc:'表单'
              },{
                id:'0005',
                desc:'测评'
              }
            ],
            timeList:[
              {
                id:'0006',
                desc:'时间限制'
              },{
                id:'0007',
                desc:'过去一周内'
              },{
                id:'0008',
                desc:'过去一月内'
              },{
                id:'0009',
                desc:'过去一年内'
              }
            ]
          }
        },
      methods: {
        handleMouseenter(){
          this.isShow = true;
        },
        handleLeave(){
          this.isShow = false;
        },
        handleMouseenter1(){
          this.isShow1 = true;
        },
        handleLeave1(){
          this.isShow1 = false;
        },
        handleClick1() {
          this.isShow3 = !this.isShow3;
        },
        handleClick2() {
          this.isShow4 = !this.isShow4;
        }
      }
    }
</script>

<style lang="less">
  .myItem {
    .header {
      height: 60px;
      width: 100%;
      cursor: pointer;
      &>img {
        height: 100%;
      }
    }
    main {
      background: #EEEFF1;
      .foot1 {
        height: 100px;
      }
      .foot2 {
        box-sizing: border-box;
        text-align: center;
        height: 92px;
        padding: 30px 0;
        &>img {
          width: 94px;
          height: 32px;
        }
      }
    }
    main>.nav {
      height: 64px;
      width: 100%;
      background: #fff;
      .nav-logo {
        float: left;
        width: 70px;
        height: 64px;
        margin-left: 30px;
        margin-right: 15px;
        img {
          height: 64px;
        }
      }
      .nav-content {
        float: left;
        display: flex;
        box-sizing: border-box;
        width: 512px;
        height: 64px;
        justify-content: center;
        align-items: center;
        padding-top: 22px;
        &>li {
          display: flex;
          width: 16.6%;
          height: 42px;
          font-size: 16px;
          font-weight: 400;
          cursor: pointer;
          &>.icon8 {
            display: inline-block;
            width: 12px;
            height: 12px;
            font-size: 12px;
          }
          &:hover {
            color: #2672FF;
            &:nth-of-type(5) {
              &>.icon8 {
                font-size: 12px;
                color: #000;
                transition-duration: 0.3s;
                transform: rotate(180deg);
              }
            }
          }
          &>.service {
            position: absolute;
            box-sizing: border-box;
            left: 440px;
            top: 125px;
            width: 200px;
            height: 132px;
            padding: 9px 0;
            color: #000;
            background: #fff;
            border: 1px solid #eee;
            z-index: 999;
            &>li {
              box-sizing: border-box;
              width: 200px;
              padding: 0 20px;
              line-height: 38px;
              height: 38px;
              &>i {
                font-size: 6px;
                background: #2672FF;
                color: #ffffff;
                padding: 2px 5px;
                border-radius: 3px;
              }
              &:hover {
                background: #eee;
                color: #2672FF;
              }
            }
          }
        }
      }
      .user-logo {
        float: right;
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        border-left: 1px solid #ddd;
        width: 72px;
        height: 64px;
        &>img {
          width: 24px;
          height: 24px;
          border-radius: 12px;
        }
      }
      .user-detail {
        position: absolute;
        box-sizing: border-box;
        width: 260px;
        height: 280px;
        padding: 18px 0;
        right: 0;
        top: 135px;
        border: 1px solid #eee;
        background: #fff;
        z-index: 999;
        &>div {
          position: absolute;
          top: -10px;
          right: 10px;
          border-style: solid;
          border-width: 0 10px 10px 10px;
          border-color: transparent transparent white transparent;
          width: 0;
          height: 0;
        }
        &>p {
          margin: 0 20px;
          font-size: 18px;
          line-height: 18px;
          padding: 12px 0;
          width: 220px;
          border-bottom: 1px solid #eaeaea;
        }
        &>ul {
          li {
            box-sizing: border-box;
            height: 38px;
            line-height: 38px;
            padding: 0 20px;
            font-size: 14px;
            cursor: pointer;
            vertical-align: middle;
            &>.iconfont {
              font-size: 14px;
              padding-right: 10px;
            }
            &:nth-of-type(5) {
              margin: 0 20px;
              width: 220px;
              padding: 0;
              border-top: 1px solid #eaeaea;
             }
            &:hover {
              color: #2672FF;
              background: #eee;
            }
          }
        }
      }
    }
    main>.list-wrapper {
      margin-left: 30px;
      padding: 24px 0 10px;
      .list-header {
        width: 1306px;
        height: 28px;
        line-height: 28px;
        margin-bottom: 4px;
        .header-logo {
          float: left;
          width: 68px;
          height: 24px;
          .iconfont {
            display: inline-block;
            width: 24px;
            height: 24px;
            cursor: pointer;
            &:nth-of-type(1) {
              margin-right: 10px;
              color: #2672FF;
            }
            &:hover {
              color: #2672FF;
            }
          }
        }
        .header-search {
          float: left;
          height: 30px;
          margin-left: 20px;
          .input {
            float: left;
            position: relative;
            &>dl {
              background: #ffffff;
              border: 1px solid #e8e8e8;
              border-radius: 2px;
              dd {
                font-size: 12px;
                color: #484848;
                line-height: 36px;
                padding: 0 10px;
                cursor: pointer;
                &:nth-of-type(1) {
                  background-color: #F5F6FA;
                  color: #484848;
                  cursor: default;
                }
                &:hover {
                  background-color: #F5F6FA;
                }
              }
            }
            &:nth-of-type(1) {
              width: 94px;
            }
            &:nth-of-type(2) {
              width: 117px;
              margin: 0 10px;
            }
            &:nth-of-type(3) {
              width: 262px;
            }
            &>input {
              box-sizing: border-box;
              color: #ccc;
              width: 100%;
              height: 30px;
              font: 400 12px/36px microsoft;
              padding: 0 10px;
              border: 1px solid #ccc;
              cursor: pointer;
              &:hover {
                border: 1px solid #2672FF;
              }
            }
            &>.icon4 {
              position: absolute;
              top: 0;
              right: 10px;
              font-size: 10px;
              color: #ccc;
              cursor: pointer;
            }
            &>.icon5 {
              position: absolute;
              top: 0;
              right: 10px;
              font-size: 24px;
              cursor: pointer;
            }
            &>.fanzhuan {
              transition-duration: 0.3s;
              transform: rotate(180deg);
            }
          }
        }
        .header-recycle {
          box-sizing: border-box;
          float: right;
          font-size: 14px;
          width: 68px;
          line-height: 28px;
          cursor: pointer;
          &>div {
            float: right;
          }
          .icon6 {
            float: left;
          }
          &:hover {
            color: #2672FF;
          }
        }
      }
      .list-box {
        display: flex;
        width: 1332px;
        height: 428px;
        flex-wrap: wrap;
        justify-content: start;
        align-items: center;
        &>li {
          box-sizing: border-box;
          width: 23%;
          height: 194px;
          border-radius: 5px;
          background: #ffffff;
          padding: 20px;
          border: 1px solid #ccc;
          margin-right: 20px;
          &>img {
            width: 62px;
            height: 62px;
            margin-top: 20px;
            margin-left: calc(50% - 31px);
          }
          &>.newStart {
            font-size: 18px;
            line-height: 20px;
            color: #2672FF;
            text-align: center;
            margin-top: 20px;
          }
          &>span {
            display: block;
            width: 40px;
            line-height: 20px;
            padding: 0 5px;
            margin-top: -20px;
            text-align: center;
            border-radius: 2px;
            background: #2672FF;
            color: #fff;
          }
          .list-title {
            margin-top: 18px;
            margin-left: 4px;
            line-height: 22px;
            font-size: 16px;
            font-weight: 400;
            color: #434a5d;
          }
          .list-time {
            margin-top: 5px;
            margin-left: 4px;
            font-size: 14px;
            color: #adadad;
          }
          .list-content {
            width: 100%;
            height: 20px;
            margin-top: 70px;
            &>div:nth-of-type(1) {
              float: left;
              margin-left: 4px;
            }
            &>div:nth-of-type(2) {
              float: right;
              font-size: 14px;
              font-weight: 400;
              color: #FFBE3A;
              cursor: pointer;
              span {
                float: right;
              }
              .icon7 {
                float: left;
              }
            }
          }
          &:hover {
            border: 2px solid #2672FF;
          }
        }
      }
    }
  }
</style>
