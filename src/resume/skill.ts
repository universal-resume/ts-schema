import { Array as ArraySchema, optionalWith, Struct } from "effect/Schema";
import { ProperNoun, Tag } from "#value-object";
import { Level } from "./skill/level.js";
import { YearsOfExperience } from "./skill/year-of-experience.js";

export namespace Skill {
	export const Schema = Struct({
		level: optionalWith(Level, { exact: true }),
		name: ProperNoun.FromString,
		tags: optionalWith(ArraySchema(Tag.FromString), { exact: true }),
		yearsOfExperience: optionalWith(YearsOfExperience, { exact: true }),
	}).annotations({
		identifier: "Skill",
	});

	export type Type = typeof Schema.Type;
}
