# 注意事项

---

## 组件命名规则
 
 基础组件一律使用O开头，比如`OIcon`, `ORow`, `OCol` 防止与系统默认标签重名

 业务组件 可根据业务名来命名，不强制要求O开头，要求尽量简介清晰

## 组件样式明名规则

  请参考：[BEM](https://github.com/Tencent/tmt-workflow/wiki/%E2%92%9B-%5B%E8%A7%84%E8%8C%83%5D--CSS-BEM-%E4%B9%A6%E5%86%99%E8%A7%84%E8%8C%83)

  组件样式一律使用o-组件名为命名控件，采取BEM方式命名

  BEM block(块) element(元素) modifier(修饰符)

      -   中划线 ：仅作为连字符使用，表示某个块或者某个子元素的多单词之间的连接记号。
      __  双下划线：双下划线用来连接块和块的子元素
      _   单下划线：单下划线用来描述一个块或者块的子元素的一种状态

      type-block__element_modifier

