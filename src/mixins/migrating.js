/*
 * @Author: oppo.chenhang
 * @Date: 2018-05-14 08:22:18
 * @Last Modified by: oppo.chenhang
 * @Last Modified time: 2018-05-14 11:30:17
 * @Desc: show migrating guide in browser console
 */

export default {
  mounted () {
    if (process.env.NODE_ENV === 'production') {
      return
    }
    if (!this.$vnode) {
      return
    }
    const { props = {}, events = {} } = this.getMigratingConfig()
    const { data, componentOptions } = this.$vnode

    const definedProps = data.attrs || {}
    const definedEvents = componentOptions.listeners || {}

    for (let propName in definedProps) {
      if (definedProps.hasOwnProperty(propName) && props[propName]) {
        console.warn(`[Element Migrating][${this.$options.name}][Attribute]: ${props[propName]}`)
      }
    }

    for (let eventName in definedEvents) {
      if (definedEvents.hasOwnProperty(eventName) && events[eventName]) {
        console.warn(`[Element Migrating][${this.$options.name}][Event]: ${events[eventName]}`)
      }
    }
  },
  methods: {
    getMigratingConfig () {
      return {
        props: {},
        events: {}
      }
    }
  }
}
