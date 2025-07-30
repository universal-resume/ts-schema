import {
	Array as ArraySchema,
	NonEmptyString,
	optional,
	Struct,
} from "effect/Schema";

import { Validator } from "../validator.js";

export namespace Publication {
	export const Schema = Struct({
		authors: optional(ArraySchema(NonEmptyString)).annotations({
			identifier: "publication-authors",
			description: "The authors of the publication",
			examples: [["John Doe", "Jane Doe"]],
		}),
		doi: optional(NonEmptyString).annotations({
			identifier: "publication-doi",
			description: "The DOI of the publication",
			examples: ["10.1000/182"],
		}),
		name: NonEmptyString.annotations({
			identifier: "publication-name",
			description: "The name of the publication",
			examples: ["The Art of Computer Programming"],
		}),
		publisher: optional(NonEmptyString).annotations({
			identifier: "publication-publisher",
			description: "The publisher of the publication",
			examples: ["Addison-Wesley"],
		}),
		releaseDate: optional(Validator.DateAnyFormat).annotations({
			identifier: "publication-release-date",
			description:
				"The release date of the publication, format: YYYY-MM-DD, YYYY-MM or YYYY",
			examples: ["2021-01-01"],
		}),
		summary: optional(NonEmptyString).annotations({
			identifier: "publication-summary",
			description: "The summary of the publication",
			examples: ["A book about the art of computer programming"],
		}),
		tags: optional(ArraySchema(NonEmptyString)).annotations({
			identifier: "publication-tags",
			description: "Associated tags of the publication",
			examples: [["Computer Science", "Programming", "Algorithm"]],
		}),
		type: optional(NonEmptyString).annotations({
			identifier: "publication-type",
			description: "The type, category or kind of the publication",
			examples: ["Book", "Article", "Paper", "etc."],
		}),
		url: optional(Validator.Url).annotations({
			identifier: "publication-url",
			description:
				"The URL of the publication, the URL of the publication page or the URL of the publication repository",
			examples: [
				"https://www.amazon.com/The-Art-Computer-Programming-Volumes/dp/0321751043",
			],
		}),
	});

	export type Type = typeof Schema.Type;
}
