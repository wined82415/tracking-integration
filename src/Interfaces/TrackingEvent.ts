/**
 * 頁面瀏覽事件
 */
interface PageViewEvent {
  onPageView: Function
}

/**
 * 首頁瀏覽事件
 */
interface IndexViewEvent {
  onIndexView: Function
}

/**
 * 登入事件
 */
interface SignInEvent {
  onIndexView: Function
}

/**
 * 更動個人資料事件
 */
interface ChangeProfileEvent {
  onChangeProfile: Function
}

/**
 * 搜尋關鍵字事件
 */
interface KeywordSearchEvent {
  onKeywordSearch: Function
}

/**
 * 分類瀏覽
 */
interface CategoryViewEvent {
  onCategoryView: Function
}

/**
 * 商品瀏覽
 */
interface ProductViewEvent {
  onProductView: Function
}

/**
 * 加入購物車 事件
 */
interface AddToCartEvent {
  onAddToCart: Function
}

/**
 * 瀏覽購物車事件
 */
interface CartViewEvent {
  onCartView: Function
}

/**
 * 購物車結帳完成事件
 */
interface CheckoutFinishEvent {
  onCheckoutFinish: Function
}

export interface TrackingEvent
  extends PageViewEvent,
    IndexViewEvent,
    SignInEvent,
    ChangeProfileEvent,
    KeywordSearchEvent,
    CategoryViewEvent,
    ProductViewEvent,
    AddToCartEvent,
    CartViewEvent,
    CheckoutFinishEvent {}
