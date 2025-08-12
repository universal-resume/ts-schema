import { Schema } from "effect/index";
import { transform } from "effect/Schema";

export namespace Day {
	const AsString = Schema.NonEmptyString.annotations({
		identifier: "Day",
		description:
			"startDate and endDate mention the time period, and date a more exact date when the related experience happened. The format is any JS Date constructor understands format: YYYY-MM-DD, YYYY-MM, YYYY, etc.",
		examples: ["2021-01-01", "2021-01", "2021"],
	});

	export const Brand = Schema.Date.pipe(Schema.brand("Day"));

	export const FromString = transform(AsString, Brand, {
		decode: (value) => value,
		encode: (value) => value,
		strict: true,
	});
}
