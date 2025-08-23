import { NonEmptyString, optionalWith, Struct } from "effect/Schema";
import { Email } from "./email.js";
import { Url } from "./url.js";

export namespace Contact {
	export const Schema = Struct({
		email: optionalWith(Email.FromString, { exact: true }),
		phone: optionalWith(NonEmptyString, { exact: true }),
		linkedin: optionalWith(Url.FromString, { exact: true }),
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
