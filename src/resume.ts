import { Array, Struct } from "effect/Schema"

import { Award } from "./resume/award"
import { Basics } from "./resume/basics"
import { Certificate } from "./resume/certificate"
import { Education } from "./resume/education"
import { Interest } from "./resume/interest"
import { Language } from "./resume/language"
import { Meta } from "./resume/meta"
import { Project } from "./resume/project"
import { Publication } from "./resume/publication"
import { Reference } from "./resume/reference"
import { Skill } from "./resume/skill"
import { Volunteer } from "./resume/volunteer"
import { Work } from "./resume/work"

namespace Resume {

    export const Schema = Struct({
        awards: Array(Award.Schema),
        basics: Basics.Schema,
        certificates: Array(Certificate.Schema),
        education: Array(Education.Schema),
        interests: Array(Interest.Schema),
        languages: Array(Language.Schema),
        meta: Meta.Schema,
        projects: Array(Project.Schema),
        publications: Array(Publication.Schema),
        references: Array(Reference.Schema),
        skills: Array(Skill.Schema),
        volunteers: Array(Volunteer.Schema),
        work: Array(Work.Schema),
    })

    export type Type = typeof Schema.Type
}

export { Resume, Award, Basics, Certificate, Education, Interest, Language, Meta, Project, Publication, Reference, Skill, Volunteer, Work }