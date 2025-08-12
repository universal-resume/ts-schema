import { NonEmptyString } from "effect/Schema";

export const Level = NonEmptyString.annotations({
	description: "The level of the skill",
	examples: ["Beginner", "Intermediate", "Advanced", "Expert"],
});
