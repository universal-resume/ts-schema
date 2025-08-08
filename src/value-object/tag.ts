import { Schema } from "effect";
import { NonEmptyString, transform } from "effect/Schema";

export namespace Tag {
	const AsString = NonEmptyString.annotations({
		identifier: "Tag",
		description:
			"Short, unordered and not related with each others keyword that you want to associate with the related experience.",
		examples: [
			"Typescript",
			"Leadership",
			"DevOps",
			"AI",
			"Automation",
			"Customer Support",
		],
	});

	export const Brand = Schema.NonEmptyString.pipe(Schema.brand("Tag"));

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
