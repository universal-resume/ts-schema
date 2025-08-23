import { Literal, NonEmptyString, optionalWith, Struct } from "effect/Schema";
import { Url } from "./url.js";

const Username = NonEmptyString.annotations({
	description: "The username of the profile",
	examples: ["john-doe"],
});

export namespace Profile {
	export const Schema = Struct({
		network: Literal(
			"LinkedIn",
			"Github",
			"X",
			"Instagram",
			"Youtube",
			"Twitch",
			"Reddit",
			"Tiktok",
		),
		url: Url.FromString,
		username: optionalWith(Username, { exact: true }),
	}).annotations({
		identifier: "Profile",
		description:
			"The profile of the resume subject on a specific platform, social network, etc.",
		examples: [
			{
				network: "LinkedIn",
				url: Url.Brand.make(new URL("https://www.linkedin.com/in/john-doe")),
				username: "john-doe",
			},
		],
	});

	export type Type = typeof Schema.Type;
}
