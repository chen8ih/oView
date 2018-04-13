<template>
  <button class="o-button" @click="handerClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'OButton',
  methods: {
    handerClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
