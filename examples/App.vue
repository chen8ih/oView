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
        color: #1f2d3d;
        margin: 0;
      }
      h3 {
        font-size: 1.25rm;
      }
      h2, h3, h4, h5 {
        font-weight: normal;
        color: #1f2f3d;
        &:hover a {
          opacity: .4;
        }
        a {
          float: left;
          margin-left: -20px;
          opacity: 0;
          cursor: pointer;
          &:hover {
            opacity: .4;
          }
        }
      }

      p {
        font-size: 14px;
        color: #5e6d82;
        line-height: 1.5em;
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

    .demo {
      margin: 20px 0;
    }
  }

  .container:after {
    content: "";
    clear: both;
    display: block;
  }
</style>
