import { DateFromString, Highlight, Location, Organization, Position, Summary, Tag, Url } from "@value-object";
import {
	Array as ArraySchema,
	optional,
	Struct,
} from "effect/Schema";

export namespace Volunteer {
	export const Schema = Struct({
		endDate: optional(DateFromString),
		highlights: optional(ArraySchema(Highlight)),
		location: optional(Location),
		organization: Organization,
		position: Position,
		startDate: DateFromString,
		summary: optional(Summary),
		tags: optional(ArraySchema(Tag)),
		url: optional(Url),
	});

	export type Type = typeof Schema.Type;
}
