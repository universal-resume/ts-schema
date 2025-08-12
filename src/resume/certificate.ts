import { Array as ArraySchema, optional, Struct } from "effect/Schema";
import { Day, Organization, ProperNoun, Tag, Url } from "#value-object";

export namespace Certificate {
	export const Schema = Struct({
		date: Day.FromString,
		issuer: Organization.Schema,
		name: ProperNoun.FromString,
		url: optional(Url.FromString),
		tags: optional(ArraySchema(Tag.FromString)),
	});

	export type Type = typeof Schema.Type;
}
