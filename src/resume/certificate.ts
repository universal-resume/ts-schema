import { Schema } from "effect"
import { Date, Url } from "../validator"

const { Struct, optional, NonEmptyString, Array } = Schema

export namespace Certificate {

    export const Schema = Struct({
        date: optional(Date),
        issuer: optional(NonEmptyString),
        name: optional(NonEmptyString),
        url: optional(Url),
    })

    export type Type = typeof Schema.Type
}