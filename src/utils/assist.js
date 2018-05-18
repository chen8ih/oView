const hasOwnProperty = Object.prototype.hasOwnProperty
// 判断参数是否是其中之一
export function oneOf (value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  return false
}

export function hasOwn (obj, value) {
  return hasOwnProperty.call(obj, value)
}

// 判断变量是否存在
export function isDef (val) {
  return val !== undefined && val !== null
}

// 判断是否为韩文
export function isKorean (text) {
  const reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi
  return reg.test(text)
}
