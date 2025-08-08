import { Schema } from "effect";

export const ProperNoun = Schema.transform(
    Schema.NonEmptyString,
    Schema.Capitalize,
    {
        decode: (value) => value,
        encode: (value) => value,
        strict: true,
    }
).annotations({
	description:
		"A proper noun is a word that is a name of a person, a place, a thing, an organization, etc. It is used to identify a specific entity.",
	examples: [
		"John Doe, Paris, Parts Unlimited, Google AI Research Certificate",
	],
});