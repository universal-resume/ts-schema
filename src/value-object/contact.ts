import { NonEmptyString, optional, Struct } from "effect/Schema";
import { Email } from "./email.js";
import { Url } from "./url.js";

export namespace Contact {
	export const Schema = Struct({
		email: optional(Email.FromString),
		phone: optional(NonEmptyString),
		discord: optional(NonEmptyString),
		telegram: optional(NonEmptyString),
		linkedin: optional(NonEmptyString),
		website: optional(Url.FromString),
	}).annotations({
		identifier: "Contact",
		description: "Some ways to contact a person",
		examples: [
			{
				email: Email.Brand.make("john.doe@google.com"),
				phone: "+1234567890",
				website: Url.Brand.make(new URL("https://linkedin.com/in/john-doe")),
			},
		],
	});

	export type Type = typeof Schema.Type;
}
