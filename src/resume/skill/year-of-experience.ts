import { Number as NumberSchema, positive } from "effect/Schema";

export const YearsOfExperience = NumberSchema.pipe(positive()).annotations({
	description: "The years of experience of the skill",
	examples: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
});
