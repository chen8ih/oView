/*
 * @Author: oppo.chenhang
 * @Date: 2018-05-14 08:18:47
 * @Last Modified by: oppo.chenhang
 * @Last Modified time: 2018-05-14 11:19:38
 * @Desc: 调用/触发指定子孙组件的时间
 */
function childEmitter (componentName, eventName, params) {
  this.$children.forEach(child => {
    let name = child.$options.componentName
    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params))
    } else {
      childEmitter.apply(child, [componentName, eventName].concat([params]))
    }
  })
}

export default {
  methods: {
    dispatch (componentName, eventName, params) {
      let parent = this.$parent || this.$root
      let name = parent.$options.componentName

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent

        if (parent) {
          name = parent.$options.componentName
        }
      }

      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params))
      }
    },
    broadcast (componentName, eventName, params) {
      childEmitter.call(this, componentName, eventName, params)
    }
  }
}
