import {
	Array as ArraySchema,
	NonEmptyString,
	optional,
	Struct,
} from "effect/Schema";

export namespace Language {
	export const Schema = Struct({
		certifications: optional(ArraySchema(NonEmptyString)).annotations({
			identifier: "language-certifications",
			description:
				"The certifications in the language, the certifications the resume subject has",
			examples: [["TOEFL 100", "IELTS 7.5"]],
		}),
		fluency: optional(NonEmptyString).annotations({
			identifier: "language-fluency",
			description: "The fluency in the language",
			examples: ["Native"],
		}),
		language: NonEmptyString.annotations({
			identifier: "language",
			description: "The language of the resume subject",
			examples: ["English"],
		}),
	});

	export type Type = typeof Schema.Type;
}
