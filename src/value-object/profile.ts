import { NonEmptyString, optional, Struct } from "effect/Schema";
import { ProperNoun } from "./proper-noun.js";
import { Url } from "./url.js";

const Username = NonEmptyString.annotations({
	description: "The username of the profile",
	examples: ["john-doe"],
});

export namespace Profile {
	export const Schema = Struct({
		network: ProperNoun.FromString,
		url: Url.FromString,
		username: optional(Username),
	}).annotations({
		identifier: "Profile",
		description:
			"The profile of the resume subject on a specific platform, social network, etc.",
		examples: [
			{
				network: ProperNoun.Brand.make("LinkedIn"),
				url: Url.Brand.make(new URL("https://www.linkedin.com/in/john-doe")),
				username: "john-doe",
			},
		],
	});

	export type Type = typeof Schema.Type;
}
