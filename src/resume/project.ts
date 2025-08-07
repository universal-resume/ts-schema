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

export namespace Project {
	export const Schema = Struct({
		summary: optional(NonEmptyString).annotations({
			identifier: "project-summary",
			description: summary.description,
			examples: summary.examples,
		}),
		endDate: optional(DateFromString).annotations({
			identifier: "project-end-date",
			description: date.description,
			examples: date.examples,
		}),
		organization: optional(NonEmptyString).annotations({
			identifier: "project-organization",
			description: organization.description,
			examples: organization.examples,
		}),
		highlights: optional(ArraySchema(NonEmptyString)).annotations({
			identifier: "project-highlights",
			description: highlights.description,
			examples: highlights.examples,
		}),
		location: optional(NonEmptyString).annotations({
			identifier: "project-location",
			description: location.description,
			examples: location.examples,
		}),
		name: NonEmptyString.annotations({
			identifier: "project-name",
			description: "The name of the project",
			examples: ["Universal Resume"],
		}),
		position: optional(NonEmptyString).annotations({
			identifier: "project-position",
			description: position.description,
			examples: position.examples,
		}),
		startDate: DateFromString.annotations({
			identifier: "project-start-date",
			description: date.description,
			examples: date.examples,
		}),
		status: optional(NonEmptyString).annotations({
			identifier: "project-status",
			description: "The status of the project, the status of the project",
			examples: ["Active", "Inactive", "Archived", "etc."],
		}),
		tags: optional(ArraySchema(NonEmptyString)).annotations({
			identifier: "project-tags",
			description: tags.description,
			examples: tags.examples,
		}),
		type: optional(NonEmptyString).annotations({
			identifier: "project-type",
			description: "The type, category or kind of the project",
			examples: [
				"Open-source",
				"Side Project",
				"Study Project",
				"Startup",
				"etc.",
			],
		}),
		url: optional(Validator.Url).annotations({
			identifier: "project-url",
			description: url.description,
			examples: url.examples,
		}),
	});

	export type Type = typeof Schema.Type;
}
