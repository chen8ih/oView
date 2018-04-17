// 验证邮箱地址是否合法
export default function (str) {
  return /^[a-zA-Z0-9_.-]+\@([a-zA-Z0-9-]+.)+[a-zA-Z0-9]{2,4}$/.test(str)
}