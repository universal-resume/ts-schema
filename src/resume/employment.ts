import { Array as ArraySchema, optionalWith, Struct } from "effect/Schema";
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
		summary: optionalWith(Summary.FromString, { exact: true }),
		endDate: optionalWith(Day.FromString, { exact: true }),
		highlights: optionalWith(ArraySchema(Highlight.FromString), { exact: true }),
		location: optionalWith(Location.Schema, { exact: true }),
		organization: Organization.Schema,
		position: Position.FromString,
		references: optionalWith(ArraySchema(Reference.Schema), { exact: true }),
		startDate: Day.FromString,
		tags: optionalWith(ArraySchema(Tag.FromString), { exact: true }),
		url: optionalWith(Url.FromString, { exact: true }),
	});

	export type Type = typeof Schema.Type;
}
