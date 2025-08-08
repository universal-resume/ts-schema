import { Array as ArraySchema, optional, Struct } from "effect/Schema";
import {
	Day,
	Location,
	Organization,
	ProperNoun,
	Summary,
	Tag,
} from "#value-object";

export namespace Award {
	export const Schema = Struct({
		title: ProperNoun.FromString,
		issuer: Organization.Schema,
		date: Day.FromString,
		location: optional(Location.Schema),
		summary: optional(Summary.FromString),
		tags: optional(ArraySchema(Tag.FromString)),
	});

	export type Type = typeof Schema.Type;
}
