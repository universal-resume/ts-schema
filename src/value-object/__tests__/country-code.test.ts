import { Effect, Exit, Schema } from "effect";
import { expect, it } from "vitest";

import { CountryCode } from "#value-object";

it("validates a correct lowercase country code", () => {
	expect(Effect.runSync(Schema.decode(CountryCode.FromString)("us"))).toEqual(
		"US",
	);
});

it("should return a branded country code", () => {
	expect(CountryCode.Brand.make("US")).toEqual("US");
});

it("invalidates an incorrect country code", () => {
	expect(
		Exit.isFailure(
			Effect.runSyncExit(
				Schema.decode(CountryCode.FromString)("bad-country-code"),
			),
		),
	).toBe(true);
});
