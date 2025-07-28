import {
	Array as ArraySchema,
	Boolean as BooleanSchema,
	NonEmptyString,
	optional,
	Struct,
} from "effect/Schema";

import { Validator } from "../validator.js";

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
		countryCode: optional(Validator.CountryCode).annotations({
			description: "The country code of resume subject, ISO 3166-1 alpha-2",
			examples: ["US"],
		}),
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
		url: Validator.Url.annotations({
			description: "The URL of the profile",
			examples: ["https://www.linkedin.com/in/john-doe"],
		}),
		username: optional(NonEmptyString).annotations({
			description: "The username of the profile",
			examples: ["john-doe"],
		}),
	});

	export const Schema = Struct({
		dateOfBirth: optional(Validator.DateAnyFormat).annotations({
			description: "The date of birth of resume subject, format: YYYY-MM-DD",
			examples: ["1990-01-01"],
		}),
		driverLicenses: optional(ArraySchema(NonEmptyString)).annotations({
			description: "The driver licenses of resume subject",
			examples: [["A", "B", "C"]],
		}),
		email: optional(Validator.Email).annotations({
			description: "The email address of resume subject",
			example: ["john.doe@example.com"],
		}),
		headline: NonEmptyString.annotations({
			description: "The headline, title or position of resume subject",
			examples: ["Software Engineer"],
		}),
		image: optional(Validator.Url).annotations({
			description: "The image URL of resume subject",
			examples: ["https://www.linkedin.com/in/john-doe/image"],
		}),
		location: optional(Location),
		name: NonEmptyString.annotations({
			description: "The name of resume subject",
			examples: ["John Doe"],
		}),
		nationalities: optional(ArraySchema(Validator.CountryCode)).annotations({
			description: "The nationalities of resume subject",
			examples: [["US", "UK"]],
		}),
		phone: optional(NonEmptyString).annotations({
			description: "The phone number of resume subject",
			examples: ["+1234567890"],
		}),
		profiles: optional(ArraySchema(Profile)),
		summary: optional(NonEmptyString).annotations({
			description: "The summary of resume subject",
			examples: [
				"After 10 years of working in the field of computer science, I am looking for a new challenge in the field of AI.",
			],
		}),
		url: optional(Validator.Url).annotations({
			description: "The personal website, portfolio or blog of resume subject",
			examples: ["https://www.john-doe.com"],
		}),
	});

	export type Type = typeof Schema.Type;
}
