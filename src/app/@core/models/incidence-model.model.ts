import { UserModel } from "./user-model.model"

export interface IncidenceModel {
  id: number,
  date: string,
  latitude: number,
  longitude: number,
  category: string,
  description: string,
  user: UserModel,
  image: string,
  urgent: boolean,
  status: boolean,
  valid: boolean,
  ticket: string
}
