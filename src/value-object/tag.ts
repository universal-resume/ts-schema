import { Schema } from "effect";

export const Tag = Schema.NonEmptyString.annotations({
	description:
		"Short, unordered and not related with each others keyword that you want to associate with the related experience.",
	examples: [
        "Typescript",
		"Leadership",
		"DevOps",
		"AI",
		"Automation",
		"Customer Support",
	],
});