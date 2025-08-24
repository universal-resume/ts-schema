import { optionalWith, Struct } from "effect/Schema";
import { Day, Url } from "#value-object";
import { ResumeSchema } from "./meta/schema.js";

export namespace Meta {
	export const Schema = Struct({
		canonical: optionalWith(Url.FromString, { exact: true }),
		lastModified: optionalWith(Day.FromString, { exact: true }),
		schema: optionalWith(ResumeSchema, { exact: true }),
	}).annotations({
		identifier: "Meta",
	});

	export type Type = typeof Schema.Type;
}
