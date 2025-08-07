import {
	date,
	highlights,
	location,
	organization,
	position,
	summary,
	tags,
	url,
} from "@annotation";
import {
	Array as ArraySchema,
	Date as DateFromString,
	NonEmptyString,
	optional,
	Struct,
} from "effect/Schema";
import { Validator } from "../validator.js";

export namespace Work {
	export const Schema = Struct({
		contractType: optional(NonEmptyString).annotations({
			identifier: "work-contract-type",
			description: "The contract type of the work experience",
			examples: ["Full-time", "Part-time", "Freelance", "etc."],
		}),
		summary: optional(NonEmptyString).annotations({
			identifier: "work-summary",
			description: summary.description,
			examples: summary.examples,
		}),
		endDate: optional(DateFromString).annotations({
			identifier: "work-end-date",
			description: date.description,
			examples: date.examples,
		}),
		highlights: optional(ArraySchema(NonEmptyString)).annotations({
			identifier: "work-highlights",
			description: highlights.description,
			examples: highlights.examples,
		}),
		location: optional(NonEmptyString).annotations({
			identifier: "work-location",
			description: location.description,
			examples: location.examples,
		}),
		organization: NonEmptyString.annotations({
			identifier: "work-organization",
			description: organization.description,
			examples: organization.examples,
		}),
		position: NonEmptyString.annotations({
			identifier: "work-position",
			description: position.description,
			examples: position.examples,
		}),
		startDate: DateFromString.annotations({
			identifier: "work-start-date",
			description: date.description,
			examples: date.examples,
		}),
		tags: optional(ArraySchema(NonEmptyString)).annotations({
			identifier: "work-tags",
			description: tags.description,
			examples: tags.examples,
		}),
		url: optional(Validator.Url).annotations({
			identifier: "work-url",
			description: url.description,
			examples: url.examples,
		}),
	});

	export type Type = typeof Schema.Type;
}
