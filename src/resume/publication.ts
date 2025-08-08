import { DateFromString, Organization, ProperNoun, Summary, Tag, Url } from "@value-object";
import {
	Array as ArraySchema,
	NonEmptyString,
	optional,
	Struct,
} from "effect/Schema";

export namespace Publication {
	export const Schema = Struct({
		authors: optional(ArraySchema(ProperNoun)),
		doi: optional(NonEmptyString).annotations({
			identifier: "publication-doi",
			description: "The DOI of the publication",
			examples: ["10.1000/182"],
		}),
		name: ProperNoun,
		publisher: optional(Organization),
		releaseDate: DateFromString,
		summary: optional(Summary),
		tags: optional(ArraySchema(Tag)),
		type: optional(NonEmptyString).annotations({
			identifier: "publication-type",
			description: "The type, category or kind of the publication",
			examples: ["Book", "Article", "Paper", "etc."],
		}),
		url: optional(Url),
	});

	export type Type = typeof Schema.Type;
}
