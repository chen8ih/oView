<style lang="less">
  .page-footer {
    position:absolute;
    bottom:0;
    width: 100%;
    height: @footer-height;
    padding: 30px 0 30px;
    color: @text-color;
    text-align: center;
    background-color: @footer-bg;
    box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.8);

    .footer-container{
      width: 90%;
      margin: 0 auto;
    }
  }
</style>
<template>
  <footer class="page-footer">
    <div class="footer-container">
      <p>2005 - {{end}} 版权所有</p>
    </div>
  </footer>
</template>
<script>
export default {
  data () {
    return {
      end: (new Date()).getFullYear().toString()
    }
  }
}
</script>
