import { NonEmptyString, optional, Struct } from "effect/Schema";

export namespace Reference {
	export const Schema = Struct({
		company: optional(NonEmptyString),
		contact: optional(NonEmptyString),
		name: NonEmptyString,
		position: NonEmptyString,
		testimonial: optional(NonEmptyString),
	});

	export type Type = typeof Schema.Type;
}
