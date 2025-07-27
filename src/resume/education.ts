import { Schema } from "effect"
import { Date, Url } from "../validator"

const { Struct, optional, NonEmptyString, Array } = Schema

export namespace Education {

    const Course = Struct({
        description: optional(NonEmptyString),
        type: optional(NonEmptyString),
    })

    export const Schema = Struct({
        area: optional(NonEmptyString),
        courses: optional(Array(Course)),
        endDate: optional(Date),
        institution: optional(NonEmptyString),
        score: optional(NonEmptyString),
        startDate: optional(Date),
        studyType: optional(NonEmptyString),
        url: optional(Url),
    })

    export type Type = typeof Schema.Type
}