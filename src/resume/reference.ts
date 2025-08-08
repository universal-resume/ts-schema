import { DateFromString, Organization, Position, ProperNoun } from "@value-object";
import {
	NonEmptyString,
	optional,
	Struct,
} from "effect/Schema";

export namespace Reference {
	export const Schema = Struct({
		organization: optional(Organization),
		contact: optional(NonEmptyString).annotations({
			identifier: "reference-contact",
			description: "The contact of the reference",
			examples: [
				"john.doe@google.com",
				"linkedin.com/in/john-doe",
				"+1234567890",
			],
		}),
		date: DateFromString,
		name: ProperNoun,
		position: optional(Position),
		testimonial: optional(NonEmptyString).annotations({
			identifier: "reference-testimonial",
			description: "The testimonial of the reference",
			examples: [
				"John is a great software engineer who is always willing to help others.",
			],
		}),
	});

	export type Type = typeof Schema.Type;
}
