import {
	Array as ArraySchema,
	NonEmptyString,
	optional,
	Struct,
} from "effect/Schema";

import { Validator } from "../validator";

export namespace Certificate {
	export const Schema = Struct({
		issueDate: Validator.DateAnyFormat,
		issuer: NonEmptyString,
		name: NonEmptyString,
		url: optional(Validator.Url),
		tags: optional(ArraySchema(NonEmptyString)),
	});

	export type Type = typeof Schema.Type;
}
