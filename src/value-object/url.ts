import { Schema } from "effect";
import urlRegex from "url-regex";

export const Url = Schema.String.pipe(
    Schema.pattern(
        urlRegex({
            exact: true,
            strict: true,
        }),
    ),
).annotations({
	description:
		"Any external link that you want to add to the section. It can be a link to an original document, an organization, a project, a blog post, a video, a podcast, etc.",
	examples: [
		"https://www.linkedin.com/in/john-doe",
		"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		"https://www.github.com/john-doe",
	],
});