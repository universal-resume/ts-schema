import { Schema } from "effect"

const { Struct, optional, NonEmptyString } = Schema

export namespace Language {

    export const Schema = Struct({
        fluency: optional(NonEmptyString),
        language: optional(NonEmptyString),
    })

    export type Type = typeof Schema.Type
}