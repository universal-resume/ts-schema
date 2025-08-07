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
}
