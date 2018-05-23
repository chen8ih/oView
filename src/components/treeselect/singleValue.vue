<template>
  <div class="okendo-treeselect__value-container">
    <div v-if="instance.hasValue && !instance.trigger.searchQuery" class="okendo-treeselect__single-value">
      {{ instance.selectedNodes[0].label }}
    </div>
    <placeholder v-else-if="!instance.trigger.searchQuery" />
    <search-input key="input" ref="input" />
  </div>
</template>

<script>
import valueMixin from '../../mixins/treeSelectValue'
import Placeholder from './Placeholder'
import SearchInput from './SearchInput'
export default {
  name: 'okendo-treeselect--single-value',
  components: { Placeholder, SearchInput },
  mixins: [ valueMixin ],
  inject: [ 'instance' ]
}
</script>
