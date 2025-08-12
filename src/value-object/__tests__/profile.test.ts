import { Effect, Exit, Schema } from "effect";
import { expect, it } from "vitest";

import { Profile } from "#value-object";

it("validates a full profile", () => {
	const input = {
		network: "Example",
		url: "https://example.com",
		username: "example",
	};
	expect(Effect.runSync(Schema.decode(Profile.Schema)(input))).toEqual({
		network: "Example",
		url: new URL("https://example.com"),
		username: "example",
	});
});

it("validates an only network and url profile", () => {
	const input = {
		network: "Example",
		url: "https://example.com",
	};
	expect(Effect.runSync(Schema.decode(Profile.Schema)(input))).toEqual({
		network: "Example",
		url: new URL("https://example.com"),
	});
});

it("invalidates an incorrect profile with a missing required property", () => {
	const input = { url: "https://example.com" } as unknown as {
		url: string;
		network: string;
	};
	expect(
		Exit.isFailure(
			Effect.runSyncExit(
				Schema.decode(Profile.Schema, {
					exact: true,
					onExcessProperty: "error",
				})(input),
			),
		),
	).toBe(true);
});

it("invalidates an incorrect profile with an incorrect property", () => {
	const input = { network: null, url: "test" } as unknown as {
		network: string;
		url: string;
	};
	expect(
		Exit.isFailure(
			Effect.runSyncExit(
				Schema.decode(Profile.Schema, {
					exact: true,
					onExcessProperty: "error",
				})(input),
			),
		),
	).toBe(true);
});
