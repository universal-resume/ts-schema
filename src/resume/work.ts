import { Schema } from "effect"
import { Date, Url } from "../validator"

const { Struct, optional, NonEmptyString, Array } = Schema

export namespace Work {

    export const Schema = Struct({
        description: optional(NonEmptyString),
        endDate: optional(Date),
        highlights: optional(Array(NonEmptyString)),
        location: optional(NonEmptyString),
        name: optional(NonEmptyString),
        position: optional(NonEmptyString),
        startDate: optional(Date),
        summary: optional(NonEmptyString),
        url: optional(Url),
    })

    export type Type = typeof Schema.Type
}