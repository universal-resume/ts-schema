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
import { Availability } from "./basics/availability.js";
import { DrivingLicense } from "./basics/driving-license.js";
import { Headline } from "./basics/headline.js";
import { Remote } from "./basics/remote.js";
import { Website } from "./basics/website.js";

export namespace Basics {
	export const Schema = Struct({
		availability: optional(Availability),
		birth: optional(Day.FromString),
		drivingLicenses: optional(ArraySchema(DrivingLicense)),
		contact: optional(Contact.Schema),
		headline: Headline,
		picture: optional(Url.FromString),
		location: optional(Location.Schema),
		name: ProperNoun.FromString,
		nationalities: optional(ArraySchema(CountryCode.FromString)),
		profiles: optional(ArraySchema(Profile.Schema)),
		summary: optional(Summary.FromString),
		website: optional(Website),
		remote: optional(Remote),
	});

	export type Type = typeof Schema.Type;
}
