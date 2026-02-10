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
		title: "13 years ago ...",
		subtitle:
			"A girl confessed to me through Messenger, then suddenly blocked me. That was you, Tabs. And that's where our 13-year chaos began.",
		bookTitle: "TabStory: From Grade 7 to Forever",
		bookSubtitle:
			"Teenage love, young parents, and all the craziness in between",
		button: "Let's begin",
		meme: "/gifs/kilig-opening.gif",
	},

	chapter1: {
		chapter: "Chapter 1",
		title: "Yung Confess-Then-Block Era",
		prompt: "Remember nung Grade 7 tayo? You confessed through Messenger then immediately blocked me. Never Forgetti, Tabs.",
		choices: [
			{
				id: "nervous",
				label: "Kinabahan ako nun, di ko alam gagawin",
				emoji: "😰",
				response:
					"I know! Tapos ako naman, nakatingin lang sa message mo na di makapag-reply kasi naka-block na ako. But you know what? That bold move caught my attention. Yung tomboyish girl na may guts to confess.",
				meme: "/gifs/nervous-kinabahan.gif",
			},
			{
				id: "bold",
				label: "Nag-risk ako, baka kasi ma-reject",
				emoji: "💪",
				response:
					"And I'm glad you took that risk. Kasi kung hindi, baka di tayo naging ganito ngayon. 13 years, one son, and counting. Best risk you ever took.",
				meme: "/gifs/boom-panes.gif",
			},
		],
	},

	chapter2: {
		chapter: "Chapter 2",
		title: "Yung Campus Crush na Pumili sa Tomboyish",
		prompt: "Naalala mo nung mga galit sa'yo yung ibang girls kasi I chose you? The tomboy who walks like a man pero girly sa heart?",
		choices: [
			{
				id: "tomboy-pride",
				label: "Yung asian eyes at volleyball moves ko",
				emoji: "🏐",
				response:
					"THOSE ASIAN EYES! Yung volleyball moves mo! Nakikita kita every day, walking with confidence. Yun yung nakita ko - someone who's unapologetically herself. And damn, I was hooked.",
				meme: "/gifs/heart-eyes-kilig.gif",
			},
			{
				id: "chosen",
				label: "Di ko alam bakit ako yung pinili mo",
				emoji: "💕",
				response:
					"Simple lang. You were real. Hindi ka nag-pretend. Yung confidence mo, yung pagiging ikaw lang. That's more attractive than anything else. And look at us now - 13 years later, still choosing each other.",
				meme: "/gifs/sana-all.gif",
			},
			{
				id: "haters",
				label: "Grabe yung mga haters nun",
				emoji: "😤",
				response:
					"Let them hate. We proved them all wrong. 13 years, one beautiful son, building our life together. They can keep talking, we'll keep thriving.",
				meme: "/gifs/edi-wow.gif",
			},
		],
	},

	chapter3: {
		chapter: "Chapter 3",
		title: "Yung Gate-Punching Incident",
		prompt: "Tangina nung away natin na nag-punch ako ng gate tapos lumabas yung tao at sinuntok ako. Classic Ronald and Tabs fight.",
		choices: [
			{
				id: "crazy",
				label: "Grabe yung fights natin noon",
				emoji: "🥊",
				response:
					"Intense tayo dati, no? But those fights taught us something. We learned how to fight right, how to communicate, how to grow together. From teenagers na puno ng angst to adults who know how to handle shit.",
				meme: "/gifs/vice-ganda-drama.gif",
			},
			{
				id: "growth",
				label: "Pero nag-mature na tayo ngayon",
				emoji: "🌱",
				response:
					"Sobrang laki ng pinag-bago natin from Grade 7 to now. Yung mga away na ganyan? Ngayon coffee at usap na lang. Mas mature, mas understanding. But still passionate - just in better ways.",
				meme: "/gifs/bawi-next-time.gif",
			},
			{
				id: "worth-it",
				label: "Worth it naman lahat ng pinagdaanan",
				emoji: "💯",
				response:
					"Every fight, every struggle - worth it. Kasi it made us stronger. We didn't run away when things got hard. We stayed, we fought, we grew. That's what real love is.",
				meme: "/gifs/true-love.gif",
			},
		],
	},

	chapter4: {
		chapter: "Chapter 4",
		title: "2018: Nung Naging Parents Tayo",
		prompt: "We were 17. Still studying. Tapos nalaman natin na buntis ka. Excited but worried. Remember that feeling?",
		choices: [
			{
				id: "scared",
				label: "Takot ako nun, ang bata pa natin",
				emoji: "😰",
				response:
					"Takot din ako. 17 years old pa lang tayo, teenage parents. Pero you know what? We didn't run. We faced it together. And we raised the most amazing kid. Prince Nygel - our little version of us.",
				meme: "/gifs/grabe-omg.gif",
			},
			{
				id: "excited",
				label: "Pero excited din ako makita sya",
				emoji: "👶",
				response:
					"Same! Kahit takot, excited tayo pareho. And when he came? Best thing that ever happened to us. Nakikita natin yung sarili natin sa kanya. He's proof that we did something right.",
				meme: "/gifs/happy-crying.gif",
			},
			{
				id: "team",
				label: "Naging team tayo lalo nun",
				emoji: "💪",
				response:
					"Oo! From teenage sweethearts to teenage parents. We leveled up together. Hindi madali, pero ginawa natin. And now look - we're thriving. WFH, stable, planning our future. We fucking made it, Tabs.",
				meme: "/gifs/success-yes.gif",
			},
		],
	},

	chapter5: {
		chapter: "Chapter 5",
		title: "Si Prince Nygel - Our Little Chaos",
		prompt: "He's 7 years old now. Nakikita natin yung sarili natin sa kanya. What's your favorite thing about being his parents?",
		text: [
			"Prince Nygel Repiso Dela Cruz.",
			"7 years old. Our son. Our little version of us.",
			"Yung way nya mag-isip, yung kilos nya, yung ngiti nya.",
			"Nakikita natin yung sarili natin sa kanya.",
			"Every day, we're reminded why we fought so hard to build this life.",
			"For him. For us. For our family.",
		],
		choices: [
			{ id: "proud", label: "Proud ako sa kanya" },
			{ id: "love", label: "He's our everything" },
		],
	},

	chapter6: {
		chapter: "Chapter 6",
		title: "Yung WFH Life Natin",
		prompt: "Now we're both working from home. Different companies, pero sama-sama sa bahay. How's that been?",
		text: [
			"We achieved it - working from home together.",
			"Kahit different companies, same bahay.",
			"Tulog during working hours? Check.",
			"Watching Modern Family instead of working? Check.",
			"Distracting each other? Double check.",
			"Me staying up late waiting for your 1AM clock out? Every night.",
			"You're 4PM-1AM, I'm 3PM-12MN or 9PM-6AM.",
			"Different schedules pero we make it work.",
			"Kasi that's what we do - we adapt, we adjust, we thrive together.",
		],
		choices: [
			{ id: "perfect", label: "Perfect setup para sa atin" },
			{ id: "team", label: "Team work talaga tayo" },
		],
	},

	chapter7: {
		chapter: "Chapter 7",
		title: "Yung Mga Bonding Natin",
		prompt: "Coffee. Modern Family. Horror movies. K-drama. Anime. Judging other people. These are us.",
		text: [
			"Our favorite bonding moments:",
			"Coffee dates kahit sa bahay lang.",
			"Binge-watching Modern Family for the nth time.",
			"Horror movies na nagpapantakot sa atin pero pinapanood pa rin.",
			"K-drama marathons and anime sessions.",
			"And let's be real - judging people together. Our favorite pastime.",
			"These simple moments? This is what makes life worth living.",
			"Di kailangan ng expensive dates.",
			"Basta kasama kita, okay na.",
		],
		choices: [
			{ id: "simple", label: "Simple lang pero perfect" },
			{ id: "favorite", label: "These are my favorite moments" },
		],
	},

	chapter8: {
		chapter: "Chapter 8",
		title: "Seventeen, Jeonghan, at Wonwoo",
		prompt: "I know your bias is Jeonghan from Seventeen. And you always say I look like Wonwoo. Crush mo rin ba ako kasi kamukha ko sya?",
		text: [
			"Seventeen - your favorite K-pop boy band.",
			"Jeonghan - your ultimate bias.",
			"And me? According to you, I look like Wonwoo.",
			"Di ko alam if yun yung reason bakit ka na-fall sa akin.",
			"Pero alam mo what's funny?",
			"After 13 years, hindi na ako insecure sa K-pop idols mo.",
			"Kasi alam ko naman - sila yung idol mo.",
			"Pero ako? I'm your reality.",
			"Your present. Your future. Your forever.",
		],
		choices: [
			{ id: "wonwoo", label: "Oo, kamukha mo talaga si Wonwoo" },
			{ id: "better", label: "Pero mas pogi ka" },
		],
	},

	chapter9: {
		chapter: "Chapter 9",
		title: "Yung Mga Pangarap Natin",
		prompt: "This year, may mga plano tayo. Personal car. Better body builds. Future together. Let's talk about that.",
		text: [
			"Our goals for this year and beyond:",
			"Honda Civic Type R. Toyota Vios. Honda City. Kahit ano sa tatlo, gusto natin.",
			"Better body builds - working out together sa bahay.",
			"More coffee dates. More movie nights. More memories with Prince.",
			"Building our future, one day at a time.",
			"From teenage love to young parents to now - adults with dreams.",
			"We've come so far, Tabs.",
			"And we're just getting started.",
		],
		choices: [
			{ id: "excited", label: "Excited ako sa future natin" },
			{ id: "together", label: "Basta sama-sama tayo" },
		],
	},

	almostQuestion: {
		chapter: "Chapter 10",
		title: "Before The Big Question...",
		text: [
			"13 years, Tabs.",
			"From that Messenger confession in Grade 7.",
			"To becoming teenage parents at 17.",
			"To raising our son together.",
			"To working from home, building our dreams.",
			"Every fight, every struggle, every beautiful moment.",
			"I wouldn't change a single thing.",
			"Because all of it led us here.",
			"To this moment.",
		],
		choices: [
			{ id: "ready", label: "Ano na, tanong mo na" },
			{ id: "waiting", label: "I'm ready for whatever you'll say" },
		],
	},

	question: {
		chapter: "Ang Tanong",
		title: "Rosa Mae 'Tabs' F. Repiso,",
		question: "Will you be my Valentine?",
		subtitle:
			"Not just for today. For every coffee date, every Modern Family episode, every late-night wait for your clock out. For all our dreams - the car, the body builds, the future with Prince. For forever. Will you continue this journey with me?",
		choices: [
			{ id: "yes", label: "Yes, lagi naman", emoji: "💝" },
			{ id: "absolutely", label: "Oo naman, mahal kita", emoji: "🥰" },
			{ id: "always", label: "Always and forever", emoji: "💕" },
		],
	},

	success: {
		title: "Chapter ∞",
		subtitle: "At patuloy ang ating kwento...",
		message:
			"13 years down. A lifetime to go. With our son. With our dreams. With each other.",
		footer: "From that Messenger confession to this moment - it's been one hell of a ride. And I'd do it all over again. I love you, Tabs. Let's keep building our forever.",
		celebration:
			"Happy Valentine's Day, Tabs. To us - Ronald, Rosa, at si Prince. Our little family. Our big dreams. Our forever. Mahal na mahal kita.",
		finalMeme: "/gifs/kilig-final.gif",
	},
} as const;

export const ANIMALS = {
	pig: "🐷",
	capybara: "🦦",
	toothless: "🌙",
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

export const MEMES = {
	celebrating: "/gifs/kilig-final.gif",
	shocked: "/gifs/nervous-kinabahan.gif",
	wholesome: "/gifs/vice-ganda-drama.gif",
	happy: "/gifs/bawi-next-time.gif",
	yesYesYes: "/gifs/happy-crying.gif",
	perfect: "/gifs/true-love.gif",
	drakeApprove: "/gifs/grabe-omg.gif",
	thisIsFine: "/gifs/success-yes.gif",
	conspiracy: "/gifs/heart-eyes-kilig.gif",
	honestWork: "/gifs/sana-all.gif",
	ediWow: "/gifs/edi-wow.gif",
	kilig: "/gifs/kilig-opening.gif",
	boom: "/gifs/boom-panes.gif",
} as const;

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
