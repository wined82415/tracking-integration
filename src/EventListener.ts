import { filter, List } from 'lodash'
import { EventData, Listener } from './EventListenerTypes'
import { Observable, from } from 'rxjs'

export class EventListener {
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
  public static getListeners(eventName: string, flag?: string): Listener[] {
    return filter(
      EventListener.eventPool,
      flag ? { eventName, flag } : { eventName }
    ) as Listener[]
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
    EventListener.eventPool.push({
      id: EventListener.eventPool.length,
      eventName,
      handler: callback,
      flag
    } as Listener)

    return {
      id: EventListener.eventPool.length - 1,
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
    delete EventListener.eventPool[listenerId]
  }

  /**
   * 清除 所有事件監聽器
   */
  public static clearAll() {
    EventListener.eventPool = []
  }

  /**
   *
   * @param string eventName
   * @param EventData? eventData
   */
  public static dispatch(eventName: string, eventData?: EventData) {
    from(EventListener.getListeners(eventName)).subscribe(
      (listener: Listener) => {
        listener.handler.apply(listener, [eventData])
      }
    )
  }
}
