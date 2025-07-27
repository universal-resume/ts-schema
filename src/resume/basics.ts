import { Schema } from "effect"
import { CountryCode, Email, Url } from "../validator"

const { Struct, optional, NonEmptyString, Array } = Schema

export namespace Basics {

    const Location = Struct({
        address: optional(NonEmptyString),
        city: optional(NonEmptyString),
        countryCode: optional(CountryCode),
        postalCode: optional(NonEmptyString),
        region: optional(NonEmptyString),
    })

    const Profile = Struct({
        network: optional(NonEmptyString),
        url: optional(Url),
        username: optional(NonEmptyString),
    })

    export const Schema = Struct({
        email: optional(Email),
        image: optional(Url),
        label: optional(NonEmptyString),
        location: optional(Location),
        name: optional(NonEmptyString),
        phone: optional(NonEmptyString),
        profiles: optional(Array(Profile)),
        summary: optional(NonEmptyString),
        url: optional(Url),
    })

    export type Type = typeof Schema.Type
}