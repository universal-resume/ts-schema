import { Schema } from "effect"

const Url = Schema.NonEmptyString.pipe(
    Schema.pattern(
        /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
    )
)

const Email = Schema.NonEmptyString.pipe(
    Schema.pattern(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    )
)

const CountryCode = Schema.NonEmptyString.pipe(
    Schema.pattern(
        /^[a-z]{2}$/,
    )
)

const Date = Schema.NonEmptyString.pipe(
    Schema.pattern(
        /^[1-9]\d{3}(?:-(?:0[1-9]|1[0-2])(?:-(?:0[1-9]|[12]\d|3[01]))?)?$/,
    )
)

export { Url, Email, CountryCode, Date }