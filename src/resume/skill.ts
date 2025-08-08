import { Array as ArraySchema, optional, Struct } from "effect/Schema";
import { ProperNoun, Tag } from "#value-object";
import { Level } from "./skill/level.js";
import { YearsOfExperience } from "./skill/year-of-experience.js";

export namespace Skill {
	export const Schema = Struct({
		level: optional(Level),
		name: ProperNoun.FromString,
		tags: optional(ArraySchema(Tag.FromString)),
		yearsOfExperience: optional(YearsOfExperience),
	});

	export type Type = typeof Schema.Type;
}
