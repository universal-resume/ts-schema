import { NonEmptyString } from "effect/Schema";

export const Headline = NonEmptyString.annotations({
	description: "The headline, title or position of resume subject",
	examples: ["Software Engineer"],
});
