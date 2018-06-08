<script>
  var iconList = require('../icon.json')

  export default {
    data () {
      return {
        icons: iconList
      }
    }
  }
</script>
<style lang="less">
.container {
  ul.icon-list {
    overflow: hidden;
    list-style: none;
    padding: 0;
    border: solid 1px #eaeefb;
    border-radius: 4px;
  }

  .icon-list li {
    float: left;
    width: 16.66%;
    text-align: center;
    height: 120px;
    line-height: 120px;
    color: #666;
    font-size: 13px;
    transition: color .15s linear;

    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;

    &::after {
      display: inline-block;
      content: "";
      height: 100%;
      vertical-align: middle
    }

    span {
      display: inline-block;
      line-height: normal;
      vertical-align: middle;
      color: #99a9bf;
    }
    
    i {
      display: block;
      font-size: 32px;
      margin-bottom: 15px;
      color: #606266;
      width: auto;
      height: auto;
    }
    
    .icon-name {
      display: inline-block;
      padding: 0 3px;
      height: 1em;
      color: #606266;
    }
    
    &:hover {
      color: rgb(92, 182, 255);
    }
  }
}
</style>
# 图标 Icon

---
提供一套基于kendoUI常用的图标集合

## 使用方式

使用`OIcon`组件, 通过指定图标对应的type属性，示例代码

    <okendo-icon type="calendar"></okendo-icon>

渲染后为

    <i class="k-icon k-i-calendar"></i>

## 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 图标名称 | Number | - | - |
| size | 图标大小, 单位是px | Number, String | - | - |
| color | 图标颜色 | String | - | - |
| flip | 图标倾斜角度 | String | v, h | - |

## 图标集合

<ul class="icon-list">
  <li v-for="name in icons" :key="name">
    <span>
      <o-icon :type="name"></o-icon>
      <span class="icon-name">{{'k-i-' + name}}</span>
    </span>
  </li>
</ul>


