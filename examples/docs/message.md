<script>
  export default {
    methods: {
      open () {
        this.$omessage('这是一条消息提示')
      },
      open1 () {
        this.$omessage({
          message: '这是一条成功的消息',
          type: 'success'
        })
      },
      open2 () {
        this.$omessage({
          message: '这是一条警告的消息',
          type: 'warning'
        })
      },
      open3 () {
        this.$omessage.error('这是一条错误的消息')
      },
      open4 () {
        this.$omessage({
          message: '这是一条可关闭的成功消息，点右侧X号关闭',
          showClose: true,
          type: 'success'
        })
      },
      open5 () {
        this.$omessage({
          message: '这是一条可关闭的警告消息，点右侧X号关闭',
          showClose: true,
          type: 'warning'
        })
      },
      open6 () {
        this.$omessage({
          message: '这是一条可关闭的错误消息，点右侧X号关闭',
          showClose: true,
          type: 'error'
        })
      }
    }
  }
</script>

# 消息提示 Message

---

常用于主动操作后的反馈提示。 与Notification的区别是后者更多用于系统级别的被动提醒

## 基础用法

在顶部出现，3秒后消失

<div class="demo-block">
  <o-button :plain="true" @click="open">打开消息提示</o-button>
</div>

:::demo
```html
<o-button :plain="true" @click="open">打开消息提示</o-button>
<script>
  export default {
    methods: {
      open () {
        this.$omessage('这是一条消息提示')
      }
    }
  }
</script>
```
:::

## 不同状态的消息提示框

<div class="demo-block">
  <o-button :plain="true" @click="open1">成功</o-button>
  <o-button :plain="true" @click="open2">警告</o-button>
  <o-button :plain="true" @click="open3">错误</o-button>
</div>

:::demo
```html
<o-button :plain="true" @click="open1">成功</o-button>
<o-button :plain="true" @click="open2">警告</o-button>
<o-button :plain="true" @click="open3">错误</o-button>
<script>
  export default {
    methods: {
      open1 () {
        this.$omessage({
          message: '这是一条成功的消息',
          type: 'success'
        })
      },
      open2 () {
        this.$omessage({
          message: '这是一条警告的消息',
          type: 'warning'
        })
      },
      open3 () {
        this.$omessage.error('这是一条错误的消息')
      }
    }
  }
</script>
```
:::

## 添加可关闭按钮

<div class="demo-block">
  <o-button :plain="true" @click="open4">成功</o-button>
  <o-button :plain="true" @click="open5">警告</o-button>
  <o-button :plain="true" @click="open6">错误</o-button>
</div>

:::demo
```html
<o-button :plain="true" @click="open4">成功</o-button>
<o-button :plain="true" @click="open5">警告</o-button>
<o-button :plain="true" @click="open6">错误</o-button>
<script>
  export default {
    methods: {
      open4 () {
        this.$omessage({
          message: '这是一条可关闭的成功消息，点右侧X号关闭',
          showClose: true,
          type: 'success'
        })
      },
      open5 () {
        this.$omessage({
          message: '这是一条可关闭的警告消息，点右侧X号关闭',
          showClose: true,
          type: 'warning'
        })
      },
      open6 () {
        this.$omessage({
          message: '这是一条可关闭的错误消息，点右侧X号关闭',
          showClose: true,
          type: 'error'
        })
      }
    }
  }
</script>
```
:::

## 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 类型 | String |  success / warning / error | - |
| message | 提示文本 | String | - | - |
| showClose | 是否显示关闭按钮 | Boolean | - | - |


## 方法

调用this.$omessage时会返回当前Message的实例， 如需手动关闭，可直接调用close方法

```html
let oMessge = this.$omessage('这是一条提示消息')
oMessage.close()
```

| 事件名      | 说明         | 回调参数     |
|------------ |-------------- |---------- |
| close | 关闭当前的Message | - |
