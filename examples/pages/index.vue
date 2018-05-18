<!--首页-->
<template>
  <div class="pg-index">
    <div class="index-container">
      <div class="portal-banner">
        <img src="../assets/portal.png">
      </div>
      <div class="separate-panel">
        <h1>基于KendoUI的Vue组件库</h1>
        <em>提升团队的确定性、标准化组件、节约无谓的设计且保持系统一致性</em>
        <div class="about">
          <router-link :to="{name: 'giud'}">开始使用</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      height: document.documentElement.clientHeight
    }
  },
  mounted () {
    console.log('github: https://github.com/chen8ih/oView')
  }
}
</script>
<style type="text/less" lang="less">
  .pg-index {
    background-color: #f6f6f6;

    .index-container {
      width: 1080px;
      margin: 0 auto;
      text-align: center;
      padding: 100px 0;
    }

    .portal-banner {
      display: inline-block;
      width: 48%;
      img {
        width: 60%;
      }
    }

    .separate-panel {
      display: inline-block;
      width: 50%;
      vertical-align: top;
      text-align: left;
      padding-left: 100px;
      margin-top: 63px;
      line-height: 28px;

      .about {
        a {
          color: #fff;
          text-align: center;
          background-image: linear-gradient(90deg, #05b570 0%, #05b570 100%);
          box-shadow: 0 2px 6px 0 rgba(51,105,231,0.4);
          display: inline-block;
          width: 156px;
          height: 46px;
          margin: 20px 3px;
          font-size: 14px;
          line-height: 46px;
          border-radius: 2px;
          transition: all .3s;
          cursor: pointer;
        }
      }
    }
  }
</style>
