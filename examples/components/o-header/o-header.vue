<style lang="less">
  .page-header {
    background-color: @header-bg;
    box-shadow: 0 10px 60px 0 rgba(29,29,31,0.07);
    opacity: 0.98;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    transition: all .3s;
    z-index: 100;

    .header-container{
      width: 90%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      height: 80px;
      justify-content: space-between;

      img {
        display: inline-block;
        vertical-align: middle;
        width: 36px;
        height: auto;
      }

      .page-name {
        font-size: 24px;
        color: #282828;
        line-height: 24px;
        display: inline-block;
        vertical-align: middle;
        margin-left: 5px;
        letter-spacing: 2px;
      }

      .page-widget {
        font-size: 14px;
        color: #282828;

        &::before {
          content: '';
          background-image: url('../../assets/nwidget.png');
          width: 23px;
          height: 13px;
          display: inline-block;
          background-repeat: no-repeat;
          vertical-align: middle;
        }

        &:hover {
          color: #44c894;

          &::before {
            background-image: url('../../assets/widget.png');
          }
        }
      }
    }
  }
</style>
<template>
  <header class="page-header" :style="$route.name === 'index' ? 'box-shadow:none' : 'box-shadow:0 6px 30px 0 rgba(29,29,31,0.07)'">
    <div class="header-container">
      <router-link :to="{name: 'index'}">
        <img src="../../assets/logo.png">
        <span class="page-name">OView Design</span>
      </router-link>
      <router-link :to="{name: 'giud'}">
        <span class="page-widget">组件</span>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
