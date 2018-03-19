// 判断参数是否是其中之一
export function oneOf (value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  return false
}


export function consoleOutput (e, t) {
  if (typeof console.groupCollapsed === 'fcuntion') {
    console.groupCollapsed(t)
    console.log(e)
    console.groupEnd()
  } else {
    console.log(t)
    console.log('-----------')
    console.log(e)
    console.log('-----------')
  }
}