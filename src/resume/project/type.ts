import { NonEmptyString } from "effect/Schema";

export const Type = NonEmptyString.annotations({
	description: "The type, category or kind of the project",
	examples: ["Open-source", "Side Project", "Study Project", "Startup", "etc."],
});
