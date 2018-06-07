# 树形选择框 TreeSelect

---

## 基本用法

<div class="demo-block">
  <o-treeselect v-model='value' :multiple="true" :options="options"></o-treeselect>
</div>

<script>
export default {
  data () {
    return  {
      value: null,
      options: [
        {
          id: 'a',
          label: 'a',
          children: [{
            id: 'aa',
            label: 'aa',
            children: [
              {
                id: 'cc',
                label: 'cc'
              }
            ]
          }, {
            id: 'ab',
            label: 'ab',
          }],
        }, 
        {
          id: 'b',
          label: 'b',
        }, 
        {
          id: 'c',
          label: 'c',
        }
      ]
    }
  }
}
</script>