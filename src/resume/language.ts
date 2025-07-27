import {
	Array as ArraySchema,
	NonEmptyString,
	optional,
	Struct,
} from "effect/Schema";

export namespace Language {
	export const Schema = Struct({
		certifications: optional(ArraySchema(NonEmptyString)),
		fluency: optional(NonEmptyString),
		language: NonEmptyString,
	});

	export type Type = typeof Schema.Type;
}
