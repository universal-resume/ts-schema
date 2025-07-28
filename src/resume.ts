import { Array as ArraySchema, optional, Struct } from "effect/Schema";

import { Award } from "./resume/award";
import { Basics } from "./resume/basics";
import { Certificate } from "./resume/certificate";
import { Education } from "./resume/education";
import { Interest } from "./resume/interest";
import { Language } from "./resume/language";
import { Meta } from "./resume/meta";
import { Project } from "./resume/project";
import { Publication } from "./resume/publication";
import { Reference } from "./resume/reference";
import { Skill } from "./resume/skill";
import { Volunteer } from "./resume/volunteer";
import { Work } from "./resume/work";

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
