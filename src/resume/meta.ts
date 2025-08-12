import { optional, Struct } from "effect/Schema";
import { Day, Url } from "#value-object";
import { ResumeSchema } from "./meta/schema.js";

export namespace Meta {
	export const Schema = Struct({
		canonical: optional(Url.FromString),
		lastModified: optional(Day.FromString),
		schema: optional(ResumeSchema),
	});

	export type Type = typeof Schema.Type;
}
