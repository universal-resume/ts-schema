import { Schema } from "effect";
import { transform } from "effect/Schema";

export namespace CountryCode {
	const AsString = Schema.NonEmptyString.annotations({
		identifier: "CountryCode",
		description: "Country code in ISO 3166-1 alpha-2 format",
		examples: ["US", "GB", "FR", "DE", "IT", "ES"],
	});

	export const Brand = Schema.Uppercase.pipe(
		// ISO 3166-1 alpha-2
		Schema.pattern(/^[A-Z]{2}$/),
	).pipe(Schema.brand("CountryCode"));

	export const FromString = transform(AsString, Brand, {
		decode: (value) => value,
		encode: (value) => value,
	});
}
