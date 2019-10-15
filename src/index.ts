import { filter, List } from 'lodash'
import { EventData, Listener } from './EventListenerTypes'
import { Observable, from } from 'rxjs'
export class WashopEventListener {
  /**
   * 監聽器池
   */
  protected static eventPool: Listener[] = []

  /**
   * 取得 事件監聽器
   *
   * @param string eventName
   * @param string? flag
   *
   * @returns Listener[]
   */
  public static getListeners(
    eventName: string,
    flag: string = 'default'
  ): Listener[] {
    return filter(WashopEventListener.eventPool, {
      eventName,
      flag
    })
  }

  /**
   *
   * @param string eventName
   * @param Function callback
   * @param string? flag
   *
   * @returns Listener
   */
  public static on(
    eventName: string,
    callback: (eventData?: EventData) => {},
    flag: string = 'default'
  ) {
    WashopEventListener.eventPool.push({
      id: WashopEventListener.eventPool.length,
      eventName,
      handler: callback,
      flag
    } as Listener)

    return {
      id: WashopEventListener.eventPool.length - 1,
      eventName,
      handler: callback,
      flag
    } as Listener
  }

  /**
   * 註銷 事件監聽器
   *
   * @param string eventName
   * @param number listenerId
   */
  public static off(eventName: string, listenerId: number) {
    delete WashopEventListener.eventPool[listenerId]
  }

  /**
   * 清除 所有事件監聽器
   */
  public static clearAll() {
    WashopEventListener.eventPool = []
  }

  /**
   *
   * @param string eventName
   * @param EventData? eventData
   */
  public static dispatch(eventName: string, eventData?: EventData) {
    from(WashopEventListener.getListeners(eventName)).subscribe(
      (listener: Listener) => {
        listener.handler.apply(listener, [eventData])
      }
    )
  }
}
