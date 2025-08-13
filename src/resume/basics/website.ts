import { Url } from "#value-object";

export const Website = Url.FromString.annotations({
	description: "The personal website, portfolio or blog of resume subject",
	examples: [Url.Brand.make(new URL("https://john-doe.me"))],
});
