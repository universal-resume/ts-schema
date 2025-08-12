import { Array as ArraySchema, optional, Struct } from "effect/Schema";
import {
	Day,
	Location,
	Organization,
	ProperNoun,
	Score,
	Url,
} from "#value-object";

import { Course } from "./education/course.js";
import { StudyType } from "./education/study-type.js";

export namespace Education {
	export const Schema = Struct({
		area: ProperNoun.FromString,
		courses: optional(ArraySchema(Course)),
		endDate: optional(Day.FromString),
		organization: Organization.Schema,
		location: optional(Location.Schema),
		score: optional(Score.FromString),
		startDate: Day.FromString,
		type: StudyType,
		url: optional(Url.FromString),
	});

	export type Type = typeof Schema.Type;
}
