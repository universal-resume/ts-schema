import { NonEmptyString } from "effect/Schema";

export const Status = NonEmptyString.annotations({
	description: "The current status of the project in term of activity",
	examples: ["Paused", "Active", "Inactive", "Archived", "etc."],
});
