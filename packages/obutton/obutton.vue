<template>
  <button class="o-button" @click="handerClick"></button>
</template>

<script>
  export default {
    methods: {
      handerClick(evt) {
        this.$emit('click', evt)
      }
    }
  }
</script>
