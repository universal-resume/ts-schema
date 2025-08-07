import { date, url } from "@annotation";
import {
	Date as DateFromString,
	NonEmptyString,
	optional,
	Struct,
} from "effect/Schema";
import { Validator } from "../validator.js";

export namespace Meta {
	export const Schema = Struct({
		canonical: optional(Validator.Url).annotations({
			identifier: "meta-canonical",
			description: url.description,
			examples: url.examples,
		}),
		lastModified: optional(DateFromString).annotations({
			identifier: "meta-last-modified",
			description: date.description,
			examples: date.examples,
		}),
		schema: optional(NonEmptyString).annotations({
			identifier: "meta-schema",
			description:
				"The schema of the resume, the schema of the resume page, e.g. ResumeSchema, ResumeSchema.v1, etc.",
			examples: ["universal-resume.1.0.0"],
		}),
	});

	export type Type = typeof Schema.Type;
}
