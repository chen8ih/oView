<style lang="less">
  .demo-block {
    .scroll-container {
      height: 260px
    }

    .list-item{
      word-break: keep-all;
      white-space: nowrap;
    }
  }
</style>

## 默认滚动条

<div class="demo-block">
  <div class="scroll-container">
    <o-scrollerbars>
      <p class="list-item" v-for="i in 6" :key="`item-${i}`">item - {{ i }} - item-long-show-x-scrollbar- long-text-make-scroller-x-show-and-useable - item-long-show-x-scrollbar</p>
    </o-scrollerbars>
  </div>  
</div> 

:::demo
```html
<div class="scroll-container">
  <o-scrollerbars>
    <p class="list-item" v-for="i in 6" :key="`item-${i}`">item - {{ i }} - item-long-show-x-scrollbar- long-text-make-scroller-x-show-and-useable - item-long-show-x-scrollbar</p>
  </o-scrollerbars>
</div>
```
:::


# 设置滚动条样式

---

可以通过`scroll-y-type`设置滚动条样式，可选样式有inner

<div class="demo-block">
  <div class="scroll-container">
    <o-scrollerbars scroll-y-type="inner">
      <p v-for="i in 100" :key="`item-${i}`">item - {{ i }}</p>
    </o-scrollerbars>
  </div> 
</div>

:::demo
```html
<div class="scroll-container">
  <o-scrollerbars scroll-y-type="inner">
    <p v-for="i in 100" :key="`item-${i}`">item - {{ i }}</p>
  </o-scrollerbars>
</div>
```
:::


## 显示全部

<div class="demo-block">
  <div class="scroll-container">
    <o-scrollerbars show-all>
      <p v-for="i in 100" :key="`item-${i}`">item - {{ i }}</p>
    </o-scrollerbars>
  </div> 
</div>


:::demo
```html
<div class="scroll-container">
  <o-scrollerbars show-all>
    <p v-for="i in 100" :key="`item-${i}`">item - {{ i }}</p>
  </o-scrollerbars>
</div>
```
:::