<script>
  export default {
    data () {
      return {
        select: '',
        value: '',
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: '',
        value7: '',
        value8: '',
        value9: '',
        value10: '',
        value11: '',
        value12: ''
      }
    }
  }
</script>  
<style lang="less">
  .demo-block {
    .okendo-input {
      width: 180px;
    }

    .okendo-input-group {
      width: 100%;
    }
  }
</style>

# 输入框 Input

---

## 基础用法

通过鼠标键盘输入字符

<div class="demo-block">
  <okendo-input v-model="value" placeholder="请输入内容"></okendo-input>
</div>
<script>
  export default {
    data () {
      return {
        value: ''
      }
    }
  }
</script>

:::demo
```html
<okendo-input v-model="value" placeholder="请输入内容"></okendo-input>
<script>
  export default {
    data () {
      return {
        value: ''
      }
    }
  }
</script>
```
:::

## 禁用状态

<div class="demo-block">
  <okendo-input v-model="value1" :disabled="true" placeholder="请输入内容"></okendo-input>
</div>
<script>
  export default {
    data () {
      value1: ''
    }
  }
</script>

:::demo
```html
<okendo-input v-model="value1" :disabled="true" placeholder="请输入内容"></okendo-input>
<script>
  export default {
    data () {
      value1: ''
    }
  }
</script>
```
:::


## 可清空

<div class="demo-block">
  <okendo-input v-model="value2" placeholder="请输入内容" clearable></okendo-input>
</div>
<script>
  export default {
    data () {
      value2: ''
    }
  }
</script>

使用`clearable`属性即可得到一个可清空的输入框

:::demo
```html
<okendo-input v-model="value2" placeholder="请输入内容" clearable></okendo-input>
<script>
  export default {
    data () {
      value2: ''
    }
  }
</script>
```
:::

## 带Icon的输入框

可以通过`prefix-icon`和`suffix-icon`属性在input组件的首部或者尾部增加显示图标，也可以通过`slot`来放置图标

<div class="demo-block">
  <okendo-input placeholder="请输入内容" 
           v-model="value3"
           prefix-icon="k-i-search">
  </okendo-input>
  <okendo-input placeholder="请输入内容" 
           v-model="value4"
           suffix-icon="k-i-calculator">
  </okendo-input>
  <p>slot 方式</p>
  <okendo-input placeholder="请输入内容" 
           v-model="value5">
    <i slot="prefix" class="okendo-input__icon k-icon k-i-search"></i>
  </okendo-input>
  <okendo-input placeholder="请输入内容" 
           v-model="value6">
    <i slot="suffix" class="okendo-input__icon k-icon k-i-calculator"></i>
  </okendo-input>
</div>
<script>
  export default {
    data () {
      return {
        value3: '',
        value4: '',
        value5: '',
        value6: ''
      }
    }
  }
</script>

:::demo
```html
<okendo-input placeholder="请输入内容" 
           v-model="value3"
          prefix-icon="k-i-search">
</okendo-input>
<okendo-input placeholder="请输入内容" 
          v-model="value4"
          suffix-icon="k-i-calculator">
</okendo-input>
<p>slot 方式</p>
<okendo-input placeholder="请输入内容" 
          v-model="value5">
  <i slot="prefix" class="okendo-input__icon k-icon k-i-search"></i>
</okendo-input>
<okendo-input placeholder="请输入内容" 
          v-model="value6">
  <i slot="suffix" class="okendo-input__icon k-icon k-i-calculator"></i>
</okendo-input>
<script>
  export default {
    data () {
      return {
        value3: '',
        value4: '',
        value5: '',
        value6: ''
      }
    }
  }
</script>
```
:::

## 复合型输入框

可通过`prepend`或者`append`来指定在input中前置或者后置内容

<div class="demo-block">
  <div>
    <okendo-input placeholder="请输入内容" v-model="value7">
      <template slot="prepend">Http://</template>  
    </okendo-input>
  </div>
  <div style="margin-top:10px;">
    <okendo-input placeholder="请输入内容" v-model="value8">
      <template slot="append">.com</template>
    </okendo-input>
  </div>
  <div style="margin-top:10px;">
    <okendo-input placeholder="请输入内容" v-model="value9" class="ovu-input-with-select">
      <select class="ovu-select" v-model="select" slot="prepend" placeholder="请选择">
        <option value="1">广州</option>
        <option value="2">深圳</option>
        <option value="3">东莞</option>
      </select>
    </okendo-input>
  </div>
</div>
<script>
  export default {
    data () {
      return {
        value7: '',
        value8: '',
        value9: '',
        select: ''
      }
    }
  }
</script>

:::demo
```html
<div>
  <okendo-input placeholder="请输入内容" v-model="value7">
    <template slot="prepend">Http://</template>  
  </okendo-input>
</div>
<div style="margin-top:10px;">
  <okendo-input placeholder="请输入内容" v-model="value8">
    <template slot="append">.com</template>
  </okendo-input>
</div>
<div style="margin-top:10px;">
  <okendo-input placeholder="请输入内容" v-model="value9" class="ovu-input-with-select">
    <select class="ovu-select" v-model="select" slot="prepend" placeholder="请选择">
      <option value="1">广州</option>
      <option value="2">深圳</option>
      <option value="3">东莞</option>
    </select>
  </okendo-input>
</div>
<script>
  export default {
    data () {
      return {
        value7: '',
        value8: '',
        value9: '',
        select: ''
      }
    }
  }
</script>
```
:::


## 尺寸

可通过设置`size`属性来指定输入框的尺寸，除了默认的尺寸外，还提供large, small, mini三种尺寸

<div class="demo-block">
  <okendo-input placeholder="请输入内容" suffix-icon="k-i-search" v-model="value10"></okendo-input>
  <okendo-input size="medium" placeholder="请输入内容" suffix-icon="k-i-search" v-model="value10"></okendo-input>
  <okendo-input size="small" placeholder="请输入内容" suffix-icon="k-i-search" v-model="value11"></okendo-input>
  <okendo-input size="mini" placeholder="请输入内容" suffix-icon="k-i-search" v-model="value12"></okendo-input>
</div>
<script>
  export default {
    data () {
      return {
        value10: '',
        value11: '',
        value12: ''
      }
    }
  }
</script>

:::demo
```html
<okendo-input placeholder="请输入内容" suffix-icon="k-i-search" v-model="value10"></okendo-input>
<okendo-input size="medium" placeholder="请输入内容" suffix-icon="k-i-search" v-model="value10"></okendo-input>
<okendo-input size="small" placeholder="请输入内容" suffix-icon="k-i-search" v-model="value11"></okendo-input>
<okendo-input size="mini" placeholder="请输入内容" suffix-icon="k-i-search" v-model="value12"></okendo-input>
<script>
  export default {
    data () {
      return {
        value10: '',
        value11: '',
        value12: ''
      }
    }
  }
</script>
```
:::

## 联想输入框

## 自定义模版

## 带搜索的输入框

## 文本域

## 自适应高度的文本域


## 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |



## Slots

## 方法
