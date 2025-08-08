import { Schema } from "effect";

export const Organization = Schema.NonEmptyString.annotations({
	description: "The company or institution to which the related experience belongs.",
	examples: ["Parts Unlimited", "Dunder Mifflin", "Sabre"],
});