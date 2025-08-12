import { NonEmptyString } from "effect/Schema";

export const Doi = NonEmptyString.annotations({
	description: "The DOI of the publication",
	examples: ["10.1000/182"],
});
