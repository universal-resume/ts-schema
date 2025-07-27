import {
	Array as ArraySchema,
	Boolean as BooleanSchema,
	NonEmptyString,
	optional,
	Struct,
} from "effect/Schema";

import { Validator } from "../validator";

export namespace Basics {
	const Location = Struct({
		address: optional(NonEmptyString),
		city: optional(NonEmptyString),
		countryCode: optional(Validator.CountryCode),
		postalCode: optional(NonEmptyString),
		region: optional(NonEmptyString),
		remote: optional(BooleanSchema),
	});

	const Profile = Struct({
		network: NonEmptyString,
		url: Validator.Url,
		username: optional(NonEmptyString),
	});

	export const Schema = Struct({
		dateOfBirth: optional(Validator.DateAnyFormat),
		driverLicenses: optional(ArraySchema(NonEmptyString)),
		email: optional(Validator.Email),
		headline: NonEmptyString,
		image: optional(Validator.Url),
		location: optional(Location),
		name: NonEmptyString,
		nationality: optional(ArraySchema(Validator.CountryCode)),
		phone: optional(NonEmptyString),
		profiles: optional(ArraySchema(Profile)),
		summary: optional(NonEmptyString),
		url: optional(Validator.Url),
	});

	export type Type = typeof Schema.Type;
}
