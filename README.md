# ts-schema

An Effect based typescript implementation of the [universal-resume schema](https://github.com/universal-resume/json-schema), including structures, validation and typing

The schema is inspired by the [json-resume](https://github.com/jsonresume) organization adding required fields and a few other improvements.

## Installation
In your Typescript project, run : `npm i @universal-resume/ts-schema`

**Note**: This package requires `effect` as a peer dependency. If you don't have it installed, run: `npm i effect`

## Dependencies
- **Required**: `effect` (peer dependency)
- **Optional**: `typescript` (for type definitions)

## How to use
```ts
import { Resume } from "@universal-resume/ts-schema";

// Only for third option, be sure to `npm i effect`
import { Schema } from "effect";

const input: unknown = {
    basics: {
        name: "John Doe",
        headline: "Software Engineer",
        email: "john.doe@example.com",
        phone: "+1-555-0123",
        location: {
            city: "San Francisco",
            country: "USA"
        }
    },
    work: [
        {
            company: "Tech Corp",
            position: "Senior Developer",
            startDate: "2020-01",
            endDate: "2023-12",
            summary: "Led development of key features"
        }
    ],
    education: [
        {
            institution: "University of Technology",
            degree: "Bachelor of Science",
            field: "Computer Science",
            startDate: "2016-09",
            endDate: "2020-05"
        }
    ]
}

// OPTION 1 : Sync way
try {
    const result: Resume.Type = Resume.decodeSync(input);
    console.log("Valid resume:", result);
} catch (error) {
    console.error("Validation failed:", error);
}

// OPTION 2 : Async way
Resume.decodeAsync(input)
    .then((resume: Resume.Type) => {
        console.log("Valid resume:", resume);
    })
    .catch((error) => {
        console.error("Validation failed:", error);
    });

// OPTION 3 : Effect way
const effect = Schema.decodeUnknown(Resume.Schema)(input);
const result = Schema.runSync(effect);
console.log("Valid resume:", result);
```

## How to contribute
- If you consider this schema can be improved, feel free to create an issue and let's discuss about it.
- If you spot a bug, missing test, typo, etc. just raise a pull request.

## License
[MIT](./LICENSE)