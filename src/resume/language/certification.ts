import { Struct } from "effect/Schema";
import { ProperNoun, Score } from "#value-object";

export const Certification = Struct({
	name: ProperNoun.FromString,
	score: Score.FromString,
}).annotations({
	description: "Any certifications about your language skills",
	examples: [
		{
			name: ProperNoun.Brand.make("TOEFL"),
			score: Score.Brand.make("100"),
		},
	],
});
