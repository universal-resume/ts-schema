import { Array as ArraySchema, optional, Struct } from "effect/Schema";
import {
	Contact,
	CountryCode,
	Day,
	Location,
	Profile,
	ProperNoun,
	Summary,
	Url,
} from "#value-object";
import { DriverLicense } from "./basics/driver-license.js";
import { Headline } from "./basics/headline.js";
import { Remote } from "./basics/remote.js";

export namespace Basics {
	export const Schema = Struct({
		birth: optional(Day.FromString),
		driverLicenses: optional(ArraySchema(DriverLicense)),
		contact: optional(Contact.Schema),
		headline: Headline,
		picture: optional(Url.FromString),
		location: optional(Location.Schema),
		name: ProperNoun.FromString,
		nationalities: optional(ArraySchema(CountryCode.FromString)),
		profiles: optional(ArraySchema(Profile.Schema)),
		summary: optional(Summary.FromString),
		website: optional(Url.FromString).annotations({
			description: "The personal website, portfolio or blog of resume subject",
		}),
		remote: optional(Remote),
	});

	export type Type = typeof Schema.Type;
}
