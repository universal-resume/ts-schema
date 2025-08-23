import { Array as ArraySchema, optionalWith, Struct } from "effect/Schema";
import { CountryCode, ProperNoun } from "#value-object";

import { Certification } from "./language/certification.js";
import { Fluency } from "./language/fluency.js";

export namespace Language {
	export const Schema = Struct({
		certifications: optionalWith(ArraySchema(Certification), { exact: true }),
		fluency: optionalWith(Fluency, { exact: true }),
		name: ProperNoun.FromString,
		countryCode: optionalWith(CountryCode.FromString, { exact: true }),
	});

	export type Type = typeof Schema.Type;
}
