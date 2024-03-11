import { Geo } from "./Geo"

export type Adress = {
    street: String,
    suite: String,
    city: String,
    zipcode: String,
    geo: Geo
}