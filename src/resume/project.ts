import { Schema } from "effect"
import { Date, Url } from "../validator"

const { Struct, optional, NonEmptyString, Array } = Schema

export namespace Project {

    export const Schema = Struct({
        description: optional(NonEmptyString),
        endDate: optional(Date),
        entity: optional(NonEmptyString),
        highlights: optional(Array(NonEmptyString)),
        keywords: optional(Array(NonEmptyString)),
        name: optional(NonEmptyString),
        roles: optional(Array(NonEmptyString)),
        startDate: optional(Date),
        type: optional(NonEmptyString),
        url: optional(Url),
    })

    export type Type = typeof Schema.Type
}