import { NonEmptyString, optional, Struct } from "effect/Schema";
import { Location } from "#value-object";
import { ProperNoun } from "./proper-noun.js";

export namespace Organization {
	export const Schema = Struct({
		name: ProperNoun.FromString,
		location: optional(Location.Schema),
		description: optional(NonEmptyString),
	}).annotations({
		identifier: "Organization",
		title: "Organization",
		description:
			"The company or institution to which the related experience belongs.",
	});

	export type Type = typeof Schema.Type;
}
