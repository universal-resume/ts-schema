import { Schema } from "effect";

export const Summary = Schema.NonEmptyString.annotations({
	description:
		"The summary of a section is a short amount of text that describes the context and your role in this context.",
	examples: [
		"Promoted to lead all IT operations after successfully stabilizing key systems and driving company-wide transformation efforts. Oversaw infrastructure, deployments, incident response, and service delivery.",
	],
});