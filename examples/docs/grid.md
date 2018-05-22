<style lang="less">
.demo-block {
  .okendo-row {
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
  <okendo-row>
    <okendo-col :span="24"><div class="grid-content bg-purple-dark"></div></okendo-col>
  </okendo-row>
  <okendo-row>
    <okendo-col :span="12"><div class="grid-content bg-purple"></div></okendo-col>
    <okendo-col :span="12"><div class="grid-content bg-purple-light"></div></okendo-col>
  </okendo-row>
  <okendo-row>
    <okendo-col :span="6"><div class="grid-content bg-purple"></div></okendo-col>
    <okendo-col :span="6"><div class="grid-content bg-purple-light"></div></okendo-col>
    <okendo-col :span="6"><div class="grid-content bg-purple"></div></okendo-col>
    <okendo-col :span="6"><div class="grid-content bg-purple-light"></div></okendo-col>
  </okendo-row>
  <okendo-row>
    <okendo-col :span="4"><div class="grid-content bg-purple"></div></okendo-col>
    <okendo-col :span="4"><div class="grid-content bg-purple-light"></div></okendo-col>
    <okendo-col :span="4"><div class="grid-content bg-purple"></div></okendo-col>
    <okendo-col :span="4"><div class="grid-content bg-purple-light"></div></okendo-col>
    <okendo-col :span="4"><div class="grid-content bg-purple"></div></okendo-col>
    <okendo-col :span="4"><div class="grid-content bg-purple-light"></div></okendo-col>
  </okendo-row>
</div>

通过`Row`和`Col`组件， 并通过`Col`组件的`span`属性我们可以自由地组合布局

:::demo
```html
<okendo-row>
  <okendo-col :span="24"><div class="grid-content bg-purple-dark"></div></okendo-col>
</okendo-row>
<okendo-row>
  <okendo-col :span="12"><div class="grid-content bg-purple"></div></okendo-col>
  <okendo-col :span="12"><div class="grid-content bg-purple-light"></div></okendo-col>
</okendo-row>
<okendo-row>
  <okendo-col :span="6"><div class="grid-content bg-purple"></div></okendo-col>
  <okendo-col :span="6"><div class="grid-content bg-purple-light"></div></okendo-col>
  <okendo-col :span="6"><div class="grid-content bg-purple"></div></okendo-col>
  <okendo-col :span="6"><div class="grid-content bg-purple-light"></div></okendo-col>
</okendo-row>
<okendo-row>
  <okendo-col :span="4"><div class="grid-content bg-purple"></div></okendo-col>
  <okendo-col :span="4"><div class="grid-content bg-purple-light"></div></okendo-col>
  <okendo-col :span="4"><div class="grid-content bg-purple"></div></okendo-col>
  <okendo-col :span="4"><div class="grid-content bg-purple-light"></div></okendo-col>
  <okendo-col :span="4"><div class="grid-content bg-purple"></div></okendo-col>
  <okendo-col :span="4"><div class="grid-content bg-purple-light"></div></okendo-col>
</o-row>

<style lang="less">
  .okendo-row {
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
  <okendo-row :gutter="16">
    <okendo-col :span="6"><div class="grid-content bg-purple"></div></okendo-col>
    <okendo-col :span="6"><div class="grid-content bg-purple"></div></okendo-col>
    <okendo-col :span="6"><div class="grid-content bg-purple"></div></okendo-col>
    <okendo-col :span="6"><div class="grid-content bg-purple"></div></okendo-col>
  </okendo-row>
</div>

:::demo
```html
<okendo-row :gutter="16">
  <okendo-col :span="6"><div class="grid-content bg-purple"></div></okendo-col>
  <okendo-col :span="6"><div class="grid-content bg-purple"></div></okendo-col>
  <okendo-col :span="6"><div class="grid-content bg-purple"></div></okendo-col>
  <okendo-col :span="6"><div class="grid-content bg-purple"></div></okendo-col>
</okendo-row>

<style lang="less">
  .okendo-row {
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
  <okendo-row :gutter="16">
    <okendo-col :span="16"><div class="grid-content bg-purple"></div></okendo-col>
    <okendo-col :span="8"><div class="grid-content bg-purple"></div></okendo-col>
  </okendo-row>
  <okendo-row :gutter="16">
    <okendo-col :span="8"><div class="grid-content bg-purple"></div></okendo-col>
    <okendo-col :span="8"><div class="grid-content bg-purple"></div></okendo-col>
    <okendo-col :span="4"><div class="grid-content bg-purple"></div></okendo-col>
    <okendo-col :span="4"><div class="grid-content bg-purple"></div></okendo-col>
  </okendo-row>
  <okendo-row :gutter="16">
    <okendo-col :span="4"><div class="grid-content bg-purple"></div></okendo-col>
    <okendo-col :span="16"><div class="grid-content bg-purple"></div></okendo-col>
    <okendo-col :span="4"><div class="grid-content bg-purple"></div></okendo-col>
  </okendo-row>
</div>

:::demo
```html
<okendo-row :gutter="16">
  <okendo-col :span="16"><div class="grid-content bg-purple"></div></okendo-col>
  <okendo-col :span="8"><div class="grid-content bg-purple"></div></okendo-col>
</okendo-row>
<okendo-row :gutter="16">
  <okendo-col :span="8"><div class="grid-content bg-purple"></div></okendo-col>
  <okendo-col :span="8"><div class="grid-content bg-purple"></div></okendo-col>
  <okendo-col :span="4"><div class="grid-content bg-purple"></div></okendo-col>
  <okendo-col :span="4"><div class="grid-content bg-purple"></div></okendo-col>
</okendo-row>
<okendo-row :gutter="16">
  <okendo-col :span="4"><div class="grid-content bg-purple"></div></okendo-col>
  <okendo-col :span="16"><div class="grid-content bg-purple"></div></okendo-col>
  <okendo-col :span="4"><div class="grid-content bg-purple"></div></okendo-col>
</okendo-row>

<style lang="less">
  .okendo-row {
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

通过指定col组件的`offset`属性可以指定分栏偏移的栏数

<div class="demo-block">
  <okendo-row :gutter="16">
    <okendo-col :span="6"><div class="grid-content bg-purple"></div></okendo-col>
    <okendo-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></okendo-col>
  </okendo-row>
  <okendo-row :gutter="16">
    <okendo-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></okendo-col>
    <okendo-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></okendo-col>
  </okendo-row>
  <okendo-row :gutter="16">
    <okendo-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></okendo-col>
  </okendo-row>
</div>

:::demo
```html
<okendo-row :gutter="16">
  <okendo-col :span="6"><div class="grid-content bg-purple"></div></okendo-col>
  <okendo-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></okendo-col>
</okendo-row>
<okendo-row :gutter="16">
  <okendo-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></okendo-col>
  <okendo-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></okendo-col>
</okendo-row>
<okendo-row :gutter="16">
  <okendo-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></okendo-col>
</okendo-row>

```
:::


## 对齐方式

通过`flex`布局来对分栏进行灵活的对齐, 将type设置成`flex`, 并可通过`justify`属性来指定start, center, end, space-between, space-around其中的值来定义子元素的排版方式

<div class="demo-block">
  <okendo-row type="flex">
    <okendo-col :span="6"><div class="grid-content bg-purple"></div></okendo-col>
    <okendo-col :span="6"><div class="grid-content bg-purple-light"></div></okendo-col>
    <okendo-col :span="6"><div class="grid-content bg-purple"></div></okendo-col>
  </okendo-row>
  <okendo-row type="flex" justify="center">
    <okendo-col :span="6"><div class="grid-content bg-purple"></div></okendo-col>
    <okendo-col :span="6"><div class="grid-content bg-purple-light"></div></okendo-col>
    <okendo-col :span="6"><div class="grid-content bg-purple"></div></okendo-col>
  </okendo-row>
  <okendo-row type="flex" justify="end">
    <okendo-col :span="6"><div class="grid-content bg-purple"></div></okendo-col>
    <okendo-col :span="6"><div class="grid-content bg-purple-light"></div></okendo-col>
    <okendo-col :span="6"><div class="grid-content bg-purple"></div></okendo-col>
  </okendo-row>
  <okendo-row type="flex" justify="space-between">
    <okendo-col :span="6"><div class="grid-content bg-purple"></div></okendo-col>
    <okendo-col :span="6"><div class="grid-content bg-purple-light"></div></okendo-col>
    <okendo-col :span="6"><div class="grid-content bg-purple"></div></okendo-col>
  </okendo-row>
  <okendo-row type="flex" justify="space-around">
    <okendo-col :span="6"><div class="grid-content bg-purple"></div></okendo-col>
    <okendo-col :span="6"><div class="grid-content bg-purple-light"></div></okendo-col>
    <okendo-col :span="6"><div class="grid-content bg-purple"></div></okendo-col>
  </okendo-row>
</div>

:::demo
```html
<okendo-row type="flex">
  <okendo-col :span="6"><div class="grid-content bg-purple"></div></okendo-col>
  <okendo-col :span="6"><div class="grid-content bg-purple-light"></div></okendo-col>
  <okendo-col :span="6"><div class="grid-content bg-purple"></div></okendo-col>
</okendo-row>
<okendo-row type="flex" justify="center">
  <okendo-col :span="6"><div class="grid-content bg-purple"></div></okendo-col>
  <okendo-col :span="6"><div class="grid-content bg-purple-light"></div></okendo-col>
  <okendo-col :span="6"><div class="grid-content bg-purple"></div></okendo-col>
</okendo-row>
<okendo-row type="flex" justify="end">
  <okendo-col :span="6"><div class="grid-content bg-purple"></div></okendo-col>
  <okendo-col :span="6"><div class="grid-content bg-purple-light"></div></okendo-col>
  <okendo-col :span="6"><div class="grid-content bg-purple"></div></okendo-col>
</okendo-row>
<okendo-row type="flex" justify="space-between">
  <okendo-col :span="6"><div class="grid-content bg-purple"></div></okendo-col>
  <okendo-col :span="6"><div class="grid-content bg-purple-light"></div></okendo-col>
  <okendo-col :span="6"><div class="grid-content bg-purple"></div></okendo-col>
</okendo-row>
<okendo-row type="flex" justify="space-around">
  <okendo-col :span="6"><div class="grid-content bg-purple"></div></okendo-col>
  <okendo-col :span="6"><div class="grid-content bg-purple-light"></div></okendo-col>
  <okendo-col :span="6"><div class="grid-content bg-purple"></div></okendo-col>
</okendo-row>
```
:::

## 响应式布局

参照`Bootstrap`的响应式设计, 预定了六个响应尺寸：`xs`、`sm`、`md`、`lg`、`xl`

<div class="demo-block">
  <okendo-row :gutter="10">
    <okendo-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></okendo-col>
    <okendo-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></okendo-col>
    <okendo-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></okendo-col>
    <okendo-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></okendo-col>
  </okendo-row>
</div>



## 属性

### Row 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| gutter | 栅格间隔 | Number | - | 0 |
| type | 布局模式, 可选flex, 现代浏览器有效 | String | - | - |
| justify | flex布局下的水平排列方式 | String | start/end/center/space-between/space-around | start |
| align | flex布局下的垂直排列方式 | String | top/middle/bottom | top |

### Col 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| span | 栅格占据的列数 | Number | - | 24 |
| offset | 栅格左侧的间隔格数 | Number | - | 0 |
| push | 栅格向右移动格数 | Number | - | 0 |
| pull | 栅格向左移动格数 | Number | - | 0 |
| xs | < 768px 响应式栅格数 | Number | - | 0 |
| sm | >= 768px 响应式栅格数 | Number | - | 0 |
| md | >= 992px 响应式栅格数 | Number | - | 0 |
| lg | >= 1200px 响应式栅格数 | Number | - | 0 |
| xl | >= 1920px 响应式栅格数 | Number | - | 0 |


### 基于断电的隐藏类 