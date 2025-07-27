import { Schema } from "effect"
import { Date, Url } from "../validator"

const { Struct, optional, NonEmptyString } = Schema

export namespace Meta {

    export const Schema = Struct({
        canonical: optional(Url),
        version: optional(NonEmptyString),
        lastModified: optional(Date),
    })

    export type Type = typeof Schema.Type
}