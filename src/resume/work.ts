import { DateFromString, Highlight, Location, Organization, Position, Summary, Tag, Url } from "@value-object";
import {
	Array as ArraySchema,
	NonEmptyString,
	optional,
	Struct,
} from "effect/Schema";

export namespace Work {
	export const Schema = Struct({
		contractType: optional(NonEmptyString).annotations({
			identifier: "work-contract-type",
			description: "The contract type of the work experience",
			examples: ["Full-time", "Part-time", "Freelance", "etc."],
		}),
		summary: optional(Summary),
		endDate: optional(DateFromString),
		highlights: optional(ArraySchema(Highlight)),
		location: optional(Location),
		organization: Organization,
		position: Position,
		startDate: DateFromString,
		tags: optional(ArraySchema(Tag)),
		url: optional(Url),
	});

	export type Type = typeof Schema.Type;
}
