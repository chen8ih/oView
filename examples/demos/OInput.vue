<template>
  <div>
    <o-input v-model="value" placeholder="请输入相关内容" style="width: 300px"></o-input>
    <br>
    <o-input v-model="value1" size="large" placeholder="large size"></o-input>
  </div>
</template>

<script>
import OInput from '../components/o-input'
export default {
  components: {
    OInput
  },
  data () {
    return {
      value: '',
      value1: ''
    }
  }
}
</script>
