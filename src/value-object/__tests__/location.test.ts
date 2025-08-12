import { Effect, Exit, Schema } from "effect";
import { expect, it } from "vitest";

import { Location } from "#value-object";

it("validates a full location", () => {
	const input = {
		address: "123 Main St",
		city: "Paris",
		countryCode: "FR",
		postalCode: "75000",
		region: "Ile-de-France",
	};
	expect(Effect.runSync(Schema.decode(Location.Schema)(input))).toEqual(input);
});

it("validates an only city location", () => {
	const input = {
		city: "Paris",
	};
	expect(Effect.runSync(Schema.decode(Location.Schema)(input))).toEqual(input);
});

it("invalidates an incorrect location with an additional property", () => {
	const input = { foo: "bar" } as Location.Type;
	expect(
		Exit.isFailure(
			Effect.runSyncExit(
				Schema.decode(Location.Schema, {
					exact: true,
					onExcessProperty: "error",
				})(input),
			),
		),
	).toBe(true);
});

it("invalidates an incorrect location with an incorrect property", () => {
	const input = { city: "Paris", countryCode: "France" };
	expect(
		Exit.isFailure(
			Effect.runSyncExit(
				Schema.decode(Location.Schema, {
					exact: true,
					onExcessProperty: "error",
				})(input),
			),
		),
	).toBe(true);
});
