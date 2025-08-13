import { Array as ArraySchema, optional, Struct } from "effect/Schema";
import {
	Day,
	Highlight,
	Location,
	Organization,
	Position,
	ProperNoun,
	Reference,
	Summary,
	Tag,
	Url,
} from "#value-object";
import { Status } from "./initiative/status.js";
import { Type } from "./initiative/type.js";

export namespace Initiative {
	export const Schema = Struct({
		summary: Summary.FromString,
		endDate: optional(Day.FromString),
		organization: optional(Organization.Schema),
		highlights: optional(ArraySchema(Highlight.FromString)),
		location: optional(Location.Schema),
		name: ProperNoun.FromString,
		position: Position.FromString,
		references: optional(ArraySchema(Reference.Schema)),
		startDate: Day.FromString,
		status: optional(Status),
		tags: optional(ArraySchema(Tag.FromString)),
		type: Type,
		url: optional(Url.FromString),
	});

	export type Type = typeof Schema.Type;
}
