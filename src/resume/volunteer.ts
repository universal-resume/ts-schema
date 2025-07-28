import {
	Array as ArraySchema,
	NonEmptyString,
	optional,
	Struct,
} from "effect/Schema";

import { Validator } from "../validator";

export namespace Volunteer {
	export const Schema = Struct({
		endDate: optional(Validator.DateAnyFormat).annotations({
			description: "The end date of the volunteer experience",
			examples: ["2021-01-01"],
		}),
		highlights: optional(ArraySchema(NonEmptyString)).annotations({
			description: "The highlights of the volunteer experience",
			examples: [["Give math lessons to the children of my street"]],
		}),
		location: optional(NonEmptyString).annotations({
			description: "The location of the volunteer experience",
			examples: ["Sao Paulo, Brazil"],
		}),
		organization: NonEmptyString.annotations({
			description: "The organization of the volunteer experience",
			examples: ["Association of math teachers"],
		}),
		position: NonEmptyString.annotations({
			description: "The role of the resume subject in the volunteer experience",
			examples: ["Math Teacher"],
		}),
		startDate: Validator.DateAnyFormat.annotations({
			description: "The start date of the volunteer experience",
			examples: ["2021-01-01"],
		}),
		summary: optional(NonEmptyString).annotations({
			description: "The summary of the volunteer experience",
			examples: [
				"I gave math lessons to the children of my street, from 6 to 12 years old, twice a week",
			],
		}),
		tags: optional(ArraySchema(NonEmptyString)).annotations({
			description: "The tags of the volunteer experience",
			examples: [["Math", "Volunteer", "Children", "School"]],
		}),
	});

	export type Type = typeof Schema.Type;
}
