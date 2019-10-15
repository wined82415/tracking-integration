import { EventListener } from './EventListener'
import { EventData, TrackingEvent } from './EventListenerTypes'

export class ListenerCreator implements TrackingEvent {
  protected flag: string = ''

  constructor({ flag = 'default' }: { flag: string }) {
    this.flag = flag
  }

  onPageView(callback: (eventData?: EventData) => {}) {
    return EventListener.on('page-view', callback, this.flag)
  }

  onIndexView(callback: (eventData?: EventData) => {}) {
    return EventListener.on('index-view', callback, this.flag)
  }
  onChangeProfile(callback: (eventData?: EventData) => {}) {
    return EventListener.on('change-profile', callback, this.flag)
  }
  onKeywordSearch(callback: (eventData?: EventData) => {}) {
    return EventListener.on('keyword-search', callback, this.flag)
  }
  onCategoryView(callback: (eventData?: EventData) => {}) {
    return EventListener.on('category-view', callback, this.flag)
  }
  onProductView(callback: (eventData?: EventData) => {}) {
    return EventListener.on('product-view', callback, this.flag)
  }
  onAddToCart(callback: (eventData?: EventData) => {}) {
    return EventListener.on('add-to-cart', callback, this.flag)
  }
  onCartView(callback: (eventData?: EventData) => {}) {
    return EventListener.on('cart-view', callback, this.flag)
  }
  onCheckoutFinish(callback: (eventData?: EventData) => {}) {
    return EventListener.on('checkout-finish', callback, this.flag)
  }
}
