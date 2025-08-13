import { Literal } from "effect/Schema";

export const Type = Literal(
	"article", // A published article in print or digital media
	"blog-post", // Informal or personal writing published online
	"book", // Authored or co-authored book
	"book-chapter", // Contribution to an edited book
	"conference-paper", // Academic or technical paper presented at a conference
	"journal-paper", // Peer-reviewed journal article
	"whitepaper", // Technical or business-oriented document
	"thesis", // Master's or PhD thesis
	"report", // Research or technical report
	"webinar", // Online video-based publication
	"presentation", // Slides or recorded talk
	"other", // Catch-all for anything not listed
);
