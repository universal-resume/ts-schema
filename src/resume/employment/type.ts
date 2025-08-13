import { Literal } from "effect/Schema";

export const Type = Literal(
	"internal",
	"freelance",
	"agency",
	"contract",
	"apprenticeship",
	"internship",
).annotations({
	description: "The type of contract between the employer and the employee",
});
