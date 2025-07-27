import { Schema } from "effect"
import { Date, Url } from "../validator"

const { Struct, optional, NonEmptyString } = Schema

export namespace Publication {

    export const Schema = Struct({
        name: optional(NonEmptyString),
        publisher: optional(NonEmptyString),
        releaseDate: optional(Date),
        summary: optional(NonEmptyString),
        url: optional(Url),
    })

    export type Type = typeof Schema.Type
}