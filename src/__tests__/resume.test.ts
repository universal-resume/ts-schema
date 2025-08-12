import { expect, it } from "vitest";
import { Resume } from "../resume.js";

const schema = {
	basics: {
		name: "John Doe",
		headline: "Software Engineer",
	},
};

it("decodeSync a valid resume", () => {
	const result = Resume.decodeSync(schema);
	expect(result).toEqual(schema);
});

it("decodeSync a invalid resume", () => {
	expect(() => Resume.decodeSync({})).toThrow();
});

it("decodeAsync a valid resume", () => {
	Resume.decodeAsync(schema).then((result) => {
		expect(result).toEqual(schema);
	});
});

it("decodeAsync a invalid resume", () => {
	Resume.decodeAsync({}).catch((error) => {
		expect(error).toBeDefined();
	});
});
