<template>
  <transition name="ovu-alert-fade">
    <div class="ovu-alert" 
      :class="[ typeClass, {'is-center': center} ]"
      v-show="visiable">
      <i class="ovu-alert__icon"
        :class="[ iconClass, isBigIcon ]"
        v-show="showIcon"></i>
      <div class="ovu-alert__content">
        <span class="ovu-alert__title"></span>  
      </div>  
    </div>
  </transition>
</template>
