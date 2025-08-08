import { ProperNoun, Summary } from "@value-object";
import { NonEmptyString, optional, Struct } from "effect/Schema";

export const Course = Struct({
	summary: optional(Summary),
	name: ProperNoun,
	format: optional(NonEmptyString).annotations({
		description: "The format or delivery mode",
		examples: ["Online bootcamp", "In-person", "etc"],
	}),
});
