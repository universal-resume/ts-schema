import {
	Array as ArraySchema,
	NonEmptyString,
	optional,
	Struct,
} from "effect/Schema";

import { Validator } from "../validator";

export namespace Volunteer {
	export const Schema = Struct({
		endDate: optional(Validator.DateAnyFormat),
		highlights: optional(ArraySchema(NonEmptyString)),
		location: optional(NonEmptyString),
		organization: NonEmptyString,
		position: NonEmptyString,
		startDate: Validator.DateAnyFormat,
		summary: optional(NonEmptyString),
		tags: optional(ArraySchema(NonEmptyString)),
		url: optional(Validator.Url),
	});

	export type Type = typeof Schema.Type;
}
