import { Effect, Exit, Schema } from "effect";
import { describe, expect, it } from "vitest";

import { Validator } from "./validator";

describe("Url", () => {
	it("validates a correct url", () => {
		const url = "https://www.google.com";
		const result = Effect.runSync(Schema.decode(Validator.Url)(url));
		expect(result).toEqual(url);
	});

	it("validates a linkedin profile picture url", () => {
		const url =
			"https://media.licdn.com/dms/image/v2/D4E03AQHu3mveAvgBKQ/profile-displayphoto-crop_800_800/B4EZgNON4eGYAU-/0/1752568487991?e=1758153600&v=beta&t=cgElhcWQI5BP6eUVXrCtHWZdQpM_4d5oCnOHNaZ0dYE";
		const result = Effect.runSync(Schema.decode(Validator.Url)(url));
		expect(result).toEqual(url);
	});

	it("invalidates an incorrect url", () => {
		const url = "bad-url";
		const exit = Effect.runSyncExit(Schema.decode(Validator.Url)(url));
		expect(Exit.isFailure(exit)).toBe(true);
	});
});

describe("Email", () => {
	it("validates a correct email", () => {
		const email = "test@example.com";
		const result = Effect.runSync(Schema.decode(Validator.Email)(email));
		expect(result).toEqual(email);
	});

	it("invalidates an incorrect email", () => {
		const email = "bad-email";
		const exit = Effect.runSyncExit(Schema.decode(Validator.Email)(email));
		expect(Exit.isFailure(exit)).toBe(true);
	});
});

describe("CountryCode", () => {
	it("validates a correct country code", () => {
		const countryCode = "fr";
		const result = Effect.runSync(
			Schema.decode(Validator.CountryCode)(countryCode),
		);
		expect(result).toEqual(countryCode);
	});

	it("invalidates an incorrect country code", () => {
		const countryCode = "bad-country-code";
		const exit = Effect.runSyncExit(
			Schema.decode(Validator.CountryCode)(countryCode),
		);
		expect(Exit.isFailure(exit)).toBe(true);
	});
});

describe("Date", () => {
	it("validates a correct date with year, month and day", () => {
		const date = "2021-01-01";
		const result = Effect.runSync(Schema.decode(Validator.DateAnyFormat)(date));
		expect(result).toEqual(date);
	});

	it("validates a correct date with year and month", () => {
		const date = "2021-01";
		const result = Effect.runSync(Schema.decode(Validator.DateAnyFormat)(date));
		expect(result).toEqual(date);
	});

	it("validates a correct date with year", () => {
		const date = "2021";
		const result = Effect.runSync(Schema.decode(Validator.DateAnyFormat)(date));
		expect(result).toEqual(date);
	});

	it("invalidates an incorrect date", () => {
		const date = "bad-date";
		const exit = Effect.runSyncExit(
			Schema.decode(Validator.DateAnyFormat)(date),
		);
		expect(Exit.isFailure(exit)).toBe(true);
	});
});
