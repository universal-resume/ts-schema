import { DateFromString, Location, Organization, ProperNoun, Summary, Tag } from "@value-object";
import {
	Array as ArraySchema,
	optional,
	Struct,
} from "effect/Schema";

export namespace Award {
	export const Schema = Struct({
		title: ProperNoun,
		awarder: Organization,
		date: DateFromString,
		location: optional(Location),
		summary: optional(Summary),
		tags: optional(ArraySchema(Tag)),
	});

	export type Type = typeof Schema.Type;
}
