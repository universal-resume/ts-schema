import { Schema } from "effect/index";
import { NonEmptyString, transform } from "effect/Schema";

export namespace ProperNoun {
	const AsString = NonEmptyString.annotations({
		identifier: "ProperNoun",
		title: "Proper Noun",
		description:
			"A proper noun is a word, or a couple of words that represents a person, a title, a place, an institution, etc. Each word is Capitalized.",
		examples: [
			"John Doe",
			"Paris",
			"Parts Unlimited",
			"Google AI Research Certificate",
		],
	});

	export const Brand = Schema.NonEmptyString.pipe(Schema.brand("ProperNoun"));

	export const FromString = transform(AsString, Brand, {
		decode: (value) =>
			value
				.trim()
				.split(" ")
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
				.join(" "),
		encode: (value) => value,
		strict: true,
	});
}
