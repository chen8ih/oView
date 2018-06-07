<template>
  <kendo-calendar class="okendo-calendar"
    :calture="calture"
    :datas="datas"
    :value="value"
    :start="start"
    :depth="depth"
    :week-number="weekNumber"
    :disable-dates="disabledDates"
    :footer="footer"
    :format="format"
    @navigate="onNavigate"></kendo-calendar>
</template>

<script>
import { oneOf } from 'oview-ui/src/utils/assist'
export default {
  name: 'OKendoCalendar',
  props: {
    datas: Array,
    value: String,
    start: String,
    depth: {
      validator (value) {
        return oneOf(value, ['month', 'year', 'decade', 'century'])
      }
    },
    weekNumber: {
      type: Boolean,
      default: true
    },
    disabledDates: {
      type: Array,
      default: () => []
    },
    footer: String,
    format: {
      type: String,
      default: 'M/d/yyyy'
    }
  },
  mounted () {
    console.log(this)
  },
  data () {
    return  {
      currentValue: this.value === undefined || this.value === null ? new Date() : this.value,
      calture: 'zh-CN'
    }
  },
  watch: {
    'value' (val, oldValue) {
      this.setCurrentValue(val)
    }
  },
  methods: {
    onNavigate (event) {
      this.$emit('navigate', event)
    },
    setCurrentValue (value) {
      if (value === this.currentValue) {
        return
      }
      this.currentValue = value
    }
  }
}
</script>

