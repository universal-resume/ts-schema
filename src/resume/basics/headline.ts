import { maxLength, NonEmptyString } from "effect/Schema";

export const Headline = NonEmptyString.pipe(maxLength(50)).annotations({
	description: "The headline, title or position of resume subject",
	examples: ["Software Engineer"],
});
