import { Array as ArraySchema, optional, Struct } from "effect/Schema";

import { Award } from "./resume/award.js";
import { Basics } from "./resume/basics.js";
import { Certificate } from "./resume/certificate.js";
import { Education } from "./resume/education.js";
import { Interest } from "./resume/interest.js";
import { Language } from "./resume/language.js";
import { Meta } from "./resume/meta.js";
import { Project } from "./resume/project.js";
import { Publication } from "./resume/publication.js";
import { Reference } from "./resume/reference.js";
import { Skill } from "./resume/skill.js";
import { Volunteer } from "./resume/volunteer.js";
import { Work } from "./resume/work.js";

namespace Resume {
	export const Schema = Struct({
		awards: optional(ArraySchema(Award.Schema)),
		basics: Basics.Schema,
		certificates: optional(ArraySchema(Certificate.Schema)),
		education: optional(ArraySchema(Education.Schema)),
		interests: optional(ArraySchema(Interest.Schema)),
		languages: optional(ArraySchema(Language.Schema)),
		meta: Meta.Schema,
		projects: optional(ArraySchema(Project.Schema)),
		publications: optional(ArraySchema(Publication.Schema)),
		references: optional(ArraySchema(Reference.Schema)),
		skills: optional(ArraySchema(Skill.Schema)),
		volunteers: optional(ArraySchema(Volunteer.Schema)),
		work: optional(ArraySchema(Work.Schema)),
	});

	export type Type = typeof Schema.Type;
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
	Project,
	Publication,
	Reference,
	Skill,
	Volunteer,
	Work,
};
