# 组件库开发心得

---

### 通配符选择器

class*    了解 css 匹配远离

### 盒子模型 border-box和content-box区别

box-sizing: border-box;
box-sizing: content-box;

box-sizing 属性可以被用来调整这些表现:

content-box  是默认值。如果你设置一个元素的宽为100px，那么这个元素的内容区会有100px宽，并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中。
border-box 告诉浏览器去理解你设置的边框和内边距的值是包含在width内的。也就是说，如果你将一个元素的width设为100px,那么这100px会包含其它的border和padding，内容区的实际宽度会是width减去border + padding的计算值。大多数情况下这使得我们更容易的去设定一个元素的宽高。
一些专家甚至建议所有的Web开发者们将所有的元素的box-sizing都设为border-box。