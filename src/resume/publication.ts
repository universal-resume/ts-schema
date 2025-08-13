import { Array as ArraySchema, optional, Struct } from "effect/Schema";
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
		authors: optional(ArraySchema(ProperNoun.FromString)),
		doi: optional(Doi),
		name: ProperNoun.FromString,
		publisher: optional(Organization.Schema),
		date: Day.FromString,
		summary: Summary.FromString,
		tags: optional(ArraySchema(Tag.FromString)),
		type: Type,
		url: optional(Url.FromString),
	});

	export type Type = typeof Schema.Type;
}
