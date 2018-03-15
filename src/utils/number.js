// 判断两个浮点数之间是否存在误差
export function withinErrorMargin (left, right) {
  return Math.abs(left - right) < Number.EPSILON * Math.pow(2, 2)
}
