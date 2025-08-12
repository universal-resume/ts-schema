import { Array as ArraySchema, optional, Struct } from "effect/Schema";
import {
	Contact,
	Day,
	Organization,
	Position,
	Profile,
	ProperNoun,
} from "#value-object";
import { Testamonial } from "./reference/testamonial.js";

export namespace Reference {
	export const Schema = Struct({
		organization: optional(Organization.Schema),
		contact: optional(Contact.Schema),
		profiles: optional(ArraySchema(Profile.Schema)),
		date: Day.FromString,
		name: ProperNoun.FromString,
		position: optional(Position.FromString),
		testimonial: optional(Testamonial),
	});

	export type Type = typeof Schema.Type;
}
