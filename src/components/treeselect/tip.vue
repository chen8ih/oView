<template>
  <div :class="`okendo-treeselect__tip okendo-treeselect__${type}-tip`">
    <div class="okendo-treeselect__icon-container"><span :class="`okendo-treeselect__icon-${icon}`" /></div>
    <span :class="`okendo-treeselect__tip-text okendo-treeselect__${type}-tip-text`"><slot /></span>
  </div>
</template>

<script>
export default {
  name: 'okendo-treeselect--tip',
  props: {
    type: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
