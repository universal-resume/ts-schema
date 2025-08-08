import { NonEmptyString } from "effect/Schema";

export const DriverLicense = NonEmptyString.annotations({
	description: "One of the driver licenses of the resume subject",
	examples: ["A", "B", "C"],
});
