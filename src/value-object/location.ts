import { Schema } from "effect";

export const Location = Schema.NonEmptyString.annotations({
	description:
		"The location of related experience, the place where it happened. It is supposed to be a city, a country, a region, etc.",
	examples: ["Paris, France", "San Francisco, CA", "Remote"],
});