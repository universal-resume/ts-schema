import {
	Array as ArraySchema,
	NonEmptyString,
	optional,
	Struct,
} from "effect/Schema";

export namespace Interest {
	export const Schema = Struct({
		description: optional(NonEmptyString).annotations({
			description: "The description of the interest",
			examples: [
				"I am interested in reading books, specialising in science fiction, fantasy, and manga.",
			],
		}),
		name: NonEmptyString.annotations({
			description: "The name of the interest",
			examples: ["Reading"],
		}),
		tags: optional(ArraySchema(NonEmptyString)).annotations({
			description: "Tags associated with the interest",
			examples: [["Naruto", "One Piece", "Bleach"]],
		}),
	});

	export type Type = typeof Schema.Type;
}
