// 是否为全英文或字母
export default function (str) {
  return /^[0-9a-zA-Z]+$/.test(str)
}