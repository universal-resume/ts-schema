import { Effect, Exit, Schema } from "effect";
import { expect, it } from "vitest";

import { Organization } from "./organization";

it("validates a correct organization", () => {
    expect(Effect.runSync(Schema.decode(Organization)("Parts Unlimited"))).toEqual("Parts Unlimited");
});

it("invalidates an incorrect organization", () => {
    expect(Exit.isFailure(Effect.runSyncExit(Schema.decode(Organization)("")))).toBe(true);
});