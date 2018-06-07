<template>
  <div class="okendo-treeselect__placeholder okendo-treeselect-helper-zoom-effect-off">
    <slot name="placeholder">{{ instance.placeholder }}</slot>
  </div>
</template>

<script>
export default {
  name: 'okendo-treeselect--placeholder',
  inject: [ 'instance' ]
}
</script>
