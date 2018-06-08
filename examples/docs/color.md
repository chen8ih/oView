<style lang="less">
  .demo-color-box {
    border-radius: 4px;
    padding: 20px;
    margin: 5px 0;
    height: 74px;
    box-sizing: border-box;
    color: #fff;
    font-size: 14px;
    font-weight: 500;

    .value {
      font-size: 12px;
      opacity: 0.69;
      line-height: 24px;
    }
  }

  .bg-primary {
    background-color: #05b570;
  }

  .bg-primary-light {
    background-color: #01d182;
  }

  .bg-primary-dark {
    background-color: #059157;
  }

  .bg-success {
    background-color: #05b570;
  }

  .bg-warning {
    background-color: #fcaa31;
  }

  .bg-error {
    background-color: #ff4c4c;
  }

  .bg-text-primary {
    background-color: #252627;
  }

  .bg-text-regular {
    background-color: #66686d;
  }

  .bg-text-secondary {
    background-color: #989ba2;
  }

  .bg-text-placeholder {
    background-color: #c9ccd3;
  }

  .bg-aid-icon {
    background-color: #858994;
  }

  .bg-aid-disabled {
    background-color: #d0d2d8;
  }

  .bg-aid-border {
    background-color: #dfe0e2;
  }

  .bg-aid-divider {
    background-color: #ebebeb;
    color: #66686d;
  }

  .bg-aid-modal {
    background-color: #000;
    opacity: .4;
  }

  .bg-aid-background {
    background-color: #f6f6f6;
    color: #66686d;
  }

  .bg-aid-white-background {
    background-color: #fff;
    border: 1px dashed #dfe0e2;
    color: #66686d;
  }

  .bg-aid-blank-background {
    background-color: #000;
  }

  [class*=" bg-border-"] {
    color: #989ba2;
  }
</style> 
# 色彩 Color

---

okendo根据公司品牌规范制定了一套颜色模块，为所有构建的系统提供一致的外观视觉感受

## 主色

使用绿色作为主色调， 其中Light Primary用于`hover`, Dark Primary用于`active`
<o-row :gutter="16">
  <o-col :span="8">
    <div class="demo-color-box bg-primary">
      Primary
      <div class="value">#05b570</div>
    </div>
  </o-col>
  <o-col :span="8">
    <div class="demo-color-box bg-primary-light">
      Light Primary
      <div class="value">#01d182</div>
    </div>
  </o-col>
  <o-col :span="8">
    <div class="demo-color-box bg-primary-dark">
      Dark Primary
      <div class="value">#059157</div>
    </div>
  </o-col>
</o-row>

## 辅助色

辅助色是具有代表性的颜色，常用于标示信息提示，比如成功，警告和失败

<o-row :gutter="16">
  <o-col :span="8">
    <div class="demo-color-box bg-success">
      Success
      <div class="value">#05b570</div>
    </div>
  </o-col>
  <o-col :span="8">
    <div class="demo-color-box bg-warning">
      Warning
      <div class="value">#fcaa31</div>
    </div>
  </o-col>
  <o-col :span="8">
    <div class="demo-color-box bg-error">
      Error
      <div class="value">#ff4c4c</div>
    </div>
  </o-col>
</o-row>

## 文本颜色

根据不同状态显示不同文本显示

<o-row :gutter="16">
  <o-col :span="6">
    <div class="demo-color-box bg-text-primary">
      Text Primary
      <div class="value">#252627</div>
    </div>
  </o-col>
  <o-col :span="6">
    <div class="demo-color-box bg-text-regular">
      Text Regular
      <div class="value">#66686d</div>
    </div>
  </o-col>
  <o-col :span="6">
    <div class="demo-color-box bg-text-secondary">
      Text Secondary
      <div class="value">#989ba2</div>
    </div>
  </o-col>
  <o-col :span="6">
    <div class="demo-color-box bg-text-placeholder">
      Text PlaceHolder
      <div class="value">#c9ccd3</div>
    </div>
  </o-col>
</o-row>


## 中性色

常用于标示背景，边框，阴影等，用于体现出页面的层次结构

<o-row :gutter="16">
  <o-col :span="6">
    <div class="demo-color-box bg-aid-icon">
      辅助/图标 Icon
      <div class="value">#858994</div>
    </div>
  </o-col>
  <o-col :span="6">
    <div class="demo-color-box bg-aid-disabled">
      失效/禁用
      <div class="value">#d0d2d8</div>
    </div>
  </o-col>
  <o-col :span="6">
    <div class="demo-color-box bg-aid-border">
      边框
      <div class="value">#dfe0e2</div>
    </div>
  </o-col>
  <o-col :span="6">
    <div class="demo-color-box bg-aid-divider">
      分割
      <div class="value">#ebebeb</div>
    </div>
  </o-col>
</o-row>
<o-row :gutter="16">
  <o-col :span="6">
    <div class="demo-color-box bg-aid-modal">
      弹出层蒙版
      <div class="value">#000 40%</div>
    </div>
  </o-col>
  <o-col :span="6">
    <div class="demo-color-box bg-aid-background">
      背景
      <div class="value">#f6f6f6</div>
    </div>
  </o-col>
  <o-col :span="6">
    <div class="demo-color-box bg-aid-blank-background">
      黑色背景
      <div class="value">#000</div>
    </div>
  </o-col>
  <o-col :span="6">
    <div class="demo-color-box bg-aid-white-background">
      白色背景
      <div class="value">#fff</div>
    </div>
  </o-col>
</o-row>
