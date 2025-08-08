import { Schema } from "effect";

export const Email = Schema.Lowercase.pipe(
	Schema.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
).annotations({
	description: "Email address in lowercase",
	examples: ["john.doe@example.com"],
});