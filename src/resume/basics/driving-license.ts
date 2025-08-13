import { NonEmptyString } from "effect/Schema";

export const DrivingLicense = NonEmptyString.annotations({
	examples: ["A", "B", "C"],
});
