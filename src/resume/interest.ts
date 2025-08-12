import { Array as ArraySchema, optional, Struct } from "effect/Schema";
import { ProperNoun, Summary, Tag } from "#value-object";

export namespace Interest {
	export const Schema = Struct({
		summary: optional(Summary.FromString),
		name: ProperNoun.FromString,
		tags: optional(ArraySchema(Tag.FromString)),
	});

	export type Type = typeof Schema.Type;
}
