import { Array as ArraySchema, optional, Struct } from "effect/Schema";
import {
	Day,
	Highlight,
	Location,
	Organization,
	Position,
	Summary,
	Tag,
	Url,
} from "#value-object";

export namespace Volunteer {
	export const Schema = Struct({
		endDate: optional(Day.FromString),
		highlights: optional(ArraySchema(Highlight.FromString)),
		location: optional(Location.Schema),
		organization: Organization.Schema,
		position: Position.FromString,
		startDate: Day.FromString,
		summary: optional(Summary.FromString),
		tags: optional(ArraySchema(Tag.FromString)),
		url: optional(Url.FromString),
	});

	export type Type = typeof Schema.Type;
}
