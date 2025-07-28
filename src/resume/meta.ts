import { NonEmptyString, optional, Struct } from "effect/Schema";

import { Validator } from "../validator.js";

export namespace Meta {
	export const Schema = Struct({
		canonical: optional(Validator.Url).annotations({
			description:
				"The canonical URL of the resume, the URL of the resume page",
			examples: ["https://www.john-doe.com/resume"],
		}),
		lastModified: optional(Validator.DateAnyFormat).annotations({
			description:
				"The last modified date of the resume, format: YYYY-MM-DD, YYYY-MM or YYYY",
			examples: ["2021-01-01"],
		}),
		schema: optional(NonEmptyString).annotations({
			description:
				"The schema of the resume, the schema of the resume page, e.g. ResumeSchema, ResumeSchema.v1, etc.",
			examples: ["universal-resume.1.0.0"],
		}),
	});

	export type Type = typeof Schema.Type;
}
