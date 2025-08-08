import { ProperNoun, Score } from "@value-object";
import { Struct } from "effect/Schema";

export const Certification = Struct({
		name: ProperNoun,
		score: Score,
	}).annotations({
		description: "Any certifications about your language skills",
		examples: [
			{
				name: "TOEFL",
				score: "100",
			},
		],
	});
