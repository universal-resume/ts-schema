import { Array as ArraySchema, optional, Struct } from "effect/Schema";
import {
	Day,
	Highlight,
	Location,
	Organization,
	Position,
	ProperNoun,
	Summary,
	Tag,
	Url,
} from "#value-object";
import { Status } from "./project/status.js";
import { Type } from "./project/type.js";

export namespace Project {
	export const Schema = Struct({
		summary: Summary.FromString,
		endDate: optional(Day.FromString),
		organization: optional(Organization.Schema),
		highlights: optional(ArraySchema(Highlight.FromString)),
		location: optional(Location.Schema),
		name: ProperNoun.FromString,
		position: Position.FromString,
		startDate: Day.FromString,
		status: optional(Status),
		tags: optional(ArraySchema(Tag.FromString)),
		type: optional(Type),
		url: optional(Url.FromString),
	});

	export type Type = typeof Schema.Type;
}
