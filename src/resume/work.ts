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
import { ContractType } from "./work/contract-type.js";

export namespace Work {
	export const Schema = Struct({
		contractType: optional(ContractType),
		summary: optional(Summary.FromString),
		endDate: optional(Day.FromString),
		highlights: optional(ArraySchema(Highlight.FromString)),
		location: optional(Location.Schema),
		organization: Organization.Schema,
		position: Position.FromString,
		startDate: Day.FromString,
		tags: optional(ArraySchema(Tag.FromString)),
		url: optional(Url.FromString),
	});

	export type Type = typeof Schema.Type;
}
