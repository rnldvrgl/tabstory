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
			"A girl confessed to me through Messenger, then suddenly blocked me. That was you, and that's where our 13-year chaos began.",
		bookTitle: "TabStory: A Love Story in Chapters",
		bookSubtitle:
			"Teenage love, young parents, and all the craziness in between",
		button: "Let's begin",
		meme: "/gifs/kilig-opening.gif",
	},

	chapter1: {
		chapter: "Chapter 1",
		title: "The Confess-Then-Block Era",
		prompt: "Remember nung Grade 7 tayo? You confessed through Messenger then immediately blocked me. Peak ghosting moves, Tabs",
		choices: [
			{
				id: "nervous",
				label: "Kinabahan ako nun, di ko alam gagawin",
				emoji: "😰",
				response:
					"I know! Tapos ako naman, nakatingin lang sa message mo na di makapag-reply kasi naka-block na ako. But you know what? That bold move caught my attention. Yung tomboyish girl na may guts to confess. Ngayon alam ko na - yan pala training mo for ghosting sa work messages. HAHA",
				meme: "/gifs/nervous-kinabahan.gif",
			},
			{
				id: "bold",
				label: "Nag-risk ako, baka kasi ma-reject",
				emoji: "💪",
				response:
					"And I'm glad you took that risk. Kasi kung hindi, baka di tayo naging ganito ngayon. 13 years and one son. Best risk you ever took jk.",
				meme: "/gifs/boom-panes.gif",
			},
			{
				id: "funny",
				label: "Alam ko ginawa ko yun, pero nalimutan ko why",
				emoji: "😅",
				response:
					"Classic Tabs move! Confess tapos takbo agad. Pero alam mo ba? That chaotic energy? Yun yung nag-define satin hanggang ngayon. 13 years of organized chaos. HAHA",
				meme: "/gifs/edi-wow.gif",
			},
		],
	},

	chapter2: {
		chapter: "Chapter 2",
		title: "Yung Campus Crush (daw) na Pumili sa Tomboyish",
		prompt: "Naalala mo nung mga galit sayo yung ibang girls kasi I chose you? The tomboy who walks like a man pero girly sa heart?",
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
					"Simple lang. You were real. Hindi ka nag pretend. Yung confidence mo, yung pagiging ikaw lang. That's more attractive than anything else. Plus, you made me laugh. And here we are, 13 years later, still laughing together.",
				meme: "/gifs/sana-all.gif",
			},
			{
				id: "haters",
				label: "Grabe yung mga haters nun",
				emoji: "😤",
				response:
					"Let them hate. We proved them all wrong. 13 years, one son, building our life together. They can keep talking, we'll keep thriving. Sila pa rin ba single? Charot! HAHA",
				meme: "/gifs/edi-wow.gif",
			},
		],
	},

	chapter3: {
		chapter: "Chapter 3",
		title: "Yung Gate Punching Incident",
		prompt: "I remember nung away natin na may sinuntok akong gate tapos lumabas yung mayari para sapakin ako. Classic Ronald and Rosa fight.",
		choices: [
			{
				id: "crazy",
				label: "Grabe yung fights natin noon",
				emoji: "🥊",
				response:
					"Intense tayo dati, no? But those fights taught us something. We learned how to fight right, how to communicate, how to grow together. From teenagers na puro drama to adults who know how to handle shit. (yata) Ngayon ang away na lang natin kung sino maglilinis ng bahay. Progress! HAHA",
				meme: "/gifs/vice-ganda-drama.gif",
			},
			{
				id: "growth",
				label: "Pero nag-mature na tayo ngayon",
				emoji: "🌱",
				response:
					"Sobrang laki ng pinag-bago natin from Grade 7 to now. Yung mga away na ganyan? Ngayon coffee at usap na lang. Mas mature, mas understanding. But still passionate - just in better ways. Yung gate? Nag-thank you na siguro na di na tayo teenagers. HAHA",
				meme: "/gifs/bawi-next-time.gif",
			},
			{
				id: "worth-it",
				label: "Worth it naman lahat ng pinagdaanan",
				emoji: "💯",
				response:
					"Every fight, every struggle - worth it. Kasi it made us stronger. We didn't run away when things got hard. We stayed, we fought, we grew. That's what real love is. Kahit yung gate incident, character development yun. HAHA",
				meme: "/gifs/true-love.gif",
			},
		],
	},

	chapter4: {
		chapter: "Chapter 4",
		title: "2018: Nung Naging Parents Tayo",
		prompt: "We were 18. Still studying. Tapos nalaman natin na buntis ka. Excited but worried. Remember that feeling? May chocolate kapa sa bibig mo nung nagpatest tayo. Ano ba kasi yun, chocolate for courage? HAHA",
		choices: [
			{
				id: "scared",
				label: "Takot ako nun, ang bata pa natin",
				emoji: "😰",
				response:
					"Takot din ako. 18 years old pa lang tayo, teenage parents. Pero you know what? We didn't run. We faced it together. And we raised the most amazing kid. Prince Nygel - our little version of us. (Sayo lahat ng toyo nya) HAHA",
				meme: "/gifs/grabe-omg.gif",
			},
			{
				id: "team",
				label: "Naging team tayo lalo nun",
				emoji: "💪",
				response:
					"Oo! From teenage sweethearts to teenage parents. We leveled up together. Hindi madali, pero ginawa natin. And now look - we're thriving. WFH, stable, planning our future. We fucking made it. Sweldo nalang kulang.",
				meme: "/gifs/success-yes.gif",
			},
			{
				id: "proud",
				label: "Proud ako na ginawa natin yun",
				emoji: "🎯",
				response:
					"Same! 18 years old, walang idea what we're doing, pero nag-survive tayo. Di tayo sumuko. Ngayon? 7 years later, thriving tayo. Teenage parents to responsible adults. Not bad for a couple of kids, right?",
				meme: "/gifs/boom-panes.gif",
			},
		],
	},

	chapter5: {
		chapter: "Chapter 5",
		title: "Si Prince Nygel - Our Little Chaos",
		prompt: "He's 7 years old now. Nakikita natin yung sarili natin sa kanya. What's your favorite thing about being his parents?",
		text: [
			"Prince Nygel Repiso Dela Cruz.",
			"7 years old. Yung bata na version natin.",
			"Yung kulit nya, yung ngiti nya, yung galawan nya.",
			"Nakikita mo ba? Pareho tayo ng kilos nun. (Mas marami lang sayo HAHAHA)",
			"Lahat ng pinaghirapan natin, para sa kanya to.",
			"Para sa atin. Para sa pamilya natin.",
		],
		choices: [
			{ id: "proud", label: "Galing ng bata natin" },
			{ id: "love", label: "Worth it lahat ng pagod" },
			{ id: "funny", label: "Mini-me natin sya, literally" },
		],
	},

	chapter6: {
		chapter: "Chapter 6",
		title: "Yung WFH Life Natin",
		prompt: "Now we're both working from home. Different companies, pero sama-sama sa bahay. How's that been?",
		text: [
			"Nag-WFH na pareho. Different companies, same bahay.",
			"Tulog during working hours? Guilty. (Sorry boss!)",
			"Watching Modern Family instead of working? Mas guilty.",
			"Distracting each other? Lagi.",
			"Me staying up late hanggang 1AM clock out mo? Every night.",
			"You're 4PM-1AM, I'm 3PM-12MN or 9PM-6AM.",
			"Magkaiba schedule pero okay lang.",
			"Sanay na tayo mag-adjust eh.",
		],
		choices: [
			{ id: "perfect", label: "Okay na to" },
			{ id: "team", label: "Teamwork lang yan" },
			{ id: "distraction", label: "Professional distractors tayo" },
		],
	},

	chapter7: {
		chapter: "Chapter 7",
		title: "Yung Mga Bonding Natin",
		prompt: "Coffee. Modern Family. Horror movies. K-drama. Anime. Judging other people. These are us.",
		text: [
			"Yung usual bonding natin:",
			"Coffee dates. Hindi kumpleto ang araw natin kung walang kape.",
			"Modern Family paulit-ulit.",
			"Horror movies kahit takot ka manuod.",
			"K-drama at anime marathons.",
			"At syempre - chismisan ng ibang tao. Hobby natin yan.",
			"Walang arte. Walang gastos. (Kapag wala ng pera)",
			"Basta kasama kita, goods na.",
			"Quality time daw sabi ni Google. HAHA",
		],
		choices: [
			{ id: "simple", label: "Sapat na to" },
			{ id: "favorite", label: "Eto yung type ko" },
			{ id: "chismis", label: "Yung chismisan yung best part" },
		],
	},

	chapter8: {
		chapter: "Chapter 8",
		title: "Seventeen, Jeonghan, at Wonwoo",
		prompt: "I know your bias is Jeonghan from Seventeen. And you always say I look like Wonwoo. Crush mo rin ba ako kasi kamukha ko sya? Totoo ba yun o pampagaan lang ng loob ko? HAHAHA",
		text: [
			"Seventeen - favorite K-pop group mo.",
			"Jeonghan - ultimate bias mo.",
			"Pero alam mo ba?",
			"After 13 years, wala na akong pake sa K-pop idols mo.",
			"Sila yung idol mo.",
			"Ako naman yung nandito.",
			"Yung totoo. Yung kasama mo araw-araw.",
		],
		choices: [
			{ id: "wonwoo", label: "Oo, kamukha mo nga" },
			{ id: "better", label: "Pero mas okay ka" },
			{ id: "real", label: "Ikaw naman yung nandito eh" },
		],
	},

	chapter9: {
		chapter: "Chapter 9",
		title: "Yung Mga Plano Natin",
		prompt: "This year, may mga plano tayo. Personal car. Better body builds. Future together. Let's talk about that.",
		text: [
			"Goals natin this year:",
			"Honda Civic Type R. Toyota Vios. Honda City. Kahit ano sa tatlo.",
			"Better body builds - workout sa bahay.",
			"More coffee dates. More movie nights. More time with Nygel.",
			"One step at a time lang. Walang pressure. (Except sa car, gusto ko na yun HAHA)",
			"From teenage love to young parents to ngayon - may plano na.",
			"Malayo na narating natin, Tabs.",
			"At hindi pa tayo tapos.",
			"Next goal: mag-abroad? Charot! (Unless...?) HAHA",
		],
		choices: [
			{ id: "excited", label: "Sige, push natin yan" },
			{ id: "together", label: "Sama-sama tayo dyan" },
			{ id: "realistic", label: "One step at a time lang" },
		],
	},

	almostQuestion: {
		chapter: "Chapter 10",
		title: "Almost ending ...",
		text: [
			"13 years na, Tabs.",
			"From Messenger confession nung Grade 7. (Yung may blocking pa)",
			"To teenage parents at 18.",
			"To raising our own Prince together.",
			"To WFH, building our future.",
			"Lahat ng away, lahat ng struggle, lahat ng moment.",
			"Kung babalikan, gagawin ko pa rin lahat.",
			"Kasi lahat yun nag-lead dito.",
			"Sa moment na to.",
			"May tanong lang ako...",
		],
		choices: [
			{ id: "ready", label: "Ano na, sabihin mo na" },
			{ id: "waiting", label: "Ready na ko" },
			{ id: "nervous", label: "Kinakabahan ako pero go" },
		],
	},

	question: {
		chapter: "Ang Tanong? Pera o bayong?",
		title: "Rosa Mae F. Repiso",
		question: "Will you be my Valentine?",
		subtitle:
			"Para sa coffee, Modern Family marathons, horror movie nights, kotse goals, workout plans (sana matuloy), at future with Nygel. G ka pa ba? HAHA",
		choices: [
			{ id: "yes", label: "Oo naman", emoji: "💝" },
			{ id: "absolutely", label: "Sige, game", emoji: "🥰" },
			{ id: "always", label: "Lagi naman tayo", emoji: "💕" },
		],
	},

	success: {
		title: "Chapter ∞",
		subtitle: "At patuloy ang ating kwento... (walang The End)",
		message:
			"13 years na. Marami pang darating. With Nygel. With our plans. With each other. With our chismisan. HAHA",
		footer: "From Messenger confession to ngayon - wild ride. Uulitin ko pa rin. I love you, Tabs. Continue lang tayo. (Sana magtuloy na yung kotse at workout goals HAHA)",
		celebration:
			"Happy Valentine's Day, Tabs. To us. Our little family. Our big dreams. Our forever.",
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
