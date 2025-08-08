import { Effect, Exit, Schema } from "effect";
import { expect, it } from "vitest";

import { Email } from "./email";

it("validates a correct lowercase email", () => {
    expect(Effect.runSync(Schema.decode(Email)("john.doe@example.com"))).toEqual("john.doe@example.com");
});

it("validates a correct uppercase email", () => {
    expect(Effect.runSync(Schema.decode(Email)("JOHN.DOE@EXAMPLE.COM"))).toEqual("john.doe@example.com");
});

it("invalidates an incorrect email", () => {
    expect(Exit.isFailure(Effect.runSyncExit(Schema.decode(Email)("bad-email")))).toBe(true);
});