import {
	Array as ArraySchema,
	NonEmptyString,
	optional,
	Struct,
} from "effect/Schema";

import { Validator } from "../validator";

export namespace Publication {
	export const Schema = Struct({
		authors: optional(ArraySchema(NonEmptyString)),
		doi: optional(NonEmptyString),
		name: NonEmptyString,
		publisher: optional(NonEmptyString),
		releaseDate: optional(Validator.DateAnyFormat),
		summary: optional(NonEmptyString),
		tags: optional(ArraySchema(NonEmptyString)),
		type: optional(NonEmptyString),
		url: optional(Validator.Url),
	});

	export type Type = typeof Schema.Type;
}
