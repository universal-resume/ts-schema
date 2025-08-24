import { Array as ArraySchema, optionalWith, Struct } from "effect/Schema";
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
		endDate: optionalWith(Day.FromString, { exact: true }),
		organization: optionalWith(Organization.Schema, { exact: true }),
		highlights: optionalWith(ArraySchema(Highlight.FromString), {
			exact: true,
		}),
		location: optionalWith(Location.Schema, { exact: true }),
		name: ProperNoun.FromString,
		position: Position.FromString,
		references: optionalWith(ArraySchema(Reference.Schema), { exact: true }),
		startDate: Day.FromString,
		status: optionalWith(Status, { exact: true }),
		tags: optionalWith(ArraySchema(Tag.FromString), { exact: true }),
		type: Type,
		url: optionalWith(Url.FromString, { exact: true }),
	}).annotations({
		identifier: "Initiative",
	});

	export type Type = typeof Schema.Type;
}
