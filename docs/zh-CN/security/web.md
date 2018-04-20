# 前端安全性控制

---

所有发生在浏览器、单页面应用、Web页面当中的安全问题则算是“前端安全问题” 比如说，SQL注入漏洞发生在后端应用中，是后端安全问题，跨站脚本攻击（XSS）则是前端安全问题，因为它发生在用户的浏览器里

一般来说，前端安全共分为8个类型

* XSS攻击
* Iframe带来的风险
* 点击劫持
* 错误的内容判断
* 不安全的第三方依赖包
* HTTPS的陷阱
* 本地存储数据泄漏
* 静态文件完成性校验

## XSS

XSS是跨站脚本攻击（Cross-Site Scripting）的简称，攻击者通常通过浏览器直接执行用户输入的javascript脚本进行攻击

> 防御手段

对于此类初级攻击手段，主要防范思路为检查验证输入到页面的内容是否安全
对于编码也应该根据实际情况划分:

* 数据将被放置在html中，则需要进行html编码
* 数据将被放置在Url中，则需要进行url编码
* ...

此外，还有javascript编码，css编码，html属性编码，JSON编码等

其他防御措施，可以通过浏览器设置CSP HTTP Header、输入验证、开启浏览器XSS防御等，不过这些防御都有被绕过的可能

## Iframe带来的风险

iframe可以内嵌第三方网页，虽然可以为页面带来丰富的内容，但是也带来了不少的安全风险，因为iframe中的内容由第三方提供，如果内容不受控制，则攻击者可以在iframe中运行js脚本，Flash插件等，这些都可能破坏前端用户体验

另外，还存在iframe中域名过期被攻击者抢注，或者内容被攻击者替换，从而利用用户浏览器的安全漏洞下载安装木马，恶意勒索软件，那问题就比较严重了

> 防御手段

页面中尽量少用iframe, 如果一定需要使用iframe, 也应该保证iframe中的页面内容可控

在Html5中，iframe中有个sandbox的安全属性，通过它可以对iframe的行为进行各种限制，充分实现“最小权限“原则。使用sandbox的最简单的方式就是只在iframe元素中添加上这个关键词就好，就像下面这样：

    <iframe sendbox src=''></iframe>

sandbox还忠实的实现了“Secure By Default”原则，也就是说，如果你只是添加上这个属性而保持属性值为空，那么浏览器将会对iframe实施史上最严厉的调控限制，基本上来讲就是除了允许显示静态资源以外，其他什么都做不了。比如不准提交表单、不准弹窗、不准执行脚本等等，连Origin都会被强制重新分配一个唯一的值，换句话讲就是iframe中的页面访问它自己的服务器都会被算作跨域请求。

另外，sandbox也提供了丰富的配置参数，我们可以进行较为细粒度的控制。一些典型的参数如下：

allow-forms：允许iframe中提交form表单
allow-popups：允许iframe中弹出新的窗口或者标签页（例如，window.open()，showModalDialog()，target=”_blank”等等）
allow-scripts：允许iframe中执行JavaScript
allow-same-origin：允许iframe中的网页开启同源策略
更多详细的资料，可以参考[iframe中关于sandbox的介绍](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)。


## 点击劫持




## CSRF攻击


## 请求劫持与https

请求劫持主要分为两种： DNS劫持与HTTP劫持


### DNS劫持


### HTTP劫持

防范请求劫持的唯一可行方法就是尽量使用HTTPS协议访问



