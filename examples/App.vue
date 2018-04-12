<template>
  <div id="app">
    <o-header></o-header>
    <div class="container" v-if="!isIndex">
      <o-sidebar class="nav"></o-sidebar>
      <router-view class="view"></router-view>
    </div>
    <router-view class="page" v-else></router-view>
    <o-footer v-if="!isIndex"></o-footer>
  </div>
</template>

<script>
import OHeader from './components/o-header'
import OFooter from './components/o-footer'
import OSidebar from './components/o-sidebar'

export default {
  name: 'App',
  components: {
    OHeader,
    OFooter,
    OSidebar
  },
  data () {
    return {
      init: false,
      isIndex: true
    }
  },
  watch: {
    $route () {
      this.isIndex = this.$route.name === 'index'
    }
  }
}
</script>

<style lang="less" type="text/less">
  // 固定footer在底部
  html, body {
    height: 100%;
  }

  #app {
    min-height: 100%;
    margin: 0;
    padding: 0;
    position: relative;
  }

  .container {
    margin: 48px auto;
    width: 90%;
    background-color: #fff;
    padding-bottom: @container-padding-bottom;

    .nav {
      float: left;
      width: 210px;
    }
    .view {
      float: left;
      width: calc(~'100% - 215px');
      padding: 32px 48px 48px;
      box-sizing: border-box;

      // 定制markdown显示页面
      h1 {
        font-size: 2em;
      }

      h2 {
        font-size: 1.5em;
      }

      h3 {
        font-size: 1.25em
      }

      h4 {
        font-size: 1em
      }

      h5 {
        font-size: .875em
      }

      h6 {
        font-size: .85em;
        color: #6a737d
      }

      h1, h2, h3, h4, h5, h6 {
        margin-top: 24px;
        margin-bottom: 16px;
        font-weight: 600;
        line-height: 1.25;
      }

      p {
        margin: 5px;
        font-size: 14px;
      }

      ul {
        padding-left: 40px;
        list-style-type: disc;

        li {
          margin-bottom: 5px;
          font-size: 14px;
        }
      }

      .code_inline {
        padding: 0;
        padding-top: .2em;
        padding-bottom: .2em;
        margin: 0;
        font-size: 85%;
        background-color: rgba(27,31,35,.05);
        border-radius: 3px
      }
    }
  }

  .container:after {
    content: "";
    clear: both;
    display: block;
  }
</style>
