import { Effect, Exit, Schema } from "effect";
import { expect, it } from "vitest";

import { Email } from "#value-object";

it("validates a correct lowercase email", () => {
	expect(
		Effect.runSync(Schema.decode(Email.FromString)("john.doe@example.com")),
	).toEqual("john.doe@example.com");
});

it("validates a correct uppercase email", () => {
	expect(
		Effect.runSync(Schema.decode(Email.FromString)("JOHN.DOE@EXAMPLE.COM")),
	).toEqual("john.doe@example.com");
});

it("invalidates an incorrect email", () => {
	expect(
		Exit.isFailure(
			Effect.runSyncExit(Schema.decode(Email.FromString)("bad-email")),
		),
	).toBe(true);
});
