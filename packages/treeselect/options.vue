<template>
  <div class="okendo-treeselect__list-item" :class="`okendo-treeselect__indent-level-${node.level}`">
    <div :class="[ 'okendo-treeselect__option', {
      'okendo-treeselect__option--disabled': node.isDisabled,
      'okendo-treeselect__option--selected': instance.isSelected(node),
      'okendo-treeselect__option--highlight': instance.menu.current === node.id,
      'okendo-treeselect__option--matched': instance.localSearch.active && node.isMatched,
      'okendo-treeselect__option--hide': !instance.shouldShowOptionInMenu(node, false),
    } ]" @mouseenter.self="setCurrentHighlightedOption" :data-id="node.id">
      <div v-if="shouldShowArrorPlaceholder" class="okendo-treeselect__option-arrow-placeholder">&nbsp;</div>
      <div v-else-if="node.isBranch" class="okendo-treeselect__option-arrow-container" @mousedown="handleMouseDownOnOptionArrow">
        <transition name="okendo-treeselect__option-arrow--prepare" appear>
          <i class="k-icon k-i-arrow-60-down" :class="[ 'okendo-treeselect__option-arrow', { 'okendo-treeselect__option-arrow--rotated': shouldExpand } ]"></i>
        </transition>
      </div>
      <div class="okendo-treeselect__label-container" @mousedown="handleMouseDownOnOption">
        <div v-if="instance.multiple && (!instance.disableBranchNodes || node.isLeaf)" class="okendo-treeselect__checkbox-container">
          <span :class="[ 'okendo-treeselect__checkbox', {
            'okendo-treeselect__checkbox--checked': checkedState === CHECKED,
            'okendo-treeselect__checkbox--indeterminate': checkedState === INDETERMINATE,
            'okendo-treeselect__checkbox--unchecked': checkedState === UNCHECKED,
            'okendo-treeselect__checkbox--disabled': node.isDisabled,
          } ]">
            <span class="okendo-treeselect__check-mark" />
            <span class="okendo-treeselect__minus-mark" />
          </span>
        </div>
        <slot name="option-label" :node="node" :should-show-count="shouldShowCount" :count="count"
          label-class-name="okendo-treeselect__label" count-class-name="okendo-treeselect__count" />
      </div>
    </div>
    <transition name="okendo-treeselect__list--transition">
      <div v-if="shouldExpand" class="okendo-treeselect__list">
        <template v-if="node.isLoaded">
          <template v-if="node.children.length">
            <okendo-treeselect--option v-for="childNode in node.children" :node="childNode" :key="childNode.id">
              <template slot="option-label" slot-scope="{ node, shouldShowCount, count, labelClassName, countClassName }">
                <slot name="option-label" :node="node" :should-show-count="shouldShowCount" :count="count"
                  :label-class-name="labelClassName" :count-class-name="countClassName" />
              </template>
            </okendo-treeselect--option>
          </template>
          <tip v-else type="no-children" icon="warning">{{ instance.noChildrenText }}</tip>
        </template>
        <tip v-else-if="node.isPending" type="loading" icon="loader">{{ instance.loadingText }}</tip>
        <tip v-else-if="node.loadingChildrenError" type="error" icon="error">
          {{ node.loadingChildrenError }}
          <a class="okendo-treeselect__retry" @click="instance.loadChildrenOptions(node)" :title="instance.retryTitle">
            {{ instance.retryText }}
          </a>
        </tip>
      </div>
    </transition>
  </div>
</template>

<script>
import optionMixin from './mixins/treeSelectOptions'
import Tip from './tip'
export default {
  name: 'okendo-treeselect--option',
  inject: [ 'instance', 'UNCHECKED', 'INDETERMINATE', 'CHECKED' ],
  components: { Tip },
  mixins: [ optionMixin ]
}
</script>
