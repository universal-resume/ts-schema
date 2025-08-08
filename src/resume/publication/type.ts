import { NonEmptyString } from "effect/Schema";

export const PublicationType = NonEmptyString.annotations({
	description: "The type, category or kind of the publication",
	examples: ["Book", "Article", "Paper", "etc."],
});
