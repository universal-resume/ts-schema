import { Effect, Schema as EffectSchema, type SchemaAST } from "effect";
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
	export const Schema = EffectSchema.Struct({
		awards: EffectSchema.optionalWith(EffectSchema.Array(Award.Schema), {
			exact: true,
		}),
		basics: Basics.Schema,
		certificates: EffectSchema.optionalWith(
			EffectSchema.Array(Certificate.Schema),
			{
				exact: true,
			},
		),
		education: EffectSchema.optionalWith(EffectSchema.Array(Education.Schema), {
			exact: true,
		}),
		interests: EffectSchema.optionalWith(EffectSchema.Array(Interest.Schema), {
			exact: true,
		}),
		languages: EffectSchema.optionalWith(EffectSchema.Array(Language.Schema), {
			exact: true,
		}),
		meta: EffectSchema.optionalWith(Meta.Schema, { exact: true }),
		initiatives: EffectSchema.optionalWith(
			EffectSchema.Array(Initiative.Schema),
			{ exact: true },
		),
		publications: EffectSchema.optionalWith(
			EffectSchema.Array(Publication.Schema),
			{ exact: true },
		),
		skills: EffectSchema.optionalWith(EffectSchema.Array(Skill.Schema), {
			exact: true,
		}),
		employments: EffectSchema.optionalWith(
			EffectSchema.Array(Employment.Schema),
			{ exact: true },
		),
	}).annotations({
		identifier: "Resume",
	});

	export type Type = typeof Schema.Type;

	export const decodeAsync = (
		json: unknown,
		options?: SchemaAST.ParseOptions,
	) =>
		EffectSchema.decodeUnknown(Schema, options)(json).pipe(Effect.runPromise);

	export const decodeSync = (json: unknown, options?: SchemaAST.ParseOptions) =>
		EffectSchema.decodeUnknownSync(Schema, options)(json);
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
