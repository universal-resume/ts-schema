import { Array as ArraySchema, optionalWith, Struct } from "effect/Schema";
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
		courses: optionalWith(ArraySchema(Course), { exact: true }),
		endDate: optionalWith(Day.FromString, { exact: true }),
		organization: Organization.Schema,
		location: optionalWith(Location.Schema, { exact: true }),
		score: optionalWith(Score.FromString, { exact: true }),
		startDate: Day.FromString,
		type: StudyType,
		url: optionalWith(Url.FromString, { exact: true }),
	}).annotations({
		identifier: "Education",
	});

	export type Type = typeof Schema.Type;
}
