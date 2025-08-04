import { Schema } from "effect";
import urlRegex from "url-regex";

export namespace Validator {
	export const Url = Schema.NonEmptyString.pipe(
		Schema.pattern(
			urlRegex({
				exact: true,
				strict: true,
			}),
		),
	);

	export const Email = Schema.NonEmptyString.pipe(
		Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
	);

	export const CountryCode = Schema.NonEmptyString.pipe(
		Schema.pattern(/^[a-z]{2}$/),
	);

	export const DateAnyFormat = Schema.NonEmptyString.pipe(
		Schema.pattern(
			/^[1-9]\d{3}(?:-(?:0[1-9]|1[0-2])(?:-(?:0[1-9]|[12]\d|3[01]))?)?$/,
		),
	);
}
