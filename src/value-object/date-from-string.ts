import { Date as DateShema } from "effect/Schema";

export const DateFromString = DateShema.annotations({
	description:
		"startDate and endDate mention the time period, and date a more exact date when the related experience happened. The format is any JS Date constructor understands format: YYYY-MM-DD, YYYY-MM, YYYY, etc.",
	examples: [new Date("2021-01-01"), new Date("2021-01"), new Date("2021")],
});