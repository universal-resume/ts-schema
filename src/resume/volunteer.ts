import {
	Array as ArraySchema,
	NonEmptyString,
	optional,
	Struct,
} from "effect/Schema";

import { Validator } from "../validator.js";

export namespace Volunteer {
	export const Schema = Struct({
		endDate: optional(Validator.DateAnyFormat).annotations({
			identifier: "volunteer-end-date",
			description: "The end date of the volunteer experience",
			examples: ["2021-01-01"],
		}),
		highlights: optional(ArraySchema(NonEmptyString)).annotations({
			identifier: "volunteer-highlights",
			description: "The highlights of the volunteer experience",
			examples: [["Give math lessons to the children of my street"]],
		}),
		location: optional(NonEmptyString).annotations({
			identifier: "volunteer-location",
			description: "The location of the volunteer experience",
			examples: ["Sao Paulo, Brazil"],
		}),
		organization: NonEmptyString.annotations({
			identifier: "volunteer-organization",
			description: "The organization of the volunteer experience",
			examples: ["Association of math teachers"],
		}),
		position: NonEmptyString.annotations({
			identifier: "volunteer-position",
			description: "The role of the resume subject in the volunteer experience",
			examples: ["Math Teacher"],
		}),
		startDate: Validator.DateAnyFormat.annotations({
			identifier: "volunteer-start-date",
			description: "The start date of the volunteer experience",
			examples: ["2021-01-01"],
		}),
		summary: optional(NonEmptyString).annotations({
			identifier: "volunteer-summary",
			description: "The summary of the volunteer experience",
			examples: [
				"I gave math lessons to the children of my street, from 6 to 12 years old, twice a week",
			],
		}),
		tags: optional(ArraySchema(NonEmptyString)).annotations({
			identifier: "volunteer-tags",
			description: "The tags of the volunteer experience",
			examples: [["Math", "Volunteer", "Children", "School"]],
		}),
	});

	export type Type = typeof Schema.Type;
}
