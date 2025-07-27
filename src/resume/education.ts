import {
	Array as ArraySchema,
	NonEmptyString,
	optional,
	Struct,
} from "effect/Schema";

import { Validator } from "../validator";

export namespace Education {
	const Course = Struct({
		description: optional(NonEmptyString),
		name: NonEmptyString,
		type: optional(NonEmptyString),
	});

	export const Schema = Struct({
		area: NonEmptyString,
		courses: optional(ArraySchema(Course)),
		endDate: optional(Validator.DateAnyFormat),
		institution: NonEmptyString,
		location: optional(NonEmptyString),
		score: optional(NonEmptyString),
		startDate: Validator.DateAnyFormat,
		studyType: NonEmptyString,
		url: optional(Validator.Url),
	});

	export type Type = typeof Schema.Type;
}
