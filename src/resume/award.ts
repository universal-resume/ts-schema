import {
	Array as ArraySchema,
	NonEmptyString,
	optional,
	Struct,
} from "effect/Schema";
import { Validator } from "../validator.js";

export namespace Award {
	export const Schema = Struct({
		awarder: NonEmptyString.annotations({
			identifier: "awarder",
			description:
				"The awarder of the award, the organization or institution that awarded the award",
			examples: ["Google"],
		}),
		date: Validator.DateAnyFormat.annotations({
			identifier: "award-date",
			description: "The date of the award, format: YYYY-MM-DD, YYYY-MM or YYYY",
			examples: ["2021-01-01"],
		}),
		location: optional(NonEmptyString).annotations({
			identifier: "award-location",
			description: "Any information about the location of the award",
			examples: ["San Francisco, CA"],
		}),
		summary: optional(NonEmptyString).annotations({
			identifier: "award-summary",
			description:
				"The summary of the award, including the award name, the award level, the award category, etc.",
			examples: ["Google AI Research Award"],
		}),
		tags: optional(ArraySchema(NonEmptyString)).annotations({
			identifier: "award-tags",
			description: "Tags associated with the award",
			examples: [["Google", "AI"]],
		}),
	});

	export type Type = typeof Schema.Type;
}
