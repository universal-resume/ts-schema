import { Array as ArraySchema, optionalWith, Struct } from "effect/Schema";
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
		location: optionalWith(Location.Schema, { exact: true }),
		summary: optionalWith(Summary.FromString, { exact: true }),
		tags: optionalWith(ArraySchema(Tag.FromString), { exact: true }),
	});

	export type Type = typeof Schema.Type;
}
