import { Array as ArraySchema, optionalWith, Struct } from "effect/Schema";
import {
	Day,
	Organization,
	ProperNoun,
	Summary,
	Tag,
	Url,
} from "#value-object";

export namespace Certificate {
	export const Schema = Struct({
		date: Day.FromString,
		issuer: Organization.Schema,
		name: ProperNoun.FromString,
		summary: optionalWith(Summary.FromString, { exact: true }),
		url: optionalWith(Url.FromString, { exact: true }),
		tags: optionalWith(ArraySchema(Tag.FromString), { exact: true }),
	});

	export type Type = typeof Schema.Type;
}
