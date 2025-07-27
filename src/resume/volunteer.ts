import { Schema } from "effect"
import { Date, Url } from "../validator"

const { Struct, optional, NonEmptyString, Array } = Schema

export namespace Volunteer {

    export const Schema = Struct({
        endDate: optional(Date),
        highlights: optional(Array(NonEmptyString)),
        organization: optional(NonEmptyString),
        position: optional(NonEmptyString),
        startDate: optional(Date),
        summary: optional(NonEmptyString),
        url: optional(Url),
    })

    export type Type = typeof Schema.Type
}