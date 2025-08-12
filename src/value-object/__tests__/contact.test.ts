import { Effect, Exit, Schema } from "effect";
import { expect, it } from "vitest";

import { Contact } from "#value-object";

it("validates a full contact", () => {
	const input = {
		email: "test@example.com",
		phone: "+1234567890",
		discord: "test",
		telegram: "test",
		linkedin: "test",
		website: "https://example.com",
	};
	expect(Effect.runSync(Schema.decode(Contact.Schema)(input))).toEqual({
		...input,
		website: new URL("https://example.com"),
	});
});

it("validates an only email contact", () => {
	const input = {
		email: "test@example.com",
	};
	expect(Effect.runSync(Schema.decode(Contact.Schema)(input))).toEqual(input);
});

it("invalidates an incorrect contact with an additional property", () => {
	const input = { foo: "bar" } as Omit<Contact.Type, "website">;
	expect(
		Exit.isFailure(
			Effect.runSyncExit(
				Schema.decode(Contact.Schema, {
					exact: true,
					onExcessProperty: "error",
				})(input),
			),
		),
	).toBe(true);
});

it("invalidates an incorrect contact with an incorrect property", () => {
	const input = { email: "test@example.com", phone: "1234567890", url: "test" };
	expect(
		Exit.isFailure(
			Effect.runSyncExit(
				Schema.decode(Contact.Schema, {
					exact: true,
					onExcessProperty: "error",
				})(input),
			),
		),
	).toBe(true);
});
