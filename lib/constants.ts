// Type definitions
export interface Choice {
	readonly id: string;
	readonly label: string;
	readonly emoji?: string;
	readonly response: string;
	readonly meme?: string;
}

export interface ChapterWithChoices {
	readonly chapter: string;
	readonly title: string;
	readonly prompt: string;
	readonly choices: readonly Choice[];
}

export interface ChapterWithText {
	readonly chapter: string;
	readonly title: string;
	readonly prompt?: string;
	readonly text: readonly string[];
	readonly choices: readonly {
		readonly id: string;
		readonly label: string;
	}[];
}

export interface QuestionChapter {
	readonly chapter: string;
	readonly title: string;
	readonly question: string;
	readonly subtitle: string;
	readonly choices: readonly {
		readonly id: string;
		readonly label: string;
		readonly emoji?: string;
	}[];
}

export interface SuccessChapter {
	readonly title: string;
	readonly subtitle: string;
	readonly message: string;
	readonly footer: string;
	readonly celebration: string;
	readonly finalMeme?: string;
}

export interface OpeningChapter {
	readonly title: string;
	readonly subtitle: string;
	readonly bookTitle: string;
	readonly bookSubtitle: string;
	readonly button: string;
	readonly meme?: string;
}

export const COPY = {
	opening: {
		title: "Once upon a time, 13 years ago...",
		subtitle:
			"...a story began. And Tabs, you've been the best chapter ever written.",
		bookTitle: "The Chronicles of Us",
		bookSubtitle: "A 13-Year Epic of Love, Laughter, and Chaos",
		button: "Begin Our Story",
		meme: "https://i.imgflip.com/30b1gx.jpg", // "This is fine" dog
	},

	chapter1: {
		chapter: "Chapter 1",
		title: "Where It All Began",
		prompt: "Tabs, do you remember how it started? 13 years ago, two paths crossed...",
		choices: [
			{
				id: "fate",
				label: "🎯 It was meant to be",
				response:
					"Right? Some things just click. From day one, there was something different about us.",
				meme: "https://i.imgflip.com/2hgfw.jpg", // Surprised Pikachu
			},
			{
				id: "luck",
				label: "🍀 Best coincidence ever",
				response:
					"The luckiest accident of my life. What are the odds we'd end up here, 13 years later?",
				meme: "https://i.imgflip.com/5c7lwq.jpg", // Excited SpongeBob
			},
		],
	},

	chapter2: {
		chapter: "Chapter 2",
		title: "The Laughter Archives",
		prompt: "After 13 years of chaos, what makes you smile the most?",
		choices: [
			{
				id: "inside-jokes",
				label: "🤪 Our ridiculous inside jokes",
				emoji: "🤪",
				response:
					"We've accumulated 13 years worth of jokes that literally no one else would understand. And I wouldn't trade a single one.",
				meme: "https://i.imgflip.com/1bij.jpg", // Conspiracy guy
			},
			{
				id: "random-moments",
				label: "🌙 Those random 2 AM conversations",
				emoji: "🌙",
				response:
					"Some of the best moments were the ones we didn't plan. Just vibing in existence.",
				meme: "https://i.imgflip.com/261o3j.jpg", // Honest work meme
			},
			{
				id: "adventures",
				label: "🎢 All our weird adventures",
				emoji: "🎢",
				response:
					"Every adventure with you is unforgettable. Sometimes chaotic, always worth it.",
				meme: "https://i.imgflip.com/1g8my4.jpg", // "This is where the fun begins"
			},
		],
	},

	chapter3: {
		chapter: "Chapter 3",
		title: "The Comfort Zone",
		prompt: "What does 'home' feel like to you, Tabs?",
		choices: [
			{
				id: "peace",
				label: "🛋️ That cozy blanket feeling",
				emoji: "🛋️",
				response:
					"Yes! Pure, unfiltered comfort. That's what you are to me. Like the coziest, warmest place.",
				meme: "https://i.imgflip.com/26am.jpg", // Wholesome seal
			},
			{
				id: "safe",
				label: "💝 Somewhere I can be myself",
				emoji: "💝",
				response:
					"Exactly. No masks, no pretending. Just... us. That kind of safety is rare. That kind of trust is everything.",
				meme: "https://i.imgflip.com/1otk96.jpg", // Happy crying
			},
			{
				id: "belonging",
				label: "🏠 Where I'm supposed to be",
				emoji: "🏠",
				response:
					"We just fit. Always have, always will. That's not something you find twice in a lifetime.",
				meme: "https://i.imgflip.com/2cp1.jpg", // Chef's kiss
			},
		],
	},

	chapter4: {
		chapter: "Chapter 4",
		title: "The Evolution",
		prompt: "How do you think we've changed over 13 years?",
		choices: [
			{
				id: "grown",
				label: "🌱 We grew up together",
				emoji: "🌱",
				response:
					"We've been through so many versions of ourselves. And somehow, through every change, we stayed constant.",
				meme: "https://i.imgflip.com/4/2gnnjh.jpg", // Growing meme
			},
			{
				id: "deeper",
				label: "💕 We got closer",
				emoji: "💕",
				response:
					"13 years didn't make us old friends. It made us family. The kind you choose, the kind that matters most.",
				meme: "https://i.imgflip.com/gk5el.jpg", // Yes chad
			},
			{
				id: "stronger",
				label: "⚡ We became unstoppable",
				emoji: "⚡",
				response:
					"We figured out how to navigate life together, and that made us both stronger. Unstoppable duo energy.",
				meme: "https://i.imgflip.com/30b1gx.jpg", // This is fine (but actually)
			},
		],
	},

	chapter5: {
		chapter: "Chapter 5",
		title: "The Unspoken Things",
		prompt: "Some things don't need words, but I'm going to say them anyway...",
		text: [
			"13 years is a long time to know someone.",
			"Long enough to see every version of them.",
			"Long enough to know what silence means.",
			"Long enough to realize some feelings don't fade—they grow.",
		],
		choices: [
			{ id: "ready", label: "I'm listening 💝" },
			{ id: "continue", label: "Keep going... 🥰" },
		],
	},

	chapter6: {
		chapter: "Chapter 6",
		title: "The Realization",
		prompt: "Here's what I've figured out, Tabs...",
		text: [
			"You know how the best love stories start as friendships?",
			"They say you should marry your best friend.",
			"That's what happened to us.",
			"Somewhere between year 1 and year 13...",
			"I fell completely, utterly, hopelessly in love with my best friend.",
		],
		choices: [
			{ id: "tell-me", label: "Tell me more... 💕" },
			{ id: "knew-it", label: "I had a feeling 😏" },
		],
	},

	almostQuestion: {
		chapter: "Chapter 7",
		title: "The Moment of Truth",
		text: [
			"So here we are.",
			"13 years of friendship.",
			"Countless memories.",
			"One heart that's completely yours.",
			"And one very important question...",
		],
		choices: [
			{ id: "ready", label: "Ask me 💝" },
			{ id: "waiting", label: "I'm ready 💕" },
		],
	},

	question: {
		chapter: "The Question",
		title: "Rosa Mae 'Tabs' F. Repiso,",
		question: "Will you be my Valentine?",
		subtitle:
			"(Not just for today... but for every day. Because 13 years of friendship deserves a forever kind of love.)",
		choices: [
			{ id: "yes", label: "Yes! 💝", emoji: "💝" },
			{
				id: "absolutely",
				label: "Absolutely! 🥰",
				emoji: "🥰",
			},
			{ id: "always", label: "Always and forever 💕", emoji: "💕" },
		],
	},

	success: {
		title: "Chapter ∞",
		subtitle: "And so begins the best chapter yet...",
		message: "13 years of friendship. A lifetime of more to come.",
		footer: "Some stories don't end. They just keep getting better.",
		celebration: "Happy Valentine's Day, Tabs 💝",
		finalMeme: "https://i.imgflip.com/5c7lwq.jpg", // Celebration meme
	},
} as const;

export const ANIMALS = {
	pig: "🐷",
	capybara: "🦦",
	toothless: "🌙", // Using crescent moon for Toothless vibe
	heart: "💕",
	bigHeart: "❤️",
	sparkles: "✨",
	book: "📖",
	redHeart: "❤️",
	pinkHeart: "💗",
	loveLetter: "💌",
	roses: "🌹",
	cupid: "💘",
	kissingHeart: "😘",
	heartEyes: "😍",
	fire: "🔥",
	star: "⭐",
} as const;

// Meme images for fun and personality
export const MEMES = {
	celebrating: "https://i.imgflip.com/5c7lwq.jpg", // Excited spongebob
	shocked: "https://i.imgflip.com/2hgfw.jpg", // Surprised pikachu
	wholesome: "https://i.imgflip.com/26am.jpg", // Wholesome seal
	happy: "https://i.imgflip.com/1otk96.jpg", // Happy crying
	yesYesYes: "https://i.imgflip.com/gk5el.jpg", // Yes chad
	perfect: "https://i.imgflip.com/2cp1.jpg", // Chef's kiss
	drakeApprove: "https://i.imgflip.com/4t0m5.jpg", // Drake approving
	thisIsFine: "https://i.imgflip.com/30b1gx.jpg", // This is fine dog
	conspiracy: "https://i.imgflip.com/1bij.jpg", // Conspiracy guy
	honestWork: "https://i.imgflip.com/261o3j.jpg", // Honest work
} as const;

// Valentine's ASCII art
export const HEART_ART = `
    ❤️ 💕 ❤️
  💕   💗   💕
 💗           💗
💕             💕
 💗           💗
   💕       💕
     💗   💗
       ❤️
` as const;
