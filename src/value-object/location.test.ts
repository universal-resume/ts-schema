import { Effect, Exit, Schema } from "effect";
import { expect, it } from "vitest";

import { Location } from "./location";

it("validates a correct location", () => {
    expect(Effect.runSync(Schema.decode(Location)("Paris, France"))).toEqual("Paris, France");
});

it("invalidates an incorrect location", () => {
    expect(Exit.isFailure(Effect.runSyncExit(Schema.decode(Location)("")))).toBe(true);
});