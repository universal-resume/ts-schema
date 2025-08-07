import { date, url } from "@annotation";
import {
	Array as ArraySchema,
	Date as DateFromString,
	NonEmptyString,
	optional,
	Struct,
} from "effect/Schema";

import { Validator } from "../validator.js";

export namespace Certificate {
	export const Schema = Struct({
		issueDate: DateFromString.annotations({
			identifier: "certificate-issue-date",
			description: date.description,
			examples: date.examples,
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
			description: url.description,
			examples: url.examples,
		}),
		tags: optional(ArraySchema(NonEmptyString)).annotations({
			identifier: "certificate-tags",
			description: "Tags associated with the certificate",
			examples: [["Google", "AI"]],
		}),
	});

	export type Type = typeof Schema.Type;
}
