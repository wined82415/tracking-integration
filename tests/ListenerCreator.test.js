const { EventListener } = require('../src/EventListener.ts')
const { ListenerCreator } = require('../src/ListenerCreator')

describe('監聽器製造器測試', () => {
  beforeEach(() => {
    return EventListener.clearAll()
  })

  test('測試 page-view ', () => {
    let target = new ListenerCreator({ flag: 'ga' })

    const mockCallback = jest.fn(() => {})

    target.onPageView(mockCallback)

    expect(EventListener.getListeners('page-view', 'ga')).toHaveLength(1)
  })

  test('測試 index-view ', () => {
    let target = new ListenerCreator({ flag: 'ga' })

    const mockCallback = jest.fn(() => {})

    target.onIndexView(mockCallback)

    expect(EventListener.getListeners('page-view', 'ga')).toHaveLength(0)
    expect(EventListener.getListeners('index-view', 'ga')).toHaveLength(1)
  })

  test('測試 change-profile', () => {
    let target = new ListenerCreator({ flag: 'ga' })

    const mockCallback = jest.fn(() => {})

    target.onChangeProfile(mockCallback)

    expect(EventListener.getListeners('page-view', 'ga')).toHaveLength(0)
    expect(EventListener.getListeners('change-profile', 'ga')).toHaveLength(1)
  })

  test('測試 keyword-search', () => {
    let target = new ListenerCreator({ flag: 'ga' })

    const mockCallback = jest.fn(() => {})

    target.onKeywordSearch(mockCallback)

    expect(EventListener.getListeners('page-view', 'ga')).toHaveLength(0)
    expect(EventListener.getListeners('keyword-search', 'ga')).toHaveLength(1)
  })

  test('測試 category-view', () => {
    let target = new ListenerCreator({ flag: 'ga' })

    const mockCallback = jest.fn(() => {})

    target.onCategoryView(mockCallback)

    expect(EventListener.getListeners('page-view', 'ga')).toHaveLength(0)
    expect(EventListener.getListeners('category-view', 'ga')).toHaveLength(1)
  })

  test('測試 product-view', () => {
    let target = new ListenerCreator({ flag: 'ga' })

    const mockCallback = jest.fn(() => {})

    target.onProductView(mockCallback)

    expect(EventListener.getListeners('page-view', 'ga')).toHaveLength(0)
    expect(EventListener.getListeners('product-view', 'ga')).toHaveLength(1)
  })

  test('測試 add-to-cart', () => {
    let target = new ListenerCreator({ flag: 'ga' })

    const mockCallback = jest.fn(() => {})

    target.onAddToCart(mockCallback)

    expect(EventListener.getListeners('page-view', 'ga')).toHaveLength(0)
    expect(EventListener.getListeners('add-to-cart', 'ga')).toHaveLength(1)
  })

  test('測試 cart-view', () => {
    let target = new ListenerCreator({ flag: 'ga' })

    const mockCallback = jest.fn(() => {})

    target.onCartView(mockCallback)

    expect(EventListener.getListeners('page-view', 'ga')).toHaveLength(0)
    expect(EventListener.getListeners('cart-view', 'ga')).toHaveLength(1)
  })

  test('測試 checkout-finish', () => {
    let target = new ListenerCreator({ flag: 'ga' })

    const mockCallback = jest.fn(() => {})

    target.onCheckoutFinish(mockCallback)

    expect(EventListener.getListeners('page-view', 'ga')).toHaveLength(0)
    expect(EventListener.getListeners('checkout-finish', 'ga')).toHaveLength(1)
  })
})
