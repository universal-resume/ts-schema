import {
    Effect,
    Exit,
    Schema,
} from "effect";
import { expect, it } from "vitest";

import { CountryCode } from "./country-code";

it("validates a correct lowercase country code", () => {
    expect(Effect.runSync(Schema.decode(CountryCode)("us"))).toEqual("US");
});

it("validates a correct uppercase country code", () => {
    expect(Effect.runSync(Schema.decode(CountryCode)("US"))).toEqual("US");
});

it("invalidates an incorrect country code", () => {
    expect(Exit.isFailure(Effect.runSyncExit(Schema.decode(CountryCode)("bad-country-code")))).toBe(true);
});