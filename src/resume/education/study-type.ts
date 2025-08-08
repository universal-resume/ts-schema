import { NonEmptyString } from "effect/Schema";

export const StudyType = NonEmptyString.annotations({
	description:
		"The type of study of the education, the type of degree or the type of course",
	examples: ["Bachelor", "Master", "PhD"],
});
