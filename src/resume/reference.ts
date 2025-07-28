import { NonEmptyString, optional, Struct } from "effect/Schema";

export namespace Reference {
	export const Schema = Struct({
		company: optional(NonEmptyString).annotations({
			description: "The company you worked for at the time of the reference",
			examples: ["Google"],
		}),
		contact: optional(NonEmptyString).annotations({
			description: "The contact of the reference",
			examples: [
				"john.doe@google.com",
				"linkedin.com/in/john-doe",
				"+1234567890",
			],
		}),
		name: NonEmptyString.annotations({
			description: "The name of the person who is giving the reference",
			examples: ["John Doe"],
		}),
		position: NonEmptyString.annotations({
			description: "The position of the person who is giving the reference",
			examples: ["Software Engineer"],
		}),
		testimonial: optional(NonEmptyString).annotations({
			description: "The testimonial of the reference",
			examples: [
				"John is a great software engineer who is always willing to help others.",
			],
		}),
	});

	export type Type = typeof Schema.Type;
}
