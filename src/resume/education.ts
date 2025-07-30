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
			identifier: "course-description",
			description: "The description of the course",
			examples: [
				"10 hours of video lectures and 20 hours of practice problems, including A* algorithm, Dijkstra algorithm, etc.",
			],
		}),
		name: NonEmptyString.annotations({
			identifier: "course-name",
			description: "The name of the course",
			examples: ["Path Finding Algorithms"],
		}),
		format: optional(NonEmptyString).annotations({
			identifier: "course-format",
			description: "The format and delivery mode",
			examples: ["Online bootcamp", "In-person", "etc"],
		}),
	});

	export const Schema = Struct({
		area: NonEmptyString.annotations({
			identifier: "education-area",
			description: "The area of study of the education",
			examples: ["Computer Science"],
		}),
		courses: optional(ArraySchema(Course)).annotations({
			identifier: "education-courses",
		}),
		endDate: optional(Validator.DateAnyFormat).annotations({
			identifier: "education-end-date",
			description:
				"The end date of the education, format: YYYY-MM-DD, YYYY-MM or YYYY",
			examples: ["2021-01-01"],
		}),
		institution: NonEmptyString.annotations({
			identifier: "education-institution",
			description:
				"The institution of the education, the organization or institution that provided the education",
			examples: ["Stanford University"],
		}),
		location: optional(NonEmptyString).annotations({
			identifier: "education-location",
			description: "Any information about the location of the education",
			examples: ["San Francisco, CA"],
		}),
		score: optional(NonEmptyString).annotations({
			identifier: "education-score",
			description: "The score obtained in the education",
			examples: ["3.8"],
		}),
		startDate: Validator.DateAnyFormat.annotations({
			identifier: "education-start-date",
			description:
				"The start date of the education, format: YYYY-MM-DD, YYYY-MM or YYYY",
			examples: ["2018-09-01"],
		}),
		studyType: NonEmptyString.annotations({
			identifier: "education-study-type",
			description:
				"The type of study of the education, the type of degree or the type of course",
			examples: ["Bachelor"],
		}),
		url: optional(Validator.Url).annotations({
			identifier: "education-url",
			description:
				"The URL of the education, the URL of the education page or the URL of the education institution",
			examples: ["https://www.stanford.edu"],
		}),
	});

	export type Type = typeof Schema.Type;
}
