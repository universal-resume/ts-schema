import {
	Array as ArraySchema,
	NonEmptyString,
	optional,
	Struct,
} from "effect/Schema";

import { Validator } from "../validator.js";

export namespace Project {
	export const Schema = Struct({
		description: optional(NonEmptyString).annotations({
			description: "The description of the project",
			examples: [
				"An open-source resume builder that allows users to create a resume in a few minutes.",
			],
		}),
		endDate: optional(Validator.DateAnyFormat).annotations({
			description:
				"The end date of the project, format: YYYY-MM-DD, YYYY-MM or YYYY",
			examples: ["2021-01-01"],
		}),
		entity: optional(NonEmptyString).annotations({
			description:
				"The entity of the project, the organization or institution that the project is related to, e.g. Google, Facebook, etc.",
			examples: ["Github"],
		}),
		highlights: optional(ArraySchema(NonEmptyString)).annotations({
			description:
				"The highlights of the project, the key features of the project, the main contributions of the project",
			examples: [
				["Worked on standard resume schema"],
				["Write TS and Rust implementations"],
			],
		}),
		location: optional(NonEmptyString).annotations({
			description: "The location of the project",
			examples: ["Shanghai, China, Remote, etc."],
		}),
		name: NonEmptyString.annotations({
			description: "The name of the project",
			examples: ["Universal Resume"],
		}),
		roles: optional(ArraySchema(NonEmptyString)).annotations({
			description:
				"The roles of the project, the roles the resume subject has in the project",
			examples: [
				[
					"Software Engineer",
					"Full Stack Developer",
					"Contributor",
					"Maintainer",
					"Founder",
				],
			],
		}),
		startDate: optional(Validator.DateAnyFormat).annotations({
			description:
				"The start date of the project, format: YYYY-MM-DD, YYYY-MM or YYYY",
			examples: ["2021-01-01"],
		}),
		status: optional(NonEmptyString).annotations({
			description: "The status of the project, the status of the project",
			examples: ["Active", "Inactive", "Archived", "etc."],
		}),
		tags: optional(ArraySchema(NonEmptyString)).annotations({
			description: "Associated tags of the project",
			examples: [["Open-source", "Resume", "Builder"]],
		}),
		type: optional(NonEmptyString).annotations({
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
			description:
				"The URL of the project, the URL of the project page or the URL of the project repository",
			examples: ["https://www.github.com/universal-resume"],
		}),
	});

	export type Type = typeof Schema.Type;
}
