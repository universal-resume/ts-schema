import { Effect, Exit, Schema } from "effect";
import { expect, it } from "vitest";

import { Tag } from "#value-object";

it("validates a correct tag", () => {
	const tag = "Typescript";
	expect(Effect.runSync(Schema.decode(Tag.FromString)(tag))).toEqual(tag);
});

it("validates a correct tag with spaces", () => {
	const tag = " Typescript ";
	expect(Effect.runSync(Schema.decode(Tag.FromString)(tag))).toEqual(
		"Typescript",
	);
});

it("validates a non capitalized correct tag with multiple words", () => {
	const tag = "typescript leadership";
	expect(Effect.runSync(Schema.decode(Tag.FromString)(tag))).toEqual(
		"Typescript Leadership",
	);
});

it("invalidates an incorrect tag", () => {
	expect(
		Exit.isFailure(Effect.runSyncExit(Schema.decode(Tag.FromString)(""))),
	).toBe(true);
});
