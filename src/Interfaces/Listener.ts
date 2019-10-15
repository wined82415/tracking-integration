export interface Listener {
  id: number
  eventName: string
  handler: Function
  flag?: string
}
