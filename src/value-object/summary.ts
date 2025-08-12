import { Schema } from "effect";
import { transform } from "effect/Schema";

export namespace Summary {
	const AsString = Schema.NonEmptyString.annotations({
		identifier: "Summary",
		description:
			"The summary of a section is a short amount of text that describes the context and your role in this context.",
		examples: [
			"Promoted to lead all IT operations after successfully stabilizing key systems and driving company-wide transformation efforts. Oversaw infrastructure, deployments, incident response, and service delivery.",
		],
	});

	export const Brand = Schema.NonEmptyString.pipe(Schema.brand("Summary"));

	export const FromString = transform(AsString, Brand, {
		decode: (value) => value,
		encode: (value) => value,
		strict: true,
	});
}
