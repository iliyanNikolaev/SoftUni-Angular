import { Adress } from "./Adress"
import { Company } from "./Company"

export type User = {
  id: Number,
  name: String,
  username: String,
  email: String,
  address: Adress,
  phone: String,
  website: String,
  company: Company
}

