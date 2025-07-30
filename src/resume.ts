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
		meta: Meta.Schema.annotations({
			identifier: "meta",
		}),
		projects: optional(ArraySchema(Project.Schema)).annotations({
			identifier: "projects",
		}),
		publications: optional(ArraySchema(Publication.Schema)).annotations({
			identifier: "publications",
		}),
		references: optional(ArraySchema(Reference.Schema)).annotations({
			identifier: "references",
		}),
		skills: optional(ArraySchema(Skill.Schema)).annotations({
			identifier: "skills",
		}),
		volunteers: optional(ArraySchema(Volunteer.Schema)).annotations({
			identifier: "volunteers",
		}),
		work: optional(ArraySchema(Work.Schema)).annotations({
			identifier: "work",
		}),
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
