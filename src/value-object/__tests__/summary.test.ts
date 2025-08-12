import { Effect, Exit, Schema } from "effect";
import { expect, it } from "vitest";

import { Summary } from "#value-object";

it("validates a correct summary", () => {
	const summary =
		"Promoted to lead all IT operations after successfully stabilizing key systems and driving company-wide transformation efforts. Oversaw infrastructure, deployments, incident response, and service delivery.";
	expect(Effect.runSync(Schema.decode(Summary.FromString)(summary))).toEqual(
		summary,
	);
});

it("invalidates an incorrect summary", () => {
	expect(
		Exit.isFailure(Effect.runSyncExit(Schema.decode(Summary.FromString)(""))),
	).toBe(true);
});
