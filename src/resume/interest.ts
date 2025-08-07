import { summary, tags } from "@annotation";
import {
	Array as ArraySchema,
	NonEmptyString,
	optional,
	Struct,
} from "effect/Schema";

export namespace Interest {
	export const Schema = Struct({
		summary: optional(NonEmptyString).annotations({
			identifier: "interest-summary",
			description: summary.description,
			examples: summary.examples,
		}),
		name: NonEmptyString.annotations({
			identifier: "interest-name",
			description: "The name of the interest",
			examples: ["Reading"],
		}),
		tags: optional(ArraySchema(NonEmptyString)).annotations({
			identifier: "interest-tags",
			description: tags.description,
			examples: tags.examples,
		}),
	});

	export type Type = typeof Schema.Type;
}
