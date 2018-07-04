<script>
  export default {
    data () {
      return {
        dialogVisiable: false,
        centerDialogVisible: false
      }
    },
    methods: {
      handleClose (done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done()
          })
          .catch(_ => {})
      }
    }
  }
</script>  
# 对话框 Dialog

---

## 基本用法

Dialog弹出一个对话框，适合需要定制化更大的场景

<div class="demo-block">
  <o-button type="text" @click="dialogVisiable = true">点击打开 Dialog</o-button>

  <o-dialog 
    title="提示"
    :visible.sync="dialogVisiable"
    width="30%"
    :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <o-button type="default" @click="dialogVisiable = false">取 消</o-button>
        <o-button type="primary" @click="dialogVisible = false">确 定</o-button>  
      </span>
    </o-dialog>
</div>

:::demo
```html
<o-button type="text" @click="dialogVisiable = true">点击打开 Dialog</o-button>

<o-dialog 
  title="提示"
  :visible.sync="dialogVisiable"
  width="30%"
  :before-close="handleClose">
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <o-button type="default" @click="dialogVisiable = false">取 消</o-button>
      <o-button type="primary" @click="dialogVisible = false">确 定</o-button>  
    </span>
</o-dialog>

<script>
  data () {
    return {
      dialogVisiable: false
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
</script>
```
:::

> `before-close` 仅当用户通过点击关闭图标或遮罩关闭Dialog时起效, 如果在`footer`具名slot里添加了用于关闭Dialog的按钮，那么可以在按钮的点击回调函数里加入`before-close`时相关逻辑


## 自定义内容

Dialog组件的内容可以是任意的，甚至可以是表格或者表单，下面是应用了Table和Form组件的两个实例


## 嵌套的Dialog

~~如果需要在一个Dialog内部另外嵌套一个Dialog, 需要使用`append-to-body`属性, 不建议这么干，所以不写例子了~~


## 居中布局

标题和底部可水平居中

<div class="demo-block">
  <o-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</o-button>

  <o-dialog 
    title="提示"
    :visible.sync="centerDialogVisible"
    width="30%"
    center>
    <span>需要注意的是内容是默认不居中的</span>
    <span slot="footer" class="dialog-footer">
      <o-button type="default" @click="centerDialogVisible = false">取 消</o-button>
      <o-button type="primary" @click="centerDialogVisible = false">确 定</o-button>  
    </span> 
  </o-dialog>
</div>


:::demo
```html
<o-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</o-button>

<o-dialog 
  title="提示"
  :visible.sync="centerDialogVisible"
  width="30%"
  center>
  <span>需要注意的是内容是默认不居中的</span>
  <span slot="footer" class="dialog-footer">
    <o-button type="default" @click="centerDialogVisible = false">取 消</o-button>
    <o-button type="primary" @click="centerDialogVisible = false">确 定</o-button>  
  </span> 
</o-dialog>

<script>
  data () {
    return {
      centerDialogVisible: false
    }
  }
</script>
```
:::

## 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| visible | 是否显示Dialog, 可以使用sync修饰符 | Boolean | - | false |
| title | Dialog的标题，也可通过具名slot传入 | String | - | - |
| width | Dialog的宽度 | string | - | 50% |
| fullscreen | 是否为全屏的Dialog | Boolean | - | false |
| top | Dialog Css中的margin-top的高度 | string | - | 15vh |
| modal | 是否需要显示遮罩层 | Boolean | - | true |
| modal-append-to-body | 遮罩层是否插入至body元素上，若为false, 则遮罩层会插入至Dialog的父元素 | Boolean | - | false
| append-to-body | Dialog自身是否插入到Body元素上，嵌套的Dialog必须指定该属性并赋值为true | Boolean | - |false |
| lock-scroll | 是否在Dialog出现时将Dialog滚动锁定 | Boolean | - | true | 
| custom-class | Dialog自定义类名 | string | - | - |
| close-on-click-modal | 是否可以通过modal关闭Dialog | boolean | - | true |
| close-on-press-escape | 是否支持直接按下esc关闭Dialog | boolean | - | true | 
| show-close | 是否显示关闭按钮 | boolean | - | true |
| before-close | 关闭前的回调，会暂停Dialog的关闭 | function（done）| - | - |
| center | 是否对弹框内容进行居中显示 | boolean | - | false |

## slot

|||
| - | - |
| -      | Dialog的内容          |
| title  | Dialog标题区的内容     |
| footer | Dialog按钮操作区的内容  |

## 事件

| 事件名      | 说明         | 回调参数     |
|------------ |-------------- |---------- |
| open | Dialog打开的回调 | - |
| close | Dialog关闭时的回调 | - |
| closed | Dialog关闭动画结束时的回调 | - |
