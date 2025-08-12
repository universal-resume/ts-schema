import { NonEmptyString } from "effect/Schema";

export const ResumeSchema = NonEmptyString.annotations({
	description:
		"The identifier of the schema this resume document was formatted according to",
	examples: ["universal-resume.1.0.0"],
});
