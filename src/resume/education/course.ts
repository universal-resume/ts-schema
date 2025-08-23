import { NonEmptyString, optionalWith, Struct } from "effect/Schema";
import { ProperNoun, Summary } from "#value-object";

export const Course = Struct({
	summary: optionalWith(Summary.FromString, { exact: true }),
	name: ProperNoun.FromString,
	format: optionalWith(NonEmptyString, { exact: true }).annotations({
		description: "The format or delivery mode",
		examples: ["Online bootcamp", "In-person", "etc"],
	}),
});
