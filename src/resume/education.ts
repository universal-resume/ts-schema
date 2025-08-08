import { DateFromString, Location, Organization, ProperNoun, Score, Url } from "@value-object";
import {
	Array as ArraySchema,
	optional,
	Struct,
} from "effect/Schema";

import { Course } from "./education/course";
import { StudyType } from "./education/study-type";

export namespace Education {
	export const Schema = Struct({
		area: ProperNoun,
		courses: optional(ArraySchema(Course)),
		endDate: optional(DateFromString),
		organization: Organization,
		location: optional(Location),
		score: optional(Score),
		startDate: DateFromString,
		studyType: StudyType,
		url: optional(Url),
	});

	export type Type = typeof Schema.Type;
}
