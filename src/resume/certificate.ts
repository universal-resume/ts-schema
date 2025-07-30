import {
	Array as ArraySchema,
	NonEmptyString,
	optional,
	Struct,
} from "effect/Schema";

import { Validator } from "../validator.js";

export namespace Certificate {
	export const Schema = Struct({
		issueDate: Validator.DateAnyFormat.annotations({
			identifier: "certificate-issue-date",
			description:
				"The date of the certificate, format: YYYY-MM-DD, YYYY-MM or YYYY",
			examples: ["2021-01-01"],
		}),
		issuer: NonEmptyString.annotations({
			identifier: "certificate-issuer",
			description:
				"The issuer of the certificate, the organization or institution that issued the certificate",
			examples: ["Google"],
		}),
		name: NonEmptyString.annotations({
			identifier: "certificate-name",
			description:
				"The name of the certificate, the name of the course or the name of the certification",
			examples: ["Google AI Research Certificate"],
		}),
		url: optional(Validator.Url).annotations({
			identifier: "certificate-url",
			description:
				"The URL of the certificate, the URL of the certificate page or the URL of the certificate issuer",
			examples: ["https://www.google.com/certificate/1234567890"],
		}),
		tags: optional(ArraySchema(NonEmptyString)).annotations({
			identifier: "certificate-tags",
			description: "Tags associated with the certificate",
			examples: [["Google", "AI"]],
		}),
	});

	export type Type = typeof Schema.Type;
}
