import { NonEmptyString } from "effect/Schema";

export const ContractType = NonEmptyString.annotations({
	description: "The type of contract between the employer and the employee",
	examples: ["Full-time", "Part-time", "Freelance", "etc"],
});
