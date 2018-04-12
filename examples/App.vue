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
    }
  }

  .container:after {
    content: "";
    clear: both;
    display: block;
  }
</style>
