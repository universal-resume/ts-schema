import { Schema } from "effect";

export const Position = Schema.NonEmptyString.annotations({
    description:
        "Your position in related experience, the role you held in the organization.",
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
});