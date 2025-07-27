import {
	Array as ArraySchema,
	NonEmptyString,
	optional,
	Struct,
} from "effect/Schema";

import { Validator } from "../validator";

export namespace Publication {
	export const Schema = Struct({
		authors: optional(ArraySchema(NonEmptyString)).annotations({
			description: "The authors of the publication",
			examples: [["John Doe", "Jane Doe"]],
		}),
		doi: optional(NonEmptyString).annotations({
			description: "The DOI of the publication",
			examples: ["10.1000/182"],
		}),
		name: NonEmptyString.annotations({
			description: "The name of the publication",
			examples: ["The Art of Computer Programming"],
		}),
		publisher: optional(NonEmptyString).annotations({
			description: "The publisher of the publication",
			examples: ["Addison-Wesley"],
		}),
		releaseDate: optional(Validator.DateAnyFormat).annotations({
			description:
				"The release date of the publication, format: YYYY-MM-DD, YYYY-MM or YYYY",
			examples: ["2021-01-01"],
		}),
		summary: optional(NonEmptyString).annotations({
			description: "The summary of the publication",
			examples: ["A book about the art of computer programming"],
		}),
		tags: optional(ArraySchema(NonEmptyString)).annotations({
			description: "Associated tags of the publication",
			examples: [["Computer Science", "Programming", "Algorithm"]],
		}),
		type: optional(NonEmptyString).annotations({
			description: "The type, category or kind of the publication",
			examples: ["Book", "Article", "Paper", "etc."],
		}),
		url: optional(Validator.Url).annotations({
			description:
				"The URL of the publication, the URL of the publication page or the URL of the publication repository",
			examples: [
				"https://www.amazon.com/The-Art-Computer-Programming-Volumes/dp/0321751043",
			],
		}),
	});

	export type Type = typeof Schema.Type;
}
