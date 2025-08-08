import { Effect, Exit, Schema } from "effect";
import { expect, it } from "vitest";

import { ProperNoun } from "./proper-noun";

it("validates a correct proper noun", () => {
    expect(Effect.runSync(Schema.decode(ProperNoun)("John Doe"))).toEqual("John Doe");
});

it("Capitalize a correct proper noun", () => {
    expect(Effect.runSync(Schema.decode(ProperNoun)("john doe"))).toEqual("John doe");
});

it("invalidates an incorrect proper noun", () => {
    expect(Exit.isFailure(Effect.runSyncExit(Schema.decode(ProperNoun)("")))).toBe(true);
});