import { ProperNoun, Tag } from "@value-object";
import {
	Array as ArraySchema,
	NonEmptyString,
	Number as NumberSchema,
	optional,
	Struct,
} from "effect/Schema";

export namespace Skill {
	export const Schema = Struct({
		level: optional(NonEmptyString).annotations({
			identifier: "skill-level",
			description: "The level of the skill",
			examples: ["Beginner", "Intermediate", "Advanced", "Expert"],
		}),
		name: ProperNoun,
		tags: optional(ArraySchema(Tag)),
		yearsOfExperience: optional(NumberSchema).annotations({
			identifier: "skill-years-of-experience",
			description: "The years of experience of the skill",
			examples: [1, 2, 3, 4, 5],
		}),
	});

	export type Type = typeof Schema.Type;
}
