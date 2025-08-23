import { Effect } from "effect";
import {
	Array as ArraySchema,
	decodeUnknown,
	decodeUnknownSync,
	optional,
	optionalWith,
	Struct,
} from "effect/Schema";
import type { ParseOptions } from "effect/SchemaAST";
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
		awards: optionalWith(ArraySchema(Award.Schema), { exact: true }).annotations({
			identifier: "awards",
		}),
		basics: Basics.Schema.annotations({
			identifier: "basics",
		}),
		certificates: optionalWith(ArraySchema(Certificate.Schema), { exact: true }).annotations({
			identifier: "certificates",
		}),
		education: optionalWith(ArraySchema(Education.Schema), { exact: true }).annotations({
			identifier: "education",
		}),
		interests: optionalWith(ArraySchema(Interest.Schema), { exact: true }).annotations({
			identifier: "interests",
		}),
		languages: optionalWith(ArraySchema(Language.Schema), { exact: true }).annotations({
			identifier: "languages",
		}),
		meta: optionalWith(Meta.Schema, { exact: true }).annotations({
			identifier: "meta",
		}),
		initiatives: optionalWith(ArraySchema(Initiative.Schema), { exact: true }).annotations({
			identifier: "initiatives",
		}),
		publications: optionalWith(ArraySchema(Publication.Schema), { exact: true }).annotations({
			identifier: "publications",
		}),
		skills: optionalWith(ArraySchema(Skill.Schema), { exact: true }).annotations({
			identifier: "skills",
		}),
		employments: optionalWith(ArraySchema(Employment.Schema), { exact: true }).annotations({
			identifier: "employments",
		}),
	});

	export type Type = typeof Schema.Type;

	export const decodeAsync = (json: unknown, options?: ParseOptions) =>
		decodeUnknown(Schema, options)(json).pipe(Effect.runPromise);

	export const decodeSync = (json: unknown, options?: ParseOptions) =>
		decodeUnknownSync(Schema, options)(json);
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
