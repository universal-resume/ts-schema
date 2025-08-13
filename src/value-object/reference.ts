import { optional, Struct } from "effect/Schema";
import { Contact, Day, Position, ProperNoun } from "#value-object";
import { Testamonial } from "../resume/reference/testamonial.js";

export namespace Reference {
	export const Schema = Struct({
		contact: optional(Contact.Schema),
		date: Day.FromString,
		name: ProperNoun.FromString,
		position: optional(Position.FromString),
		testimonial: optional(Testamonial),
	});

	export type Type = typeof Schema.Type;
}
