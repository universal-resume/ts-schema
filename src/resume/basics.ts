import { Array as ArraySchema, optionalWith, Struct } from "effect/Schema";
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
		availability: optionalWith(Availability, { exact: true }),
		birth: optionalWith(Day.FromString, { exact: true }),
		drivingLicenses: optionalWith(ArraySchema(DrivingLicense), { exact: true }),
		contact: optionalWith(Contact.Schema, { exact: true }),
		headline: Headline,
		picture: optionalWith(Url.FromString, { exact: true }),
		location: optionalWith(Location.Schema, { exact: true }),
		name: ProperNoun.FromString,
		nationalities: optionalWith(ArraySchema(CountryCode.FromString), {
			exact: true,
		}),
		profiles: optionalWith(ArraySchema(Profile.Schema), { exact: true }),
		summary: optionalWith(Summary.FromString, { exact: true }),
		website: optionalWith(Website, { exact: true }),
		remote: optionalWith(Remote, { exact: true }),
	}).annotations({
		identifier: "Basics",
	});

	export type Type = typeof Schema.Type;
}
