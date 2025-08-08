import { NonEmptyString } from "effect/Schema";

export const Score = NonEmptyString.annotations({
	description: "The score obtained at the related field",
	examples: ["3.8", "A"],
});