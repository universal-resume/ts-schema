import { Schema } from "effect/index";

export const CountryCode = Schema.Uppercase
    .pipe(
        // ISO 3166-1 alpha-2
        Schema.pattern(/^[A-Z]{2}$/)
    )
    .annotations({
        "description": "Country code in ISO 3166-1 alpha-2 format",
        "examples": ["US", "UK", "FR", "DE", "IT", "ES"]
    });