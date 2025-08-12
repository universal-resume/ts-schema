import { Schema } from "effect";
import { transform } from "effect/Schema";

export namespace Url {
	const AsString = Schema.NonEmptyString.annotations({
		identifier: "Url",
		description:
			"Any external link that you want to add to the section. It can be a link to an original document, an organization, a project, a blog post, a video, a podcast, etc.",
		examples: [
			"https://www.linkedin.com/in/john-doe",
			"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
			"https://www.github.com/john-doe",
		],
	});

	export const Brand = Schema.URL.pipe(Schema.brand("Url"));

	export const FromString = transform(AsString, Brand, {
		decode: (value) => value,
		encode: (value) => value,
		strict: true,
	});
}
