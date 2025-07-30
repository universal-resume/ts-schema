import {
	Array as ArraySchema,
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
		description: optional(NonEmptyString).annotations({
			identifier: "work-description",
			description: "The description of the work experience",
			examples: ["I worked as a software engineer at Google"],
		}),
		endDate: optional(Validator.DateAnyFormat).annotations({
			identifier: "work-end-date",
			description: "The end date of the work experience",
			examples: ["2021-01-01"],
		}),
		highlights: optional(ArraySchema(NonEmptyString)).annotations({
			identifier: "work-highlights",
			description: "The highlights of the work experience",
			examples: [
				[
					"Optimized loading time of the website by 50%",
					"Designed and implemented the new UI of the website",
				],
			],
		}),
		location: optional(NonEmptyString).annotations({
			identifier: "work-location",
			description: "The location of the work experience",
			examples: ["Miami, Florida, USA"],
		}),
		organization: NonEmptyString.annotations({
			identifier: "work-organization",
			description: "The organization of the work experience",
			examples: ["Google"],
		}),
		position: NonEmptyString.annotations({
			identifier: "work-position",
			description: "The position of the work experience",
			examples: ["Software Engineer"],
		}),
		startDate: Validator.DateAnyFormat.annotations({
			identifier: "work-start-date",
			description: "The start date of the work experience",
			examples: ["2021-01-01"],
		}),
		tags: optional(ArraySchema(NonEmptyString)).annotations({
			identifier: "work-tags",
			description: "The tags of the work experience",
			examples: [["Typescript", "React", "Node.js", "Tailwind CSS"]],
		}),
		url: optional(Validator.Url).annotations({
			identifier: "work-url",
			description: "The URL of the organization's website",
			examples: ["https://www.google.com"],
		}),
	});

	export type Type = typeof Schema.Type;
}
