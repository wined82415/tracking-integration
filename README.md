### GTM 實作網站事件

#### Data 基礎包含
```
{
    viewing: {
        product: {}, // 當前商品
        collection: [] // 同質商品
    },
    preAdd: {
        product: {} // 加到購物車的商品
    },
    staging: {
        fees: {
            total: number, // 購物車金額
            shipping: number, // 購物車運費
        }, 
        items: [], // 購物車商品
        discount: [], // 購物車折扣不計價商品
    }
}

```

```
  var site = new window.Waudit({ flag: 'test' })
  
  site.onPageView(function(data) {

  })
  
  site.onIndexView(function(data) {

  })
  
  site.onChangeProfile(function(data) {

  })
  
  site.onKeywordSearch(function(data) {
      // data.keyword
  })
  
  site.onCategoryView(function(data) {
      // data.category
  })
  
  site.onProductView(function(data) {
      // data.viewing.product
  })
  
  site.onAddToCart(function(data) {   
      // data.preAdd.product
  })
  
  site.onCartView(function(data) {
      // data.staging.fees
      // data.staging.items
      // data.staging.discount
  })
  
  site.onCheckoutFinish(function(data) {
      // data.order_id
  })
```