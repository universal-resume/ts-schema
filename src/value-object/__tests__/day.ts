import { Effect, Exit, Schema } from "effect";
import { expect, it } from "vitest";

import { Day } from "#value-object";

it("validates a correct date from string in the format YYYY-MM-DD", () => {
	expect(Effect.runSync(Schema.decode(Day.FromString)("2021-01-01"))).toEqual(
		new Date("2021-01-01"),
	);
});

it("validates a correct date from string in the format YYYY-MM", () => {
	expect(Effect.runSync(Schema.decode(Day.FromString)("2021-01"))).toEqual(
		new Date("2021-01-01"),
	);
});

it("validates a correct date from string in the format YYYY", () => {
	expect(Effect.runSync(Schema.decode(Day.FromString)("2021"))).toEqual(
		new Date("2021-01-01"),
	);
});

it("invalidates an incorrect date from string", () => {
	expect(
		Exit.isFailure(
			Effect.runSyncExit(Schema.decode(Day.FromString)("bad-date-from-string")),
		),
	).toBe(true);
});
