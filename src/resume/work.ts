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
			description: "The contract type of the work experience",
			examples: ["Full-time", "Part-time", "Freelance", "etc."],
		}),
		description: optional(NonEmptyString).annotations({
			description: "The description of the work experience",
			examples: ["I worked as a software engineer at Google"],
		}),
		endDate: optional(Validator.DateAnyFormat).annotations({
			description: "The end date of the work experience",
			examples: ["2021-01-01"],
		}),
		highlights: optional(ArraySchema(NonEmptyString)).annotations({
			description: "The highlights of the work experience",
			examples: [
				[
					"Optimized loading time of the website by 50%",
					"Designed and implemented the new UI of the website",
				],
			],
		}),
		location: optional(NonEmptyString).annotations({
			description: "The location of the work experience",
			examples: ["Miami, Florida, USA"],
		}),
		organization: NonEmptyString.annotations({
			description: "The organization of the work experience",
			examples: ["Google"],
		}),
		position: NonEmptyString.annotations({
			description: "The position of the work experience",
			examples: ["Software Engineer"],
		}),
		startDate: Validator.DateAnyFormat.annotations({
			description: "The start date of the work experience",
			examples: ["2021-01-01"],
		}),
		tags: optional(ArraySchema(NonEmptyString)).annotations({
			description: "The tags of the work experience",
			examples: [["Typescript", "React", "Node.js", "Tailwind CSS"]],
		}),
		url: optional(Validator.Url).annotations({
			description: "The URL of the organization's website",
			examples: ["https://www.google.com"],
		}),
	});

	export type Type = typeof Schema.Type;
}
