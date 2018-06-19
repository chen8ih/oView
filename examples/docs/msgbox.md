<script>
  export default {
    methods: {
      open () {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$omessage({
              type: 'info',
              message: `action: ${ action }`
            })
          }
        })
      },
      open2 () {
        this.$confirm('此操作将永远删除文件，是否继续？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$omessage({
            type: 'success',
            message: '删除成功！'
          })
        }).catch(() => {
          this.$omessage({
            type: 'info',
            message: '已取消删除'
          })
        })
      },
      open3 () {
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({value}) => {
          this.$omessage({
            type: 'success',
            message: '你的邮箱是:' + value
          })
        }).catch(() => {
          this.$omessage({
            type: 'info',
            message: '取消输入'
          })
        })
      },
      open4 () {
        this.$confirm('此操作将永远删除该文件，是否继续？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$omessage({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$omessage({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    }
  }
</script>

# 弹出消息框 Msgbox

---
模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示，确认消息和提交内容

## 消息提示

用户操作后提示用户相关信息，知道用户确认知晓后关闭

<div class="demo-block">
  <o-button type="text" @click="open">点我打开消息提示框</o-button>
</div>

:::demo
```html
<o-button type="text" @click="open">点我打开消息提示框</o-button>
<script>
  export default {
    methods: {
      open () {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$omessage({
              type: 'info',
              message: `action: ${ action }`
            })
          }
        })
      }
    }
  }
</script>
```
:::

## 确认消息

调用`$confirm`方法即可打开消息提示

<div class="demo-block">
  <o-button type="text" @click="open2">点我打开确认框</o-button>
</div>

:::demo
```html
<o-button type="text" @click="open2">点我打开确认框</o-button>
<script>
  export default {
    methods: {
      open2 () {
        this.$confirm('此操作将永远删除文件，是否继续？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$omessage({
            type: 'success',
            message: '删除成功！'
          })
        }).catch(() => {
          this.$omessage({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    }
  }
</script>
```
:::

## 提交内容

当用户进行操作是触发，中断用户操作，提示用户进入输入的对话框
调用`$prompt`方法即可打开消息提示

<div class="demo-block">
  <o-button type="text" @click="open3">点我打开提交内容框</o-button>
</div>

:::demo
```html
<o-button type="text" @click="open3">点我打开提交内容框</o-button>
<script>
  export default {
    methods: {
      open3 () {
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({value}) => {
          this.$omessage({
            type: 'success',
            message: '你的邮箱是:' + value
          })
        }).catch(() => {
          this.$omessage({
            type: 'info',
            message: '取消输入'
          })
        })
      }
    }
  }
</script>
```
:::

## 居中显示

弹出框中的内容支持居中显示

<div class="demo-block">
  <o-button type="text" @click="open4">点我打开消息框</o-button>
</div>

:::demo
```html
<o-button type="text" @click="open4">点我打开消息框</o-button>
<script>
  export default {
    methods: {
      open4 () {
        this.$confirm('此操作将永远删除该文件，是否继续？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$omessage({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$omessage({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    }
  }
</script>
```
:::

## 单独引用

如果单独饮用`OMsgbox`

    import { OMsgbox } from '@opp/oview'

则调用方法为`OMsgbox.alert`, `OMsgbox.confirm`, `OMsgbox.prompt`, 调用参数与上述例子中一致

## 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | OMsgbox标题 | string | - | - |