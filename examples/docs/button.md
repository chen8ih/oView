<style lang="less">
  .demo-block {
    .okendo-row:not(:last-child) {
      margin-bottom: 10px;
    }
  }
</style>
# 按钮 Button

---

## 基础用法

基础的按钮用法

<div class="demo-block">
  <okendo-row>
    <okendo-button>default</okendo-button>
    <okendo-button type="primary">primary</okendo-button>
    <okendo-button type="success">success</okendo-button>
    <okendo-button type="warning">warning</okendo-button>
    <okendo-button type="danger">error</okendo-button>
    <okendo-button type="info">info</okendo-button>
  </okendo-row>
  <okendo-row>
    <okendo-button shape="circle">default</okendo-button>
    <okendo-button shape="circle" type="success">primary</okendo-button>
    <okendo-button shape="circle" type="success">success</okendo-button>
    <okendo-button shape="circle" type="warning">warning</okendo-button>
    <okendo-button shape="circle" type="danger">error</okendo-button>
    <okendo-button shape="circle" type="info">info</okendo-button>
  </okendo-row>
  <okendo-row>
    <okendo-button shape="circle" icon="search"></okendo-button>
    <okendo-button shape="circle" type="success" icon="edit"></okendo-button>
    <okendo-button shape="circle" type="success" icon="check"></okendo-button>
    <okendo-button shape="circle" type="warning" icon="delete"></okendo-button>
    <okendo-button shape="circle" type="danger" icon="close"></okendo-button>
    <okendo-button shape="circle" type="info" icon="marker-pin-target"></okendo-button>
  </okendo-row>
</div> 

`type`, `shape`, `icon`分别控制按钮类型，是否圆角，以及图标按钮的图形

:::demo
```html
<okendo-row>
  <okendo-button>default</okendo-button>
  <okendo-button type="primary">primary</okendo-button>
  <okendo-button type="success">success</okendo-button>
  <okendo-button type="warning">warning</okendo-button>
  <okendo-button type="danger">error</okendo-button>
  <okendo-button type="info">info</okendo-button>
</okendo-row>
<okendo-row>
  <okendo-button shape="circle">default</okendo-button>
  <okendo-button shape="circle" type="success">primary</okendo-button>
  <okendo-button shape="circle" type="success">success</okendo-button>
  <okendo-button shape="circle" type="warning">warning</okendo-button>
  <okendo-button shape="circle" type="danger">error</okendo-button>
  <okendo-button shape="circle" type="info">info</okendo-button>
</okendo-row>
<okendo-row>
  <okendo-button shape="circle" icon="search"></okendo-button>
  <okendo-button shape="circle" type="success" icon="edit"></okendo-button>
  <okendo-button shape="circle" type="success" icon="check"></okendo-button>
  <okendo-button shape="circle" type="warning" icon="delete"></okendo-button>
  <okendo-button shape="circle" type="danger" icon="close"></okendo-button>
  <okendo-button shape="circle" type="info" icon="marker-pin-target"></okendo-button>
</okendo-row>
```
:::

## 禁用

使用`disable`属性控制按钮是否被禁用

<div class="demo-block">
  <okendo-row>
    <okendo-button :disabled="true">default</okendo-button>
    <okendo-button type="primary" :disabled="true">primary</okendo-button>
    <okendo-button type="success" :disabled="true">success</okendo-button>
    <okendo-button type="warning" :disabled="true">warning</okendo-button>
    <okendo-button type="danger" :disabled="true">error</okendo-button>
    <okendo-button type="info" :disabled="true">info</okendo-button>
  </okendo-row>
</div>

:::demo
```html
<okendo-row>
  <okendo-button :disabled="true">default</okendo-button>
  <okendo-button type="primary" :disabled="true">primary</okendo-button>
  <okendo-button type="success" :disabled="true">success</okendo-button>
  <okendo-button type="warning" :disabled="true">warning</okendo-button>
  <okendo-button type="danger" :disabled="true">error</okendo-button>
  <okendo-button type="info" :disabled="true">info</okendo-button>
</okendo-row>
```
:::

## 按钮尺寸

按钮有三种尺寸： 大、默认（中）、小
通过设置`size`为`large`或者`small`, 将按钮设置成大和小尺寸，不设置则为默认尺寸

<div class="demo-block">
  <okendo-row>
    <okendo-button type="success" size="large">large</okendo-button>
    <okendo-button type="success">default</okendo-button>
    <okendo-button type="success" size="small">small</okendo-button>
  </okendo-row>
  <okendo-row>
    <okendo-button type="success" shape="circle" size="large">large</okendo-button>
    <okendo-button type="success" shape="circle">default</okendo-button>
    <okendo-button type="success" shape="circle" size="small">small</okendo-button>
  </okendo-row>
</div>

:::demo
```html
<okendo-row>
  <okendo-button type="success" size="large">large</okendo-button>
  <okendo-button type="success">default</okendo-button>
  <okendo-button type="success" size="small">small</okendo-button>
</okendo-row>
<okendo-row>
  <okendo-button type="success" shape="circle" size="large">large</okendo-button>
  <okendo-button type="success" shape="circle">default</okendo-button>
  <okendo-button type="success" shape="circle" size="small">small</okendo-button>
</okendo-row>
```
:::

## 图标按钮

带图标的按钮

<div class="demo-block">
  <okendo-row>
    <okendo-button type="success" icon="search">Search</okendo-button>
    <okendo-button type="success" shape="circle" icon="search">Search</okendo-button>
  </okendo-row>
</div>

:::demo
```html
<okendo-row>
  <okendo-button type="success" icon="search">Search</okendo-button>
  <okendo-button type="success" shape="circle" icon="search">Search</okendo-button>
</okendo-row>
```
:::

## 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 类型 | String | primary / success / warning / danger / info / text | - |
| size | 尺寸 | String | large / small | - |
| shape | 形状 | String | circle / circle-outline | - |
| icon | 图标 | String | - | - |
| disabled | 是否禁用状态 | Boolean | - | false |
| image-url | 图片图标地址 | String | - | - |
