import { Effect, Exit, Schema } from "effect";
import { expect, it } from "vitest";
import { Url } from "#value-object";

it("validates a correct url", () => {
	const url = "https://www.google.com";
	const result = Effect.runSync(Schema.decode(Url.FromString)(url));
	expect(result).toEqual(new URL(url));
});

it("validates a linkedin profile picture url", () => {
	const url =
		"https://media.licdn.com/dms/image/v2/D4E03AQHu3mveAvgBKQ/profile-displayphoto-crop_800_800/B4EZgNON4eGYAU-/0/1752568487991?e=1758153600&v=beta&t=cgElhcWQI5BP6eUVXrCtHWZdQpM_4d5oCnOHNaZ0dYE";
	const result = Effect.runSync(Schema.decode(Url.FromString)(url));
	expect(result).toEqual(new URL(url));
});

it("invalidates an incorrect url", () => {
	const url = "bad-url";
	const exit = Effect.runSyncExit(Schema.decode(Url.FromString)(url));
	expect(Exit.isFailure(exit)).toBe(true);
});
