import { Schema } from "effect/index";
import { NonEmptyString, transform } from "effect/Schema";

export namespace Score {
	const AsString = NonEmptyString.annotations({
		identifier: "Score",
		description: "The score obtained at the related field",
		examples: ["3.8", "A"],
	});

	export const Brand = Schema.NonEmptyString.pipe(Schema.brand("Score"));

	export const FromString = transform(AsString, Brand, {
		decode: (value) => value,
		encode: (value) => value,
	});
}
