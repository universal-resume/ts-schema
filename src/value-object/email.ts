import { Schema } from "effect";
import { transform } from "effect/Schema";

export namespace Email {
	const AsString = Schema.NonEmptyString.annotations({
		identifier: "Email",
		description: "Email address in lowercase",
		examples: ["john.doe@example.com"],
	});

	export const Brand = Schema.Lowercase.pipe(
		Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
	).pipe(Schema.brand("Email"));

	export const FromString = transform(AsString, Brand, {
		decode: (value) => value,
		encode: (value) => value,
	});
}
