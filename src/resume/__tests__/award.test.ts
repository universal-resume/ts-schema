import { Schema } from "effect";
import { expect, it } from "vitest";
import { Award } from "../award";

it("should parse this Award", () => {
	const input: unknown = {
		title: "IT Leadership Excellence Award",
		issuer: {
			name: "Parts Unlimited",
		},
		date: "2014",
		location: {
			address: "Phoenix, AZ",
			countryCode: "US",
		},
		summary:
			"Awarded for outstanding leadership during the digital transformation of Parts Unlimited's IT operations. Recognized for stabilizing critical systems and fostering DevOps adoption.",
		tags: ["Leadership", "IT Operations", "DevOps"],
	};
	const award = Schema.decodeUnknownSync(Award.Schema)(input);
	expect(award).toMatchSnapshot();
});
