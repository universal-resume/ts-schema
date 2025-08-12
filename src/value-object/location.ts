import { NonEmptyString, optional, Struct } from "effect/Schema";
import { CountryCode } from "./country-code.js";
import { ProperNoun } from "./proper-noun.js";

export namespace Location {
	export const Schema = Struct({
		address: optional(NonEmptyString),
		city: optional(ProperNoun.FromString),
		countryCode: optional(CountryCode.FromString),
		postalCode: optional(NonEmptyString),
		region: optional(NonEmptyString),
	}).annotations({
		identifier: "Location",
		description:
			"The location of related experience, the place where it happened. It is supposed to be a city, a country, a region, etc.",
		examples: [
			{
				address: "123 Main St",
				city: ProperNoun.Brand.make("New York"),
				countryCode: CountryCode.Brand.make("US"),
				postalCode: "10001",
				region: "New York",
			},
			{
				city: ProperNoun.Brand.make("New York"),
			},
		],
	});

	export type Type = typeof Schema.Type;
}
