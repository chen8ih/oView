# 树形选择框 TreeSelect

---

## 基本用法

<div class="demo-block">
  <okendo-treeselect v-model='value' :multiple="false" :options="options"></okendo-treeselect>
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