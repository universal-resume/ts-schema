import { Array as ArraySchema, optionalWith, Struct } from "effect/Schema";
import {
	Day,
	Organization,
	ProperNoun,
	Summary,
	Tag,
	Url,
} from "#value-object";
import { Doi } from "./publication/doi.js";
import { Type } from "./publication/type.js";

export namespace Publication {
	export const Schema = Struct({
		authors: optionalWith(ArraySchema(ProperNoun.FromString), { exact: true }),
		doi: optionalWith(Doi, { exact: true }),
		name: ProperNoun.FromString,
		publisher: optionalWith(Organization.Schema, { exact: true }),
		date: Day.FromString,
		summary: Summary.FromString,
		tags: optionalWith(ArraySchema(Tag.FromString), { exact: true }),
		type: Type,
		url: optionalWith(Url.FromString, { exact: true }),
	}).annotations({
		identifier: "Publication",
	});

	export type Type = typeof Schema.Type;
}
