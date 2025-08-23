import { Array as ArraySchema, optionalWith, Struct } from "effect/Schema";
import { ProperNoun, Summary, Tag } from "#value-object";

export namespace Interest {
	export const Schema = Struct({
		summary: optionalWith(Summary.FromString, { exact: true }),
		name: ProperNoun.FromString,
		tags: optionalWith(ArraySchema(Tag.FromString), { exact: true }),
	});

	export type Type = typeof Schema.Type;
}
