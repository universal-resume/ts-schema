import { ProperNoun, Summary, Tag } from "@value-object";
import {
	Array as ArraySchema,
	optional,
	Struct,
} from "effect/Schema";

export namespace Interest {
	export const Schema = Struct({
		summary: optional(Summary),
		name: ProperNoun,
		tags: optional(ArraySchema(Tag)),
	});

	export type Type = typeof Schema.Type;
}
