import { Effect } from "effect/index";
import {
	Array as ArraySchema,
	decodeUnknown,
	optional,
	Struct,
} from "effect/Schema";
import { Award } from "./resume/award.js";
import { Basics } from "./resume/basics.js";
import { Certificate } from "./resume/certificate.js";
import { Education } from "./resume/education.js";
import { Employment } from "./resume/employment.js";
import { Initiative } from "./resume/initiative.js";
import { Interest } from "./resume/interest.js";
import { Language } from "./resume/language.js";
import { Meta } from "./resume/meta.js";
import { Publication } from "./resume/publication.js";
import { Skill } from "./resume/skill.js";

namespace Resume {
	export const Schema = Struct({
		awards: optional(ArraySchema(Award.Schema)).annotations({
			identifier: "awards",
		}),
		basics: Basics.Schema.annotations({
			identifier: "basics",
		}),
		certificates: optional(ArraySchema(Certificate.Schema)).annotations({
			identifier: "certificates",
		}),
		education: optional(ArraySchema(Education.Schema)).annotations({
			identifier: "education",
		}),
		interests: optional(ArraySchema(Interest.Schema)).annotations({
			identifier: "interests",
		}),
		languages: optional(ArraySchema(Language.Schema)).annotations({
			identifier: "languages",
		}),
		meta: optional(Meta.Schema).annotations({
			identifier: "meta",
		}),
		initiatives: optional(ArraySchema(Initiative.Schema)).annotations({
			identifier: "initiatives",
		}),
		publications: optional(ArraySchema(Publication.Schema)).annotations({
			identifier: "publications",
		}),
		skills: optional(ArraySchema(Skill.Schema)).annotations({
			identifier: "skills",
		}),
		employments: optional(ArraySchema(Employment.Schema)).annotations({
			identifier: "employments",
		}),
	});

	export type Type = typeof Schema.Type;

	export const decodeSync = (json: unknown) =>
		Effect.runSync(decodeUnknown(Schema)(json));
	export const decodeAsync = (json: unknown) =>
		Effect.runPromise(decodeUnknown(Schema)(json));
}

export {
	Resume,
	Award,
	Basics,
	Certificate,
	Education,
	Interest,
	Language,
	Meta,
	Initiative,
	Publication,
	Skill,
	Employment,
};
