import { Array as ArraySchema, optional, Struct } from "effect/Schema";
import {
	Day,
	Highlight,
	Location,
	Organization,
	Position,
	Reference,
	Summary,
	Tag,
	Url,
} from "#value-object";
import { Type } from "./employment/type.js";

export namespace Employment {
	export const Schema = Struct({
		type: Type,
		summary: optional(Summary.FromString),
		endDate: optional(Day.FromString),
		highlights: optional(ArraySchema(Highlight.FromString)),
		location: optional(Location.Schema),
		organization: Organization.Schema,
		position: Position.FromString,
		references: optional(ArraySchema(Reference.Schema)),
		startDate: Day.FromString,
		tags: optional(ArraySchema(Tag.FromString)),
		url: optional(Url.FromString),
	});

	export type Type = typeof Schema.Type;
}
