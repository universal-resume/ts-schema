import { NonEmptyString, optional, Struct } from "effect/Schema";
import { Email } from "./email.js";
import { Url } from "./url.js";

export namespace Contact {
	export const Schema = Struct({
		email: optional(Email.FromString),
		phone: optional(NonEmptyString),
		linkedin: optional(Url.FromString),
	}).annotations({
		identifier: "Contact",
		description: "Some ways to contact a person",
		examples: [
			{
				email: Email.Brand.make("john.doe@google.com"),
				phone: "+1234567890",
			},
		],
	});

	export type Type = typeof Schema.Type;
}
