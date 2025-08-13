import { Literal } from "effect/Schema";

export const Type = Literal(
	"volunteering",
	"personal",
	"education",
	"open-source",
	"startup",
	"civic",
	"research",
);
