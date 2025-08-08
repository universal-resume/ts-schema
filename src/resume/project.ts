import { Highlight, Location, Organization, Position, ProperNoun, Summary, Tag, Url } from "@value-object";
import {
    Array as ArraySchema,
    DateFromString,
    optional,
    Struct,
} from "effect/Schema";
import { Status } from "./project/status";
import { Type } from "./project/type";

export namespace Project {
    export const Schema = Struct({
        summary: optional(Summary),
        endDate: optional(DateFromString),
        organization: optional(Organization),
        highlights: optional(ArraySchema(Highlight)),
        location: optional(Location),
        name: ProperNoun,
        position: optional(Position),
        startDate: optional(DateFromString),
        status: optional(Status),
        tags: optional(ArraySchema(Tag)),
        type: optional(Type),
        url: optional(Url),
    });

    export type Type = typeof Schema.Type;
}
