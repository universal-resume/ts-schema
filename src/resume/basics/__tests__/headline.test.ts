import { Schema } from "effect";
import { expect, it } from "vitest";
import { Headline } from "../headline";

it("should parse this Headline", () => {
	const input = "Software Engineer";
	const headline = Schema.decodeUnknownSync(Headline)(input);
	expect(headline).toEqual(input);
});

it("should fail because too long", () => {
	const input =
		"Software Engineer with a 10 years of experience and a lot of skills";
	expect(() => Schema.decodeUnknownSync(Headline)(input)).toThrow();
});
