import { Schema } from "effect"

const { Struct, optional, NonEmptyString } = Schema

export namespace Reference {

    export const Schema = Struct({
        name: optional(NonEmptyString),
        reference: optional(NonEmptyString),
    })

    export type Type = typeof Schema.Type
}