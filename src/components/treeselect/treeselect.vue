<template>
  <div
  :class="['okendo-treeselect', {
    'okendo-treeselect--single': single,
    'okendo-treeselect--multi': multiple,
    'okendo-treeselect--searchable': searchable,
    'okendo-treeselect--disabled': disabled,
    'okendo-treeselect--focused': trigger.isFocused,
    'okendo-treeselect--has-value': hasValue,
    'okendo-treeselect--open': menu.isOpen,
    'okendo-treeselect--open-above': menu.prefferedOpenDirection === 'above',
    'okendo-treeselect--open-below': menu.prefferedOpenDirection === 'below',
    'okendo-treeselect--branch-nodes-disabled': disableBranchNodes
  }]"
  @mousedown="handleMouseDown"
  ref="treeSelectWrapper">
    <template v-if="name && hasValue">
      <HiddenField v-if="single" :stringified-value="stringifyValue(internalValue[0])"></HiddenField>
      <HiddenField v-else-if="joinValues" :stringified-value="internalValue.map(stringifyValue).join(delimiter)"></HiddenField>
      <template v-else>
        <HiddenField v-for="(v, i) in internalValue" :stringified-value="stringifyValue(v)" :key="i"></HiddenField>
      </template>
    </template>
    <div class="okendo-treeselect__control">
      <single-value v-if="single" ref="value" />
      <multi-value v-else ref="value" />
      <div v-if="shouldShowX" class="okendo-treeselect__x-container" :title="multiple ? clearAllText : clearValueText" @mousedown="handleMouseDownOnClear">
        <i class="okendo-treeselect__x"></i>
      </div>
      <div v-if="!menu.isOpen || !alwaysOpen" class="okendo-treeselect__control-arrow-container" @mousedown="handleMouseDownOnArrow">
        <i :class="[ 'okendo-treeselect__control-arrow', { 'okendo-treeselect__control-arrow--rotated': menu.isOpen } ]"></i>
      </div>
    </div>
    <transition name="okendo-treeselect__menu--transition">
      <div v-if="menu.isOpen" class="okendo-treeselect__menu" ref="menu" :style="{ maxHeight: menu.optimizedHeight + 'px' }">
        <template v-if="forest.isLoaded">
          <tip v-if="localSearch.active && localSearch.noResults" type="no-results" icon="warning">{{ noResultsText }}</tip>
          <tip v-else-if="forest.normalizedOptions.length === 0" type="no-options" icon="warning">{{ noOptionsText }}</tip>
          <div v-else class="okendo-treeselect__list">
            <treeselect-option v-for="rootNode in forest.normalizedOptions" :node="rootNode" :key="rootNode.id">
              <template slot="option-label" slot-scope="{ node, shouldShowCount, count, labelClassName, countClassName }">
                <slot name="option-label" :node="node" :should-show-count="shouldShowCount" :count="count"
                  :label-class-name="labelClassName" :count-class-name="countClassName">
                  <label :class="labelClassName">
                    {{ node.label }}
                    <span v-if="shouldShowCount" :class="countClassName">({{ count }})</span>
                  </label>
                </slot>
              </template>
            </treeselect-option>
          </div>
        </template>
        <template v-else>
          <tip v-if="loading || forest.isLoading" type="loading" icon="loader">{{ loadingText }}</tip>
          <tip v-else-if="forest.loadingError" type="error" icon="error">
            {{ forest.loadingError }}
            <a class="okendo-treeselect__retry" @click="loadRootOptions" :title="retryTitle">
              {{ retryText }}
            </a>
          </tip>
        </template>
      </div>
    </transition>
  </div>
</template>

<script>
import treeselectMixin from '../../mixins/treeSelect'
import HiddenField from './hiddenValue'
import MultiValue from './multiValue'
import SingleValue from './singleValue'
import TreeselectOption from './options'
import Tip from './tip'

export default {
  name: 'OkendoTreeselect',
  components: {
    HiddenField,
    MultiValue,
    SingleValue,
    TreeselectOption,
    Tip
  },
  mixins: [ treeselectMixin ]
}
</script>
<style lang="less">
@import '../../theme-defaults/widget/treeselect.less';
</style>
