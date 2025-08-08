import { Effect, Exit, Schema } from "effect";
import { expect, it } from "vitest";

import { Position } from "./position";

it("validates a correct position", () => {
    expect(Effect.runSync(Schema.decode(Position)("Software Engineer"))).toEqual("Software Engineer");
});

it("invalidates an incorrect position", () => {
    expect(Exit.isFailure(Effect.runSyncExit(Schema.decode(Position)("")))).toBe(true);
});