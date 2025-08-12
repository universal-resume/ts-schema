import { Effect, Exit, Schema } from "effect";
import { expect, it } from "vitest";

import { ProperNoun } from "#value-object";

it("validates a correct proper noun", () => {
	expect(
		Effect.runSync(Schema.decode(ProperNoun.FromString)("John Doe")),
	).toEqual("John Doe");
});

it("Capitalize a proper noun on multiple words", () => {
	expect(
		Effect.runSync(Schema.decode(ProperNoun.FromString)("john doe")),
	).toEqual("John Doe");
});

it("Trim a proper noun", () => {
	expect(
		Effect.runSync(Schema.decode(ProperNoun.FromString)("  John Doe  ")),
	).toEqual("John Doe");
});

it("invalidates an incorrect proper noun", () => {
	expect(
		Exit.isFailure(
			Effect.runSyncExit(Schema.decode(ProperNoun.FromString)("")),
		),
	).toBe(true);
});
