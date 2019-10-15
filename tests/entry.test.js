const { WashopEventListener } = require('../src/index.ts')

describe('WashopEventListener 測試', () => {
  beforeEach(() => {
    return WashopEventListener.clearAll()
  })

  test('測試 on 註冊事件', () => {
    WashopEventListener.on('page-view', event => {})

    expect(WashopEventListener.getListeners('page-view')).toHaveLength(1)
  })

  test('測試 on 註冊事件回傳', () => {
    let instance = WashopEventListener.on('page-view', event => {})

    expect(instance).not.toBeNull()
  })

  test('測試 off 註銷事件', () => {
    let listener = WashopEventListener.on('page-view', event => {})

    WashopEventListener.off('page-view', listener.id)

    expect(WashopEventListener.getListeners('page-view')).toHaveLength(0)
  })

  test('測試 dispatch 觸發事件', () => {
    const mockCallback = jest.fn(() => {})

    WashopEventListener.on('page-view', mockCallback)

    WashopEventListener.dispatch('page-view')

    expect(mockCallback.mock.calls.length).toBe(1)
  })

  test('測試 dispatch 觸發事件', () => {
    const mockCallback = jest.fn(() => {})

    WashopEventListener.on('page-view', mockCallback)
    WashopEventListener.on('page-view', mockCallback)
    WashopEventListener.on('index', mockCallback)
    WashopEventListener.on('page-view', mockCallback)
    WashopEventListener.on('page-view', mockCallback)

    WashopEventListener.dispatch('page-view')

    expect(mockCallback.mock.calls.length).toBe(4)
  })
})
