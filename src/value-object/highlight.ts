import { Schema } from "effect";

export const Highlight = Schema.NonEmptyString.annotations({
	description:
		"Concrete achievements you want to bring attention to in the context of the related experience.",
	examples: [
		"Led the turnaround of a failed ERP deployment",
		"Reduced deployment times from weeks to hours",
		"Created a culture of accountability and cross-team collaboration",
		"Standardized monitoring, CI/CD pipelines, and postmortem processes",
	],
});