import { Schema } from "effect"
import { Date } from "../validator"

const { Struct, optional, NonEmptyString, Array } = Schema

export namespace Award {

    export const Schema = Struct({
        awarder: optional(NonEmptyString),
        date: optional(Date),
        summary: optional(NonEmptyString),
        title: optional(NonEmptyString),
    })

    export type Type = typeof Schema.Type
}