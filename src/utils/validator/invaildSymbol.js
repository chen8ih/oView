// 不包含特殊字符
export default function (str) {
  return /^[^`{}[!(+~@#%\^&*) | \\:;\'\"><\?/=_]+$/.test(str)
}