import { NonEmptyTrimmedString } from "effect/Schema";

export const Availability = NonEmptyTrimmedString.annotations({
	description:
		"Date, delay, or any information about your availability to take a new job",
	examples: ["ASAP", "3 months", "September", "Q2"],
});
