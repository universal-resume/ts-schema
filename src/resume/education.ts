import {
	Array as ArraySchema,
	NonEmptyString,
	optional,
	Struct,
} from "effect/Schema";

import { Validator } from "../validator.js";

export namespace Education {
	const Course = Struct({
		description: optional(NonEmptyString).annotations({
			description: "The description of the course",
			examples: [
				"10 hours of video lectures and 20 hours of practice problems, including A* algorithm, Dijkstra algorithm, etc.",
			],
		}),
		name: NonEmptyString.annotations({
			description: "The name of the course",
			examples: ["Path Finding Algorithms"],
		}),
		format: optional(NonEmptyString).annotations({
			description: "The format and delivery mode",
			examples: ["Online bootcamp", "In-person", "etc"],
		}),
	});

	export const Schema = Struct({
		area: NonEmptyString.annotations({
			description: "The area of study of the education",
			examples: ["Computer Science"],
		}),
		courses: optional(ArraySchema(Course)),
		endDate: optional(Validator.DateAnyFormat).annotations({
			description:
				"The end date of the education, format: YYYY-MM-DD, YYYY-MM or YYYY",
			examples: ["2021-01-01"],
		}),
		institution: NonEmptyString.annotations({
			description:
				"The institution of the education, the organization or institution that provided the education",
			examples: ["Stanford University"],
		}),
		location: optional(NonEmptyString).annotations({
			description: "Any information about the location of the education",
			examples: ["San Francisco, CA"],
		}),
		score: optional(NonEmptyString).annotations({
			description: "The score obtained in the education",
			examples: ["3.8"],
		}),
		startDate: Validator.DateAnyFormat.annotations({
			description:
				"The start date of the education, format: YYYY-MM-DD, YYYY-MM or YYYY",
			examples: ["2018-09-01"],
		}),
		studyType: NonEmptyString.annotations({
			description:
				"The type of study of the education, the type of degree or the type of course",
			examples: ["Bachelor"],
		}),
		url: optional(Validator.Url).annotations({
			description:
				"The URL of the education, the URL of the education page or the URL of the education institution",
			examples: ["https://www.stanford.edu"],
		}),
	});

	export type Type = typeof Schema.Type;
}
