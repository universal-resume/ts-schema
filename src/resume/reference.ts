import { date, organization, position } from "@annotation";
import {
	Date as DateFromString,
	NonEmptyString,
	optional,
	Struct,
} from "effect/Schema";

export namespace Reference {
	export const Schema = Struct({
		organization: optional(NonEmptyString).annotations({
			identifier: "reference-organization",
			description: organization.description,
			examples: organization.examples,
		}),
		contact: optional(NonEmptyString).annotations({
			identifier: "reference-contact",
			description: "The contact of the reference",
			examples: [
				"john.doe@google.com",
				"linkedin.com/in/john-doe",
				"+1234567890",
			],
		}),
		date: DateFromString.annotations({
			identifier: "reference-date",
			description: date.description,
			examples: date.examples,
		}),
		name: NonEmptyString.annotations({
			identifier: "reference-name",
			description: "The name of the person who is giving the reference",
			examples: ["John Doe"],
		}),
		position: NonEmptyString.annotations({
			identifier: "reference-position",
			description: position.description,
			examples: position.examples,
		}),
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
