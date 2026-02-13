"use client";

import { COPY, ANIMALS } from "@/lib/constants";
import Image from "next/image";

// Different ending types based on user journey
type EndingType = "romantic" | "friendship" | "adventure" | "soulmate";

interface UserChoices {
	chapter1?: string;
	chapter2?: string;
	chapter3?: string;
	chapter4?: string;
}

interface SuccessScreenProps {
	endingType?: EndingType;
	userChoices?: UserChoices;
}

// Ending messages for each path
// Ending messages for each path
const ENDINGS = {
	romantic: {
		title: "Chapter ∞: 13 Years Later",
		subtitle: "At patuloy yung kalokahan natin...",
		message:
			"13 years na pala. From Grade 7 confess-and-block to ngayon. With Nygel. With our WFH chaos. With our chismisan sessions. Hindi perfect, pero ours.",
		footer: "From Messenger confession to ngayon - wild ride talaga. Uulitin ko pa rin lahat. I love you, Tabs. Continue lang tayo. (Sana matuloy yung kotse at body builds HAHA)",
		celebration:
			"Happy Valentine's Day, Tabs. To us. Our little family. Our random plans. Our life.",
	},
	friendship: {
		title: "Chapter ∞: Team Tabs & Ronald",
		subtitle: "Professional teammates sa lahat...",
		message:
			"13 years ng teamwork. From teenage parents to WFH partners. With Nygel. With our coffee dates. With our judging-people hobby. Solid pa rin.",
		footer: "From walang alam to slightly may alam na - progress yan. I love you, Tabs. Team tayo palagi. (Kahit walang budget sa next trip HAHA)",
		celebration:
			"Happy Valentine's Day, teammate! To us. Our strategies. Our wins (and losses). Our journey.",
	},
	adventure: {
		title: "Chapter ∞: Tuloy ang Adventure",
		subtitle: "From clueless to less clueless...",
		message:
			"13 years of figuring things out. From teenage chaos to car goals. With Nygel. With our dreams (realistic or hindi). With each other. One step at a time lang.",
		footer: "From teenage chaos to adult plans - character development yun. I love you, Tabs. Adventure pa rin tayo. (Sana may budget na sa next adventure HAHA)",
		celebration:
			"Happy Valentine's Day! To us. Our journey. Our questionable decisions. Our story.",
	},
	soulmate: {
		title: "Chapter ∞: Still Going",
		subtitle: "At hindi pa tapos ang kwento...",
		message:
			"13 years later, eto pa rin tayo. With Nygel. With our plans. With our everyday normal life. Simple lang, pero sapat.",
		footer: "Kamukha ko daw si Wonwoo pero kasama mo na 13 years - mas okay yan. I love you, Tabs. Ikaw pa rin. (Kahit Jeonghan bias mo HAHA)",
		celebration:
			"Happy Valentine's Day, Tabs. To us. Our reality. Our inside jokes. Tayo pa rin.",
	},
};

// Floating emojis configuration - split into left and right sides
const LEFT_EMOJIS = [
	{ id: 0, emoji: "💝", left: "5%", delay: "0ms", duration: "4s" },
	{ id: 1, emoji: "💕", left: "10%", delay: "400ms", duration: "4.2s" },
	{ id: 2, emoji: "✨", left: "8%", delay: "300ms", duration: "3.6s" },
	{ id: 3, emoji: "🌹", left: "12%", delay: "600ms", duration: "4.4s" },
	{ id: 4, emoji: "💗", left: "6%", delay: "200ms", duration: "3.8s" },
	{ id: 5, emoji: "💘", left: "15%", delay: "500ms", duration: "4.1s" },
	{ id: 6, emoji: "💌", left: "9%", delay: "700ms", duration: "4.3s" },
];

const RIGHT_EMOJIS = [
	{ id: 7, emoji: "❤️", left: "90%", delay: "200ms", duration: "3.5s" },
	{ id: 8, emoji: "💖", left: "88%", delay: "600ms", duration: "3.8s" },
	{ id: 9, emoji: "💗", left: "92%", delay: "500ms", duration: "4.1s" },
	{ id: 10, emoji: "🎀", left: "85%", delay: "800ms", duration: "4.3s" },
	{ id: 11, emoji: "✨", left: "94%", delay: "400ms", duration: "4s" },
	{ id: 12, emoji: "🌹", left: "87%", delay: "100ms", duration: "4.5s" },
	{ id: 13, emoji: "💕", left: "91%", delay: "300ms", duration: "3.7s" },
];

export default function SuccessScreen({
	endingType = "romantic",
}: SuccessScreenProps) {
	const ending = ENDINGS[endingType];
	return (
		<div className="viewport-container page-background">
			{/* Floating Celebration Emojis - Left Side */}
			<div className="fixed inset-0 pointer-events-none overflow-hidden">
				{LEFT_EMOJIS.map((item) => (
					<div
						key={item.id}
						className="absolute animate-float opacity-0"
						style={{
							left: item.left,
							animationDelay: item.delay,
							animationDuration: item.duration,
							animationIterationCount: "infinite",
							top: "110%",
							animation: `floatUp ${item.duration} linear ${item.delay} infinite`,
						}}
					>
						<span className="text-4xl emoji-enhanced">
							{item.emoji}
						</span>
					</div>
				))}

				{/* Floating Celebration Emojis - Right Side */}
				{RIGHT_EMOJIS.map((item) => (
					<div
						key={item.id}
						className="absolute animate-float opacity-0"
						style={{
							left: item.left,
							animationDelay: item.delay,
							animationDuration: item.duration,
							animationIterationCount: "infinite",
							top: "110%",
							animation: `floatUp ${item.duration} linear ${item.delay} infinite`,
						}}
					>
						<span className="text-4xl emoji-enhanced">
							{item.emoji}
						</span>
					</div>
				))}

				{/* Large glow blobs for celebration - positioned away from center */}
				<div
					className="absolute size-150 rounded-full blur-3xl opacity-20 animate-float"
					style={{
						background:
							"radial-gradient(circle, rgba(236, 72, 153, 0.6) 0%, transparent 70%)",
						top: "10%",
						left: "5%",
					}}
				/>
				<div
					className="absolute size-125 rounded-full blur-3xl opacity-20 animate-float animation-delay-400"
					style={{
						background:
							"radial-gradient(circle, rgba(249, 168, 212, 0.7) 0%, transparent 70%)",
						bottom: "10%",
						right: "5%",
					}}
				/>
			</div>

			{/* Success Book Page - Centered with padding to avoid emojis */}
			<div className="w-full max-w-4xl mx-auto z-10 px-4 md:px-8 lg:px-16">
				<div className="book-page animate-page-flip soft-glow">
					<div className="book-content">
						{/* Chapter Title */}
						<div className="text-center mb-8 md:mb-10 opacity-0 animate-fade-in-up animation-delay-500">
							<p className="chapter-heading text-4xl md:text-5xl lg:text-6xl text-pink-400 text-glow">
								{ending.title}
							</p>
						</div>

						{/* Main Heart Celebration */}
						<div className="flex justify-center gap-4 md:gap-6 mb-10 md:mb-12 opacity-0 animate-fade-in-up animation-delay-600">
							<span className="text-6xl md:text-7xl lg:text-8xl emoji-enhanced animate-float">
								{ANIMALS.roses}
							</span>
							<span className="text-7xl md:text-8xl lg:text-9xl emoji-enhanced animate-heartbeat">
								{ANIMALS.bigHeart}
							</span>
							<span className="text-6xl md:text-7xl lg:text-8xl emoji-enhanced animate-float animation-delay-300">
								{ANIMALS.roses}
							</span>
						</div>

						{/* Success Messages */}
						<div className="text-center space-y-3 md:space-y-4 mb-10 md:mb-12 px-4">
							{/* Main Success Title */}
							<div className="opacity-0 animate-fade-in-up animation-delay-700">
								<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pink-100 leading-tight max-w-4xl mx-auto">
									{ending.subtitle}
								</h2>
							</div>

							{/* Success Message */}
							<div className="opacity-0 animate-fade-in-up animation-delay-800">
								<p className="text-xl md:text-2xl lg:text-3xl text-pink-200 italic font-light text-content max-w-3xl mx-auto">
									{ending.message}
								</p>
							</div>

							{/* Footer Message */}
							<div className="opacity-0 animate-fade-in-up animation-delay-800">
								<p className="text-lg md:text-xl text-pink-300 text-content max-w-3xl mx-auto">
									{ending.footer}
								</p>
							</div>
						</div>

						{/* Celebration Meme */}
						{COPY.success.finalMeme && (
							<div className="opacity-0 animate-fade-in-up animation-delay-800">
								<div className="meme-container max-w-md mx-auto mb-8">
									<Image
										height={400}
										width={400}
										src={COPY.success.finalMeme}
										alt="Celebration!"
										className="w-full h-auto rounded-xl"
									/>
								</div>
							</div>
						)}

						{/* Central Floating Heart */}
						<div className="flex justify-center mb-10 md:mb-12 opacity-0 animate-fade-in-up animation-delay-800">
							<span className="text-7xl md:text-8xl emoji-enhanced animate-float">
								{ANIMALS.heart}
							</span>
						</div>

						{/* Final Celebration Message */}
						<div className="text-center mb-10 opacity-0 animate-fade-in-up animation-delay-800">
							<p className="text-3xl md:text-4xl lg:text-5xl font-bold text-pink-300 chapter-heading text-glow animate-heartbeat">
								{ending.celebration}
							</p>
						</div>

						{/* Bottom Heart Party */}
						<div className="flex justify-center gap-3 md:gap-4 text-4xl md:text-5xl flex-wrap opacity-0 animate-fade-in-up animation-delay-800">
							<span className="emoji-enhanced animate-float">
								{ANIMALS.heartEyes}
							</span>
							<span className="emoji-enhanced animate-glow">
								{ANIMALS.sparkles}
							</span>
							<span className="emoji-enhanced animate-float animation-delay-200">
								{ANIMALS.kissingHeart}
							</span>
							<span className="emoji-enhanced animate-glow animation-delay-300">
								{ANIMALS.sparkles}
							</span>
							<span className="emoji-enhanced animate-heartbeat">
								{ANIMALS.cupid}
							</span>
							<span className="emoji-enhanced animate-glow animation-delay-400">
								{ANIMALS.fire}
							</span>
						</div>

						{/* Final Page Marker */}
						<div className="text-center mt-12 text-pink-400 italic text-xl md:text-2xl font-bold chapter-heading opacity-0 animate-fade-in-up animation-delay-800">
							~ The End... and The Beginning ~
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
