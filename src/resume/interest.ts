import {
	Array as ArraySchema,
	NonEmptyString,
	optional,
	Struct,
} from "effect/Schema";

export namespace Interest {
	export const Schema = Struct({
		description: optional(NonEmptyString),
		name: NonEmptyString,
		tags: optional(ArraySchema(NonEmptyString)),
	});

	export type Type = typeof Schema.Type;
}
