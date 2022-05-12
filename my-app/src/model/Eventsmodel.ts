import { Imessage } from "./textmodel"
import { Iattending } from "./attendingmodel"
export interface IEvents {
  id: string
  imageUrl: string
  eventname: string
  date: string  // YYYY-MM-DD
  description: string
  comments: Imessage[]
  attending: Iattending[]
}