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
import { PublicationType } from "./publication/type.js";

export namespace Publication {
	export const Schema = Struct({
		authors: optional(ArraySchema(ProperNoun.FromString)),
		doi: optional(Doi),
		name: ProperNoun.FromString,
		publisher: optional(Organization.Schema),
		date: Day.FromString,
		summary: optional(Summary.FromString),
		tags: optional(ArraySchema(Tag.FromString)),
		type: optional(PublicationType),
		url: optional(Url.FromString),
	});

	export type Type = typeof Schema.Type;
}
