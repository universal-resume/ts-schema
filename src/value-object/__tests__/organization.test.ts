import { Effect, Schema } from "effect";
import { expect, it } from "vitest";

import { Organization } from "#value-object";

it("validates a correct organization", () => {
	expect(
		Effect.runSync(
			Schema.decode(Organization.Schema)({ name: "Parts Unlimited" }),
		),
	).toEqual({ name: "Parts Unlimited" });
});
