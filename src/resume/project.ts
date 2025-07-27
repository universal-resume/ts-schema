import {
	Array as ArraySchema,
	NonEmptyString,
	optional,
	Struct,
} from "effect/Schema";

import { Validator } from "../validator";

export namespace Project {
	export const Schema = Struct({
		description: optional(NonEmptyString),
		endDate: optional(Validator.DateAnyFormat),
		entity: optional(NonEmptyString),
		highlights: optional(ArraySchema(NonEmptyString)),
		location: optional(NonEmptyString),
		name: NonEmptyString,
		roles: optional(ArraySchema(NonEmptyString)),
		startDate: optional(Validator.DateAnyFormat),
		status: optional(NonEmptyString),
		tags: optional(ArraySchema(NonEmptyString)),
		type: optional(NonEmptyString),
		url: optional(Validator.Url),
	});

	export type Type = typeof Schema.Type;
}
