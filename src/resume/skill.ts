import {
	Array as ArraySchema,
	NonEmptyString,
	Number as NumberSchema,
	optional,
	Struct,
} from "effect/Schema";

export namespace Skill {
	export const Schema = Struct({
		level: optional(NonEmptyString),
		name: NonEmptyString,
		tags: optional(ArraySchema(NonEmptyString)),
		yearsOfExperience: optional(NumberSchema),
	});

	export type Type = typeof Schema.Type;
}
