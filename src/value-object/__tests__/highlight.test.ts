import { Effect, Exit, Schema } from "effect";
import { expect, it } from "vitest";

import { Highlight } from "#value-object";

it("validates a correct highlight", () => {
	expect(
		Effect.runSync(
			Schema.decode(Highlight.FromString)(
				"Led the turnaround of a failed ERP deployment",
			),
		),
	).toEqual("Led the turnaround of a failed ERP deployment");
});

it("invalidates an incorrect highlight", () => {
	expect(
		Exit.isFailure(Effect.runSyncExit(Schema.decode(Highlight.FromString)(""))),
	).toBe(true);
});
