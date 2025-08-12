import { NonEmptyString } from "effect/Schema";

export const Testamonial = NonEmptyString.annotations({
	description: "The testimonial of the reference",
	examples: [
		"John is a great software engineer who is always willing to help others.",
	],
});
