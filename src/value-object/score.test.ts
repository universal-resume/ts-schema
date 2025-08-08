import { Effect, Exit, Schema } from "effect";
import { expect, it } from "vitest";

import { Score } from "./score";

it("validates a correct score", () => {
    expect(Effect.runSync(Schema.decode(Score)("3.8"))).toEqual("3.8");
    expect(Effect.runSync(Schema.decode(Score)("A"))).toEqual("A");
});

it("invalidates an incorrect score", () => {
    expect(Exit.isFailure(Effect.runSyncExit(Schema.decode(Score)("")))).toBe(true);
});