import { NonEmptyString } from "effect/Schema";

export const Fluency = NonEmptyString.annotations({
	description: "Your fluency in the language",
	examples: [
		"Native",
		"Fluent",
		"Business",
		"Technical",
		"Intermediate",
		"Beginner",
	],
});
