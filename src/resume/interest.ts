import { Schema } from "effect"

const { Struct, optional, NonEmptyString, Array } = Schema

export namespace Interest {

    export const Schema = Struct({
        keywords: optional(Array(NonEmptyString)),
        name: optional(NonEmptyString),
    })

    export type Type = typeof Schema.Type
}