import {
	date,
	highlights,
	location,
	organization,
	position,
	summary,
	tags,
} from "@annotation";
import {
	Array as ArraySchema,
	Date as DateFromString,
	NonEmptyString,
	optional,
	Struct,
} from "effect/Schema";

export namespace Volunteer {
	export const Schema = Struct({
		endDate: optional(DateFromString).annotations({
			identifier: "volunteer-end-date",
			description: date.description,
			examples: date.examples,
		}),
		highlights: optional(ArraySchema(NonEmptyString)).annotations({
			identifier: "volunteer-highlights",
			description: highlights.description,
			examples: highlights.examples,
		}),
		location: optional(NonEmptyString).annotations({
			identifier: "volunteer-location",
			description: location.description,
			examples: location.examples,
		}),
		organization: NonEmptyString.annotations({
			identifier: "volunteer-organization",
			description: organization.description,
			examples: organization.examples,
		}),
		position: NonEmptyString.annotations({
			identifier: "volunteer-position",
			description: position.description,
			examples: position.examples,
		}),
		startDate: DateFromString.annotations({
			identifier: "volunteer-start-date",
			description: date.description,
			examples: date.examples,
		}),
		summary: optional(NonEmptyString).annotations({
			identifier: "volunteer-summary",
			description: summary.description,
			examples: summary.examples,
		}),
		tags: optional(ArraySchema(NonEmptyString)).annotations({
			identifier: "volunteer-tags",
			description: tags.description,
			examples: tags.examples,
		}),
	});

	export type Type = typeof Schema.Type;
}
