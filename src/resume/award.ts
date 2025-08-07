import { date, location, summary, tags } from "@annotation";
import {
	Array as ArraySchema,
	Date as DateFromString,
	NonEmptyString,
	optional,
	Struct,
} from "effect/Schema";

export namespace Award {
	export const Schema = Struct({
		title: NonEmptyString.annotations({
			identifier: "award-title",
			description: "The title of the award",
			examples: ["Google AI Research Award"],
		}),
		awarder: NonEmptyString.annotations({
			identifier: "award-awarder",
			description:
				"The awarder of the award, the organization or institution that awarded the award",
			examples: ["Google"],
		}),
		date: DateFromString.annotations({
			identifier: "award-date",
			description: date.description,
			examples: date.examples,
		}),
		location: optional(NonEmptyString).annotations({
			identifier: "award-location",
			description: location.description,
			examples: location.examples,
		}),
		summary: optional(NonEmptyString).annotations({
			identifier: "award-summary",
			description: summary.description,
			examples: summary.examples,
		}),
		tags: optional(ArraySchema(NonEmptyString)).annotations({
			identifier: "award-tags",
			description: tags.description,
			examples: tags.examples,
		}),
	});

	export type Type = typeof Schema.Type;
}
