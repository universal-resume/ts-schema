import { date, summary, tags, url } from "@annotation";
import {
	Array as ArraySchema,
	Date as DateFromString,
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
		releaseDate: DateFromString.annotations({
			identifier: "publication-release-date",
			description: date.description,
			examples: date.examples,
		}),
		summary: optional(NonEmptyString).annotations({
			identifier: "publication-summary",
			description: summary.description,
			examples: summary.examples,
		}),
		tags: optional(ArraySchema(NonEmptyString)).annotations({
			identifier: "publication-tags",
			description: tags.description,
			examples: tags.examples,
		}),
		type: optional(NonEmptyString).annotations({
			identifier: "publication-type",
			description: "The type, category or kind of the publication",
			examples: ["Book", "Article", "Paper", "etc."],
		}),
		url: optional(Validator.Url).annotations({
			identifier: "publication-url",
			description: url.description,
			examples: url.examples,
		}),
	});

	export type Type = typeof Schema.Type;
}
