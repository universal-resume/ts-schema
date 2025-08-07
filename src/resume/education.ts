import { date, location, organization, url } from "@annotation";
import {
	Array as ArraySchema,
	Date as DateFromString,
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
		endDate: optional(DateFromString).annotations({
			identifier: "education-end-date",
			description: date.description,
			examples: date.examples,
		}),
		organization: NonEmptyString.annotations({
			identifier: "education-organization",
			description: organization.description,
			examples: organization.examples,
		}),
		location: optional(NonEmptyString).annotations({
			identifier: "education-location",
			description: location.description,
			examples: location.examples,
		}),
		score: optional(NonEmptyString).annotations({
			identifier: "education-score",
			description: "The score obtained in the education",
			examples: ["3.8"],
		}),
		startDate: DateFromString.annotations({
			identifier: "education-start-date",
			description: date.description,
			examples: date.examples,
		}),
		studyType: NonEmptyString.annotations({
			identifier: "education-study-type",
			description:
				"The type of study of the education, the type of degree or the type of course",
			examples: ["Bachelor"],
		}),
		url: optional(Validator.Url).annotations({
			identifier: "education-url",
			description: url.description,
			examples: url.examples,
		}),
	});

	export type Type = typeof Schema.Type;
}
