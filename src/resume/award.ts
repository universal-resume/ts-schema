import {
	Array as ArraySchema,
	NonEmptyString,
	optional,
	Struct,
} from "effect/Schema";
import { Validator } from "../validator";

export namespace Award {
	export const Schema = Struct({
		awarder: NonEmptyString,
		date: Validator.DateAnyFormat,
		location: optional(NonEmptyString),
		summary: optional(NonEmptyString),
		tags: optional(ArraySchema(NonEmptyString)),
		title: NonEmptyString,
		url: optional(Validator.Url),
	});

	export type Type = typeof Schema.Type;
}
