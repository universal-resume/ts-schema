import { Effect, Exit, Schema } from "effect";
import { expect, it } from "vitest";

import { Position } from "#value-object";

it("validates a correct position", () => {
	const position = "Software Engineer";
	expect(Effect.runSync(Schema.decode(Position.FromString)(position))).toEqual(
		position,
	);
});

it("validates a correct position with spaces", () => {
	const position = " Software Engineer ";
	expect(Effect.runSync(Schema.decode(Position.FromString)(position))).toEqual(
		"Software Engineer",
	);
});

it("validates a non capitalized correct position with multiple words", () => {
	const position = "software engineer leadership";
	expect(Effect.runSync(Schema.decode(Position.FromString)(position))).toEqual(
		"Software Engineer Leadership",
	);
});

it("invalidates an incorrect position", () => {
	expect(
		Exit.isFailure(Effect.runSyncExit(Schema.decode(Position.FromString)(""))),
	).toBe(true);
});
