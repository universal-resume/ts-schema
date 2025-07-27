import { Schema } from "effect"

const { Struct, optional, NonEmptyString, Array } = Schema

export namespace Skill {

    export const Schema = Struct({
        keywords: optional(Array(NonEmptyString)),
        level: optional(NonEmptyString),
        name: optional(NonEmptyString),
    })

    export type Type = typeof Schema.Type
}