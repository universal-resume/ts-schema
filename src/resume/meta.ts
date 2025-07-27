import { NonEmptyString, optional, Struct } from "effect/Schema";

import { Validator } from "../validator";

export namespace Meta {
	export const Schema = Struct({
		canonical: optional(Validator.Url),
		lastModified: optional(Validator.DateAnyFormat),
		schema: optional(NonEmptyString),
	});

	export type Type = typeof Schema.Type;
}
