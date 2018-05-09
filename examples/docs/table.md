# Grid

---

## 基础用法

支持远程和本地数据显示

<div class="demo-block">
  <kendo-grid :data-source="localDataSource"></kendo-grid>
</div>

<script>
export default {
  data () {
    return  {
      localDataSource: [
        {
            "ProductID": 1,
            "ProductName": "Chai",
            "UnitPrice": 18,
            "UnitsInStock": 39,
            "Discontinued": false,
        },
        {
            "ProductID": 2,
            "ProductName": "Chang",
            "UnitPrice": 17,
            "UnitsInStock": 40,
            "Discontinued": false,
        },
        {
            "ProductID": 3,
            "ProductName": "Aniseed Syrup",
            "UnitPrice": 10,
            "UnitsInStock": 13,
            "Discontinued": false,
        },
        {
            "ProductID": 4,
            "ProductName": "Chef Anton",
            "UnitPrice": 22,
            "UnitsInStock": 53,
            "Discontinued": false,
        },
        {
            "ProductID": 5,
            "ProductName": "Chef Gumbo Mix",
            "UnitPrice": 21.35,
            "UnitsInStock": 0,
            "Discontinued": true,
        },
        {
            "ProductID": 6,
            "ProductName": "Boysenberry Spread",
            "UnitPrice": 25,
            "UnitsInStock": 120,
            "Discontinued": false,
        }
      ]
    }
  }
}
</script>

::: demo
```html

<kendo-grid :data-source="localDataSource"></kendo-grid>

```
```js
export default {
  data () {
    return  {
      localDataSource: [
        {
            "ProductID": 1,
            "ProductName": "Chai",
            "UnitPrice": 18,
            "UnitsInStock": 39,
            "Discontinued": false,
        },
        ...
      ]
    }
  }
}

```
:::

## 支持编辑

编辑是网格的基础功能，能够直接操作数据

