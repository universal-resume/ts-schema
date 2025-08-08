import { Schema } from "effect";
import { transform } from "effect/Schema";

export namespace Highlight {
	const AsString = Schema.NonEmptyString.annotations({
		identifier: "Highlight",
		description:
			"Concrete achievements you want to bring attention to in the context of the related experience.",
		examples: [
			"Led the turnaround of a failed ERP deployment",
			"Reduced deployment times from weeks to hours",
			"Created a culture of accountability and cross-team collaboration",
			"Standardized monitoring, CI/CD pipelines, and postmortem processes",
		],
	});

	export const Brand = Schema.NonEmptyString.pipe(Schema.brand("Highlight"));

	export const FromString = transform(AsString, Brand, {
		decode: (value) => value,
		encode: (value) => value,
	});
}
