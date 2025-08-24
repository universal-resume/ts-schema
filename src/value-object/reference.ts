import { optionalWith, Struct } from "effect/Schema";
import { Contact, Day, Position, ProperNoun } from "#value-object";
import { Testamonial } from "../resume/reference/testamonial.js";

export namespace Reference {
	export const Schema = Struct({
		contact: optionalWith(Contact.Schema, { exact: true }),
		date: Day.FromString,
		name: ProperNoun.FromString,
		position: optionalWith(Position.FromString, { exact: true }),
		testimonial: optionalWith(Testamonial, { exact: true }),
	}).annotations({
		identifier: "Reference",
	});

	export type Type = typeof Schema.Type;
}
