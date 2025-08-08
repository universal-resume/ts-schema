import { Effect, Exit, Schema } from "effect";
import { expect, it } from "vitest";

import { Tag } from "./tag";

it("validates a correct tag", () => {
    const tag = "Typescript";
    expect(Effect.runSync(Schema.decode(Tag)(tag))).toEqual(tag);
});

it("invalidates an incorrect tag", () => {
    expect(Exit.isFailure(Effect.runSyncExit(Schema.decode(Tag)("")))).toBe(true);
});