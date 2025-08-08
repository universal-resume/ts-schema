import { CountryCode, DateFromString, Email, Summary, Url } from "@value-object";
import {
	Array as ArraySchema,
	Boolean as BooleanSchema,
	NonEmptyString,
	optional,
	Struct,
} from "effect/Schema";

export namespace Basics {
	const Location = Struct({
		address: optional(NonEmptyString).annotations({
			description: "The address of resume subject",
			examples: ["123 Main St"],
		}),
		city: optional(NonEmptyString).annotations({
			description: "The city of resume subject",
			examples: ["New York"],
		}),
		countryCode: optional(CountryCode),
		postalCode: optional(NonEmptyString).annotations({
			description: "The postal code of resume subject",
			examples: ["10001"],
		}),
		region: optional(NonEmptyString).annotations({
			description: "The region of resume subject",
			examples: ["New York"],
		}),
		remote: optional(BooleanSchema).annotations({
			description: "Whether the resume subject is willing to work remotely",
			examples: [true],
		}),
	});

	const Profile = Struct({
		network: NonEmptyString.annotations({
			description: "The network of the profile",
			examples: ["LinkedIn"],
		}),
		url: Url,
		username: optional(NonEmptyString).annotations({
			description: "The username of the profile",
			examples: ["john-doe"],
		}),
	});

	export const Schema = Struct({
		dateOfBirth: optional(DateFromString),
		driverLicenses: optional(ArraySchema(NonEmptyString)).annotations({
			description: "The driver licenses of resume subject",
			examples: [["A", "B", "C"]],
		}),
		email: optional(Email),
		headline: NonEmptyString.annotations({
			description: "The headline, title or position of resume subject",
			examples: ["Software Engineer"],
		}),
		image: optional(Url),
		location: optional(Location),
		name: NonEmptyString.annotations({
			description: "The name of resume subject",
			examples: ["John Doe"],
		}),
		nationalities: optional(ArraySchema(CountryCode)),
		phone: optional(NonEmptyString).annotations({
			description: "The phone number of resume subject",
			examples: ["+1234567890"],
		}),
		profiles: optional(ArraySchema(Profile)),
		summary: optional(Summary),
		url: optional(Url).annotations({
			description: "The personal website, portfolio or blog of resume subject",
		}),
	});

	export type Type = typeof Schema.Type;
}
