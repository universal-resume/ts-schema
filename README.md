# ts-schema

An [Effect](https://effect.website)-based TypeScript implementation of the [universal-resume schema](https://github.com/universal-resume/json-schema).  
It provides **runtime validation** and **static typing** for working with resumes in TypeScript.  

## Installation
Add the package to your TypeScript project:  

```sh
npm i @universal-resume/ts-schema
```

**Note**: This package requires `effect` as a peer dependency.
If you don't have it installed, run: `npm i effect`

## Dependencies
- **Required**: `effect` (peer dependency)
- **Optional**: `typescript` (for type definitions)

## Usage
```ts
import { Resume } from "@universal-resume/ts-schema";
// For Effect-style decoding (Option 3)
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
  employments: [
    {
      organization: {
        name: "Example Company"
      },
      position: "Senior Developer",
      startDate: "2020-01",
      endDate: "2023-12",
      summary: "Led development of key features"
    }
  ],
  education: [
    {
      organization: {
        name: "University of Technology"
      },
      type: "Bachelor of Science",
      area: "Computer Science",
      startDate: "2016-09",
      endDate: "2020-05"
    }
  ]
};

// OPTION 1: Synchronous decoding
try {
  const result: Resume.Type = Resume.decodeSync(input);
  console.log("Valid resume:", result);
} catch (error) {
  console.error("Validation failed:", error);
}

// OPTION 2: Asynchronous decoding
Resume.decodeAsync(input)
  .then((resume: Resume.Type) => {
    console.log("Valid resume:", resume);
  })
  .catch((error) => {
    console.error("Validation failed:", error);
  });

// OPTION 3: Effect-based decoding
const effect = Schema.decodeUnknown(Resume.Schema)(input);
const result = Schema.runSync(effect);
console.log("Valid resume:", result);
```

## Contributing
- 💡 Think the schema can be improved? Open an issue so we can discuss it.
- 🐛 Found a bug, missing test, or typo? Submit a pull request — contributions are very welcome!

## License
[MIT](./LICENSE)