const { EventListener } = require('../src/EventListener.ts')

describe('EventListener 測試', () => {
  beforeEach(() => {
    return EventListener.clearAll()
  })

  test('測試 on 註冊事件', () => {
    EventListener.on('page-view', event => {})

    expect(EventListener.getListeners('page-view')).toHaveLength(1)
  })

  test('測試 on 註冊事件回傳', () => {
    let instance = EventListener.on('page-view', event => {})

    expect(instance).not.toBeNull()
  })

  test('測試 on 註冊事件 包含 flag', () => {
    EventListener.on('page-view', event => {}, 'ttt')

    expect(EventListener.getListeners('page-view')).toHaveLength(1)
    expect(EventListener.getListeners('page-view', 'ttt')).toHaveLength(1)
    expect(EventListener.getListeners('page-view', 'C')).toHaveLength(0)
  })

  test('測試 off 註銷事件', () => {
    let listener = EventListener.on('page-view', event => {})

    EventListener.off('page-view', listener.id)

    expect(EventListener.getListeners('page-view')).toHaveLength(0)
  })

  test('測試 dispatch 觸發事件', () => {
    const mockCallback = jest.fn(() => {})

    EventListener.on('page-view', mockCallback)

    EventListener.dispatch('page-view')

    expect(mockCallback.mock.calls.length).toBe(1)
  })

  test('測試 dispatch 觸發事件', () => {
    const mockCallback = jest.fn(() => {})

    EventListener.on('page-view', mockCallback)
    EventListener.on('page-view', mockCallback)
    EventListener.on('index', mockCallback)
    EventListener.on('page-view', mockCallback)
    EventListener.on('page-view', mockCallback)

    EventListener.dispatch('page-view')

    expect(mockCallback.mock.calls.length).toBe(4)
  })
})
