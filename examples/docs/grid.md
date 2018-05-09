<style lang="less">
.demo-block {
  .ovu-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }
}
</style>

# 栅格 Grid

---

## 基础布局

使用单一分栏创建基础的栅格布局

<div class="demo-block">
  <o-row>
    <o-col :span="24"><div class="grid-content bg-purple-dark"></div></o-col>
  </o-row>
  <o-row>
    <o-col :span="12"><div class="grid-content bg-purple"></div></o-col>
    <o-col :span="12"><div class="grid-content bg-purple-light"></div></o-col>
  </o-row>
  <o-row>
    <o-col :span="6"><div class="grid-content bg-purple"></div></o-col>
    <o-col :span="6"><div class="grid-content bg-purple-light"></div></o-col>
    <o-col :span="6"><div class="grid-content bg-purple"></div></o-col>
    <o-col :span="6"><div class="grid-content bg-purple-light"></div></o-col>
  </o-row>
  <o-row>
    <o-col :span="4"><div class="grid-content bg-purple"></div></o-col>
    <o-col :span="4"><div class="grid-content bg-purple-light"></div></o-col>
    <o-col :span="4"><div class="grid-content bg-purple"></div></o-col>
    <o-col :span="4"><div class="grid-content bg-purple-light"></div></o-col>
    <o-col :span="4"><div class="grid-content bg-purple"></div></o-col>
    <o-col :span="4"><div class="grid-content bg-purple-light"></div></o-col>
  </o-row>
</div>

通过`Row`和`Col`组件， 并通过`Col`组件的`span`属性我们可以自由地组合布局

:::demo
```html
<o-row>
  <o-col :span="24"><div class="grid-content bg-purple-dark"></div></o-col>
</o-row>
<o-row>
  <o-col :span="12"><div class="grid-content bg-purple"></div></o-col>
  <o-col :span="12"><div class="grid-content bg-purple-light"></div></o-col>
</o-row>
<o-row>
  <o-col :span="6"><div class="grid-content bg-purple"></div></o-col>
  <o-col :span="6"><div class="grid-content bg-purple-light"></div></o-col>
  <o-col :span="6"><div class="grid-content bg-purple"></div></o-col>
  <o-col :span="6"><div class="grid-content bg-purple-light"></div></o-col>
</o-row>
<o-row>
  <o-col :span="4"><div class="grid-content bg-purple"></div></o-col>
  <o-col :span="4"><div class="grid-content bg-purple-light"></div></o-col>
  <o-col :span="4"><div class="grid-content bg-purple"></div></o-col>
  <o-col :span="4"><div class="grid-content bg-purple-light"></div></o-col>
  <o-col :span="4"><div class="grid-content bg-purple"></div></o-col>
  <o-col :span="4"><div class="grid-content bg-purple-light"></div></o-col>
</o-row>

<style lang="less">
  .ovu-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }
</style>

```
:::


## 分栏间隔

可以通过指定`Row`组件的`gutter`属性值设置每一栏之间的间隔， 默认为0, 推荐使用 `(16+8n)px` 作为栅格间隔

<div class="demo-block">
  <o-row :gutter="16">
    <o-col :span="6"><div class="grid-content bg-purple"></div></o-col>
    <o-col :span="6"><div class="grid-content bg-purple"></div></o-col>
    <o-col :span="6"><div class="grid-content bg-purple"></div></o-col>
    <o-col :span="6"><div class="grid-content bg-purple"></div></o-col>
  </o-row>
</div>

:::demo
```html
<o-row :gutter="16">
  <o-col :span="6"><div class="grid-content bg-purple"></div></o-col>
  <o-col :span="6"><div class="grid-content bg-purple"></div></o-col>
  <o-col :span="6"><div class="grid-content bg-purple"></div></o-col>
  <o-col :span="6"><div class="grid-content bg-purple"></div></o-col>
</o-row>

<style lang="less">
  .ovu-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }
</style>
```
:::


## 混合布局

通过基础的1/24分栏任意扩展组合形成较为复杂的混合布局

<div class="demo-block">
  <o-row :gutter="16">
    <o-col :span="16"><div class="grid-content bg-purple"></div></o-col>
    <o-col :span="8"><div class="grid-content bg-purple"></div></o-col>
  </o-row>
  <o-row :gutter="16">
    <o-col :span="8"><div class="grid-content bg-purple"></div></o-col>
    <o-col :span="8"><div class="grid-content bg-purple"></div></o-col>
    <o-col :span="4"><div class="grid-content bg-purple"></div></o-col>
    <o-col :span="4"><div class="grid-content bg-purple"></div></o-col>
  </o-row>
  <o-row :gutter="16">
    <o-col :span="4"><div class="grid-content bg-purple"></div></o-col>
    <o-col :span="16"><div class="grid-content bg-purple"></div></o-col>
    <o-col :span="4"><div class="grid-content bg-purple"></div></o-col>
  </o-row>
</div>

:::demo
```html
<o-row :gutter="16">
  <o-col :span="16"><div class="grid-content bg-purple"></div></o-col>
  <o-col :span="8"><div class="grid-content bg-purple"></div></o-col>
</o-row>
<o-row :gutter="16">
  <o-col :span="8"><div class="grid-content bg-purple"></div></o-col>
  <o-col :span="8"><div class="grid-content bg-purple"></div></o-col>
  <o-col :span="4"><div class="grid-content bg-purple"></div></o-col>
  <o-col :span="4"><div class="grid-content bg-purple"></div></o-col>
</o-row>
<o-row :gutter="16">
  <o-col :span="4"><div class="grid-content bg-purple"></div></o-col>
  <o-col :span="16"><div class="grid-content bg-purple"></div></o-col>
  <o-col :span="4"><div class="grid-content bg-purple"></div></o-col>
</o-row>

<style lang="less">
  .ovu-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }
</style>
```
:::

## 分栏偏移

支持偏移指定的栏数


## 对齐方式

通过`flex`布局来对分栏进行灵活的对齐

## 响应式布局

参照`Bootstrap`的响应式设计, 预定了六个响应尺寸：`xs`、`sm`、`md`、`lg`、`xl`、`xll`



## 属性

### Row 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| gutter | 栅格间隔 | Number | - | 0 |
| type | 布局模式, 可选flex, 现代浏览器有效 | String | - | - |

### Col 属性