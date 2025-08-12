import { Schema } from "effect";
import { NonEmptyString, transform } from "effect/Schema";

export namespace Position {
	const AsString = NonEmptyString.annotations({
		identifier: "Position",
		description:
			"Your position in related experience, the role you held in the organization.",
		examples: [
			"Software Engineer",
			"Marketing Manager",
			"Elementary School Teacher",
			"Registered Nurse",
			"Graphic Designer",
			"Sales Representative",
			"Research Scientist",
			"Customer Service Specialist",
			"Construction Project Manager",
			"Financial Analyst",
		],
	});

	export const Brand = Schema.NonEmptyString.pipe(Schema.brand("Position"));

	export const FromString = transform(AsString, Brand, {
		decode: (value) =>
			value
				.trim()
				.split(" ")
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
				.join(" "),
		encode: (value) => value,
		strict: true,
	});
}
