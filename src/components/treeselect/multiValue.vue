<template>
  <div class="okendo-treeselect__value-container">
    <transition-group tag="div" class="okendo-treeselect__multi-value" name="okendo-treeselect__multi-value-item--transition" appear>
      <template v-for="node in instance.visibleValue">
        <div class="okendo-treeselect__multi-value-item-container" :key="'value-' + node.id">
          <div :class="[ 'okendo-treeselect__multi-value-item', { 'okendo-treeselect__multi-value-item-disabled': node.isDisabled } ]" @mousedown="handleMouseDownOnValueItem($event, node)">
            <span class="okendo-treeselect__multi-value-label">{{ node.label }}</span>
            <span class="okendo-treeselect__icon okendo-treeselect__value-remove"><delete-icon /></span>
          </div>
        </div>
      </template>
      <div v-if="instance.hasExceededLimit" class="okendo-treeselect__limit-tip okendo-treeselect-helper-zoom-effect-off" key="limit-tip">
        <span class="okendo-treeselect__limit-tip-text">{{ limitText }}</span>
      </div>
      <placeholder v-if="!instance.hasValue && !instance.trigger.searchQuery" key="placeholer" />
      <search-input key="input" ref="input" />
    </transition-group>
  </div>
</template>

<script>
import valueMixin from '../../mixins/treeSelectValue'
import Placeholder from './Placeholder'
import SearchInput from './SearchInput'

export default {
  name: 'okendo-treeselect--multi-value',
  components: { Placeholder, SearchInput },
  mixins: [ valueMixin ],
  inject: [ 'instance' ]
}
</script>
