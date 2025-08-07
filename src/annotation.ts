export const date = {
	description:
		"startDate and endDate mention the time period, and date a more exact date when the section happened. The format is any JS Date constructor understands format: YYYY-MM-DD, YYYY-MM, YYYY, etc.",
	examples: [new Date("2021-01-01"), new Date("2021-01"), new Date("2021")],
} as const;

export const highlights = {
	description:
		"The highlights of a section are a list of concrete achievements you want to bring attention to in this context.",
	examples: [
		[
			"Led the turnaround of a failed ERP deployment",
			"Reduced deployment times from weeks to hours",
			"Created a culture of accountability and cross-team collaboration",
			"Standardized monitoring, CI/CD pipelines, and postmortem processes",
		],
		[
			"Led the development of a new AI-powered chatbot",
			"Reduced customer support inquiries by 30%",
		],
	],
} as const;

export const location = {
	description:
		"The location of a section is the place where it happened. It is supposed to be a city, a country, a region, etc.",
	examples: ["Paris, France", "San Francisco, CA", "Remote"],
} as const;

export const organization = {
	description: "The company or institution to which the section belongs.",
	examples: ["Parts Unlimited", "Dunder Mifflin", "Sabre"],
} as const;

export const position = {
	description:
		"The position of a section is the role you held in the organization.",
	examples: [
		"Software Engineer",
		"Marketing Manager",
		"Elementary School Teacher",
		"Registered Nurse",
		"Graphic Designer",
		"Sales Representative",
		"Research Scientist",
		"Customer Service Specialist",
		"Construction Project Manager",
		"Financial Analyst",
	],
} as const;

export const summary = {
	description:
		"The summary of a section is a short amount of text that describes the context and your role in this context.",
	examples: [
		"Promoted to lead all IT operations after successfully stabilizing key systems and driving company-wide transformation efforts. Oversaw infrastructure, deployments, incident response, and service delivery.",
	],
} as const;

export const tags = {
	description:
		"The tags of a section are a list of short, unordered and not related with each other keywords that you want to associate with this section. They are used to group sections together and to help the user find related sections.",
	examples: [
		["Leadership", "IT Operations", "DevOps"],
		["AI", "Chatbot", "Customer Support"],
	],
} as const;

export const url = {
	description:
		"Any external link that you want to add to the section. It can be a link to an original document, an organization, a project, a blog post, a video, a podcast, etc.",
	examples: [
		"https://www.linkedin.com/in/john-doe",
		"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		"https://www.github.com/john-doe",
	],
} as const;
