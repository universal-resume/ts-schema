import { Boolean as BooleanSchema } from "effect/Schema";

export const Remote = BooleanSchema.annotations({
	description: "Whether the resume subject is willing to work remotely",
	examples: [true],
});
