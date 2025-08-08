import { DateFromString, Organization, ProperNoun, Tag, Url } from "@value-object";
import {
	Array as ArraySchema,
	optional,
	Struct,
} from "effect/Schema";

export namespace Certificate {
	export const Schema = Struct({
		issueDate: DateFromString,
		issuer: Organization,
		name: ProperNoun,
		url: optional(Url),
		tags: optional(ArraySchema(Tag)),
	});

	export type Type = typeof Schema.Type;
}
