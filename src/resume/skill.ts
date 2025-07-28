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
			description: "The level of the skill",
			examples: ["Beginner", "Intermediate", "Advanced", "Expert"],
		}),
		name: NonEmptyString.annotations({
			description: "The name of the skill",
			examples: [
				"Development",
				"Design",
				"AI",
				"Machine Learning",
				"Data Science",
				"etc.",
			],
		}),
		tags: optional(ArraySchema(NonEmptyString)).annotations({
			description: "The tags of the skill",
			examples: [["Python", "Rust", "TypeScript", "React", "Node.js"]],
		}),
		yearsOfExperience: optional(NumberSchema).annotations({
			description: "The years of experience of the skill",
			examples: [1, 2, 3, 4, 5],
		}),
	});

	export type Type = typeof Schema.Type;
}
