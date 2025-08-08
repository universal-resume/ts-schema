import { Array as ArraySchema, optional, Struct } from "effect/Schema";
import { CountryCode, ProperNoun } from "#value-object";

import { Certification } from "./language/certification.js";
import { Fluency } from "./language/fluency.js";

export namespace Language {
	export const Schema = Struct({
		certifications: optional(ArraySchema(Certification)),
		fluency: optional(Fluency),
		name: ProperNoun.FromString,
		countryCode: optional(CountryCode.FromString),
	});

	export type Type = typeof Schema.Type;
}
