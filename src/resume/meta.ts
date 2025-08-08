import { DateFromString, Url } from "@value-object";
import {
    optional,
    Struct,
} from "effect/Schema";
import { ResumeSchema } from "./meta/schema";

export namespace Meta {
    export const Schema = Struct({
        canonical: optional(Url),
        lastModified: optional(DateFromString),
        schema: optional(ResumeSchema),
    });

    export type Type = typeof Schema.Type;
}
