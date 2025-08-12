import { NonEmptyString, optional, Struct } from "effect/Schema";
import { ProperNoun, Summary } from "#value-object";

export const Course = Struct({
	summary: optional(Summary.FromString),
	name: ProperNoun.FromString,
	format: optional(NonEmptyString).annotations({
		description: "The format or delivery mode",
		examples: ["Online bootcamp", "In-person", "etc"],
	}),
});
