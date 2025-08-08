import { CountryCode, ProperNoun } from "@value-object";
import {
	Array as ArraySchema,
	optional,
	Struct,
} from "effect/Schema";

import { Certification } from "./language/certification";
import { Fluency } from "./language/fluency";

export namespace Language {
	export const Schema = Struct({
		certifications: optional(ArraySchema(Certification)),
		fluency: optional(Fluency),
		name: ProperNoun,
		countryCode: optional(CountryCode),
	});

	export type Type = typeof Schema.Type;
}
