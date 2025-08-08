import { Schema } from "effect";
import { expect, it } from "vitest";
import { Basics } from "../basics";

it("should parse this Basics", () => {
	const input: unknown = {
		name: "Bill Palmer",
		headline: "Vice President of IT Operations",
		summary:
			"Experienced IT leader with a strong background in IT operations, infrastructure management, and organizational transformation. Proven ability to lead cross-functional teams, modernize legacy systems, and drive digital transformation under pressure. Known for turning crisis into opportunity, and aligning IT with business goals.",
		birth: "1975-08-12",
		email: "bill.palmer@example.com",
		phone: "+1-555-123-4567",
		location: {
			address: "123 Enterprise Blvd",
			city: "Phoenix",
			region: "Arizona",
			postalCode: "85001",
			countryCode: "US",
		},
		nationalities: ["US"],
		driverLicenses: ["B"],
		picture: "https://example.com/images/bill-palmer.jpg",
		profiles: [
			{
				network: "LinkedIn",
				url: "https://www.linkedin.com/in/bill-palmer-it",
				username: "bill-palmer-it",
			},
		],
		website: "https://billpalmer.dev",
		remote: true,
	};
	const basics = Schema.decodeUnknownSync(Basics.Schema)(input);
	expect(basics).toMatchSnapshot();
});
